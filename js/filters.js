document.addEventListener('DOMContentLoaded', function() {
  const input = document.getElementById('hero-search');
  if (input) {
    input.addEventListener('input', function() {
      const query = this.value.trim().toLowerCase();
      const cards = Array.from(document.querySelectorAll('#product-grid .product-card'));
      cards.forEach(card => {
        const text = card.textContent.toLowerCase();
        card.style.display = text.includes(query) ? '' : 'none';
      });
    });
  }
});
