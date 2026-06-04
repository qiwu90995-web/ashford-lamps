/**
 * AshfordLamps — Data Loader
 * Fetches and caches content JSON files
 */
const DataStore = {
  products: [],
  general: null,
  loaded: false,
};

async function loadProducts() {
  try {
    const res = await fetch('content/products.json');
    if (!res.ok) throw new Error(`Products fetch failed: ${res.status}`);
    const json = await res.json();
    DataStore.products = Array.isArray(json) ? json : (json.products || []);
    return DataStore.products;
  } catch (err) {
    console.warn('Failed to load products.json, using empty array:', err.message);
    DataStore.products = [];
    return [];
  }
}

async function loadGeneral() {
  try {
    const res = await fetch('content/general.json');
    if (!res.ok) throw new Error(`General fetch failed: ${res.status}`);
    DataStore.general = await res.json();
    return DataStore.general;
  } catch (err) {
    console.warn('Failed to load general.json:', err.message);
    DataStore.general = {
      collections: [],
      announcement: { messages: ['Flash sale : 45% off', 'FREE Shipping Worldwide !', 'Artisan-crafted', 'ORDER NOW'] },
      banners: [],
      brandStoryKey: 'home.story',
    };
    return DataStore.general;
  }
}

async function loadAllData() {
  if (DataStore.loaded) return;
  await Promise.all([loadProducts(), loadGeneral()]);
  DataStore.loaded = true;
}

function getProductById(id) {
  return DataStore.products.find(p => p.id === id);
}

function getProductsByCollection(collectionId) {
  return DataStore.products
    .filter(p => p.collection === collectionId)
    .sort((a, b) => a.sortOrder - b.sortOrder);
}

function getFeaturedProducts() {
  return DataStore.products
    .filter(p => p.featured)
    .sort((a, b) => a.sortOrder - b.sortOrder);
}

function getCollections() {
  if (!DataStore.general || !DataStore.general.collections) return [];
  return DataStore.general.collections.sort((a, b) => a.sortOrder - b.sortOrder);
}

function getAnnouncementMessages() {
  const lang = typeof getCurrentLang === 'function' ? getCurrentLang() : 'en';
  const t = typeof I18N !== 'undefined' ? (I18N[lang] || I18N.en) : {};

  if (!DataStore.general || !DataStore.general.announcement || !DataStore.general.announcement.messages) {
    // Fallback: generate from i18n keys
    return [
      t['announce.flash'] || 'Flash sale : 45% off',
      t['announce.shipping'] || 'FREE Shipping Worldwide !',
      t['announce.crafted'] || 'Artisan-crafted',
      t['announce.order'] || 'ORDER NOW',
    ];
  }
  return DataStore.general.announcement.messages;
}
