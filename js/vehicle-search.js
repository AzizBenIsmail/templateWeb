function initVehicleSearch() {
  const brandSelect = document.getElementById('searchBrand');
  const modelSelect = document.getElementById('searchModel');
  const yearSelect = document.getElementById('searchYear');
  const engineSelect = document.getElementById('searchEngine');

  if (!brandSelect || !KARHABTY_VEHICLES) return;

  Object.keys(KARHABTY_VEHICLES).forEach(brand => {
    const option = document.createElement('option');
    option.value = brand;
    option.textContent = brand;
    brandSelect.appendChild(option);
  });

  brandSelect.addEventListener('change', function() {
    const selectedBrand = this.value;
    modelSelect.innerHTML = '<option value="">Choisir un modèle</option>';
    yearSelect.innerHTML = '<option value="">Choisir une année</option>';
    engineSelect.innerHTML = '<option value="">Choisir une motorisation</option>';

    if (!selectedBrand) return;

    const models = KARHABTY_VEHICLES[selectedBrand].models;
    Object.keys(models).forEach(model => {
      const option = document.createElement('option');
      option.value = model;
      option.textContent = model;
      modelSelect.appendChild(option);
    });
  });

  modelSelect.addEventListener('change', function() {
    const selectedBrand = brandSelect.value;
    const selectedModel = this.value;
    yearSelect.innerHTML = '<option value="">Choisir une année</option>';
    engineSelect.innerHTML = '<option value="">Choisir une motorisation</option>';

    if (!selectedBrand || !selectedModel) return;

    const years = KARHABTY_VEHICLES[selectedBrand].models[selectedModel].years;
    years.forEach(year => {
      const option = document.createElement('option');
      option.value = year;
      option.textContent = year;
      yearSelect.appendChild(option);
    });

    const engines = KARHABTY_VEHICLES[selectedBrand].models[selectedModel].engines;
    engines.forEach(engine => {
      const option = document.createElement('option');
      option.value = engine;
      option.textContent = engine;
      engineSelect.appendChild(option);
    });
  });
}
