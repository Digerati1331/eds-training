import { getMetadata } from '../../scripts/aem.js';
import { loadFragment } from '../fragment/fragment.js';

// header.js

function createOverlay() {
  const overlay = document.createElement('div');
  overlay.className = 'usa-overlay';
  return overlay;
}

function createLogo() {
  const logo = document.createElement('div');
  logo.className = 'usa-logo';
  logo.innerHTML = `
    <em class="usa-logo__text">
      <a href="/" title="Project title">Project title</a>
    </em>
  `;
  return logo;
}

function createNavbar() {
  const navbar = document.createElement('div');
  navbar.className = 'usa-navbar';
  navbar.append(createLogo());

  const menuBtn = document.createElement('button');
  menuBtn.type = 'button';
  menuBtn.className = 'usa-menu-btn';
  menuBtn.textContent = 'Menu';

  navbar.append(menuBtn);
  return navbar;
}

function createCloseButton() {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'usa-nav__close';
  btn.innerHTML = `<img src="/assets/img/usa-icons/close.svg" role="img" alt="Close" />`;
  return btn;
}

function createSubmenuColumn() {
  const col = document.createElement('div');
  col.className = 'usa-col';

  col.innerHTML = `
    <ul class="usa-nav__submenu-list">
      <li class="usa-nav__submenu-item"><a href="javascript:void(0);">Navigation link</a></li>
      <li class="usa-nav__submenu-item"><a href="javascript:void(0);">A very long navigation link that goes onto two lines</a></li>
      <li class="usa-nav__submenu-item"><a href="javascript:void(0);">Navigation link</a></li>
    </ul>
  `;
  return col;
}

function createSubmenu(id) {
  const submenu = document.createElement('div');
  submenu.id = id;
  submenu.className = 'usa-nav__submenu usa-megamenu';

  const row = document.createElement('div');
  row.className = 'grid-row grid-gap-4';

  for (let i = 0; i < 4; i++) {
    row.append(createSubmenuColumn());
  }

  submenu.append(row);
  return submenu;
}

function createNavItem(title, sectionId, isCurrent = false) {
  const li = document.createElement('li');
  li.className = 'usa-nav__primary-item';

  const btn = document.createElement('button');
  btn.type = 'button';
  btn.className = `usa-accordion__button usa-nav__link${isCurrent ? ' usa-current' : ''}`;
  btn.setAttribute('aria-expanded', 'false');
  btn.setAttribute('aria-controls', sectionId);
  btn.innerHTML = `<span>${title}</span>`;

  const submenu = createSubmenu(sectionId);

  li.append(btn, submenu);
  return li;
}

function createSimpleLinkItem(text) {
  const li = document.createElement('li');
  li.className = 'usa-nav__primary-item';
  li.innerHTML = `<a href="javascript:void(0);" class="usa-nav-link">${text}</a>`;
  return li;
}

function createPrimaryNav() {
  const ul = document.createElement('ul');
  ul.className = 'usa-nav__primary usa-accordion';
  ul.append(
    createNavItem('Current section', 'extended-mega-nav-section-one', true),
    createNavItem('Section', 'extended-mega-nav-section-two'),
    createSimpleLinkItem('Simple link')
  );
  return ul;
}

function createSearch() {
  const section = document.createElement('section');
  section.setAttribute('aria-label', 'Search component');

  section.innerHTML = `
    <form class="usa-search usa-search--small" role="search">
      <label class="usa-sr-only" for="search-field">Search</label>
      <input class="usa-input" id="search-field" type="search" name="search" />
      <button class="usa-button" type="submit">
        <img src="/assets/img/usa-icons-bg/search--white.svg"
             class="usa-search__submit-icon" alt="Search" />
      </button>
    </form>
  `;
  return section;
}

function createSecondaryNav() {
  const secondary = document.createElement('div');
  secondary.className = 'usa-nav__secondary';

  const links = document.createElement('ul');
  links.className = 'usa-nav__secondary-links';

  secondary.append(links, createSearch());
  return secondary;
}

function createNav() {
  const nav = document.createElement('nav');
  nav.className = 'usa-nav';
  nav.setAttribute('aria-label', 'Primary navigation');

  const inner = document.createElement('div');
  inner.className = 'usa-nav__inner';
  inner.append(createCloseButton(), createPrimaryNav(), createSecondaryNav());

  nav.append(inner);
  return nav;
}

function createHeaderContainer() {
  const header = document.createElement('header');
  header.className = 'usa-header usa-header--extended';
  header.append(createNavbar(), createNav());
  return header;
}

// Entry point function
export default function decorate(block) {
  block.innerHTML = ''; // clear the block
  block.append(createOverlay(), createHeaderContainer());
}
