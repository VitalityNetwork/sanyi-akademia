/* ============================================
   SANYI AI AKADÉMIA — APP LOGIC
   ============================================ */

(function () {
  'use strict';

  // ---------- State ----------
  const STORAGE_KEY = 'sanyi-akademia-progress';
  const STORAGE_VERSION = 1;

  let state = {
    version: STORAGE_VERSION,
    startedAt: null,
    lastVisit: null,
    completed: [],
    welcomeShown: false
  };

  let totalLessons = 0;
  let audioCtx = null;

  // ---------- Storage ----------
  function loadProgress() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed && parsed.version === STORAGE_VERSION) {
          state = { ...state, ...parsed };
        }
      }
    } catch (e) {
      console.warn('Progress load failed:', e);
    }
    state.lastVisit = new Date().toISOString();
    if (!state.startedAt) state.startedAt = state.lastVisit;
  }

  function saveProgress() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      console.warn('Progress save failed:', e);
    }
  }

  // ---------- Utilities ----------
  function el(tag, props = {}, children = []) {
    const node = document.createElement(tag);
    Object.entries(props).forEach(([k, v]) => {
      if (k === 'className') node.className = v;
      else if (k === 'dataset') Object.entries(v).forEach(([dk, dv]) => node.dataset[dk] = dv);
      else if (k.startsWith('on') && typeof v === 'function') node.addEventListener(k.slice(2).toLowerCase(), v);
      else if (k === 'html') node.innerHTML = v;
      else node.setAttribute(k, v);
    });
    (Array.isArray(children) ? children : [children]).forEach(c => {
      if (c == null) return;
      if (typeof c === 'string') node.appendChild(document.createTextNode(c));
      else node.appendChild(c);
    });
    return node;
  }

  function escapeHtml(str) {
    if (!str) return '';
    return str; // content in curriculum is trusted HTML
  }

  function difficultyLabel(d) {
    return { easy: '🟢 könnyű', medium: '🟡 közepes', hard: '🔴 figyelem' }[d] || d;
  }

  // ---------- Rendering ----------
  function renderCurriculum() {
    const content = document.getElementById('content');
    content.innerHTML = '';

    totalLessons = 0;
    CURRICULUM.forEach(phase => { totalLessons += phase.lessons.length; });

    CURRICULUM.forEach(phase => {
      content.appendChild(renderPhase(phase));
    });
  }

  function renderPhase(phase) {
    const section = el('section', {
      className: 'phase',
      id: `phase-${phase.id}`,
      dataset: { phaseId: String(phase.id) }
    });

    const header = el('header', { className: 'phase-header' }, [
      el('span', { className: 'phase-number' }, `Fázis ${phase.id}`),
      el('h2', { className: 'phase-title' }, phase.title),
      el('p', { className: 'phase-subtitle' }, `${phase.lessons.length} lecke · ${phase.subtitle}`),
      el('div', { className: 'phase-divider' })
    ]);

    const lessonsEl = el('div', { className: 'lessons' });
    phase.lessons.forEach(lesson => {
      lessonsEl.appendChild(renderLesson(lesson, phase.id));
    });

    section.appendChild(header);
    section.appendChild(lessonsEl);
    return section;
  }

  function renderLesson(lesson, phaseId) {
    const isCompleted = state.completed.includes(lesson.id);

    const article = el('article', {
      className: `lesson${isCompleted ? ' completed' : ''}`,
      dataset: { lessonId: lesson.id, phaseId: String(phaseId) }
    });

    // Header (clickable)
    const header = el('button', {
      className: 'lesson-header',
      type: 'button',
      'aria-expanded': 'false'
    });

    // Checkbox
    const checkbox = el('span', {
      className: 'lesson-checkbox',
      role: 'checkbox',
      'aria-checked': isCompleted ? 'true' : 'false',
      'aria-label': `${lesson.title} — teljesítve`,
      tabindex: '0'
    });
    checkbox.innerHTML = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12L10 17L19 7" stroke="#000" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
    checkbox.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleLessonComplete(lesson.id);
    });
    checkbox.addEventListener('keydown', (e) => {
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        e.stopPropagation();
        toggleLessonComplete(lesson.id);
      }
    });

    // Meta
    const meta = el('div', { className: 'lesson-meta' }, [
      el('div', { className: 'lesson-title-row' }, [
        el('span', { className: 'lesson-number' }, lesson.id),
        el('span', { className: 'lesson-title' }, lesson.title)
      ]),
      el('p', { className: 'lesson-tagline' }, lesson.tagline),
      el('div', { className: 'lesson-badges' }, [
        el('span', { className: 'badge' }, `⏱ ${lesson.time} perc`),
        el('span', { className: `badge badge-difficulty-${lesson.difficulty}` }, difficultyLabel(lesson.difficulty))
      ])
    ]);

    const arrow = el('span', { className: 'lesson-arrow', 'aria-hidden': 'true' });
    arrow.innerHTML = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>';

    header.appendChild(checkbox);
    header.appendChild(meta);
    header.appendChild(arrow);

    header.addEventListener('click', () => toggleLessonExpanded(article, header));

    // Body
    const body = el('div', { className: 'lesson-body' });
    const bodyInner = el('div', { className: 'lesson-body-inner' });

    bodyInner.appendChild(renderBlock('what', '🎯 Mit', lesson.what));
    bodyInner.appendChild(renderBlock('how', '🔧 Hogyan', lesson.how));
    bodyInner.appendChild(renderBlock('why', '💡 Miért', lesson.why));
    bodyInner.appendChild(renderBlock('example', '✨ Példa', lesson.example));

    // Prompt
    if (lesson.prompt) {
      bodyInner.appendChild(renderPromptBlock(lesson.id, lesson.prompt));
    } else {
      const none = el('div', { className: 'prompt-none' }, 'Ehhez a leckéhez nincs prompt — csak olvasd el és haladj tovább.');
      bodyInner.appendChild(none);
    }

    // Footer
    const footer = el('div', { className: 'lesson-footer' });
    const doneBtn = el('button', {
      className: 'lesson-done-btn',
      type: 'button'
    }, isCompleted ? '✓ Kész' : '✓ Kész vagyok ezzel');
    doneBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleLessonComplete(lesson.id);
    });
    footer.appendChild(doneBtn);
    bodyInner.appendChild(footer);

    body.appendChild(bodyInner);
    article.appendChild(header);
    article.appendChild(body);
    return article;
  }

  function renderBlock(type, label, contentHtml) {
    const block = el('div', { className: `block block-${type}` });
    block.appendChild(el('div', { className: 'block-label' }, label));
    const content = el('div', { className: 'block-content', html: contentHtml || '' });
    block.appendChild(content);
    return block;
  }

  function renderPromptBlock(lessonId, promptText) {
    const wrap = el('div', { className: 'prompt-block' });

    const header = el('div', { className: 'prompt-header' }, [
      el('span', { className: 'prompt-header-label' }, '📋 Kész prompt — másold Claude-ba'),
      (function () {
        const btn = el('button', {
          className: 'prompt-copy',
          type: 'button',
          dataset: { copyTarget: `prompt-${lessonId}` }
        }, '📋 Másolás');
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          copyText(promptText, btn);
        });
        return btn;
      })()
    ]);

    const body = el('div', { className: 'prompt-body' });
    const pre = el('pre');
    const code = el('code', { id: `prompt-${lessonId}` });
    code.textContent = promptText;
    pre.appendChild(code);
    body.appendChild(pre);

    wrap.appendChild(header);
    wrap.appendChild(body);
    return wrap;
  }

  // ---------- Interactions ----------
  function toggleLessonExpanded(article, header) {
    const isExpanded = article.classList.toggle('expanded');
    header.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');
  }

  function toggleLessonComplete(lessonId) {
    const article = document.querySelector(`.lesson[data-lesson-id="${lessonId}"]`);
    if (!article) return;
    const checkbox = article.querySelector('.lesson-checkbox');

    const idx = state.completed.indexOf(lessonId);
    if (idx >= 0) {
      // Uncheck
      state.completed.splice(idx, 1);
      article.classList.remove('completed');
      checkbox.setAttribute('aria-checked', 'false');
      const btn = article.querySelector('.lesson-done-btn');
      if (btn) btn.textContent = '✓ Kész vagyok ezzel';
    } else {
      // Check
      state.completed.push(lessonId);
      article.classList.add('completed');
      checkbox.setAttribute('aria-checked', 'true');
      checkbox.classList.remove('just-checked');
      void checkbox.offsetWidth; // reflow
      checkbox.classList.add('just-checked');
      const btn = article.querySelector('.lesson-done-btn');
      if (btn) btn.textContent = '✓ Kész';

      playPop();
      launchConfetti(checkbox);

      // Auto-collapse the lesson after a short delay (lets confetti play)
      if (article.classList.contains('expanded')) {
        const header = article.querySelector('.lesson-header');
        setTimeout(() => {
          article.classList.remove('expanded');
          if (header) header.setAttribute('aria-expanded', 'false');
        }, 550);
      }

      // Check for phase completion
      const phaseId = parseInt(article.dataset.phaseId, 10);
      const phase = CURRICULUM.find(p => p.id === phaseId);
      if (phase) {
        const allDone = phase.lessons.every(l => state.completed.includes(l.id));
        if (allDone) {
          setTimeout(() => showPhaseComplete(phase), 700);
        }
      }
    }

    saveProgress();
    updateProgress();
  }

  // ---------- Progress / Sticky Nav ----------
  function updateProgress() {
    const completedCount = state.completed.length;
    const percent = totalLessons ? Math.round((completedCount / totalLessons) * 100) : 0;

    document.getElementById('phase-progress-fill').style.width = `${percent}%`;
    document.getElementById('phase-meta-progress').textContent =
      `${completedCount}/${totalLessons} lecke · ${percent}%`;

    // Update dots
    const dotsContainer = document.getElementById('phase-dots');
    dotsContainer.innerHTML = '';
    CURRICULUM.forEach(phase => {
      const phaseCompleted = phase.lessons.filter(l => state.completed.includes(l.id)).length;
      const phaseTotal = phase.lessons.length;
      const isFullyDone = phaseCompleted === phaseTotal;

      const dot = el('li', {}, []);
      const btn = el('button', {
        className: `phase-dot${isFullyDone ? ' completed' : ''}`,
        type: 'button',
        'aria-label': `Fázis ${phase.id}: ${phase.title}`,
        dataset: { phaseId: String(phase.id) }
      }, [
        el('span', {}, String(phase.id))
      ]);
      btn.addEventListener('click', () => {
        const target = document.getElementById(`phase-${phase.id}`);
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
      dot.appendChild(btn);
      dotsContainer.appendChild(dot);
    });

    updateActivePhase();
  }

  function updateActivePhase() {
    // Determine which phase is "active" based on scroll position
    const sections = Array.from(document.querySelectorAll('.phase'));
    if (!sections.length) return;

    const scrollY = window.scrollY + 200;
    let activePhase = sections[0];
    for (const section of sections) {
      if (section.offsetTop <= scrollY) activePhase = section;
      else break;
    }

    const phaseId = parseInt(activePhase.dataset.phaseId, 10);
    const phase = CURRICULUM.find(p => p.id === phaseId);
    if (!phase) return;

    // Update dot active state
    document.querySelectorAll('.phase-dot').forEach(d => {
      d.classList.toggle('active', parseInt(d.dataset.phaseId, 10) === phaseId && !d.classList.contains('completed'));
    });

    // Update meta name
    document.getElementById('phase-meta-name').textContent = `Fázis ${phase.id} — ${phase.title}`;
  }

  function handleScroll() {
    const nav = document.getElementById('phase-nav');
    if (window.scrollY > 120) nav.classList.add('compact');
    else nav.classList.remove('compact');

    updateActivePhase();
  }

  // ---------- Audio (Web Audio API) ----------
  function ensureAudioCtx() {
    if (!audioCtx) {
      try {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      } catch (e) { audioCtx = null; }
    }
    return audioCtx;
  }

  function playPop() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const ctx = ensureAudioCtx();
    if (!ctx) return;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(660, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.08);
    gain.gain.setValueAtTime(0.0001, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.25, ctx.currentTime + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.15);
    osc.connect(gain).connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.2);
  }

  function playBell() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const ctx = ensureAudioCtx();
    if (!ctx) return;
    const freqs = [880, 1320, 1760];
    freqs.forEach((f, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.value = f;
      const start = ctx.currentTime + i * 0.08;
      gain.gain.setValueAtTime(0.0001, start);
      gain.gain.exponentialRampToValueAtTime(0.15, start + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, start + 0.6);
      osc.connect(gain).connect(ctx.destination);
      osc.start(start);
      osc.stop(start + 0.65);
    });
  }

  // ---------- Confetti ----------
  function launchConfetti(sourceEl, amount = 12) {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const layer = document.getElementById('confetti-layer');
    const rect = sourceEl.getBoundingClientRect();
    const startX = rect.left + rect.width / 2;
    const startY = rect.top + rect.height / 2;
    const colors = ['#f59e0b', '#2563eb', '#dc2626', '#ffffff', '#fbbf24'];

    for (let i = 0; i < amount; i++) {
      const particle = document.createElement('div');
      particle.className = 'confetti-particle';
      particle.style.left = `${startX}px`;
      particle.style.top = `${startY}px`;
      particle.style.background = colors[Math.floor(Math.random() * colors.length)];

      const angle = (Math.PI * 2 * i) / amount + (Math.random() - 0.5) * 0.5;
      const distance = 60 + Math.random() * 80;
      const x = Math.cos(angle) * distance;
      const y = Math.sin(angle) * distance - 40; // bias up

      particle.style.setProperty('--x', `${x}px`);
      particle.style.setProperty('--y', `${y}px`);
      particle.style.setProperty('--r', `${Math.random() * 720 - 360}deg`);
      particle.style.animation = `confetti-fall 900ms cubic-bezier(0.3, 0.6, 0.4, 1) forwards`;

      layer.appendChild(particle);
      setTimeout(() => particle.remove(), 1000);
    }
  }

  function launchBigConfetti() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const layer = document.getElementById('confetti-layer');
    const colors = ['#f59e0b', '#2563eb', '#dc2626', '#ffffff', '#fbbf24', '#ef4444', '#3b82f6'];
    const amount = 80;

    for (let i = 0; i < amount; i++) {
      const particle = document.createElement('div');
      particle.className = 'confetti-particle';
      particle.style.left = `${50 + (Math.random() - 0.5) * 40}%`;
      particle.style.top = `${30 + Math.random() * 20}%`;
      particle.style.background = colors[Math.floor(Math.random() * colors.length)];
      particle.style.width = `${6 + Math.random() * 8}px`;
      particle.style.height = particle.style.width;

      const x = (Math.random() - 0.5) * 600;
      const y = 300 + Math.random() * 400;

      particle.style.setProperty('--x', `${x}px`);
      particle.style.setProperty('--y', `${y}px`);
      particle.style.setProperty('--r', `${Math.random() * 1440 - 720}deg`);
      particle.style.animation = `confetti-fall ${1200 + Math.random() * 800}ms cubic-bezier(0.2, 0.7, 0.3, 1) forwards`;
      particle.style.animationDelay = `${Math.random() * 300}ms`;

      layer.appendChild(particle);
      setTimeout(() => particle.remove(), 2500);
    }
  }

  // ---------- Modals ----------
  function openModal(id) {
    const modal = document.getElementById(id);
    if (modal) {
      modal.hidden = false;
      modal.querySelector('.modal-card')?.focus?.();
    }
  }

  function closeModal(id) {
    const modal = document.getElementById(id);
    if (modal) modal.hidden = true;
  }

  function setupModals() {
    // Stuck FAB
    document.getElementById('fab-stuck').addEventListener('click', () => openModal('stuck-modal'));

    // Close buttons
    document.querySelectorAll('[data-close-modal]').forEach(el => {
      el.addEventListener('click', () => closeModal('stuck-modal'));
    });

    // Escape key closes modals
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        ['stuck-modal', 'welcome-modal'].forEach(id => closeModal(id));
      }
    });

    // Stuck prompt copy buttons (inside modal)
    document.querySelectorAll('.modal .prompt-copy').forEach(btn => {
      btn.addEventListener('click', () => {
        const targetId = btn.dataset.copyTarget;
        const targetEl = document.getElementById(targetId);
        if (targetEl) copyText(targetEl.textContent, btn);
      });
    });
  }

  // ---------- Welcome Modal ----------
  function setupWelcome() {
    if (!state.welcomeShown) {
      openModal('welcome-modal');
    }
    document.getElementById('welcome-start').addEventListener('click', () => {
      closeModal('welcome-modal');
      state.welcomeShown = true;
      saveProgress();
    });
  }

  // ---------- Phase Complete ----------
  function showPhaseComplete(phase) {
    const overlay = document.getElementById('phase-complete-overlay');
    const title = document.getElementById('phase-complete-title');
    const sub = document.getElementById('phase-complete-sub');

    const subs = {
      0: 'Készen állsz az útra. Most kezdődik az igazi.',
      1: 'Most már Claude Desktop felhasználó vagy.',
      2: 'Most már tartalomgyártó vagy. Heti 5 poszt? Könnyedén.',
      3: 'Most már terminál-felhasználó vagy. Claude Code a barátod.',
      4: 'Most már MCP-varázsló vagy. Claude-nak kezei vannak.',
      5: 'Most már webmaster vagy. GitHub + Cloudflare a kezedben.',
      6: '🏆 Teljesítetted a teljes Akadémiát. Van saját élő weboldalad. Hihetetlen munka.'
    };

    title.textContent = `🎉 Fázis ${phase.id} teljesítve!`;
    sub.textContent = subs[phase.id] || 'Szép munka!';

    overlay.hidden = false;
    playBell();
    launchBigConfetti();

    // Auto-close after 7s
    const close = () => {
      overlay.hidden = true;
      document.getElementById('phase-complete-close').removeEventListener('click', close);
    };
    document.getElementById('phase-complete-close').addEventListener('click', close);
    setTimeout(close, 7000);
  }

  // ---------- Copy to Clipboard ----------
  function copyText(text, buttonEl) {
    const doneVisual = () => {
      if (buttonEl) {
        const orig = buttonEl.textContent;
        buttonEl.textContent = '✓ Kimásolva';
        buttonEl.classList.add('copied');
        setTimeout(() => {
          buttonEl.textContent = orig;
          buttonEl.classList.remove('copied');
        }, 1800);
      }
      showToast('✓ Kimásolva a vágólapra');
    };

    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(doneVisual).catch(() => {
        fallbackCopy(text);
        doneVisual();
      });
    } else {
      fallbackCopy(text);
      doneVisual();
    }
  }

  function fallbackCopy(text) {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand('copy'); } catch (e) {}
    document.body.removeChild(ta);
  }

  // ---------- Toast ----------
  function showToast(message) {
    const container = document.getElementById('toast-container');
    const toast = el('div', { className: 'toast' }, message);
    container.appendChild(toast);
    setTimeout(() => toast.classList.add('fade-out'), 2000);
    setTimeout(() => toast.remove(), 2400);
  }

  // ---------- Export / Reset ----------
  function exportProgress() {
    const data = {
      ...state,
      exportedAt: new Date().toISOString(),
      totalLessons,
      completedCount: state.completed.length,
      percent: totalLessons ? Math.round((state.completed.length / totalLessons) * 100) : 0
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `sanyi-akademia-progress-${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast('✓ Progressz exportálva');
  }

  function resetProgress() {
    if (!confirm('Biztosan újrakezded? A teljes eddigi progresszed törlődik.')) return;
    state = {
      version: STORAGE_VERSION,
      startedAt: new Date().toISOString(),
      lastVisit: new Date().toISOString(),
      completed: [],
      welcomeShown: false
    };
    saveProgress();
    renderCurriculum();
    updateProgress();
    showToast('🔄 Újrakezdve');
  }

  // ---------- Init ----------
  function init() {
    loadProgress();
    renderCurriculum();
    updateProgress();
    setupModals();
    setupWelcome();

    document.getElementById('export-progress').addEventListener('click', exportProgress);
    document.getElementById('reset-progress').addEventListener('click', resetProgress);

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Unlock audio on first interaction
    const unlock = () => {
      ensureAudioCtx();
      if (audioCtx && audioCtx.state === 'suspended') audioCtx.resume();
      document.removeEventListener('click', unlock);
      document.removeEventListener('keydown', unlock);
    };
    document.addEventListener('click', unlock);
    document.addEventListener('keydown', unlock);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
