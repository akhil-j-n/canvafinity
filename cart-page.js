const TAX_RATE = 0.07;
  let promoApplied = false;

  function renderCart(){
    const items = cartItems();
    const container = document.getElementById('cart-items');
    const emptyBlock = document.getElementById('empty-cart');
    const summaryWrap = document.getElementById('summary-wrap');

    if(items.length === 0){
      container.innerHTML = '';
      emptyBlock.classList.remove('d-none');
      summaryWrap.classList.add('d-none');
      return;
    }
    emptyBlock.classList.add('d-none');
    summaryWrap.classList.remove('d-none');

    container.innerHTML = items.map(item => `
      <div class="cart-line d-flex align-items-center gap-3 flex-wrap">
        <div class="line-media"><img src="${item.product.img}" alt="${item.product.name}" loading="lazy"></div>
        <div class="flex-grow-1" style="min-width:180px;">
          <a href="product.html?id=${item.product.id}" class="deal-name text-decoration-none d-block mb-1" style="font-size:1rem;">${item.product.name}</a>
          <span class="price-now" style="font-size:1.1rem;">$${item.product.price.toFixed(2)}</span>
          <span class="price-was ms-1">$${item.product.was.toFixed(2)}</span>
        </div>
        <div class="qty-stepper">
          <button type="button" aria-label="Decrease quantity" onclick="stepQty('${item.product.id}', -1)">&minus;</button>
          <input type="number" class="qty-input" min="1" max="99" value="${item.qty}" onchange="setQty('${item.product.id}', this.value); renderCart();">
          <button type="button" aria-label="Increase quantity" onclick="stepQty('${item.product.id}', 1)">+</button>
        </div>
        <div class="text-end" style="min-width:80px;">
          <strong>$${item.lineTotal.toFixed(2)}</strong><br>
          <button class="cart-remove" onclick="removeFromCart('${item.product.id}'); renderCart();">Remove</button>
        </div>
      </div>
    `).join('');

    const subtotal = cartSubtotal();
    const discount = promoApplied ? subtotal * 0.05 : 0;
    const taxed = subtotal - discount;
    const tax = taxed * TAX_RATE;
    const total = taxed + tax;

    document.getElementById('sum-subtotal').textContent = '$' + subtotal.toFixed(2);
    document.getElementById('sum-tax').textContent = '$' + tax.toFixed(2);
    document.getElementById('sum-total').textContent = '$' + total.toFixed(2);
  }

  function stepQty(id, delta){
    const cart = getCart();
    const current = cart[id] || 1;
    setQty(id, current + delta);
    renderCart();
  }

  document.getElementById('promo-btn').addEventListener('click', () => {
    const code = document.getElementById('promo').value.trim().toUpperCase();
    const msg = document.getElementById('promo-msg');
    if(code === 'BF2026'){
      promoApplied = true;
      msg.textContent = 'Promo applied: 5% off your subtotal.';
      msg.style.color = 'var(--forest)';
    } else {
      promoApplied = false;
      msg.textContent = code ? 'That code is not valid.' : 'Enter a code to apply a discount.';
      msg.style.color = 'var(--crimson)';
    }
    renderCart();
  });

  document.getElementById('checkout-btn').addEventListener('click', () => {
    if(cartItems().length === 0) return;
    alert('This is a demo checkout \u2014 no order has actually been placed.');
  });

  document.addEventListener('DOMContentLoaded', renderCart);
