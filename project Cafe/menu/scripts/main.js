import { cart, addToCart } from '../data/cart.js';
import { products } from '../data/products.js';
import { formatCurrency } from './utils/money.js';

function renderProductsGrid() {
  let productsHTML = '';

  products.forEach((product) => {
    productsHTML += `
      <div class="menu-item">
        <div class="product-image-container">
          <!-- گۆڕانکارییەکە لێرە کراوە 👇 -->
          <img src="${product.image}" alt="${product.name}" loading="lazy" decoding="async">
        </div>
        <div class="item-info">
          <div class="product-name">${product.name}</div>
          <div class="item-price">$${formatCurrency(product.priceCents)}</div>
          <button class="add-btn js-add-to-cart" 
            data-product-id="${product.id}">
            Add to Cart
          </button>
        </div>
      </div>`;
  });

  const gridElement = document.getElementById('hot-coffee-grid');
  if (gridElement) {
    gridElement.innerHTML = productsHTML;
  }

  updateCartQuantity();

  document.querySelectorAll('.js-add-to-cart').forEach((button) => {
    button.addEventListener('click', () => {
      const productId = button.dataset.productId;
      addToCart(productId);
      updateCartQuantity();
    });
  });
}

function updateCartQuantity() {
  let cartQuantity = 0;
  cart.forEach((item) => {
    cartQuantity += item.quantity;
  });

  const cartElement = document.querySelector('.js-cart-quantity');
  if (cartElement) {
    cartElement.innerHTML = cartQuantity;
  }
}

renderProductsGrid();