import { initNav, initScrollAnimations, initVideoModal, openVideoModal } from './shared.js';

const VIDEOS = [
  { id: 1, title: 'Brand Story GreenBite', brand: 'GreenBite', category: 'campagne', aspect: '16:9', demo: true,
    description: 'Cinematic brand story voor een duurzaam food-merk.',
    url: 'https://video.wixstatic.com/video/6c17f4_ce7d9d81dc674bf384f5258ae87f3c58/720p/mp4/file.mp4',
    poster: 'https://static.wixstatic.com/media/6c17f4_ce7d9d81dc674bf384f5258ae87f3c58f001.jpg' },
  { id: 2, title: 'Productvideo Lumion', brand: 'Lumion Beauty', category: 'product', aspect: '16:9', demo: true,
    description: 'Klassieke productvideo voor een luxe skincare merk.',
    url: 'https://video.wixstatic.com/video/6c17f4_ace8978932e24fb9a8aedacdfa0c234d/720p/mp4/file.mp4',
    poster: 'https://static.wixstatic.com/media/6c17f4_ace8978932e24fb9a8aedacdfa0c234df001.jpg' },
  { id: 3, title: 'Lifestyle Lumion (V1)', brand: 'Lumion Beauty', category: 'product', aspect: '16:9', demo: true,
    description: 'Lifestyle-video met model voor luxe skincare campagne.',
    url: 'https://video.wixstatic.com/video/6c17f4_cc26d20dae9a45538c3d8b09d0f557c0/720p/mp4/file.mp4',
    poster: 'https://static.wixstatic.com/media/6c17f4_cc26d20dae9a45538c3d8b09d0f557c0f001.jpg' },
  { id: 4, title: 'Nexora Reel', brand: 'Nexora', category: 'corporate', aspect: '9:16', demo: true,
    description: 'Social media reel voor een B2B HR-softwarebedrijf.',
    url: 'https://video.wixstatic.com/video/6c17f4_c33775070f99478e93b3ed01ebc82ff4/720p/mp4/file.mp4',
    poster: 'https://static.wixstatic.com/media/6c17f4_c33775070f99478e93b3ed01ebc82ff4f001.jpg' },
  { id: 5, title: 'GreenBite Markt', brand: 'GreenBite', category: 'campagne', aspect: '9:16', demo: true,
    description: 'Markt-reel voor social media — vers, dynamisch, op locatie.',
    url: 'https://video.wixstatic.com/video/6c17f4_e574a6a90cb14cb6b6a6633e48179914/720p/mp4/file.mp4',
    poster: 'https://static.wixstatic.com/media/6c17f4_e574a6a90cb14cb6b6a6633e48179914f001.jpg' },
  { id: 6, title: 'Lumion Zomercampagne — Clip 1', brand: 'Lumion Beauty', category: 'campagne', aspect: '16:9', demo: true,
    description: 'Eerste clip van een tweedelige zomercampagne voor skincare.',
    url: 'https://video.wixstatic.com/video/6c17f4_8c6323abeb1747d8a3ba2f91f7ab35f4/720p/mp4/file.mp4',
    poster: 'https://static.wixstatic.com/media/6c17f4_8c6323abeb1747d8a3ba2f91f7ab35f4f001.jpg' },
  { id: 7, title: 'Lumion Zomercampagne — Clip 2', brand: 'Lumion Beauty', category: 'campagne', aspect: '16:9', demo: true,
    description: 'Tweede clip van de zomercampagne — huidverzorging in luxe setting.',
    url: 'https://video.wixstatic.com/video/6c17f4_c755d780e51f41d2947b4b032ef009c0/720p/mp4/file.mp4',
    poster: 'https://static.wixstatic.com/media/6c17f4_c755d780e51f41d2947b4b032ef009c0f001.jpg' },
  { id: 8, title: 'Nexora B-roll — Werkplek', brand: 'Nexora', category: 'corporate', aspect: '16:9', demo: true,
    description: 'B-roll footage van een moderne kantooromgeving voor HR-software.',
    url: 'https://video.wixstatic.com/video/6c17f4_2326b4d923b249fda29aaa8824b6f475/720p/mp4/file.mp4',
    poster: 'https://static.wixstatic.com/media/6c17f4_2326b4d923b249fda29aaa8824b6f475f001.jpg' },
  { id: 9, title: 'Nexora B-roll — Verbinding', brand: 'Nexora', category: 'corporate', aspect: '16:9', demo: true,
    description: 'B-roll footage over samenwerking en menselijke verbinding.',
    url: 'https://video.wixstatic.com/video/6c17f4_8e821b5ca9cf46cfaa1f1645cf0e8bf4/720p/mp4/file.mp4',
    poster: 'https://static.wixstatic.com/media/6c17f4_8e821b5ca9cf46cfaa1f1645cf0e8bf4f001.jpg' },
  { id: 10, title: 'Sales pitch — Joeri', brand: 'Ontwikkel Guru', category: 'avatar', aspect: '16:9', demo: false,
    description: 'AI-avatar salespitch: gepersonaliseerde video op naam van de ontvanger.',
    url: 'https://video.wixstatic.com/video/6c17f4_e01c602b707f4e869686a30305f6cd4e/1080p/mp4/file.mp4',
    poster: 'https://static.wixstatic.com/media/6c17f4_e01c602b707f4e869686a30305f6cd4ef001.jpg' },
  { id: 11, title: 'Onboarding — Emma', brand: 'Nexora', category: 'onboarding', aspect: '16:9', demo: true,
    description: 'AI-avatar onboarding video voor nieuwe medewerkers bij een HR-softwarebedrijf.',
    url: 'https://video.wixstatic.com/video/6c17f4_4279c45016d34a2ea81ad8053a6598b9/1080p/mp4/file.mp4',
    poster: 'https://static.wixstatic.com/media/6c17f4_4279c45016d34a2ea81ad8053a6598b9f001.jpg' },
  { id: 12, title: 'AI-workshop — Verdant Group', brand: 'Verdant Group', category: 'onboarding', aspect: '16:9', demo: true,
    description: 'Introworkshop AI in je dagelijkse werk — gegeven door AI-avatar workshoptrainer Alex.',
    url: 'https://video.wixstatic.com/video/6c17f4_478de56aa9954d85a7210814a3b4e759/1080p/mp4/file.mp4',
    poster: 'https://static.wixstatic.com/media/6c17f4_478de56aa9954d85a7210814a3b4e759f001.jpg' },
  { id: 13, title: 'BusinessBaas Onboarding — Bodhi', brand: 'BusinessBaas', category: 'onboarding', aspect: '16:9', demo: false,
    description: 'AI-onboarding avatar Bodhi verwelkomt nieuwe leden van BusinessBaas.',
    url: 'https://video.wixstatic.com/video/6c17f4_2c41b196c8564667bc00791ab2650d2d/1080p/mp4/file.mp4',
    poster: 'https://static.wixstatic.com/media/6c17f4_2c41b196c8564667bc00791ab2650d2df001.jpg' },
  { id: 14, title: 'Nova stelt zich voor', brand: 'BusinessBaas', category: 'coaching', aspect: '9:16', demo: false,
    description: 'Nova, de AI businesscoach van BusinessBaas, stelt zichzelf voor aan nieuwe ondernemers.',
    url: 'https://video.wixstatic.com/video/6c17f4_ea9a4440158c4778a249a2d9a059fc82/1080p/mp4/file.mp4',
    poster: 'https://static.wixstatic.com/media/6c17f4_ea9a4440158c4778a249a2d9a059fc82f001.jpg' },
  { id: 15, title: 'Starterscentrum Limburg × BusinessBaas', brand: 'BusinessBaas', category: 'aankondiging', aspect: '9:16', demo: false,
    description: 'Aankondiging van de samenwerking tussen Starterscentrum Limburg en BusinessBaas.',
    url: 'https://video.wixstatic.com/video/6c17f4_e34bc46b435943d9aec671eb72b18f3b/1080p/mp4/file.mp4',
    poster: 'https://static.wixstatic.com/media/6c17f4_e34bc46b435943d9aec671eb72b18f3bf001.jpg' }
];

const FILTERS = [
  { label: 'Alles', value: 'all' },
  { label: 'Campagne & Product', value: 'campagne,product' },
  { label: 'Corporate Video', value: 'corporate' },
  { label: 'Avatar & Sales', value: 'avatar' },
  { label: 'Onboarding & Training', value: 'onboarding' },
  { label: 'AI Coaching', value: 'coaching' },
  { label: 'Aankondiging', value: 'aankondiging' }
];

function renderFilterBar() {
  const wrap = document.getElementById('filter-bar');
  if (!wrap) return;
  wrap.innerHTML = FILTERS.map(f =>
    `<button class="filter-btn${f.value === 'all' ? ' active' : ''}" data-filter="${f.value}">${f.label}</button>`
  ).join('');

  wrap.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      wrap.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      filterGrid(btn.dataset.filter);
    });
  });
}

function filterGrid(value) {
  const cards = document.querySelectorAll('.portfolio-card');
  const cats = value === 'all' ? [] : value.split(',');
  cards.forEach(card => {
    const cat = card.dataset.category;
    const show = value === 'all' || cats.includes(cat);
    card.classList.toggle('card-hidden', !show);
  });
}

function renderGrid() {
  const grid = document.getElementById('portfolio-grid');
  if (!grid) return;
  grid.innerHTML = VIDEOS.map(v => `
    <div class="portfolio-card" data-category="${v.category}"
         role="button" tabindex="0" aria-label="${v.title} afspelen"
         data-url="${v.url}" data-title="${v.title}" data-aspect="${v.aspect}">
      <div class="card-thumb-wrap aspect-${v.aspect.replace(':', '-')}">
        <img src="${v.poster}" alt="${v.title}" class="card-thumb" loading="lazy" />
        <div class="card-play-overlay"><div class="card-play-btn">&#9654;</div></div>
      </div>
      <div class="card-footer">
        <div class="card-title">${v.title}</div>
        <div class="card-meta">
          <span class="card-brand">${v.brand}</span>
          ${v.demo ? '<span class="badge badge-demo">Demo</span>' : ''}
        </div>
        <p class="card-description">${v.description}</p>
      </div>
    </div>
  `).join('');

  grid.querySelectorAll('.portfolio-card').forEach(card => {
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
  renderFilterBar();
  renderGrid();
});
