// ===== NAVIGATION =====
export function initNav() {
  const nav = document.querySelector('.nav');
  const hamburger = document.querySelector('.nav-hamburger');
  const mobileNav = document.querySelector('.nav-mobile');
  const isLight = nav && nav.classList.contains('nav-light');

  if (nav) {
    const onScroll = () => {
      if (window.scrollY > 40) {
        nav.classList.add(isLight ? 'nav-light-scrolled' : 'nav-scrolled');
        nav.classList.remove('nav-transparent');
      } else {
        nav.classList.remove('nav-scrolled', 'nav-light-scrolled');
        if (!isLight) nav.classList.add('nav-transparent');
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
      const open = mobileNav.classList.toggle('open');
      hamburger.classList.toggle('active', open);
      hamburger.setAttribute('aria-expanded', open);
      document.body.style.overflow = open ? 'hidden' : '';
    });
    mobileNav.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        mobileNav.classList.remove('open');
        hamburger.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }

  // Active link
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .nav-mobile a').forEach(link => {
    const href = link.getAttribute('href');
    if (href && (href === currentPage || (currentPage === '' && href === 'index.html'))) {
      link.classList.add('active');
    }
  });
}

// ===== SCROLL ANIMATIONS =====
export function initScrollAnimations() {
  const els = document.querySelectorAll('.fade-in');
  if (!els.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  els.forEach(el => observer.observe(el));
}

// ===== VIDEO MODAL =====
let modalVideo = null;

export function initVideoModal() {
  // Create modal if not exists
  if (document.getElementById('video-modal')) return;
  const modal = document.createElement('div');
  modal.id = 'video-modal';
  modal.className = 'video-modal';
  modal.innerHTML = `
    <div class="video-modal-inner" id="video-modal-inner">
      <button class="video-modal-close" id="video-modal-close" aria-label="Sluiten">&times;</button>
      <video id="modal-video" controls playsinline></video>
      <p class="video-modal-title" id="modal-title"></p>
    </div>`;
  document.body.appendChild(modal);

  modalVideo = document.getElementById('modal-video');
  const closeBtn = document.getElementById('video-modal-close');
  const inner = document.getElementById('video-modal-inner');

  const closeModal = () => {
    modal.classList.remove('open');
    if (modalVideo) { modalVideo.pause(); modalVideo.src = ''; }
    document.body.style.overflow = '';
  };

  closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

  window._openVideoModal = (url, title, aspect) => {
    modalVideo.src = url;
    document.getElementById('modal-title').textContent = title || '';
    inner.className = 'video-modal-inner' + (aspect === '9:16' ? ' portrait' : '');
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
    modalVideo.play().catch(() => {});
  };
}

export function openVideoModal(url, title, aspect) {
  if (window._openVideoModal) window._openVideoModal(url, title, aspect);
}
