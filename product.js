function renderProduct(){
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id') || 'p01';
    const product = PRODUCTS.find(p => p.id === id) || PRODUCTS[0];

    document.getElementById('page-title').textContent = product.name + ' | Bushel & Bin Market';
    document.getElementById('crumb-cat').textContent = product.name;
    document.getElementById('p-badge').textContent = product.badge;
    document.getElementById('p-media').innerHTML = '<img src="' + product.img + '" alt="' + product.name + '" loading="lazy">';
    document.getElementById('p-cat').textContent = product.catLabel;
    document.getElementById('p-name').textContent = product.name;
    document.getElementById('p-price').textContent = '$' + product.price.toFixed(2);
    document.getElementById('p-was').textContent = '$' + product.was.toFixed(2);
    document.getElementById('p-unit-stamp').textContent = 'Sold ' + product.unit;
    document.getElementById('p-desc').textContent = product.desc;
    document.getElementById('add-btn').dataset.id = product.id;

    const qtyInput = document.getElementById('qty-input');
    document.getElementById('qty-minus').addEventListener('click', () => {
      qtyInput.value = Math.max(1, (parseInt(qtyInput.value)||1) - 1);
    });
    document.getElementById('qty-plus').addEventListener('click', () => {
      qtyInput.value = Math.min(99, (parseInt(qtyInput.value)||1) + 1);
    });

    // Related: same category, excluding current
    const related = PRODUCTS.filter(p => p.cat === product.cat && p.id !== product.id).slice(0,4);
    const grid = document.getElementById('related-grid');
    grid.innerHTML = related.map(p => `
      <div class="col-sm-6 col-lg-3" data-product-wrap>
        <div class="deal-card">
          <span class="save-corner">${p.badge}</span>
          <a href="product.html?id=${p.id}"><div class="deal-media"><img src="${p.img}" alt="${p.name}" loading="lazy"></div></a>
          <div class="deal-body">
            <p class="deal-cat mb-0">${p.catLabel}</p>
            <h3 class="deal-name"><a href="product.html?id=${p.id}" class="text-decoration-none deal-name">${p.name}</a></h3>
            <div class="price-row mb-3">
              <span class="price-now">$${p.price.toFixed(2)}</span>
              <span class="price-was">$${p.was.toFixed(2)}</span>
            </div>
            <button class="btn-add-cart" data-id="${p.id}">Add to Cart</button>
          </div>
        </div>
      </div>
    `).join('');

    wireAddToCartButtons();
    updateCartBadge();
  }
  document.addEventListener('DOMContentLoaded', renderProduct);
