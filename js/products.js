function formatTnd(price) {
  return price + ' TND';
}

function renderProductGrid() {
  const productGrid = document.getElementById('product-grid');
  if (!productGrid || typeof KARHABTY_PRODUCTS === 'undefined') return;

  productGrid.innerHTML = KARHABTY_PRODUCTS.map(product => `
    <article class="product-card">
      <div class="product-image-wrap">
        <span class="discount-badge">${product.oldPrice ? '-' + Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100) + '%' : ''}</span>
        <img src="${product.image}" alt="${product.name}" class="product-image" loading="lazy" />
      </div>
      <div class="product-content">
        <div class="product-meta">
          <span class="product-brand">${product.brand}</span>
          <span class="product-category">${product.category}</span>
        </div>
        <h3>${product.name}</h3>
        <div class="product-reference">Réf: ${product.reference}</div>
        <div class="product-compatible">Compatible: ${product.compatibleWith}</div>
        <div class="product-price-row">
          <span class="product-price">${formatTnd(product.price)}</span>
          ${product.oldPrice ? `<span class="product-old-price">${formatTnd(product.oldPrice)}</span>` : ''}
        </div>
        <div class="stock-row">
          <span class="stock-status ${product.stock ? 'in-stock' : 'out-stock'}">${product.stock ? 'En stock' : 'Indisponible'}</span>
        </div>
        <div class="product-buttons">
          <button class="btn btn-add-cart" data-id="${product.id}">Ajouter au panier</button>
          <a href="pages/product-details.html?id=${product.id}" class="btn btn-secondary">Détails</a>
        </div>
      </div>
    </article>
  `).join('');

  const addButtons = productGrid.querySelectorAll('[data-id]');
  addButtons.forEach(button => {
    button.addEventListener('click', function() {
      const id = Number(button.dataset.id);
      addToCart(id);
    });
  });
}
