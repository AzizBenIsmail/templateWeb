function getCart() {
  try {
    return JSON.parse(localStorage.getItem('karhabty-cart')) || [];
  } catch (e) {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem('karhabty-cart', JSON.stringify(cart));
}

function addToCart(productId) {
  const cart = getCart();
  cart.push(productId);
  saveCart(cart);
  updateCartCount();
}

function removeFromCart(productId) {
  let cart = getCart();
  cart = cart.filter(id => id !== productId);
  saveCart(cart);
  updateCartCount();
}

function updateCartCount() {
  const cart = getCart();
  const cartCount = document.querySelectorAll('.cart-count');
  cartCount.forEach(item => {
    item.textContent = cart.length;
  });
}

document.addEventListener('DOMContentLoaded', function() {
  updateCartCount();
});
