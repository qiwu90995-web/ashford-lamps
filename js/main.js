/**
 * AshfordLamps Replica — Interactive Components + i18n
 */

/* ============================================================
   I18N — Translations
   ============================================================ */
const I18N = {
  en: {
    // Announcement
    'announce.flash': 'Flash sale : 45% off',
    'announce.shipping': 'FREE Shipping Worldwide !',
    'announce.crafted': 'Artisan-crafted',
    'announce.order': 'ORDER NOW',

    // Header
    'nav.home': 'Home',
    'nav.fellowship': 'Fellowship Collection',
    'nav.spirit': 'Spirit World collection',
    'nav.contact': 'Contact',
    'header.login': 'Log in',
    'header.cart': 'Cart',
    'header.search_placeholder': 'Search...',

    // Homepage
    'home.shop_by_universe': 'Shop by Universe',
    'home.fellowship': 'The Fellowship Collection',
    'home.trainers': "The Trainer's Vault Collection",
    'home.spirit': 'The Spirit World Collection',
    'home.limited_stock': 'Limited stock',
    'home.limited_preorder': 'Limited Pre-Orders',
    'home.light_banner': 'A light in dark places.',
    'home.light_sub': 'Shop the Fellowship collection',
    'home.world_banner': 'A world within the light.',
    'home.world_sub': 'Shop the Spirit World collection',
    'home.story': "Ashford was born from one thing — an obsession with Middle-earth that never faded. Every lamp is designed to capture a moment from Tolkien's world and freeze it in resin. The scenes, the figures, the glow — every detail exists because we've watched the trilogy a hundred times and noticed things most people don't. This isn't merchandise. It's what happens when someone who genuinely loves Lord of the Rings decides to build something worthy of the story. Small batch. No shortcuts. Made for the Fellowship.",

    // Product
    'product.choose_options': 'Choose options',
    'product.add_to_cart': 'Add to cart',
    'product.added': 'Added!',
    'product.regular_price': 'Regular price',
    'product.sale_price': 'Sale price',
    'product.save': 'SAVE',
    'product.currently_viral': 'CURRENTLY VIRAL | LOW STOCK',
    'product.bundle_save': 'BUNDLE & SAVE',
    'product.bundle_ends': 'Bundle offers end in :',
    'product.buy1': 'Buy 1, Get 1 Gift',
    'product.buy2': 'Buy 2, Get 5% off and 2 Free Gifts',
    'product.buy3': 'Buy 3, Get 10% off and 4 Free Gifts',
    'product.most_popular': 'MOST POPULAR',
    'product.best_value': 'Best Value',
    'product.size': 'Size',
    'product.warranty': '30-Day Warranty',
    'product.shipping_protection': 'Shipping Protection',
    'product.tip_jar': 'TIP JAR <3',
    'product.quality_title': 'Quality & Materials',
    'product.quality_text': 'Each lamp is crafted from crystal-clear polished resin with hand-painted miniature scenes and a hand-built wooden LED base. Designed to capture Middle-earth in light — every detail, every figure, every glow exists because we noticed things most people don\'t.',
    'product.returns_title': 'Returns & Guarantee',
    'product.returns_text': 'If your package arrives damaged or defective, customers with Shipping Protection qualify for an instant free replacement. Just email ehdmarket@gmail.com with a photo and your order number.',
    'product.crafting_title': 'Crafting & Delivery',
    'product.crafting_text': 'Each lamp is made to order. Your piece is hand-poured and assembled from scratch once you place your order. Please allow 8 to 15 days for crafting, followed by 3 to 6 days for delivery. We don\'t pull from a warehouse. We make it for you.',
    'product.explore': 'Explore the Collection',
    'product.reviews': 'Reviews',

    // Collection
    'collection.fellowship_title': 'The Fellowship Collection',
    'collection.fellowship_desc': 'Hand-poured resin lamps inspired by Middle-earth. Small batch. No shortcuts.',

    // Contact
    'contact.title': 'Contact Us',
    'contact.name': 'Name',
    'contact.name_placeholder': 'Your name',
    'contact.email': 'Email',
    'contact.email_placeholder': 'your@email.com',
    'contact.phone': 'Phone (optional)',
    'contact.phone_placeholder': '+1 555 000 0000',
    'contact.message': 'Message',
    'contact.message_placeholder': 'How can we help you?',
    'contact.send': 'Send Message',
    'contact.or_email': 'Or email us directly at',
    'contact.form_static': 'This is a static demo. Form submission is not functional.',

    // Footer
    'footer.payment': 'Payment methods',
    'footer.copyright': '© 2026, AshfordLamps',
    'footer.powered': 'Powered by Shrine',
    'footer.privacy': 'Privacy policy',
    'footer.refund': 'Refund policy',
    'footer.terms': 'Terms of service',
    'footer.shipping': 'Shipping policy',
    'footer.contact': 'Contact information',

    // Language
    'lang.label': 'EN',
    'lang.en': 'English',
    'lang.es': 'Español',
    'lang.zh': '中文',

    // Testimonials
    'testimonial.1.text': "Holy shoot, this thing is actually accurate as the show. Didn't quite expect it to be that detailed — makes it even cooler!",
    'testimonial.1.author': 'Mike R',
    'testimonial.2.text': 'The craftsmanship on this is simply perfection. This complements my collection so well. Definitely buying more from you guys soon!',
    'testimonial.2.author': 'Sofia L.',
    'testimonial.3.text': "It's actually such a good lamp. I compared it to the real scene from the film, and it's damn near flawless!",
    'testimonial.3.author': 'Daniel M.',

    // Free gifts
    'gift.ring_necklace': '+ FREE Ring Necklace',
    'gift.ring_barahir': '+ FREE Ring of Barahir',
    'gift.nazgul_crown': '+ FREE Nazgûl Crown Ring',
    'gift.leaf_lorien': '+ FREE Leaf Of Lorien',

    // Product page specific
    'product.from': 'From',
    'product.reviews_count': 'Reviews',
    'product.related': 'Explore the Collection',
  },

  es: {
    'announce.flash': 'Venta flash : 45% de descuento',
    'announce.shipping': '¡Envío GRATIS a todo el mundo!',
    'announce.crafted': 'Hecho artesanalmente',
    'announce.order': 'COMPRAR AHORA',

    'nav.home': 'Inicio',
    'nav.fellowship': 'Colección Fellowship',
    'nav.spirit': 'Colección Mundo Espiritual',
    'nav.contact': 'Contacto',
    'header.login': 'Iniciar sesión',
    'header.cart': 'Carrito',
    'header.search_placeholder': 'Buscar...',

    'home.shop_by_universe': 'Compra por Universo',
    'home.fellowship': 'La Colección Fellowship',
    'home.trainers': 'La Colección Trainer\'s Vault',
    'home.spirit': 'La Colección Mundo Espiritual',
    'home.limited_stock': 'Stock limitado',
    'home.limited_preorder': 'Pre-pedidos Limitados',
    'home.light_banner': 'Una luz en lugares oscuros.',
    'home.light_sub': 'Compra la colección Fellowship',
    'home.world_banner': 'Un mundo dentro de la luz.',
    'home.world_sub': 'Compra la colección Mundo Espiritual',
    'home.story': 'Ashford nació de una sola cosa: una obsesión por la Tierra Media que nunca se desvaneció. Cada lámpara está diseñada para capturar un momento del mundo de Tolkien y congelarlo en resina. Las escenas, las figuras, el brillo: cada detalle existe porque hemos visto la trilogía cien veces y notamos cosas que la mayoría no ve. Esto no es mercancía. Es lo que sucede cuando alguien que realmente ama El Señor de los Anillos decide construir algo digno de la historia. Lotes pequeños. Sin atajos. Hecho para la Comunidad.',

    'product.choose_options': 'Elegir opciones',
    'product.add_to_cart': 'Añadir al carrito',
    'product.added': '¡Añadido!',
    'product.regular_price': 'Precio regular',
    'product.sale_price': 'Precio de oferta',
    'product.save': 'AHORRA',
    'product.currently_viral': 'ACTUALMENTE VIRAL | STOCK BAJO',
    'product.bundle_save': 'PAQUETE Y AHORRA',
    'product.bundle_ends': 'Las ofertas de paquete terminan en :',
    'product.buy1': 'Compra 1, Recibe 1 Regalo',
    'product.buy2': 'Compra 2, 5% de descuento y 2 Regalos',
    'product.buy3': 'Compra 3, 10% de descuento y 4 Regalos',
    'product.most_popular': 'MÁS POPULAR',
    'product.best_value': 'Mejor Valor',
    'product.size': 'Tamaño',
    'product.warranty': 'Garantía de 30 Días',
    'product.shipping_protection': 'Protección de Envío',
    'product.tip_jar': 'PROPINA <3',
    'product.quality_title': 'Calidad y Materiales',
    'product.quality_text': 'Cada lámpara está hecha de resina pulida cristalina con escenas en miniatura pintadas a mano y una base de madera LED. Diseñada para capturar la Tierra Media en luz: cada detalle, cada figura, cada brillo existe porque notamos cosas que la mayoría no ve.',
    'product.returns_title': 'Devoluciones y Garantía',
    'product.returns_text': 'Si tu paquete llega dañado o defectuoso, los clientes con Protección de Envío califican para un reemplazo gratuito inmediato. Solo envía un correo a ehdmarket@gmail.com con una foto y tu número de pedido.',
    'product.crafting_title': 'Fabricación y Entrega',
    'product.crafting_text': 'Cada lámpara se hace por encargo. Tu pieza se vierte y ensambla a mano desde cero una vez que realizas tu pedido. Por favor, permite de 8 a 15 días para la fabricación, seguido de 3 a 6 días para la entrega. No sacamos de un almacén. Lo hacemos para ti.',
    'product.explore': 'Explora la Colección',
    'product.reviews': 'Reseñas',

    'collection.fellowship_title': 'La Colección Fellowship',
    'collection.fellowship_desc': 'Lámparas de resina vertidas a mano inspiradas en la Tierra Media. Lotes pequeños. Sin atajos.',

    'contact.title': 'Contáctanos',
    'contact.name': 'Nombre',
    'contact.name_placeholder': 'Tu nombre',
    'contact.email': 'Correo electrónico',
    'contact.email_placeholder': 'tu@email.com',
    'contact.phone': 'Teléfono (opcional)',
    'contact.phone_placeholder': '+34 612 345 678',
    'contact.message': 'Mensaje',
    'contact.message_placeholder': '¿Cómo podemos ayudarte?',
    'contact.send': 'Enviar Mensaje',
    'contact.or_email': 'O escríbenos directamente a',
    'contact.form_static': 'Esta es una demo estática. El formulario no es funcional.',

    'footer.payment': 'Métodos de pago',
    'footer.copyright': '© 2026, AshfordLamps',
    'footer.powered': 'Desarrollado por Shrine',
    'footer.privacy': 'Política de privacidad',
    'footer.refund': 'Política de reembolso',
    'footer.terms': 'Términos del servicio',
    'footer.shipping': 'Política de envío',
    'footer.contact': 'Información de contacto',

    'lang.label': 'ES',
    'lang.en': 'English',
    'lang.es': 'Español',
    'lang.zh': '中文',

    'testimonial.1.text': 'Santo cielo, esta cosa es realmente precisa como en la serie. ¡No esperaba que fuera tan detallada, lo hace aún más genial!',
    'testimonial.1.author': 'Mike R',
    'testimonial.2.text': 'La artesanía es simplemente perfecta. Complementa mi colección muy bien. ¡Definitivamente compraré más pronto!',
    'testimonial.2.author': 'Sofia L.',
    'testimonial.3.text': 'Es realmente una lámpara increíble. ¡La comparé con la escena real de la película y es casi perfecta!',
    'testimonial.3.author': 'Daniel M.',

    'gift.ring_necklace': '+ Collar de Anillo GRATIS',
    'gift.ring_barahir': '+ Anillo de Barahir GRATIS',
    'gift.nazgul_crown': '+ Corona de Nazgûl GRATIS',
    'gift.leaf_lorien': '+ Hoja de Lorien GRATIS',

    'product.from': 'Desde',
    'product.reviews_count': 'Reseñas',
    'product.related': 'Explora la Colección',
  },

  zh: {
    'announce.flash': '限时优惠：45% 折扣',
    'announce.shipping': '全球免费配送！',
    'announce.crafted': '手工制作',
    'announce.order': '立即购买',

    'nav.home': '首页',
    'nav.fellowship': '指环王系列',
    'nav.spirit': '幽灵世界系列',
    'nav.contact': '联系我们',
    'header.login': '登录',
    'header.cart': '购物车',
    'header.search_placeholder': '搜索...',

    'home.shop_by_universe': '按宇宙选购',
    'home.fellowship': '指环王系列',
    'home.trainers': '训练师宝库系列',
    'home.spirit': '幽灵世界系列',
    'home.limited_stock': '库存有限',
    'home.limited_preorder': '限量预售',
    'home.light_banner': '黑暗中的一束光。',
    'home.light_sub': '选购指环王系列',
    'home.world_banner': '光之世界。',
    'home.world_sub': '选购幽灵世界系列',
    'home.story': 'Ashford 诞生于一件事——对中土世界永不褪色的痴迷。每一盏灯都旨在捕捉托尔金世界的某个瞬间并将其凝固在树脂中。场景、人物、光芒——每一个细节都存在，因为我们看过这部三部曲一百遍，注意到了大多数人没有注意到的东西。这不是商品。这是一个真正热爱指环王的人决定打造一件配得上这个故事的作品。小批量。无捷径。为远征队而造。',

    'product.choose_options': '选择规格',
    'product.add_to_cart': '加入购物车',
    'product.added': '已添加！',
    'product.regular_price': '原价',
    'product.sale_price': '优惠价',
    'product.save': '节省',
    'product.currently_viral': '当前热门 | 库存紧张',
    'product.bundle_save': '套餐优惠',
    'product.bundle_ends': '套餐优惠结束于：',
    'product.buy1': '买1件，送1件礼品',
    'product.buy2': '买2件，享9.5折 + 2件礼品',
    'product.buy3': '买3件，享9折 + 4件礼品',
    'product.most_popular': '最受欢迎',
    'product.best_value': '最佳价值',
    'product.size': '尺寸',
    'product.warranty': '30天质保',
    'product.shipping_protection': '配送保障',
    'product.tip_jar': '打赏 <3',
    'product.quality_title': '品质与材料',
    'product.quality_text': '每盏灯均由水晶般透明的抛光树脂手工打造，配有手绘微缩场景和手工木质LED底座。旨在以光影捕捉中土世界——每一个细节、每一个人物、每一道光芒，都因为我们注意到了大多数人没有注意到的东西而存在。',
    'product.returns_title': '退换与保障',
    'product.returns_text': '如果您的包裹到达时损坏或有缺陷，购买配送保障的客户可享受即时免费换货。只需发送邮件至 ehdmarket@gmail.com，附上照片和订单号即可。',
    'product.crafting_title': '制作与配送',
    'product.crafting_text': '每盏灯均为定制制作。您的作品将在下单后从零开始手工浇注和组装。制作时间约为8至15天，配送时间为3至6天。我们不从仓库取货，我们为您亲手打造。',
    'product.explore': '探索本系列',
    'product.reviews': '用户评价',

    'collection.fellowship_title': '指环王系列',
    'collection.fellowship_desc': '灵感源自中土世界的手工浇注树脂灯。小批量。无捷径。',

    'contact.title': '联系我们',
    'contact.name': '姓名',
    'contact.name_placeholder': '您的姓名',
    'contact.email': '邮箱',
    'contact.email_placeholder': 'your@email.com',
    'contact.phone': '电话（选填）',
    'contact.phone_placeholder': '+86 138 0000 0000',
    'contact.message': '留言',
    'contact.message_placeholder': '有什么可以帮您的？',
    'contact.send': '发送消息',
    'contact.or_email': '或直接发送邮件至',
    'contact.form_static': '这是一个静态演示页面，表单提交功能不可用。',

    'footer.payment': '支付方式',
    'footer.copyright': '© 2026, AshfordLamps',
    'footer.powered': '技术支持 Shrine',
    'footer.privacy': '隐私政策',
    'footer.refund': '退款政策',
    'footer.terms': '服务条款',
    'footer.shipping': '配送政策',
    'footer.contact': '联系信息',

    'lang.label': '中文',
    'lang.en': 'English',
    'lang.es': 'Español',
    'lang.zh': '中文',

    'testimonial.1.text': '天哪，这个真的和剧里一模一样。没想到细节这么到位，更酷了！',
    'testimonial.1.author': 'Mike R',
    'testimonial.2.text': '工艺简直是完美的。它完美补充了我的收藏。肯定会再买更多！',
    'testimonial.2.author': 'Sofia L.',
    'testimonial.3.text': '这盏灯真的太棒了。我把它和电影里的真实场景对比了一下，几乎完美无瑕！',
    'testimonial.3.author': 'Daniel M.',

    'gift.ring_necklace': '+ 免费戒指项链',
    'gift.ring_barahir': '+ 免费巴拉希尔之戒',
    'gift.nazgul_crown': '+ 免费纳兹古尔王冠之戒',
    'gift.leaf_lorien': '+ 免费洛瑞恩之叶',

    'product.from': '起',
    'product.reviews_count': '条评价',
    'product.related': '探索本系列',
  }
};

/* ============================================================
   I18N — Core Functions
   ============================================================ */
function getCurrentLang() {
  return localStorage.getItem('ashford-lang') || 'en';
}

function setCurrentLang(lang) {
  localStorage.setItem('ashford-lang', lang);
}

function t(key) {
  return I18N[getCurrentLang()]?.[key] || I18N.en[key] || key;
}

function translatePage(lang) {
  setCurrentLang(lang);

  // Update all elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const translation = I18N[lang]?.[key] || I18N.en[key];
    if (translation !== undefined) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = translation;
      } else if (el.tagName === 'IMG') {
        el.alt = translation;
      } else {
        el.textContent = translation;
      }
    }
  });

  // Update search placeholder
  const searchInput = document.querySelector('.search-modal__input');
  if (searchInput) {
    searchInput.placeholder = I18N[lang]?.['header.search_placeholder'] || 'Search...';
  }

  // Update contact form alert text
  const formStatic = document.querySelector('.contact-form');
  if (formStatic) {
    formStatic.setAttribute('data-alert-text', I18N[lang]?.['contact.form_static'] || '');
  }

  // Update language switcher label
  const langLabel = document.querySelector('.lang-switcher__btn span:first-child');
  if (langLabel) {
    langLabel.textContent = I18N[lang]?.['lang.label'] || lang.toUpperCase();
  }

  // Update active state in dropdown
  document.querySelectorAll('.lang-switcher__option').forEach(opt => {
    opt.classList.toggle('active', opt.getAttribute('data-lang') === lang);
  });

  // Update announcement marquee content
  updateAnnouncementMarquee(lang);

  // Re-attach add-to-cart handlers with translated text
  initAddToCart();
}

function updateAnnouncementMarquee(lang) {
  const marquee = document.querySelector('.announcement-bar__marquee');
  if (!marquee) return;
  const t = I18N[lang] || I18N.en;
  const items = [
    t['announce.flash'],
    t['announce.shipping'],
    t['announce.crafted'],
    t['announce.order']
  ];
  // Repeat 8 times for seamless loop
  const html = [];
  for (let i = 0; i < 8; i++) {
    items.forEach(item => { html.push(`<span>${item}</span>`); });
  }
  marquee.innerHTML = html.join('');
}

/* ============================================================
   Language Switcher
   ============================================================ */
function initLangSwitcher() {
  const switcher = document.querySelector('.lang-switcher');
  const btn = switcher?.querySelector('.lang-switcher__btn');
  const options = switcher?.querySelectorAll('.lang-switcher__option');

  if (!switcher || !btn) return;

  // Toggle dropdown
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    switcher.classList.toggle('open');
  });

  // Option click
  options?.forEach(opt => {
    opt.addEventListener('click', (e) => {
      e.stopPropagation();
      const lang = opt.getAttribute('data-lang');
      if (lang) {
        translatePage(lang);
        switcher.classList.remove('open');
      }
    });
  });

  // Close on outside click
  document.addEventListener('click', () => {
    switcher.classList.remove('open');
  });

  // Apply saved language on load
  const savedLang = getCurrentLang();
  translatePage(savedLang);
}

/* ============================================================
   DOM Ready
   ============================================================ */
document.addEventListener('DOMContentLoaded', async () => {
  // 1. Inject shared layout (header, footer, announcement, search)
  if (typeof injectAnnouncementBar === 'function') injectAnnouncementBar();
  if (typeof injectHeader === 'function') injectHeader();
  if (typeof injectFooter === 'function') injectFooter();
  if (typeof injectSearchModal === 'function') injectSearchModal();

  // 2. Initialize i18n and translate static content
  initLangSwitcher();

  // 3. Load data and render dynamic content
  if (typeof loadAllData === 'function') {
    await loadAllData();
    if (typeof renderProductContainers === 'function') renderProductContainers();
    if (typeof renderProductDetail === 'function') renderProductDetail();
  }

  // 4. Re-translate to cover dynamically rendered content
  if (typeof translatePage === 'function') translatePage(getCurrentLang());

  // 5. Initialize interactive components
  initAnnouncementMarquee();
  initMobileMenu();
  initSearchModal();
  initProductSliders();
  initTestimonialSliders();
  initAccordions();
  initBundleOptions();
  initProductGallery();
  initQuantitySelectors();
  initAddToCart();
});

/* ----- Announcement Marquee ----- */
function initAnnouncementMarquee() {
  const marquee = document.querySelector('.announcement-bar__marquee');
  if (!marquee) return;

  marquee.addEventListener('mouseenter', () => {
    marquee.style.animationPlayState = 'paused';
  });
  marquee.addEventListener('mouseleave', () => {
    marquee.style.animationPlayState = 'running';
  });
}

/* ----- Mobile Menu ----- */
function initMobileMenu() {
  const toggle = document.querySelector('.header__mobile-toggle');
  const nav = document.querySelector('.header__nav');

  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('active');
    toggle.setAttribute('aria-expanded', isOpen);
  });

  document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && !toggle.contains(e.target)) {
      nav.classList.remove('active');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
}

/* ----- Search Modal ----- */
function initSearchModal() {
  const searchBtn = document.querySelector('[data-action="search"]');
  const modal = document.querySelector('.search-modal');
  const input = modal?.querySelector('input');

  if (!searchBtn || !modal) return;

  searchBtn.addEventListener('click', () => {
    modal.classList.add('active');
    input?.focus();
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      modal.classList.remove('active');
    }
  });
}

/* ----- Product Sliders ----- */
function initProductSliders() {
  const sliders = document.querySelectorAll('.product-slider');

  sliders.forEach((slider) => {
    const track = slider.querySelector('.product-slider__track');
    const prevBtn = slider.querySelector('.product-slider__arrow--prev');
    const nextBtn = slider.querySelector('.product-slider__arrow--next');
    const dotsContainer = slider.querySelector('.product-slider__dots');
    const cards = track?.querySelectorAll('.product-card');

    if (!track || !cards || cards.length === 0) return;

    let currentIndex = 0;
    let cardsPerView = getCardsPerView();
    let totalPages = Math.ceil(cards.length / cardsPerView);

    function getCardsPerView() {
      const w = window.innerWidth;
      if (w <= 480) return 1;
      if (w <= 768) return 2;
      if (w <= 1024) return 3;
      return 4;
    }

    function getCardWidth() {
      const gap = parseInt(getComputedStyle(track).gap) || 20;
      const cardEl = track.querySelector('.product-card');
      const cardWidth = cardEl ? cardEl.offsetWidth : 0;
      return cardWidth + gap;
    }

    function updateSlider() {
      const cardWidth = getCardWidth();
      track.style.transform = `translateX(-${currentIndex * cardsPerView * cardWidth}px)`;

      if (dotsContainer) {
        const dots = dotsContainer.querySelectorAll('.product-slider__dot');
        dots.forEach((dot, i) => {
          dot.classList.toggle('active', i === currentIndex);
        });
      }

      if (prevBtn) prevBtn.disabled = currentIndex === 0;
      if (nextBtn) nextBtn.disabled = currentIndex >= totalPages - 1;
    }

    if (dotsContainer && totalPages > 1) {
      dotsContainer.innerHTML = '';
      for (let i = 0; i < totalPages; i++) {
        const dot = document.createElement('button');
        dot.className = `product-slider__dot${i === 0 ? ' active' : ''}`;
        dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
        dot.addEventListener('click', () => {
          currentIndex = i;
          updateSlider();
        });
        dotsContainer.appendChild(dot);
      }
    }

    prevBtn?.addEventListener('click', () => {
      if (currentIndex > 0) { currentIndex--; updateSlider(); }
    });

    nextBtn?.addEventListener('click', () => {
      if (currentIndex < totalPages - 1) { currentIndex++; updateSlider(); }
    });

    let resizeTimeout;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        cardsPerView = getCardsPerView();
        totalPages = Math.ceil(cards.length / cardsPerView);
        if (currentIndex >= totalPages) currentIndex = totalPages - 1;
        updateSlider();
        if (dotsContainer && totalPages > 1) {
          dotsContainer.innerHTML = '';
          for (let i = 0; i < totalPages; i++) {
            const dot = document.createElement('button');
            dot.className = `product-slider__dot${i === currentIndex ? ' active' : ''}`;
            dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
            dot.addEventListener('click', () => { currentIndex = i; updateSlider(); });
            dotsContainer.appendChild(dot);
          }
        }
      }, 200);
    });

    let touchStartX = 0;
    track.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    track.addEventListener('touchend', (e) => {
      const diff = touchStartX - e.changedTouches[0].screenX;
      if (Math.abs(diff) > 50) {
        if (diff > 0 && currentIndex < totalPages - 1) currentIndex++;
        else if (diff < 0 && currentIndex > 0) currentIndex--;
        updateSlider();
      }
    });

    updateSlider();
  });
}

/* ----- Testimonial Sliders ----- */
function initTestimonialSliders() {
  const sliders = document.querySelectorAll('.testimonials-slider');
  sliders.forEach((slider) => {
    const track = slider.querySelector('.testimonials-slider__track');
    const prevBtn = slider.querySelector('.product-slider__arrow--prev');
    const nextBtn = slider.querySelector('.product-slider__arrow--next');
    const dotsContainer = slider.querySelector('.product-slider__dots');
    const cards = track?.querySelectorAll('.testimonial-card');
    if (!track || !cards || cards.length === 0) return;

    let currentIndex = 0;
    let cardsPerView = window.innerWidth <= 768 ? 1 : window.innerWidth <= 1024 ? 2 : 3;
    let totalPages = Math.ceil(cards.length / cardsPerView);

    function updateSlider() {
      const cardEl = track.querySelector('.testimonial-card');
      const gap = parseInt(getComputedStyle(track).gap) || 20;
      const offset = currentIndex * cardsPerView * (cardEl ? cardEl.offsetWidth + gap : 0);
      track.style.transform = `translateX(-${offset}px)`;
      if (dotsContainer) {
        const dots = dotsContainer.querySelectorAll('.product-slider__dot');
        dots.forEach((dot, i) => dot.classList.toggle('active', i === currentIndex));
      }
      if (prevBtn) prevBtn.disabled = currentIndex === 0;
      if (nextBtn) nextBtn.disabled = currentIndex >= totalPages - 1;
    }

    if (dotsContainer && totalPages > 1) {
      dotsContainer.innerHTML = '';
      for (let i = 0; i < totalPages; i++) {
        const dot = document.createElement('button');
        dot.className = `product-slider__dot${i === 0 ? ' active' : ''}`;
        dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
        dot.addEventListener('click', () => { currentIndex = i; updateSlider(); });
        dotsContainer.appendChild(dot);
      }
    }
    prevBtn?.addEventListener('click', () => { if (currentIndex > 0) { currentIndex--; updateSlider(); } });
    nextBtn?.addEventListener('click', () => { if (currentIndex < totalPages - 1) { currentIndex++; updateSlider(); } });
    updateSlider();
  });
}

/* ----- Accordion ----- */
function initAccordions() {
  document.querySelectorAll('.accordion__header').forEach((header) => {
    header.addEventListener('click', () => {
      header.closest('.accordion__item')?.classList.toggle('active');
    });
  });
}

/* ----- Bundle Options ----- */
function initBundleOptions() {
  document.querySelectorAll('.bundle-option').forEach((option) => {
    option.addEventListener('click', function () {
      const parent = this.parentElement;
      parent.querySelectorAll('.bundle-option').forEach((o) => o.classList.remove('bundle-option--selected'));
      this.classList.add('bundle-option--selected');
    });
  });
}

/* ----- Product Gallery ----- */
function initProductGallery() {
  const thumbs = document.querySelectorAll('.product-gallery__thumb');
  const mainImg = document.querySelector('.product-gallery__main img');
  if (!thumbs.length || !mainImg) return;
  thumbs.forEach((thumb) => {
    thumb.addEventListener('click', () => {
      thumbs.forEach((t) => t.classList.remove('active'));
      thumb.classList.add('active');
      const thumbImg = thumb.querySelector('img');
      if (thumbImg) { mainImg.src = thumbImg.src; mainImg.alt = thumbImg.alt; }
    });
  });
}

/* ----- Quantity Selectors ----- */
function initQuantitySelectors() {
  document.querySelectorAll('.quantity-selector').forEach((selector) => {
    const input = selector.querySelector('input');
    const decrease = selector.querySelector('[data-action="decrease"]');
    const increase = selector.querySelector('[data-action="increase"]');
    if (!input) return;
    decrease?.addEventListener('click', () => { const val = parseInt(input.value) || 1; if (val > 1) input.value = val - 1; });
    increase?.addEventListener('click', () => { const val = parseInt(input.value) || 1; input.value = val + 1; });
  });
}

/* ----- Add to Cart ----- */
function initAddToCart() {
  const cartCount = document.querySelector('.header__cart-count');
  const addToCartBtns = document.querySelectorAll('[data-action="add-to-cart"]');

  addToCartBtns.forEach((btn) => {
    // Remove old handler by cloning
    const newBtn = btn.cloneNode(true);
    btn.parentNode.replaceChild(newBtn, btn);

    newBtn.addEventListener('click', () => {
      const currentCount = parseInt(cartCount?.textContent) || 0;
      if (cartCount) {
        cartCount.textContent = currentCount + 1;
        cartCount.style.display = 'flex';
      }

      const addedText = I18N[getCurrentLang()]?.['product.added'] || 'Added!';
      const originalText = newBtn.textContent;
      newBtn.textContent = addedText;
      newBtn.style.background = '#2e5a2d';
      setTimeout(() => {
        newBtn.textContent = originalText;
        newBtn.style.background = '';
      }, 1500);
    });
  });
}
