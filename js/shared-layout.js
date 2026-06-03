/**
 * AshfordLamps — Shared Layout
 * Injects header, footer, announcement bar, and search modal into placeholder divs.
 * Replaces copy-paste duplication across all HTML pages.
 */

function injectAnnouncementBar() {
  const container = document.getElementById('announcement-bar');
  if (!container) return;

  container.innerHTML = `
    <aside class="announcement-bar">
      <div class="announcement-bar__marquee">
        ${getAnnouncementHTML()}
      </div>
    </aside>`;
}

function getAnnouncementHTML() {
  const msgs = typeof getAnnouncementMessages === 'function'
    ? getAnnouncementMessages()
    : ['Flash sale : 45% off', 'FREE Shipping Worldwide !', 'Artisan-crafted', 'ORDER NOW'];
  const items = msgs.map(m => `<span>${m}</span>`).join('');
  return (items + items + items + items + items + items + items + items);
}

function injectHeader() {
  const container = document.getElementById('site-header');
  if (!container) return;

  container.innerHTML = `
    <header class="header">
      <div class="header__inner">
        <button class="header__mobile-toggle" aria-label="Menu" aria-expanded="false">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
          </svg>
        </button>
        <nav class="header__nav">
          <ul class="header__nav-list">
            <li><a href="index.html" data-i18n="nav.home">Home</a></li>
            <li><a href="collection.html" data-i18n="nav.fellowship">Fellowship Collection</a></li>
            <li><a href="collection.html" data-i18n="nav.spirit">Spirit World collection</a></li>
            <li><a href="contact.html" data-i18n="nav.contact">Contact</a></li>
          </ul>
        </nav>
        <a href="index.html" class="header__logo"><h1>AshfordLamps</h1></a>
        <div class="header__actions">
          <button data-action="search" aria-label="Search">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          </button>
          <a href="#" aria-label="Log in">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            <span data-i18n="header.login">Log in</span>
          </a>
          <button aria-label="Cart">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
            <span data-i18n="header.cart">Cart</span>
            <span class="header__cart-count" style="display:none">0</span>
          </button>
          <div class="lang-switcher">
            <button class="lang-switcher__btn">
              <span>EN</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
            </button>
            <div class="lang-switcher__dropdown">
              <button class="lang-switcher__option active" data-lang="en">English</button>
              <button class="lang-switcher__option" data-lang="es">Español</button>
              <button class="lang-switcher__option" data-lang="zh">中文</button>
            </div>
          </div>
        </div>
      </div>
    </header>`;
}

function injectFooter() {
  const container = document.getElementById('site-footer');
  if (!container) return;

  container.innerHTML = `
    <footer class="footer">
      <div class="footer__inner">
        <div class="footer__payment">
          <svg width="38" height="24" viewBox="0 0 38 24"><rect width="38" height="24" rx="3" fill="#1434CB"/></svg>
          <svg width="38" height="24" viewBox="0 0 38 24"><rect width="38" height="24" rx="3" fill="#EB001B"/><circle cx="15" cy="12" r="5" fill="#F79E1B"/><circle cx="23" cy="12" r="5" fill="#FF5F00"/></svg>
          <svg width="38" height="24" viewBox="0 0 38 24"><rect width="38" height="24" rx="3" fill="#1A1F71"/></svg>
          <svg width="38" height="24" viewBox="0 0 38 24"><rect width="38" height="24" rx="3" fill="#000"/></svg>
        </div>
        <div class="footer__bottom">
          <span>&copy; 2026, <a href="index.html">AshfordLamps</a></span>
          <span>&nbsp;· Powered by&nbsp;<a href="#">Shrine</a></span>
        </div>
        <div class="footer__links mt-2">
          <a href="#" data-i18n="footer.privacy">Privacy policy</a><span>&nbsp;·&nbsp;</span>
          <a href="#" data-i18n="footer.refund">Refund policy</a><span>&nbsp;·&nbsp;</span>
          <a href="#" data-i18n="footer.terms">Terms of service</a><span>&nbsp;·&nbsp;</span>
          <a href="#" data-i18n="footer.shipping">Shipping policy</a><span>&nbsp;·&nbsp;</span>
          <a href="contact.html" data-i18n="footer.contact">Contact information</a>
        </div>
      </div>
    </footer>`;
}

function injectSearchModal() {
  const container = document.getElementById('search-modal');
  if (!container) return;

  container.innerHTML = `
    <div class="search-modal">
      <div class="search-modal__content">
        <input type="text" class="search-modal__input" placeholder="Search..." data-i18n="header.search_placeholder">
      </div>
    </div>`;
}
