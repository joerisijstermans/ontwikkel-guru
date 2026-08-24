import { initNav, initScrollAnimations, initVideoModal, openVideoModal } from './shared.js';

const PREVIEW_VIDEOS = [
  {
    title: 'Brand Story GreenBite', brand: 'GreenBite',
    url: 'https://video.wixstatic.com/video/6c17f4_ce7d9d81dc674bf384f5258ae87f3c58/720p/mp4/file.mp4',
    poster: 'https://static.wixstatic.com/media/6c17f4_ce7d9d81dc674bf384f5258ae87f3c58f001.jpg',
    demo: true, aspect: '16:9'
  },
  {
    title: 'Sales pitch — Joeri', brand: 'Ontwikkel Guru',
    url: 'https://video.wixstatic.com/video/6c17f4_e01c602b707f4e869686a30305f6cd4e/1080p/mp4/file.mp4',
    poster: 'https://static.wixstatic.com/media/6c17f4_e01c602b707f4e869686a30305f6cd4ef001.jpg',
    demo: false, aspect: '16:9'
  },
  {
    title: 'AI-workshop — Verdant Group', brand: 'Verdant Group',
    url: 'https://video.wixstatic.com/video/6c17f4_478de56aa9954d85a7210814a3b4e759/1080p/mp4/file.mp4',
    poster: 'https://static.wixstatic.com/media/6c17f4_478de56aa9954d85a7210814a3b4e759f001.jpg',
    demo: true, aspect: '16:9'
  }
];

function renderPreviewGrid() {
  const grid = document.getElementById('preview-grid');
  if (!grid) return;
  grid.innerHTML = PREVIEW_VIDEOS.map(v => `
    <div class="preview-card" role="button" tabindex="0" aria-label="${v.title} afspelen"
         data-url="${v.url}" data-title="${v.title}" data-aspect="${v.aspect}">
      <img src="${v.poster}" alt="${v.title}" class="preview-card-thumb" loading="lazy" />
      <div class="preview-card-play"><div class="play-btn">&#9654;</div></div>
      <div class="preview-card-footer">
        <span class="preview-card-title">${v.title}</span>
        ${v.demo ? '<span class="badge badge-demo">Demo</span>' : '<span class="badge badge-brand">' + v.brand + '</span>'}
      </div>
    </div>
  `).join('');

  grid.querySelectorAll('.preview-card').forEach(card => {
    const open = () => openVideoModal(card.dataset.url, card.dataset.title, card.dataset.aspect);
    card.addEventListener('click', open);
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); }
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initScrollAnimations();
  initVideoModal();
  renderPreviewGrid();
});
