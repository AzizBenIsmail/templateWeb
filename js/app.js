const isNestedPage = window.location.pathname.indexOf('/pages/') >= 0;
const componentBase = isNestedPage ? '../components/' : 'components/';

const componentMap = {
  header: componentBase + 'header.html',
  hero: componentBase + 'hero.html',
  'categories': componentBase + 'categories.html',
  'vehicle-search': componentBase + 'vehicle-search.html',
  'popular-products': componentBase + 'popular-products.html',
  promotions: componentBase + 'promotions.html',
  'why-karhabty': componentBase + 'why-karhabty.html',
  testimonials: componentBase + 'testimonials.html',
  cta: componentBase + 'cta.html',
  footer: componentBase + 'footer.html'
};

function loadComponent(id, componentPath) {
  const target = document.getElementById(id);
  if (!target) return;

  const xhttp = new XMLHttpRequest();
  xhttp.open('GET', componentPath, true);
  xhttp.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      target.innerHTML = this.responseText;

      if (id === 'popular-products') {
        renderProductGrid();
      }

      if (id === 'vehicle-search') {
        initVehicleSearch();
      }
    }
  };
  xhttp.send();
}

function loadAllComponents() {
  Object.keys(componentMap).forEach(function(key) {
    loadComponent(key, componentMap[key]);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  loadAllComponents();
});
