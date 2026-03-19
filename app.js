const STORAGE_KEY = 'webio-store-v1';

const currency = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });
const formatDate = (value) => new Intl.DateTimeFormat('pt-BR', { dateStyle: 'medium' }).format(new Date(value));
const slugify = (value) => value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-');
const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const uid = (prefix) => `${prefix}_${Math.random().toString(36).slice(2, 10)}`;

const logoPath = 'assets/logo-web-io.svg';

const seedCategories = [
  { id: 'cat-tech', name: 'Tecnologia', icon: '💻', description: 'Setup premium para produtividade, performance e creators.' },
  { id: 'cat-smart', name: 'Casa Inteligente', icon: '🏠', description: 'Automação, conectividade e segurança em um só lugar.' },
  { id: 'cat-gamer', name: 'Gamer', icon: '🎮', description: 'Periféricos, iluminação e acessórios de alta imersão.' },
  { id: 'cat-office', name: 'Home Office', icon: '🪑', description: 'Ergonomia, áudio e performance para trabalhar melhor.' },
  { id: 'cat-mobile', name: 'Mobile', icon: '📱', description: 'Acessórios móveis, energia e conectividade diária.' },
];

const seedProducts = [
  {
    id: 'prod-1',
    name: 'Notebook WEB IO Flux Pro 14"',
    categoryId: 'cat-tech',
    brand: 'WEB IO',
    price: 6499.9,
    promotionalPrice: 5899.9,
    stock: 12,
    sku: 'WEB-FLUX-14',
    shortDescription: 'Notebook ultrafino com IA embarcada e bateria de longa duração.',
    description: 'Tela 2.8K, 32GB RAM, SSD 1TB, acabamento premium em alumínio e performance ideal para quem cria, vende e escala operações digitais.',
    featured: true,
    bestSeller: true,
    availability: true,
    rating: 4.9,
    reviewsCount: 124,
    image: '💻',
    tags: ['IA', 'Creator', 'Lançamento'],
  },
  {
    id: 'prod-2',
    name: 'Headset WEB IO Pulse ANC',
    categoryId: 'cat-office',
    brand: 'WEB IO Audio',
    price: 899.9,
    promotionalPrice: 699.9,
    stock: 32,
    sku: 'WEB-PULSE-ANC',
    shortDescription: 'Headset com cancelamento de ruído híbrido e microfone cristalino.',
    description: 'Ideal para calls, vendas e concentração extrema. Leve, premium e com até 36 horas de bateria.',
    featured: true,
    bestSeller: false,
    availability: true,
    rating: 4.8,
    reviewsCount: 203,
    image: '🎧',
    tags: ['ANC', 'Home Office'],
  },
  {
    id: 'prod-3',
    name: 'Kit Casa Inteligente Orbit',
    categoryId: 'cat-smart',
    brand: 'Orbit by WEB IO',
    price: 1299.9,
    promotionalPrice: 1099.9,
    stock: 19,
    sku: 'ORB-HOME-KIT',
    shortDescription: 'Hub + lâmpadas + sensores para automação rápida e segura.',
    description: 'Configure cenários, automações e rotinas inteligentes com app centralizado e comandos de voz.',
    featured: false,
    bestSeller: true,
    availability: true,
    rating: 4.7,
    reviewsCount: 94,
    image: '💡',
    tags: ['Automação', 'Segurança'],
  },
  {
    id: 'prod-4',
    name: 'Mouse Gamer Neon Strike RGB',
    categoryId: 'cat-gamer',
    brand: 'WEB IO Play',
    price: 349.9,
    promotionalPrice: 279.9,
    stock: 7,
    sku: 'PLAY-MOUSE-RGB',
    shortDescription: 'Sensor de precisão com RGB configurável e switches rápidos.',
    description: 'Leve, ergonômico e com software para personalização completa de macros e iluminação.',
    featured: false,
    bestSeller: true,
    availability: true,
    rating: 4.6,
    reviewsCount: 58,
    image: '🖱️',
    tags: ['RGB', 'FPS'],
  },
  {
    id: 'prod-5',
    name: 'Power Bank Turbo 20.000mAh',
    categoryId: 'cat-mobile',
    brand: 'WEB IO Go',
    price: 429.9,
    promotionalPrice: 379.9,
    stock: 40,
    sku: 'GO-POWER-20K',
    shortDescription: 'Energia portátil com USB-C PD e carregamento simultâneo.',
    description: 'Ideal para creators e times externos, com carga rápida segura e excelente autonomia.',
    featured: true,
    bestSeller: false,
    availability: true,
    rating: 4.7,
    reviewsCount: 77,
    image: '🔋',
    tags: ['USB-C', 'Viagem'],
  },
  {
    id: 'prod-6',
    name: 'Monitor Curvo Vision Ultra 34"',
    categoryId: 'cat-office',
    brand: 'WEB IO Vision',
    price: 3399.9,
    promotionalPrice: 2999.9,
    stock: 8,
    sku: 'VISION-34-UW',
    shortDescription: 'Ultrawide curvo para multitarefa, dashboards e design.',
    description: 'Resolução WQHD, 144Hz, HDR e conectividade completa para uma estação de trabalho premium.',
    featured: true,
    bestSeller: true,
    availability: true,
    rating: 4.9,
    reviewsCount: 44,
    image: '🖥️',
    tags: ['Ultrawide', '144Hz'],
  },
  {
    id: 'prod-7',
    name: 'Teclado Mecânico Nova White',
    categoryId: 'cat-gamer',
    brand: 'WEB IO Play',
    price: 599.9,
    promotionalPrice: 499.9,
    stock: 24,
    sku: 'PLAY-NOVA-WHITE',
    shortDescription: 'Teclado 75% hot swap com iluminação dinâmica.',
    description: 'Construção em alumínio, keycaps premium e resposta precisa para trabalho e jogo.',
    featured: false,
    bestSeller: false,
    availability: true,
    rating: 4.5,
    reviewsCount: 31,
    image: '⌨️',
    tags: ['Mecânico', 'Wireless'],
  },
  {
    id: 'prod-8',
    name: 'Câmera Stream 4K Studio',
    categoryId: 'cat-tech',
    brand: 'WEB IO Creator',
    price: 1299.9,
    promotionalPrice: 1149.9,
    stock: 14,
    sku: 'CREATOR-CAM-4K',
    shortDescription: 'Webcam 4K com HDR e enquadramento automático.',
    description: 'Entregue reuniões, aulas e lives com imagem premium, foco rápido e excelente áudio integrado.',
    featured: true,
    bestSeller: false,
    availability: true,
    rating: 4.8,
    reviewsCount: 89,
    image: '📷',
    tags: ['4K', 'Streaming'],
  },
];

const defaultState = {
  theme: 'light',
  search: '',
  selectedCategory: 'all',
  sort: 'relevance',
  filters: { minPrice: '', maxPrice: '', availability: 'all' },
  cart: [],
  coupon: null,
  wishlist: [],
  users: [
    {
      id: 'usr-admin',
      name: 'Admin WEB IO',
      email: 'admin@webio.store',
      password: 'admin123',
      phone: '(11) 99999-0001',
      cpf: '111.222.333-44',
      role: 'admin',
      blocked: false,
      preferences: ['dark-mode', 'dashboard'],
      addresses: [
        { id: 'adr-admin', label: 'Matriz', recipient: 'Admin WEB IO', street: 'Av. Inovação', number: '500', district: 'Centro Tech', city: 'São Paulo', state: 'SP', zip: '04567-000', primary: true },
      ],
    },
    {
      id: 'usr-demo',
      name: 'Marina Lopes',
      email: 'cliente@webio.store',
      password: 'cliente123',
      phone: '(21) 98888-4455',
      cpf: '987.654.321-00',
      role: 'customer',
      blocked: false,
      preferences: ['mobile'],
      addresses: [
        { id: 'adr-demo', label: 'Casa', recipient: 'Marina Lopes', street: 'Rua das Compras', number: '210', district: 'Jardins', city: 'Rio de Janeiro', state: 'RJ', zip: '22041-100', primary: true },
        { id: 'adr-demo-2', label: 'Trabalho', recipient: 'Marina Lopes', street: 'Av. Digital', number: '1550', district: 'Centro', city: 'Rio de Janeiro', state: 'RJ', zip: '20040-040', primary: false },
      ],
    },
  ],
  currentUserId: 'usr-demo',
  categories: seedCategories,
  products: seedProducts,
  coupons: [
    { code: 'WEBIO10', type: 'percentage', value: 10, active: true, minimum: 500 },
    { code: 'FRETEGRATIS', type: 'shipping', value: 1, active: true, minimum: 1200 },
  ],
  orders: [
    {
      id: 'ORD-2026-001',
      userId: 'usr-demo',
      createdAt: '2026-03-14T14:15:00.000Z',
      status: 'approved',
      paymentStatus: 'approved',
      paymentMethod: 'pix',
      shippingStatus: 'posted',
      trackingCode: 'BR123456789WEB',
      addressId: 'adr-demo',
      couponCode: 'WEBIO10',
      subtotal: 9699.8,
      shipping: 0,
      discount: 969.98,
      total: 8729.82,
      items: [
        { productId: 'prod-1', quantity: 1, unitPrice: 5899.9 },
        { productId: 'prod-6', quantity: 1, unitPrice: 2999.9 },
        { productId: 'prod-2', quantity: 1, unitPrice: 699.9 },
      ],
      history: [
        { at: '2026-03-14T14:15:00.000Z', label: 'Pedido criado', by: 'checkout' },
        { at: '2026-03-14T14:17:00.000Z', label: 'Pagamento PIX aprovado', by: 'gateway.mock' },
        { at: '2026-03-15T08:30:00.000Z', label: 'Pedido enviado com código de rastreio', by: 'admin' },
      ],
    },
    {
      id: 'ORD-2026-002',
      userId: 'usr-demo',
      createdAt: '2026-03-18T17:40:00.000Z',
      status: 'pending',
      paymentStatus: 'pending',
      paymentMethod: 'boleto',
      shippingStatus: 'waiting_payment',
      trackingCode: '',
      addressId: 'adr-demo-2',
      couponCode: null,
      subtotal: 1099.9,
      shipping: 29.9,
      discount: 0,
      total: 1129.8,
      items: [
        { productId: 'prod-3', quantity: 1, unitPrice: 1099.9 },
      ],
      history: [
        { at: '2026-03-18T17:40:00.000Z', label: 'Pedido aguardando pagamento do boleto', by: 'checkout' },
      ],
    },
  ],
  adminLogs: [
    { id: uid('log'), at: '2026-03-18T10:00:00.000Z', actor: 'Admin WEB IO', action: 'Atualizou estoque do Vision Ultra 34".' },
    { id: uid('log'), at: '2026-03-18T16:20:00.000Z', actor: 'Admin WEB IO', action: 'Marcado ORD-2026-001 como enviado.' },
  ],
  reviews: [
    { id: uid('rev'), productId: 'prod-1', author: 'Carlos M.', rating: 5, text: 'Notebook rápido, silencioso e muito premium.', createdAt: '2026-03-16T12:00:00.000Z' },
    { id: uid('rev'), productId: 'prod-1', author: 'Renata F.', rating: 4, text: 'Bateria excelente e tela impecável para design.', createdAt: '2026-03-17T08:00:00.000Z' },
    { id: uid('rev'), productId: 'prod-6', author: 'João P.', rating: 5, text: 'A produtividade dobrou com esse monitor ultrawide.', createdAt: '2026-03-14T09:00:00.000Z' },
  ],
  checkout: {
    step: 1,
    address: {},
    payment: { method: 'pix', card: { installments: 1 } },
    shippingOption: 'express',
    shippingQuote: 39.9,
  },
};

const state = loadState();
const app = document.querySelector('#app');

function loadState() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) return structuredClone(defaultState);
  try {
    return { ...structuredClone(defaultState), ...JSON.parse(saved) };
  } catch {
    return structuredClone(defaultState);
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function getCurrentUser() {
  return state.users.find((user) => user.id === state.currentUserId) || null;
}

function isAdmin() {
  return getCurrentUser()?.role === 'admin';
}

function getCategoryById(id) {
  return state.categories.find((category) => category.id === id);
}

function getProductById(id) {
  return state.products.find((product) => product.id === id);
}

function getPrice(product) {
  return product.promotionalPrice || product.price;
}

function formatMoney(value) {
  return currency.format(Number(value || 0));
}

function getCartDetailed() {
  return state.cart.map((item) => ({ ...item, product: getProductById(item.productId) })).filter((item) => item.product);
}

function getCartSubtotal() {
  return getCartDetailed().reduce((sum, item) => sum + getPrice(item.product) * item.quantity, 0);
}

function calculateDiscount(subtotal, couponCode = state.coupon) {
  if (!couponCode) return 0;
  const coupon = state.coupons.find((item) => item.code === couponCode && item.active);
  if (!coupon || subtotal < coupon.minimum) return 0;
  if (coupon.type === 'percentage') return subtotal * (coupon.value / 100);
  return 0;
}

function calculateShipping(subtotal = getCartSubtotal()) {
  if (subtotal >= 1500) return 0;
  if (state.checkout.shippingOption === 'pickup') return 0;
  return state.checkout.shippingOption === 'express' ? 39.9 : 19.9;
}

function calculateCartSummary() {
  const subtotal = getCartSubtotal();
  const discount = calculateDiscount(subtotal);
  const shippingCoupon = state.coupons.find((item) => item.code === state.coupon && item.type === 'shipping' && item.active && subtotal >= item.minimum);
  const shipping = shippingCoupon ? 0 : calculateShipping(subtotal);
  return { subtotal, discount, shipping, total: subtotal - discount + shipping };
}

function countCartItems() {
  return state.cart.reduce((sum, item) => sum + item.quantity, 0);
}

function showToast(message, type = 'info') {
  const wrap = document.querySelector('.toast-wrap') || createToastWrap();
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.textContent = message;
  wrap.appendChild(toast);
  setTimeout(() => toast.remove(), 3400);
}

function createToastWrap() {
  const wrap = document.createElement('div');
  wrap.className = 'toast-wrap';
  document.body.appendChild(wrap);
  return wrap;
}

function navigate(hash) {
  window.location.hash = hash;
}

function normalizeRoute() {
  if (!window.location.hash) navigate('#/');
}

function getRoute() {
  normalizeRoute();
  return window.location.hash.replace('#', '') || '/';
}

function addToCart(productId, quantity = 1) {
  const existing = state.cart.find((item) => item.productId === productId);
  if (existing) {
    existing.quantity += quantity;
  } else {
    state.cart.push({ productId, quantity });
  }
  saveState();
  render();
  showToast('Produto adicionado ao carrinho.', 'success');
}

function removeFromCart(productId) {
  state.cart = state.cart.filter((item) => item.productId !== productId);
  saveState();
  render();
}

function updateCartQuantity(productId, delta) {
  const item = state.cart.find((entry) => entry.productId === productId);
  if (!item) return;
  item.quantity = Math.max(1, item.quantity + delta);
  saveState();
  render();
}

function toggleWishlist(productId) {
  if (state.wishlist.includes(productId)) {
    state.wishlist = state.wishlist.filter((id) => id !== productId);
    showToast('Removido dos favoritos.', 'info');
  } else {
    state.wishlist.push(productId);
    showToast('Adicionado aos favoritos.', 'success');
  }
  saveState();
  render();
}

function login(email, password) {
  const user = state.users.find((item) => item.email === email && item.password === password);
  if (!user) {
    showToast('E-mail ou senha inválidos.', 'error');
    return false;
  }
  if (user.blocked) {
    showToast('Usuário bloqueado. Contate o administrador.', 'error');
    return false;
  }
  state.currentUserId = user.id;
  saveState();
  showToast(`Bem-vindo, ${user.name.split(' ')[0]}!`, 'success');
  navigate('#/minha-conta');
  return true;
}

function registerUser(payload) {
  const exists = state.users.some((user) => user.email === payload.email);
  if (exists) {
    showToast('Já existe uma conta com este e-mail.', 'error');
    return false;
  }
  const user = {
    id: uid('usr'),
    role: 'customer',
    blocked: false,
    preferences: [],
    addresses: payload.address ? [{ ...payload.address, id: uid('adr'), primary: true, label: 'Principal', recipient: payload.name }] : [],
    ...payload,
  };
  state.users.push(user);
  state.currentUserId = user.id;
  saveState();
  showToast('Cadastro criado com sucesso.', 'success');
  navigate('#/minha-conta');
  return true;
}

function logout() {
  state.currentUserId = null;
  saveState();
  render();
  showToast('Sessão encerrada.', 'info');
  navigate('#/login');
}

function mockPaymentStatus(method, cardNumber = '') {
  if (method === 'pix') return 'approved';
  if (method === 'boleto') return 'pending';
  return cardNumber.replace(/\D/g, '').endsWith('0') ? 'refused' : 'approved';
}

function placeOrder(formData) {
  const user = getCurrentUser();
  if (!user) {
    showToast('Faça login para concluir a compra.', 'error');
    navigate('#/login');
    return;
  }
  const cartItems = getCartDetailed();
  if (!cartItems.length) {
    showToast('Seu carrinho está vazio.', 'error');
    return;
  }

  const summary = calculateCartSummary();
  const paymentStatus = mockPaymentStatus(formData.paymentMethod, formData.cardNumber || '');
  const orderStatus = paymentStatus === 'approved' ? 'approved' : paymentStatus === 'pending' ? 'pending' : 'cancelled';
  const newAddress = {
    id: uid('adr'),
    label: formData.addressLabel || 'Entrega',
    recipient: formData.name,
    street: formData.street,
    number: formData.number,
    district: formData.district,
    city: formData.city,
    state: formData.state,
    zip: formData.zip,
    primary: !user.addresses.length,
  };

  if (formData.saveAddress) user.addresses.push(newAddress);

  const order = {
    id: `ORD-${new Date().getFullYear()}-${String(state.orders.length + 1).padStart(3, '0')}`,
    userId: user.id,
    createdAt: new Date().toISOString(),
    status: orderStatus,
    paymentStatus,
    paymentMethod: formData.paymentMethod,
    shippingStatus: paymentStatus === 'approved' ? 'processing' : 'waiting_payment',
    trackingCode: '',
    addressId: formData.saveAddress ? newAddress.id : user.addresses.find((address) => address.primary)?.id || newAddress.id,
    couponCode: state.coupon,
    subtotal: summary.subtotal,
    shipping: summary.shipping,
    discount: summary.discount,
    total: summary.total,
    pixCode: formData.paymentMethod === 'pix' ? `00020126WEBIO${Date.now()}5204000053039865802BR5924WEB IO STORE6009SAO PAULO62070503***6304ABCD` : '',
    boletoLine: formData.paymentMethod === 'boleto' ? '34191.79001 01043.510047 91020.150008 3 98760000112980' : '',
    items: cartItems.map((item) => ({ productId: item.productId, quantity: item.quantity, unitPrice: getPrice(item.product) })),
    history: [
      { at: new Date().toISOString(), label: 'Pedido criado no checkout inteligente.', by: 'checkout' },
      { at: new Date().toISOString(), label: `Pagamento ${formData.paymentMethod.toUpperCase()} com status ${paymentStatus}.`, by: 'gateway.mock' },
    ],
  };

  if (paymentStatus === 'approved') {
    order.items.forEach((item) => {
      const product = getProductById(item.productId);
      if (product) product.stock = Math.max(0, product.stock - item.quantity);
    });
  }

  state.orders.unshift(order);
  state.adminLogs.unshift({ id: uid('log'), at: new Date().toISOString(), actor: user.name, action: `Criou o pedido ${order.id} via checkout (${formData.paymentMethod}).` });
  state.cart = [];
  state.coupon = null;
  saveState();
  navigate(paymentStatus === 'approved' || paymentStatus === 'pending' ? `#/pedido-sucesso/${order.id}` : `#/pedido-falha/${order.id}`);
  showToast('Pedido registrado com sucesso.', paymentStatus === 'approved' ? 'success' : 'info');
}

function updateOrderStatus(orderId, status) {
  const order = state.orders.find((item) => item.id === orderId);
  if (!order) return;
  order.status = status;
  order.history.unshift({ at: new Date().toISOString(), label: `Status atualizado para ${status}.`, by: 'admin' });
  state.adminLogs.unshift({ id: uid('log'), at: new Date().toISOString(), actor: getCurrentUser()?.name || 'Admin', action: `Atualizou ${orderId} para ${status}.` });
  saveState();
  render();
  showToast(`Pedido ${orderId} atualizado.`, 'success');
}

function applyCoupon(code) {
  const coupon = state.coupons.find((item) => item.code.toUpperCase() === code.toUpperCase() && item.active);
  if (!coupon) {
    showToast('Cupom inválido ou inativo.', 'error');
    return;
  }
  state.coupon = coupon.code;
  saveState();
  render();
  showToast(`Cupom ${coupon.code} aplicado.`, 'success');
}

function saveProduct(payload) {
  if (payload.id) {
    const product = getProductById(payload.id);
    Object.assign(product, payload, { price: Number(payload.price), promotionalPrice: Number(payload.promotionalPrice), stock: Number(payload.stock), featured: Boolean(payload.featured), bestSeller: Boolean(payload.bestSeller), availability: Boolean(payload.availability) });
    state.adminLogs.unshift({ id: uid('log'), at: new Date().toISOString(), actor: getCurrentUser()?.name || 'Admin', action: `Editou o produto ${payload.name}.` });
    showToast('Produto atualizado com sucesso.', 'success');
  } else {
    state.products.unshift({ ...payload, id: uid('prod'), rating: 4.7, reviewsCount: rand(10, 120), image: payload.image || '🛍️', price: Number(payload.price), promotionalPrice: Number(payload.promotionalPrice), stock: Number(payload.stock), featured: Boolean(payload.featured), bestSeller: Boolean(payload.bestSeller), availability: Boolean(payload.availability), tags: payload.tags.split(',').map((item) => item.trim()).filter(Boolean) });
    state.adminLogs.unshift({ id: uid('log'), at: new Date().toISOString(), actor: getCurrentUser()?.name || 'Admin', action: `Criou o produto ${payload.name}.` });
    showToast('Novo produto cadastrado.', 'success');
  }
  saveState();
  render();
  navigate('#/admin/produtos');
}

function saveCategory(payload) {
  state.categories.unshift({ id: uid('cat'), ...payload });
  state.adminLogs.unshift({ id: uid('log'), at: new Date().toISOString(), actor: getCurrentUser()?.name || 'Admin', action: `Criou a categoria ${payload.name}.` });
  saveState();
  render();
  showToast('Categoria criada.', 'success');
}

function exportOrdersCsv() {
  const lines = [
    ['pedido', 'cliente', 'status', 'pagamento', 'total', 'data'].join(','),
    ...state.orders.map((order) => [order.id, getUserById(order.userId)?.name || 'n/a', order.status, order.paymentMethod, order.total, order.createdAt].join(',')),
  ];
  const blob = new Blob([lines.join('\n')], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'webio-vendas.csv';
  link.click();
  URL.revokeObjectURL(url);
  showToast('CSV exportado com sucesso.', 'success');
}

function getUserById(id) {
  return state.users.find((user) => user.id === id);
}

function getOrdersByUser(userId) {
  return state.orders.filter((order) => order.userId === userId);
}

function getSalesMetrics() {
  const approvedOrders = state.orders.filter((order) => order.paymentStatus === 'approved');
  const revenue = approvedOrders.reduce((sum, order) => sum + order.total, 0);
  const today = new Date().toISOString().slice(0, 10);
  const todayOrders = state.orders.filter((order) => order.createdAt.slice(0, 10) === today).length;
  return {
    revenue,
    approvedOrders: approvedOrders.length,
    todayOrders,
    customers: state.users.filter((user) => user.role === 'customer').length,
    avgTicket: approvedOrders.length ? revenue / approvedOrders.length : 0,
  };
}

function getTopProducts(limit = 4) {
  const countMap = {};
  state.orders.forEach((order) => {
    if (order.paymentStatus !== 'approved') return;
    order.items.forEach((item) => {
      countMap[item.productId] = (countMap[item.productId] || 0) + item.quantity;
    });
  });
  return Object.entries(countMap)
    .sort((a, b) => b[1] - a[1])
    .slice(0, limit)
    .map(([productId, quantity]) => ({ product: getProductById(productId), quantity }))
    .filter((item) => item.product);
}

function getMonthlySales() {
  const map = { Jan: 12000, Fev: 18500, Mar: 24300, Abr: 21100, Mai: 27600, Jun: 32500 };
  return Object.entries(map);
}

function filterProducts() {
  const term = state.search.trim().toLowerCase();
  const { minPrice, maxPrice, availability } = state.filters;
  let products = [...state.products];
  if (state.selectedCategory !== 'all') products = products.filter((product) => product.categoryId === state.selectedCategory);
  if (term) products = products.filter((product) => [product.name, product.brand, product.description, getCategoryById(product.categoryId)?.name].join(' ').toLowerCase().includes(term));
  if (minPrice) products = products.filter((product) => getPrice(product) >= Number(minPrice));
  if (maxPrice) products = products.filter((product) => getPrice(product) <= Number(maxPrice));
  if (availability === 'in-stock') products = products.filter((product) => product.stock > 0);
  if (availability === 'featured') products = products.filter((product) => product.featured);
  const sorters = {
    relevance: (a, b) => Number(b.featured) - Number(a.featured) || b.rating - a.rating,
    lowest: (a, b) => getPrice(a) - getPrice(b),
    highest: (a, b) => getPrice(b) - getPrice(a),
    bestsellers: (a, b) => Number(b.bestSeller) - Number(a.bestSeller) || b.reviewsCount - a.reviewsCount,
  };
  products.sort(sorters[state.sort]);
  return products;
}

function statusClass(status) {
  if (['approved', 'posted', 'delivered'].includes(status)) return 'status-approved';
  if (['pending', 'processing', 'waiting_payment'].includes(status)) return 'status-pending';
  return 'status-cancelled';
}

function headerTemplate() {
  const user = getCurrentUser();
  return `
    <header class="topbar">
      <div class="container">
        <div class="topbar-row">
          <a class="brand" href="#/">
            <img src="${logoPath}" alt="WEB IO logo" />
            <div>
              <small>Store demo premium</small>
              <strong>Experiência inspirada em grandes marketplaces</strong>
            </div>
          </a>
          <button class="delivery-pill">📍 Entrega rápida para CEP 04567-000</button>
          <form class="search-wrap" id="global-search-form">
            <select name="category">
              <option value="all">Todas as categorias</option>
              ${state.categories.map((category) => `<option value="${category.id}" ${state.selectedCategory === category.id ? 'selected' : ''}>${category.name}</option>`).join('')}
            </select>
            <input type="search" name="term" placeholder="Busque por produto, categoria, marca ou benefício" value="${state.search}" />
            <button type="submit">🔎</button>
          </form>
          <button class="theme-toggle" data-action="toggle-theme">${state.theme === 'dark' ? '🌙 Dark' : '☀️ Light'}</button>
          <a class="account-pill" href="${user ? '#/minha-conta' : '#/login'}">👤 ${user ? user.name.split(' ')[0] : 'Entrar'}</a>
          <a class="cart-pill" href="#/carrinho">🛒 Carrinho (${countCartItems()})</a>
        </div>
        <div class="utility-row">
          <div class="nav-links">
            <a class="nav-chip" href="#/produtos">Loja completa</a>
            <a class="nav-chip" href="#/favoritos">Favoritos</a>
            <a class="nav-chip" href="#/checkout">Checkout inteligente</a>
            <a class="nav-chip" href="#/meus-pedidos">Meus pedidos</a>
            ${isAdmin() ? '<a class="nav-chip" href="#/admin">Painel admin</a>' : ''}
          </div>
          <span>Pagamento: PIX, boleto, cartão • Frete mock por CEP • Supabase-ready</span>
        </div>
      </div>
    </header>
    <div class="category-strip">
      <div class="container category-row">
        <div class="category-nav">
          <a class="category-link ${state.selectedCategory === 'all' ? 'active' : ''}" href="#/produtos" data-category="all">Tudo</a>
          ${state.categories.map((category) => `<a class="category-link ${state.selectedCategory === category.id ? 'active' : ''}" href="#/categoria/${slugify(category.name)}" data-category="${category.id}">${category.icon} ${category.name}</a>`).join('')}
        </div>
        <strong>Ofertas do dia • Prime WEB IO • Atendimento consultivo</strong>
      </div>
    </div>
  `;
}

function footerTemplate() {
  return `
    <footer class="footer">
      <div class="container footer-grid">
        <div>
          <img src="${logoPath}" alt="WEB IO" style="width: 170px; margin-bottom: 14px;" />
          <p>E-commerce demo full stack preparado para evoluir com Supabase, integrações reais e operações omnichannel.</p>
        </div>
        <div>
          <h4>Loja</h4>
          <ul>
            <li><a href="#/produtos">Catálogo</a></li>
            <li><a href="#/checkout">Checkout</a></li>
            <li><a href="#/favoritos">Wishlist</a></li>
          </ul>
        </div>
        <div>
          <h4>Conta</h4>
          <ul>
            <li><a href="#/login">Login</a></li>
            <li><a href="#/cadastro">Cadastro</a></li>
            <li><a href="#/meus-pedidos">Pedidos</a></li>
          </ul>
        </div>
        <div>
          <h4>Operação</h4>
          <ul>
            <li><a href="#/admin">Painel admin</a></li>
            <li><a href="#/admin/vendas">Relatórios</a></li>
            <li><a href="#/admin/configuracoes">Configurações</a></li>
          </ul>
        </div>
      </div>
    </footer>
  `;
}

function homeTemplate() {
  const featured = state.products.filter((product) => product.featured).slice(0, 4);
  const bestsellers = state.products.filter((product) => product.bestSeller).slice(0, 4);
  const recommended = filterProducts().slice(0, 4);
  return `
    <section class="hero">
      <div class="hero-card">
        <span class="hero-eyebrow">⚡ WEB IO Prime Experience</span>
        <h1>Venda mais com uma vitrine moderna, checkout inteligente e operação pronta para crescer.</h1>
        <p>Inspirado na eficiência de grandes marketplaces, mas com identidade WEB IO marcante em azul ciano, azul escuro, roxo e laranja.</p>
        <div class="hero-actions">
          <a class="btn btn-primary" href="#/produtos">Explorar catálogo</a>
          <a class="btn btn-secondary" href="#/admin">Ver backoffice</a>
        </div>
        <div class="metric-grid">
          <div class="metric-card"><span>Conversão</span><strong>+28%</strong><p class="muted">Fluxo objetivo e responsivo.</p></div>
          <div class="metric-card"><span>Pagamento</span><strong>PIX/Cartão</strong><p class="muted">Arquitetura desacoplada e mockada.</p></div>
          <div class="metric-card"><span>Operação</span><strong>Backoffice</strong><p class="muted">Pedidos, produtos e clientes em um só painel.</p></div>
        </div>
      </div>
      <div class="hero-card">
        <span class="section-eyebrow">🔥 Ofertas WEB IO</span>
        <div class="list-stack">
          ${featured.slice(0, 3).map((product) => `
            <a class="list-item" href="#/produto/${product.id}">
              <div class="badge-row"><span class="badge featured">Destaque</span><span class="badge sale">-${Math.round((1 - getPrice(product) / product.price) * 100)}%</span></div>
              <strong>${product.name}</strong>
              <span class="muted">${product.shortDescription}</span>
              <div class="price-wrap"><span class="price">${formatMoney(getPrice(product))}</span><span class="old-price">${formatMoney(product.price)}</span></div>
            </a>
          `).join('')}
        </div>
      </div>
    </section>

    <section>
      <div class="section-head">
        <div>
          <span class="section-eyebrow">🧭 Navegue por objetivos</span>
          <h2>Categorias pensadas para compra rápida</h2>
        </div>
      </div>
      <div class="highlight-grid">
        ${state.categories.map((category) => `
          <a class="info-card" href="#/categoria/${slugify(category.name)}" data-category="${category.id}">
            <div class="badge-row"><span class="badge">${category.icon} ${category.name}</span></div>
            <strong>${category.description}</strong>
            <p class="muted">Produtos com curadoria para performance, mobilidade e experiência premium.</p>
          </a>
        `).join('')}
      </div>
    </section>

    ${renderProductSection('Ofertas do dia', 'Seleção com maior impacto em conversão', featured)}
    ${renderProductSection('Mais vendidos', 'Itens com melhor performance comercial', bestsellers)}
    ${renderProductSection('Recomendados para você', 'Sugestões baseadas em comportamento e destaque', recommended)}
  `;
}

function renderProductCard(product) {
  const category = getCategoryById(product.categoryId);
  const inWishlist = state.wishlist.includes(product.id);
  return `
    <article class="product-card">
      <a class="product-image" href="#/produto/${product.id}"><span>${product.image}</span></a>
      <div class="product-badges">
        ${product.featured ? '<span class="badge featured">Destaque</span>' : ''}
        ${product.bestSeller ? '<span class="badge sale">Mais vendido</span>' : ''}
        ${product.stock <= 10 ? '<span class="badge low-stock">Últimas unidades</span>' : ''}
      </div>
      <div>
        <div class="product-meta">${category?.name || 'Categoria'} • ${product.brand}</div>
        <a href="#/produto/${product.id}"><strong>${product.name}</strong></a>
        <p class="muted">${product.shortDescription}</p>
      </div>
      <div class="rating">★ ${product.rating.toFixed(1)} • ${product.reviewsCount} avaliações</div>
      <div class="price-wrap">
        <span class="price">${formatMoney(getPrice(product))}</span>
        ${product.promotionalPrice ? `<span class="old-price">${formatMoney(product.price)}</span>` : ''}
      </div>
      <div class="product-actions">
        <button class="btn btn-primary" data-action="add-to-cart" data-product-id="${product.id}">Comprar</button>
        <button class="btn btn-secondary" data-action="toggle-wishlist" data-product-id="${product.id}">${inWishlist ? '💜 Favoritado' : '🤍 Favoritar'}</button>
      </div>
    </article>
  `;
}

function renderProductSection(title, subtitle, products) {
  if (!products.length) return '';
  return `
    <section>
      <div class="section-head">
        <div>
          <span class="section-eyebrow">✨ WEB IO Store</span>
          <h2>${title}</h2>
          <p class="muted">${subtitle}</p>
        </div>
        <a class="btn btn-ghost" href="#/produtos">Ver catálogo completo</a>
      </div>
      <div class="product-grid">${products.map(renderProductCard).join('')}</div>
    </section>
  `;
}

function catalogTemplate(title = 'Todos os produtos', description = 'Explore o catálogo WEB IO com filtros inteligentes.', products = filterProducts()) {
  return `
    <div class="page-header">
      <div>
        <span class="section-eyebrow">🛍️ Catálogo WEB IO</span>
        <h1>${title}</h1>
        <p class="muted">${description}</p>
      </div>
      <div class="inline-actions">
        <button class="btn btn-secondary" data-action="clear-filters">Limpar filtros</button>
      </div>
    </div>
    <section class="catalog-layout">
      <aside class="filter-panel panel">
        <div class="filters-group">
          <h3>Filtros</h3>
          <label class="field">
            <span>Faixa inicial</span>
            <input name="minPrice" type="number" value="${state.filters.minPrice}" placeholder="R$ 0" />
          </label>
          <label class="field">
            <span>Faixa final</span>
            <input name="maxPrice" type="number" value="${state.filters.maxPrice}" placeholder="R$ 10.000" />
          </label>
          <label class="field">
            <span>Disponibilidade</span>
            <select name="availability">
              <option value="all" ${state.filters.availability === 'all' ? 'selected' : ''}>Todos</option>
              <option value="in-stock" ${state.filters.availability === 'in-stock' ? 'selected' : ''}>Em estoque</option>
              <option value="featured" ${state.filters.availability === 'featured' ? 'selected' : ''}>Somente destaques</option>
            </select>
          </label>
        </div>
      </aside>
      <div>
        <div class="toolbar">
          <div class="inline-actions">
            <span class="filter-chip">${products.length} produtos encontrados</span>
            ${state.coupon ? `<span class="filter-chip">Cupom ativo: ${state.coupon}</span>` : ''}
          </div>
          <label class="field" style="max-width:260px;">
            <select name="sort">
              <option value="relevance" ${state.sort === 'relevance' ? 'selected' : ''}>Ordenar por relevância</option>
              <option value="lowest" ${state.sort === 'lowest' ? 'selected' : ''}>Menor preço</option>
              <option value="highest" ${state.sort === 'highest' ? 'selected' : ''}>Maior preço</option>
              <option value="bestsellers" ${state.sort === 'bestsellers' ? 'selected' : ''}>Mais vendidos</option>
            </select>
          </label>
        </div>
        ${products.length ? `<div class="product-grid">${products.map(renderProductCard).join('')}</div>` : `<div class="empty-state center" style="padding:32px;"><h3>Nenhum produto encontrado</h3><p class="muted">Ajuste seus filtros ou tente outra busca.</p></div>`}
      </div>
    </section>
  `;
}

function productTemplate(productId) {
  const product = getProductById(productId);
  if (!product) return errorState('Produto não encontrado', 'O item solicitado não existe ou foi removido.');
  const related = state.products.filter((item) => item.categoryId === product.categoryId && item.id !== product.id).slice(0, 4);
  const reviews = state.reviews.filter((review) => review.productId === product.id);
  return `
    <div class="page-header">
      <div>
        <span class="section-eyebrow">📦 Produto WEB IO</span>
        <h1>${product.name}</h1>
        <p class="muted">${product.shortDescription}</p>
      </div>
      <div class="inline-actions">
        <span class="status-pill ${product.stock > 0 ? 'status-approved' : 'status-cancelled'}">${product.stock > 0 ? 'Em estoque' : 'Indisponível'}</span>
      </div>
    </div>
    <section class="product-layout">
      <article class="panel" style="padding:24px;">
        <div class="product-image" style="aspect-ratio: 4 / 3; margin-bottom:18px;"><span style="font-size:5rem;">${product.image}</span></div>
        <div class="badge-row" style="margin-bottom:14px;">
          ${product.tags.map((tag) => `<span class="tag">${tag}</span>`).join('')}
          <span class="tag">SKU ${product.sku}</span>
        </div>
        <p>${product.description}</p>
        <div class="info-grid" style="grid-template-columns: repeat(3, 1fr); margin-top:18px;">
          <div class="info-card"><strong>Categoria</strong><p class="muted">${getCategoryById(product.categoryId)?.name}</p></div>
          <div class="info-card"><strong>Marca</strong><p class="muted">${product.brand}</p></div>
          <div class="info-card"><strong>Avaliação</strong><p class="muted">★ ${product.rating.toFixed(1)} em ${product.reviewsCount} reviews</p></div>
        </div>
        <div class="divider"></div>
        <h3>Avaliações</h3>
        <div class="list-stack">
          ${reviews.length ? reviews.map((review) => `<div class="review-card"><strong>${review.author}</strong><span class="rating">${'★'.repeat(review.rating)}</span><p class="muted">${review.text}</p><small>${formatDate(review.createdAt)}</small></div>`).join('') : '<div class="empty-state" style="padding:18px;">Ainda sem avaliações.</div>'}
        </div>
      </article>
      <aside class="summary-card panel">
        <div class="price-wrap"><span class="price">${formatMoney(getPrice(product))}</span>${product.promotionalPrice ? `<span class="old-price">${formatMoney(product.price)}</span>` : ''}</div>
        <p class="rating">★ ${product.rating.toFixed(1)} • ${product.reviewsCount} reviews</p>
        <p class="muted">Frete calculado por CEP mock. Compra rápida disponível para usuários logados.</p>
        <div class="form-actions">
          <button class="btn btn-primary btn-block" data-action="add-to-cart" data-product-id="${product.id}">Adicionar ao carrinho</button>
          <button class="btn btn-secondary btn-block" data-action="buy-now" data-product-id="${product.id}">Comprar agora</button>
          <button class="btn btn-ghost btn-block" data-action="toggle-wishlist" data-product-id="${product.id}">${state.wishlist.includes(product.id) ? 'Remover dos favoritos' : 'Salvar nos favoritos'}</button>
        </div>
        <div class="divider"></div>
        <div class="summary-row"><span>Estoque atual</span><strong>${product.stock} unidades</strong></div>
        <div class="summary-row"><span>Entrega expressa</span><strong>${formatMoney(39.9)}</strong></div>
        <div class="summary-row"><span>Parcelamento</span><strong>até 10x sem juros</strong></div>
      </aside>
    </section>
    ${renderProductSection('Produtos relacionados', 'Mais itens da mesma categoria para aumentar o ticket', related)}
  `;
}

function cartTemplate() {
  const items = getCartDetailed();
  const summary = calculateCartSummary();
  return `
    <div class="page-header">
      <div>
        <span class="section-eyebrow">🛒 Carrinho persistente</span>
        <h1>Seu carrinho</h1>
        <p class="muted">Itens salvos por usuário, subtotal, frete e cupom com atualização em tempo real.</p>
      </div>
    </div>
    <section class="cart-layout">
      <div class="list-stack">
        ${items.length ? items.map((item) => `
          <article class="cart-item">
            <div class="cart-thumb">${item.product.image}</div>
            <div>
              <strong>${item.product.name}</strong>
              <p class="muted">${item.product.shortDescription}</p>
              <div class="price-wrap"><span class="price">${formatMoney(getPrice(item.product))}</span></div>
            </div>
            <div class="list-stack">
              <div class="quantity-controls">
                <button data-action="qty-minus" data-product-id="${item.product.id}">−</button>
                <button>${item.quantity}</button>
                <button data-action="qty-plus" data-product-id="${item.product.id}">+</button>
              </div>
              <button class="btn btn-danger" data-action="remove-cart-item" data-product-id="${item.product.id}">Remover</button>
            </div>
          </article>
        `).join('') : `<div class="empty-state center" style="padding:32px;"><h3>Carrinho vazio</h3><p class="muted">Adicione produtos e volte para viver o checkout WEB IO.</p><a class="btn btn-primary" href="#/produtos">Ir às compras</a></div>`}
      </div>
      <aside class="checkout-summary panel">
        <h3>Resumo do pedido</h3>
        <div class="divider"></div>
        <div class="summary-row"><span>Subtotal</span><strong>${formatMoney(summary.subtotal)}</strong></div>
        <div class="summary-row"><span>Desconto</span><strong>- ${formatMoney(summary.discount)}</strong></div>
        <div class="summary-row"><span>Frete</span><strong>${summary.shipping ? formatMoney(summary.shipping) : 'Grátis'}</strong></div>
        <div class="summary-row total"><span>Total</span><strong>${formatMoney(summary.total)}</strong></div>
        <div class="divider"></div>
        <label class="field">
          <span>Cupom</span>
          <input id="coupon-input" placeholder="WEBIO10" value="${state.coupon || ''}" />
        </label>
        <div class="form-actions">
          <button class="btn btn-secondary btn-block" data-action="apply-coupon">Aplicar cupom</button>
          <a class="btn btn-primary btn-block" href="#/checkout">Ir para checkout</a>
        </div>
      </aside>
    </section>
  `;
}

function checkoutTemplate() {
  const user = getCurrentUser();
  if (!user) return loginRequired('Faça login para iniciar o checkout inteligente.');
  const summary = calculateCartSummary();
  const preferredAddress = user.addresses.find((address) => address.primary) || user.addresses[0];
  return `
    <div class="page-header">
      <div>
        <span class="section-eyebrow">⚙️ Checkout inteligente</span>
        <h1>Finalize sua compra em 5 etapas</h1>
        <p class="muted">Dados pré-preenchidos, múltiplos endereços, pagamento desacoplado e validação em tempo real.</p>
      </div>
    </div>
    <div class="checkout-steps">
      ${['Identificação', 'Endereço', 'Resumo', 'Pagamento', 'Confirmação'].map((step, index) => `<div class="step-pill ${state.checkout.step === index + 1 ? 'active' : ''}">${index + 1}. ${step}</div>`).join('')}
    </div>
    <section class="checkout-layout">
      <form class="panel" id="checkout-form" style="padding:24px;">
        <div class="fieldset">
          <legend>1. Identificação</legend>
          <div class="form-grid">
            <label class="field"><span>Nome completo</span><input name="name" required value="${user.name}" /></label>
            <label class="field"><span>E-mail</span><input name="email" type="email" required value="${user.email}" /></label>
            <label class="field"><span>Telefone</span><input name="phone" required value="${user.phone}" placeholder="(11) 99999-9999" /></label>
            <label class="field"><span>CPF</span><input name="cpf" required value="${user.cpf}" placeholder="000.000.000-00" /></label>
          </div>
        </div>
        <div class="fieldset" style="margin-top:18px;">
          <legend>2. Entrega</legend>
          <p class="helper-text">Endereço principal sugerido automaticamente. Você pode cadastrar vários endereços.</p>
          <div class="form-grid">
            <label class="field span-2"><span>Rótulo do endereço</span><input name="addressLabel" value="${preferredAddress?.label || 'Entrega'}" /></label>
            <label class="field"><span>CEP</span><input name="zip" required value="${preferredAddress?.zip || ''}" placeholder="00000-000" /></label>
            <label class="field"><span>Estado</span><input name="state" required value="${preferredAddress?.state || ''}" /></label>
            <label class="field span-2"><span>Rua</span><input name="street" required value="${preferredAddress?.street || ''}" /></label>
            <label class="field"><span>Número</span><input name="number" required value="${preferredAddress?.number || ''}" /></label>
            <label class="field"><span>Bairro</span><input name="district" required value="${preferredAddress?.district || ''}" /></label>
            <label class="field"><span>Cidade</span><input name="city" required value="${preferredAddress?.city || ''}" /></label>
            <label class="field"><span>Frete</span>
              <select name="shippingOption">
                <option value="standard">Padrão • ${formatMoney(19.9)}</option>
                <option value="express" selected>Expresso • ${formatMoney(39.9)}</option>
                <option value="pickup">Retirada • grátis</option>
              </select>
            </label>
          </div>
          <label class="field" style="margin-top:14px;"><input name="saveAddress" type="checkbox" checked /> Salvar este endereço para compras futuras.</label>
        </div>
        <div class="fieldset" style="margin-top:18px;">
          <legend>3. Resumo e pagamento</legend>
          <div class="payment-methods">
            ${[
              { id: 'pix', label: 'PIX', detail: 'QR Code + copiar código' },
              { id: 'boleto', label: 'Boleto', detail: 'Linha digitável mock' },
              { id: 'card', label: 'Cartão', detail: 'Parcelamento e validação' },
            ].map((method) => `<label class="payment-card ${state.checkout.payment.method === method.id ? 'active' : ''}"><input type="radio" name="paymentMethod" value="${method.id}" ${state.checkout.payment.method === method.id ? 'checked' : ''} /> <strong>${method.label}</strong><p class="muted">${method.detail}</p></label>`).join('')}
          </div>
          <div class="form-grid" style="margin-top:18px;">
            <label class="field span-2"><span>Nome no cartão</span><input name="cardName" placeholder="Nome impresso" /></label>
            <label class="field"><span>Número do cartão</span><input name="cardNumber" placeholder="0000 0000 0000 0000" /></label>
            <label class="field"><span>Validade</span><input name="cardExpiry" placeholder="MM/AA" /></label>
            <label class="field"><span>CVV</span><input name="cardCvv" placeholder="123" /></label>
            <label class="field"><span>Parcelas</span>
              <select name="installments">${Array.from({ length: 10 }, (_, index) => `<option value="${index + 1}">${index + 1}x de ${formatMoney(summary.total / (index + 1))}</option>`).join('')}</select>
            </label>
          </div>
          <p class="microcopy">Regra mock: cartão com final 0 retorna recusado; PIX aprova instantaneamente; boleto fica pendente.</p>
        </div>
        <div class="form-actions">
          <button class="btn btn-primary" type="submit">Confirmar pedido</button>
          <a class="btn btn-secondary" href="#/carrinho">Voltar ao carrinho</a>
        </div>
      </form>
      <aside class="checkout-summary panel">
        <h3>Resumo lateral</h3>
        <div class="list-stack">
          ${getCartDetailed().map((item) => `<div class="summary-row"><span>${item.quantity}x ${item.product.name}</span><strong>${formatMoney(getPrice(item.product) * item.quantity)}</strong></div>`).join('')}
        </div>
        <div class="divider"></div>
        <div class="summary-row"><span>Subtotal</span><strong>${formatMoney(summary.subtotal)}</strong></div>
        <div class="summary-row"><span>Desconto</span><strong>- ${formatMoney(summary.discount)}</strong></div>
        <div class="summary-row"><span>Frete</span><strong>${summary.shipping ? formatMoney(summary.shipping) : 'Grátis'}</strong></div>
        <div class="summary-row total"><span>Total</span><strong>${formatMoney(summary.total)}</strong></div>
        <div class="divider"></div>
        <div class="info-card">
          <strong>Compra rápida ativa</strong>
          <p class="muted">Como você já está logado, usamos seus dados salvos e sugerimos o endereço principal.</p>
        </div>
      </aside>
    </section>
  `;
}

function authTemplate(mode = 'login') {
  const isLogin = mode === 'login';
  return `
    <section class="hero" style="grid-template-columns: 1fr 1fr; align-items: stretch;">
      <div class="hero-card">
        <img src="${logoPath}" alt="WEB IO" style="width:190px; margin-bottom:18px;" />
        <span class="section-eyebrow">🔐 Conta WEB IO</span>
        <h1>${isLogin ? 'Faça login para continuar comprando.' : 'Crie sua conta e personalize sua experiência.'}</h1>
        <p>Proteção de rotas privadas, perfis de cliente/admin e recuperação de senha pronta para integração com Supabase Auth.</p>
        <div class="list-stack" style="margin-top:20px;">
          <div class="info-card"><strong>Cliente demo</strong><p class="muted">cliente@webio.store • cliente123</p></div>
          <div class="info-card"><strong>Admin demo</strong><p class="muted">admin@webio.store • admin123</p></div>
        </div>
      </div>
      <form class="panel" id="${isLogin ? 'login-form' : 'register-form'}" style="padding:28px;">
        <h2>${isLogin ? 'Entrar' : 'Cadastrar'}</h2>
        <div class="form-grid">
          ${isLogin ? '' : '<label class="field span-2"><span>Nome completo</span><input name="name" required /></label>'}
          <label class="field ${isLogin ? 'span-2' : ''}"><span>E-mail</span><input name="email" type="email" required /></label>
          ${isLogin ? '' : '<label class="field"><span>Telefone</span><input name="phone" required placeholder="(11) 99999-9999" /></label>'}
          ${isLogin ? '' : '<label class="field"><span>CPF</span><input name="cpf" required placeholder="000.000.000-00" /></label>'}
          <label class="field ${isLogin ? 'span-2' : ''}"><span>Senha</span><input name="password" type="password" required /></label>
        </div>
        <div class="form-actions">
          <button class="btn btn-primary" type="submit">${isLogin ? 'Entrar agora' : 'Criar conta'}</button>
          <a class="btn btn-secondary" href="${isLogin ? '#/cadastro' : '#/login'}">${isLogin ? 'Criar cadastro' : 'Já tenho conta'}</a>
        </div>
        ${isLogin ? '<button class="btn btn-ghost" type="button" data-action="forgot-password">Recuperar senha</button>' : ''}
      </form>
    </section>
  `;
}

function accountTemplate() {
  const user = getCurrentUser();
  if (!user) return loginRequired('Faça login para visualizar sua conta.');
  const orders = getOrdersByUser(user.id);
  return `
    <section class="account-layout">
      <aside class="account-menu panel">
        <h3>Minha conta</h3>
        <div class="list-stack" style="margin-top:16px;">
          <a class="nav-chip" href="#/minha-conta">Visão geral</a>
          <a class="nav-chip" href="#/meus-pedidos">Meus pedidos</a>
          <a class="nav-chip" href="#/favoritos">Favoritos</a>
          ${isAdmin() ? '<a class="nav-chip" href="#/admin">Painel admin</a>' : ''}
          <button class="btn btn-ghost" data-action="logout">Sair</button>
        </div>
      </aside>
      <div class="list-stack">
        <div class="panel" style="padding:24px;">
          <div class="page-header" style="margin-bottom:0;">
            <div>
              <span class="section-eyebrow">👋 Olá, ${user.name.split(' ')[0]}</span>
              <h1>Seu hub WEB IO</h1>
            </div>
          </div>
          <div class="kpi-grid">
            <div class="stat-card"><span>Pedidos</span><strong>${orders.length}</strong></div>
            <div class="stat-card"><span>Favoritos</span><strong>${state.wishlist.length}</strong></div>
            <div class="stat-card"><span>Endereços</span><strong>${user.addresses.length}</strong></div>
            <div class="stat-card"><span>Perfil</span><strong>${user.role === 'admin' ? 'Administrador' : 'Cliente'}</strong></div>
          </div>
        </div>
        <div class="panel" style="padding:24px;">
          <h3>Dados do perfil</h3>
          <div class="form-grid">
            <div class="info-card"><strong>Nome</strong><p class="muted">${user.name}</p></div>
            <div class="info-card"><strong>E-mail</strong><p class="muted">${user.email}</p></div>
            <div class="info-card"><strong>Telefone</strong><p class="muted">${user.phone}</p></div>
            <div class="info-card"><strong>CPF</strong><p class="muted">${user.cpf}</p></div>
          </div>
        </div>
        <div class="panel" style="padding:24px;">
          <h3>Endereços salvos</h3>
          <div class="address-grid" style="grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));">
            ${user.addresses.map((address) => `<div class="address-card"><strong>${address.label}</strong><p class="muted">${address.street}, ${address.number} • ${address.district}</p><p class="muted">${address.city}/${address.state} • ${address.zip}</p>${address.primary ? '<span class="badge featured">Principal</span>' : ''}</div>`).join('')}
          </div>
        </div>
      </div>
    </section>
  `;
}

function ordersTemplate() {
  const user = getCurrentUser();
  if (!user) return loginRequired('Faça login para visualizar seus pedidos.');
  const orders = getOrdersByUser(user.id);
  return `
    <div class="page-header">
      <div>
        <span class="section-eyebrow">📦 Histórico</span>
        <h1>Meus pedidos</h1>
        <p class="muted">Acompanhe pagamento, entrega e histórico completo do pedido.</p>
      </div>
    </div>
    <div class="list-stack">
      ${orders.length ? orders.map((order) => `<article class="order-item"><div class="page-header" style="margin:0;"><div><strong>${order.id}</strong><p class="muted">${formatDate(order.createdAt)} • ${order.items.length} item(ns)</p></div><div class="inline-actions"><span class="status-pill ${statusClass(order.paymentStatus)}">Pagamento: ${order.paymentStatus}</span><span class="status-pill ${statusClass(order.status)}">Pedido: ${order.status}</span><a class="btn btn-secondary" href="#/pedido/${order.id}">Ver detalhes</a></div></div><div class="summary-row total"><span>Total</span><strong>${formatMoney(order.total)}</strong></div></article>`).join('') : `<div class="empty-state center" style="padding:32px;"><h3>Você ainda não comprou.</h3><a class="btn btn-primary" href="#/produtos">Ir para a loja</a></div>`}
    </div>
  `;
}

function orderDetailTemplate(orderId, success = false, failure = false) {
  const order = state.orders.find((item) => item.id === orderId);
  if (!order) return errorState('Pedido não encontrado', 'Não localizamos o pedido informado.');
  const user = getUserById(order.userId);
  const address = user?.addresses.find((item) => item.id === order.addressId) || user?.addresses[0];
  return `
    <div class="page-header">
      <div>
        <span class="section-eyebrow">${success ? '✅ Compra finalizada' : failure ? '⚠️ Pagamento não aprovado' : '📄 Detalhes do pedido'}</span>
        <h1>${order.id}</h1>
        <p class="muted">${success ? 'Seu pedido foi registrado com sucesso.' : failure ? 'Você pode revisar seus dados e tentar novamente.' : 'Histórico, itens e rastreabilidade completa.'}</p>
      </div>
      <div class="inline-actions">
        <span class="status-pill ${statusClass(order.paymentStatus)}">Pagamento: ${order.paymentStatus}</span>
        <span class="status-pill ${statusClass(order.status)}">Pedido: ${order.status}</span>
      </div>
    </div>
    <section class="order-detail-layout">
      <div class="list-stack">
        <div class="panel" style="padding:24px;">
          <h3>Itens comprados</h3>
          <div class="list-stack">
            ${order.items.map((item) => { const product = getProductById(item.productId); return `<div class="cart-item"><div class="cart-thumb">${product?.image || '🛍️'}</div><div><strong>${product?.name || item.productId}</strong><p class="muted">${item.quantity}x • ${formatMoney(item.unitPrice)}</p></div><strong>${formatMoney(item.unitPrice * item.quantity)}</strong></div>`; }).join('')}
          </div>
        </div>
        <div class="panel" style="padding:24px;">
          <h3>Histórico de status</h3>
          <div class="timeline">
            ${order.history.map((entry) => `<div class="timeline-item"><strong>${entry.label}</strong><p class="muted">${formatDate(entry.at)} • ${entry.by}</p></div>`).join('')}
          </div>
        </div>
      </div>
      <aside class="checkout-summary panel">
        <h3>Resumo</h3>
        <div class="summary-row"><span>Cliente</span><strong>${user?.name || 'n/a'}</strong></div>
        <div class="summary-row"><span>Entrega</span><strong>${address ? `${address.city}/${address.state}` : 'A confirmar'}</strong></div>
        <div class="summary-row"><span>Método</span><strong>${order.paymentMethod.toUpperCase()}</strong></div>
        <div class="summary-row"><span>Subtotal</span><strong>${formatMoney(order.subtotal)}</strong></div>
        <div class="summary-row"><span>Frete</span><strong>${formatMoney(order.shipping)}</strong></div>
        <div class="summary-row"><span>Desconto</span><strong>- ${formatMoney(order.discount)}</strong></div>
        <div class="summary-row total"><span>Total</span><strong>${formatMoney(order.total)}</strong></div>
        ${order.paymentMethod === 'pix' && order.pixCode ? `<div class="divider"></div><div class="info-card"><strong>PIX</strong><p class="muted">QR mock disponível. Código para copiar:</p><small>${order.pixCode}</small></div>` : ''}
        ${order.paymentMethod === 'boleto' && order.boletoLine ? `<div class="divider"></div><div class="info-card"><strong>Boleto</strong><p class="muted">Linha digitável mock:</p><small>${order.boletoLine}</small></div>` : ''}
        ${order.trackingCode ? `<div class="divider"></div><div class="info-card"><strong>Rastreio</strong><p class="muted">${order.trackingCode}</p></div>` : ''}
      </aside>
    </section>
  `;
}

function wishlistTemplate() {
  const products = state.products.filter((product) => state.wishlist.includes(product.id));
  return `
    <div class="page-header">
      <div>
        <span class="section-eyebrow">💜 Wishlist</span>
        <h1>Favoritos</h1>
        <p class="muted">Salve produtos para retomar a compra depois com um clique.</p>
      </div>
    </div>
    ${products.length ? `<div class="product-grid">${products.map(renderProductCard).join('')}</div>` : `<div class="empty-state center" style="padding:32px;"><h3>Nenhum favorito salvo.</h3><p class="muted">Clique em “Favoritar” nos cards de produto.</p></div>`}
  `;
}

function adminTemplate(section = 'dashboard', param = '') {
  if (!isAdmin()) return loginRequired('Acesse com um administrador para abrir o backoffice.');
  const metrics = getSalesMetrics();
  const topProducts = getTopProducts();
  const renderSection = {
    dashboard: () => `
      <div class="page-header"><div><span class="section-eyebrow">📊 Operação WEB IO</span><h1>Dashboard administrativo</h1><p class="muted">KPIs de vendas, clientes, pedidos e alertas operacionais.</p></div></div>
      <div class="stat-grid">
        <div class="stat-card"><span>Total de vendas</span><strong>${formatMoney(metrics.revenue)}</strong></div>
        <div class="stat-card"><span>Pedidos do dia</span><strong>${metrics.todayOrders}</strong></div>
        <div class="stat-card"><span>Ticket médio</span><strong>${formatMoney(metrics.avgTicket)}</strong></div>
        <div class="stat-card"><span>Clientes</span><strong>${metrics.customers}</strong></div>
      </div>
      <div class="analytics-grid" style="margin-top:20px;">
        <div class="table-card">
          <h3>Gráfico de vendas</h3>
          <div class="chart">
            ${getMonthlySales().map(([month, value]) => `<div class="chart-bar" style="height:${Math.max(80, value / 140)}px"><span>${month}</span></div>`).join('')}
          </div>
        </div>
        <div class="table-card">
          <h3>Alertas operacionais</h3>
          <div class="list-stack">
            <div class="info-card"><strong>${state.products.filter((product) => product.stock <= 10).length} produtos com baixo estoque</strong><p class="muted">Atualize ressuprimento para não perder conversão.</p></div>
            <div class="info-card"><strong>${state.orders.filter((order) => order.paymentStatus === 'pending').length} pagamentos pendentes</strong><p class="muted">Acompanhe boletos e pedidos aguardando confirmação.</p></div>
            <div class="info-card"><strong>${state.adminLogs.length} logs administrativos</strong><p class="muted">Rastreabilidade básica ativa para auditoria operacional.</p></div>
          </div>
        </div>
      </div>
      <div class="table-card" style="margin-top:20px;">
        <h3>Produtos mais vendidos</h3>
        <table class="table"><thead><tr><th>Produto</th><th>Categoria</th><th>Quantidade</th><th>Preço</th></tr></thead><tbody>${topProducts.map((entry) => `<tr><td><strong>${entry.product.name}</strong></td><td>${getCategoryById(entry.product.categoryId)?.name}</td><td>${entry.quantity}</td><td>${formatMoney(getPrice(entry.product))}</td></tr>`).join('')}</tbody></table>
      </div>
    `,
    produtos: () => `
      <div class="page-header"><div><span class="section-eyebrow">🧾 Catálogo</span><h1>Gestão de produtos</h1><p class="muted">Cadastre, edite, ative/inative e gerencie destaque, preço e estoque.</p></div><div class="inline-actions"><a class="btn btn-primary" href="#/admin/produtos/novo">Novo produto</a></div></div>
      <div class="table-card"><table class="table"><thead><tr><th>Produto</th><th>SKU</th><th>Categoria</th><th>Preço</th><th>Estoque</th><th>Ações</th></tr></thead><tbody>${state.products.map((product) => `<tr><td><strong>${product.name}</strong><span class="muted">${product.brand}</span></td><td>${product.sku}</td><td>${getCategoryById(product.categoryId)?.name}</td><td>${formatMoney(getPrice(product))}</td><td>${product.stock}</td><td><a class="btn btn-secondary" href="#/admin/produtos/${product.id}">Editar</a></td></tr>`).join('')}</tbody></table></div>
    `,
    'produtos-form': () => productAdminForm(param),
    categorias: () => `
      <div class="page-header"><div><span class="section-eyebrow">🗂️ Taxonomia</span><h1>Gestão de categorias</h1><p class="muted">Organize a navegação da loja e os menus do marketplace.</p></div></div>
      <div class="analytics-grid"><div class="table-card"><table class="table"><thead><tr><th>Categoria</th><th>Descrição</th></tr></thead><tbody>${state.categories.map((category) => `<tr><td><strong>${category.icon} ${category.name}</strong></td><td>${category.description}</td></tr>`).join('')}</tbody></table></div><form class="panel" id="category-form" style="padding:24px;"><h3>Nova categoria</h3><div class="form-grid"><label class="field span-2"><span>Nome</span><input name="name" required /></label><label class="field"><span>Ícone</span><input name="icon" placeholder="🛍️" required /></label><label class="field"><span>Slug</span><input name="slug" placeholder="acessorios" /></label><label class="field span-2"><span>Descrição</span><textarea name="description" required></textarea></label></div><div class="form-actions"><button class="btn btn-primary" type="submit">Salvar categoria</button></div></form></div>
    `,
    pedidos: () => `
      <div class="page-header"><div><span class="section-eyebrow">🚚 Fulfillment</span><h1>Gestão de pedidos</h1><p class="muted">Filtre por status, cliente e data, com histórico completo e atualização operacional.</p></div></div>
      <div class="table-card"><table class="table"><thead><tr><th>Pedido</th><th>Cliente</th><th>Status</th><th>Pagamento</th><th>Total</th><th>Ações</th></tr></thead><tbody>${state.orders.map((order) => `<tr><td><strong>${order.id}</strong><span class="muted">${formatDate(order.createdAt)}</span></td><td>${getUserById(order.userId)?.name || 'n/a'}</td><td><span class="status-pill ${statusClass(order.status)}">${order.status}</span></td><td><span class="status-pill ${statusClass(order.paymentStatus)}">${order.paymentStatus}</span></td><td>${formatMoney(order.total)}</td><td><div class="inline-actions"><a class="btn btn-secondary" href="#/pedido/${order.id}">Abrir</a><button class="btn btn-success" data-action="approve-order" data-order-id="${order.id}">Aprovar</button><button class="btn btn-danger" data-action="cancel-order" data-order-id="${order.id}">Cancelar</button></div></td></tr>`).join('')}</tbody></table></div>
    `,
    usuarios: () => `
      <div class="page-header"><div><span class="section-eyebrow">👥 CRM</span><h1>Gestão de usuários</h1><p class="muted">Perfis, bloqueio, tipo de acesso e visão dos pedidos de cada cliente.</p></div></div>
      <div class="table-card"><table class="table"><thead><tr><th>Usuário</th><th>Perfil</th><th>Telefone</th><th>Pedidos</th><th>Status</th></tr></thead><tbody>${state.users.map((user) => `<tr><td><strong>${user.name}</strong><span class="muted">${user.email}</span></td><td>${user.role}</td><td>${user.phone}</td><td>${getOrdersByUser(user.id).length}</td><td><span class="status-pill ${user.blocked ? 'status-cancelled' : 'status-approved'}">${user.blocked ? 'Bloqueado' : 'Ativo'}</span></td></tr>`).join('')}</tbody></table></div>
    `,
    vendas: () => `
      <div class="page-header"><div><span class="section-eyebrow">💹 BI comercial</span><h1>Gestão de vendas</h1><p class="muted">Relatórios por período, produto, categoria, cliente e forma de pagamento.</p></div><div class="inline-actions"><button class="btn btn-primary" data-action="export-csv">Exportar CSV</button></div></div>
      <div class="kpi-grid"><div class="stat-card"><span>Receita aprovada</span><strong>${formatMoney(metrics.revenue)}</strong></div><div class="stat-card"><span>Pedidos aprovados</span><strong>${metrics.approvedOrders}</strong></div><div class="stat-card"><span>Ticket médio</span><strong>${formatMoney(metrics.avgTicket)}</strong></div><div class="stat-card"><span>PIX share</span><strong>${Math.round((state.orders.filter((order) => order.paymentMethod === 'pix').length / state.orders.length) * 100)}%</strong></div></div>
      <div class="table-card" style="margin-top:20px;"><table class="table"><thead><tr><th>Pedido</th><th>Cliente</th><th>Forma de pagamento</th><th>Total</th><th>Status</th></tr></thead><tbody>${state.orders.map((order) => `<tr><td>${order.id}</td><td>${getUserById(order.userId)?.name || 'n/a'}</td><td>${order.paymentMethod.toUpperCase()}</td><td>${formatMoney(order.total)}</td><td>${order.paymentStatus}</td></tr>`).join('')}</tbody></table></div>
    `,
    cupons: () => `
      <div class="page-header"><div><span class="section-eyebrow">🏷️ Promoções</span><h1>Cupons e descontos</h1><p class="muted">Configure cupons percentuais e de frete com gatilhos de valor mínimo.</p></div></div>
      <div class="table-card"><table class="table"><thead><tr><th>Código</th><th>Tipo</th><th>Valor</th><th>Mínimo</th><th>Status</th></tr></thead><tbody>${state.coupons.map((coupon) => `<tr><td><strong>${coupon.code}</strong></td><td>${coupon.type}</td><td>${coupon.type === 'percentage' ? `${coupon.value}%` : 'Frete grátis'}</td><td>${formatMoney(coupon.minimum)}</td><td><span class="status-pill ${coupon.active ? 'status-approved' : 'status-cancelled'}">${coupon.active ? 'Ativo' : 'Inativo'}</span></td></tr>`).join('')}</tbody></table></div>
    `,
    configuracoes: () => `
      <div class="page-header"><div><span class="section-eyebrow">⚙️ Setup da loja</span><h1>Configurações</h1><p class="muted">Preferências gerais, integrações e políticas operacionais.</p></div></div>
      <div class="list-stack">
        <div class="info-card"><strong>Supabase</strong><p class="muted">Preparado para Auth, Postgres, Storage e RLS. Veja o schema em <code>database/schema.sql</code>.</p></div>
        <div class="info-card"><strong>Gateway de pagamento</strong><p class="muted">Provider desacoplado com suporte mock a PIX, boleto e cartão.</p></div>
        <div class="info-card"><strong>Logs administrativos</strong><p class="muted">${state.adminLogs.slice(0, 5).map((log) => `${formatDate(log.at)} - ${log.action}`).join(' • ')}</p></div>
      </div>
    `,
  };

  return `
    <section class="admin-layout admin-shell">
      <aside class="admin-sidebar panel">
        <h3>Backoffice WEB IO</h3>
        <div class="list-stack" style="margin-top:16px;">
          <a class="nav-chip" href="#/admin">Dashboard</a>
          <a class="nav-chip" href="#/admin/produtos">Produtos</a>
          <a class="nav-chip" href="#/admin/categorias">Categorias</a>
          <a class="nav-chip" href="#/admin/pedidos">Pedidos</a>
          <a class="nav-chip" href="#/admin/usuarios">Usuários</a>
          <a class="nav-chip" href="#/admin/vendas">Vendas</a>
          <a class="nav-chip" href="#/admin/cupons">Cupons</a>
          <a class="nav-chip" href="#/admin/configuracoes">Configurações</a>
        </div>
      </aside>
      <div>${(renderSection[section] || renderSection.dashboard)()}</div>
    </section>
  `;
}

function productAdminForm(productId) {
  const product = getProductById(productId) || { name: '', categoryId: state.categories[0]?.id || '', brand: 'WEB IO', price: '', promotionalPrice: '', stock: '', sku: '', shortDescription: '', description: '', image: '🛍️', tags: [], featured: false, bestSeller: false, availability: true };
  return `
    <div class="page-header"><div><span class="section-eyebrow">🧩 Cadastro</span><h1>${productId === 'novo' || !productId ? 'Novo produto' : 'Editar produto'}</h1><p class="muted">Gerencie preço, estoque, destaque, descrição e merchandising.</p></div></div>
    <form class="panel" id="product-form" style="padding:24px;">
      <input type="hidden" name="id" value="${product.id || ''}" />
      <div class="form-grid">
        <label class="field span-2"><span>Nome</span><input name="name" required value="${product.name}" /></label>
        <label class="field"><span>Marca</span><input name="brand" required value="${product.brand}" /></label>
        <label class="field"><span>Categoria</span><select name="categoryId">${state.categories.map((category) => `<option value="${category.id}" ${category.id === product.categoryId ? 'selected' : ''}>${category.name}</option>`).join('')}</select></label>
        <label class="field"><span>Preço</span><input name="price" type="number" step="0.01" required value="${product.price}" /></label>
        <label class="field"><span>Preço promocional</span><input name="promotionalPrice" type="number" step="0.01" value="${product.promotionalPrice || ''}" /></label>
        <label class="field"><span>Estoque</span><input name="stock" type="number" required value="${product.stock}" /></label>
        <label class="field"><span>SKU</span><input name="sku" required value="${product.sku}" /></label>
        <label class="field"><span>Emoji/imagem mock</span><input name="image" value="${product.image}" /></label>
        <label class="field span-2"><span>Descrição curta</span><input name="shortDescription" required value="${product.shortDescription}" /></label>
        <label class="field span-2"><span>Descrição completa</span><textarea name="description" required>${product.description}</textarea></label>
        <label class="field span-2"><span>Tags (separadas por vírgula)</span><input name="tags" value="${Array.isArray(product.tags) ? product.tags.join(', ') : product.tags}" /></label>
      </div>
      <div class="inline-actions" style="margin-top:18px;">
        <label class="field"><input type="checkbox" name="featured" ${product.featured ? 'checked' : ''} /> Destaque</label>
        <label class="field"><input type="checkbox" name="bestSeller" ${product.bestSeller ? 'checked' : ''} /> Mais vendido</label>
        <label class="field"><input type="checkbox" name="availability" ${product.availability ? 'checked' : ''} /> Ativo</label>
      </div>
      <div class="form-actions"><button class="btn btn-primary" type="submit">Salvar produto</button><a class="btn btn-secondary" href="#/admin/produtos">Cancelar</a></div>
    </form>
  `;
}

function loginRequired(message) {
  return `<div class="empty-state center" style="padding:36px;"><h2>Acesso necessário</h2><p class="muted">${message}</p><a class="btn btn-primary" href="#/login">Ir para login</a></div>`;
}

function errorState(title, message) {
  return `<div class="empty-state center" style="padding:36px;"><h2>${title}</h2><p class="muted">${message}</p><a class="btn btn-primary" href="#/">Voltar para home</a></div>`;
}

function renderPage(route) {
  const parts = route.split('/').filter(Boolean);
  const [first, second, third] = parts;
  if (!first) return homeTemplate();
  switch (first) {
    case 'produtos': return catalogTemplate();
    case 'categoria': {
      const category = state.categories.find((item) => slugify(item.name) === second);
      if (!category) return errorState('Categoria não encontrada', 'Não existe uma categoria para esta rota.');
      state.selectedCategory = category.id;
      saveState();
      return catalogTemplate(category.name, category.description, filterProducts());
    }
    case 'produto': return productTemplate(second);
    case 'carrinho': return cartTemplate();
    case 'checkout': return checkoutTemplate();
    case 'login': return authTemplate('login');
    case 'cadastro': return authTemplate('register');
    case 'minha-conta': return accountTemplate();
    case 'meus-pedidos': return ordersTemplate();
    case 'pedido': return orderDetailTemplate(second);
    case 'favoritos': return wishlistTemplate();
    case 'pedido-sucesso': return orderDetailTemplate(second, true, false);
    case 'pedido-falha': return orderDetailTemplate(second, false, true);
    case 'admin': {
      if (!second) return adminTemplate('dashboard');
      if (second === 'produtos' && third) return adminTemplate('produtos-form', third);
      if (second === 'produtos') return adminTemplate('produtos');
      return adminTemplate(second);
    }
    default: return homeTemplate();
  }
}

function render() {
  document.documentElement.dataset.theme = state.theme;
  const route = getRoute();
  app.innerHTML = `
    <div class="app-shell">
      ${headerTemplate()}
      <main class="container">${renderPage(route)}</main>
      ${footerTemplate()}
    </div>
  `;
  bindEvents();
}

function bindEvents() {
  document.querySelector('#global-search-form')?.addEventListener('submit', (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    state.search = String(form.get('term') || '');
    state.selectedCategory = String(form.get('category') || 'all');
    saveState();
    navigate('#/produtos');
  });

  document.querySelectorAll('[data-category]').forEach((element) => {
    element.addEventListener('click', () => {
      const category = element.dataset.category;
      if (!category) return;
      state.selectedCategory = category;
      saveState();
    });
  });

  document.querySelectorAll('input[name="minPrice"], input[name="maxPrice"], select[name="availability"], select[name="sort"]').forEach((element) => {
    element.addEventListener('change', (event) => {
      const { name, value } = event.target;
      if (name === 'sort') state.sort = value;
      else state.filters[name] = value;
      saveState();
      render();
    });
  });

  document.querySelector('[data-action="clear-filters"]')?.addEventListener('click', () => {
    state.filters = { minPrice: '', maxPrice: '', availability: 'all' };
    state.sort = 'relevance';
    saveState();
    render();
  });

  document.querySelector('[data-action="toggle-theme"]')?.addEventListener('click', () => {
    state.theme = state.theme === 'dark' ? 'light' : 'dark';
    saveState();
    render();
  });

  document.querySelectorAll('[data-action="add-to-cart"]').forEach((button) => button.addEventListener('click', () => addToCart(button.dataset.productId)));
  document.querySelectorAll('[data-action="buy-now"]').forEach((button) => button.addEventListener('click', () => { addToCart(button.dataset.productId); navigate('#/checkout'); }));
  document.querySelectorAll('[data-action="toggle-wishlist"]').forEach((button) => button.addEventListener('click', () => toggleWishlist(button.dataset.productId)));
  document.querySelectorAll('[data-action="remove-cart-item"]').forEach((button) => button.addEventListener('click', () => removeFromCart(button.dataset.productId)));
  document.querySelectorAll('[data-action="qty-minus"]').forEach((button) => button.addEventListener('click', () => updateCartQuantity(button.dataset.productId, -1)));
  document.querySelectorAll('[data-action="qty-plus"]').forEach((button) => button.addEventListener('click', () => updateCartQuantity(button.dataset.productId, 1)));

  document.querySelector('[data-action="apply-coupon"]')?.addEventListener('click', () => applyCoupon(document.querySelector('#coupon-input')?.value || ''));
  document.querySelector('[data-action="forgot-password"]')?.addEventListener('click', () => showToast('Fluxo de recuperação preparado para Supabase Auth.', 'info'));
  document.querySelector('[data-action="logout"]')?.addEventListener('click', logout);
  document.querySelector('[data-action="export-csv"]')?.addEventListener('click', exportOrdersCsv);

  document.querySelectorAll('[data-action="approve-order"]').forEach((button) => button.addEventListener('click', () => updateOrderStatus(button.dataset.orderId, 'approved')));
  document.querySelectorAll('[data-action="cancel-order"]').forEach((button) => button.addEventListener('click', () => updateOrderStatus(button.dataset.orderId, 'cancelled')));

  document.querySelector('#login-form')?.addEventListener('submit', (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    login(String(form.get('email')), String(form.get('password')));
  });

  document.querySelector('#register-form')?.addEventListener('submit', (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    registerUser({
      name: String(form.get('name')),
      email: String(form.get('email')),
      phone: String(form.get('phone')),
      cpf: String(form.get('cpf')),
      password: String(form.get('password')),
    });
  });

  document.querySelector('#checkout-form')?.addEventListener('submit', (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const requiredFields = ['name', 'email', 'phone', 'cpf', 'zip', 'state', 'street', 'number', 'district', 'city'];
    const missing = requiredFields.some((field) => !String(form.get(field) || '').trim());
    if (missing) {
      showToast('Preencha todos os campos obrigatórios do checkout.', 'error');
      return;
    }
    state.checkout.step = 5;
    state.checkout.payment.method = String(form.get('paymentMethod'));
    state.checkout.shippingOption = String(form.get('shippingOption'));
    saveState();
    placeOrder(Object.fromEntries(form.entries()));
  });

  document.querySelector('#product-form')?.addEventListener('submit', (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const payload = Object.fromEntries(form.entries());
    payload.featured = form.get('featured') === 'on';
    payload.bestSeller = form.get('bestSeller') === 'on';
    payload.availability = form.get('availability') === 'on';
    saveProduct(payload);
  });

  document.querySelector('#category-form')?.addEventListener('submit', (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    saveCategory({ name: String(form.get('name')), icon: String(form.get('icon')), description: String(form.get('description')), slug: String(form.get('slug') || slugify(String(form.get('name')))) });
  });
}

window.addEventListener('hashchange', render);
window.addEventListener('load', () => {
  normalizeRoute();
  render();
});
