/**
 * AshfordLamps — Product Renderer
 * Generates DOM elements from product data
 */

function renderProductCard(product) {
  const savePercent = product.savePercent || calcSavePercent(product.priceRegular, product.priceSale);
  const pricePrefix = product.priceLabel === 'from'
    ? `<span data-i18n="product.from">From</span> `
    : '';
  const preorderBadge = product.preorder
    ? '<span class="product-card__badge product-card__badge--preorder" data-i18n="home.limited_preorder">Limited Pre-Orders</span>'
    : '';
  const stockBadge = !product.preorder && savePercent
    ? `<span class="product-card__badge">SAVE ${savePercent}%</span>`
    : '';
  const badge = product.preorder
    ? preorderBadge
    : `<span class="product-card__badge">SAVE ${savePercent}%</span>`;

  const mainImage = (product.images && product.images.length > 0)
    ? (typeof product.images[0] === 'string' ? product.images[0] : product.images[0].url)
    : '';

  return `
    <div class="product-card">
      <div class="product-card__image-wrapper">
        <a href="product.html#${product.id}">
          <img class="product-card__image" src="${mainImage}" alt="${product.name}" loading="lazy">
        </a>
        ${badge}
      </div>
      <div class="product-card__info">
        <h3 class="product-card__title">
          <a href="product.html#${product.id}">${product.name}</a>
        </h3>
        <div class="product-card__rating">
          <span class="product-card__rating-stars">${renderStars(product.rating || 5)}</span>
        </div>
        <div class="product-card__price">
          <span class="product-card__price-regular">$${product.priceRegular.toFixed(2)}</span>
          <span class="product-card__price-sale">${pricePrefix}$${product.priceSale.toFixed(2)}</span>
        </div>
        <a href="product.html#${product.id}" class="btn btn--outline btn--small">
          <span data-i18n="product.choose_options">Choose options</span>
        </a>
      </div>
    </div>`;
}

function renderStars(count) {
  const star = '<svg viewBox="0 0 24 24" width="14" height="14"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="#f5a623"/></svg>';
  return star.repeat(Math.min(count, 5));
}

function calcSavePercent(regular, sale) {
  return Math.round((1 - sale / regular) * 100);
}

/**
 * Populate all [data-products] containers on the page
 */
function renderProductContainers() {
  document.querySelectorAll('[data-products]').forEach(container => {
    const key = container.getAttribute('data-products');
    let products;

    if (key === 'all') {
      products = [...DataStore.products].sort((a, b) => a.sortOrder - b.sortOrder);
    } else if (key === 'featured') {
      products = getFeaturedProducts();
    } else {
      products = getProductsByCollection(key);
    }

    const html = products.map(p => renderProductCard(p)).join('');
    container.innerHTML = html;
  });
}

/**
 * Populate a product detail page from ?id= URL parameter
 */
function renderProductDetail() {
  // Support both hash (#id) and query params (?id=)
  let id = window.location.hash.replace('#', '');
  if (!id) {
    const params = new URLSearchParams(window.location.search);
    id = params.get('id');
  }
  if (!id) return;

  const product = getProductById(id);
  if (!product) return;

  // Title
  const titleEl = document.querySelector('[data-product="name"]');
  if (titleEl) titleEl.textContent = product.name;

  // Sale price
  const saleEl = document.querySelector('[data-product="priceSale"]');
  if (saleEl) saleEl.textContent = `$${product.priceSale.toFixed(2)}`;

  // Regular price
  const regEl = document.querySelector('[data-product="priceRegular"]');
  if (regEl) regEl.textContent = `$${product.priceRegular.toFixed(2)}`;

  // Save badge
  const saveEl = document.querySelector('[data-product="savePercent"]');
  if (saveEl) {
    const pct = product.savePercent || calcSavePercent(product.priceRegular, product.priceSale);
    saveEl.textContent = `SAVE ${pct}%`;
  }

  // Review count
  const reviewEl = document.querySelector('[data-product="reviewCount"]');
  if (reviewEl) reviewEl.textContent = `(${product.reviewCount}+ Reviews)`;

  // Main gallery image
  const mainImg = document.querySelector('[data-product="mainImage"]');
  const mainImageUrl = (product.images && product.images.length > 0)
    ? (typeof product.images[0] === 'string' ? product.images[0] : product.images[0].url)
    : '';
  if (mainImg && mainImageUrl) {
    mainImg.src = mainImageUrl;
    mainImg.alt = product.name;
  }

  // Gallery thumbnails
  const thumbContainer = document.querySelector('[data-product-gallery]');
  if (thumbContainer && product.images && product.images.length > 1) {
    const thumbs = product.images.map((img, i) => {
      const url = typeof img === 'string' ? img : img.url;
      return `<button class="product-gallery__thumb${i === 0 ? ' active' : ''}" data-thumb="${i}">
        <img src="${url}" alt="${product.name} view ${i + 1}" width="80" height="80">
      </button>`;
    }).join('');
    thumbContainer.innerHTML = thumbs;
  }

  // Related products section
  const relatedContainer = document.querySelector('[data-products="related"]');
  if (relatedContainer && product.collection) {
    const related = DataStore.products
      .filter(p => p.collection === product.collection && p.id !== product.id)
      .sort((a, b) => a.sortOrder - b.sortOrder)
      .slice(0, 4);
    const html = related.map(p => renderProductCard(p)).join('');
    relatedContainer.innerHTML = html;
  }

  // Update page title
  document.title = `${product.name} – AshfordLamps`;
}
