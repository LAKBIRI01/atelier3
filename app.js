const products = [
    { name: 'Ordinateur portable', price: 999, category: 'Électronique', stock: 10 },
    { name: 'Casque', price: 199, category: 'Électronique', stock: 5 },
    { name: 'Chaise', price: 150, category: 'Meubles', stock: 2 },
    { name: 'Table', price: 300, category: 'Meubles', stock: 7 },
    { name: 'Stylo', price: 10, category: 'Fournitures', stock: 50 },
    { name: 'Cahier', price: 25, category: 'Fournitures', stock: 3 }
  ];
  
  function afficherProduits(produits) {
    const ul = document.getElementById('productList');
    ul.innerHTML = '';
    produits.forEach(p => {
      const li = document.createElement('li');
      li.textContent = `${p.name} - ${p.price} MAD - Stock: ${p.stock}`;
      ul.appendChild(li);
    });
  }
  
  function calculerPrixTotal(produits) {
    const total = produits.reduce((sum, p) => sum + p.price, 0);
    document.getElementById('totalPrice').textContent = total.toFixed(2);
  }
  
  afficherProduits(products);
  calculerPrixTotal(products);
  
  document.getElementById('search').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const filtered = products.filter(p => p.name.toLowerCase().includes(query));
    afficherProduits(filtered);
    calculerPrixTotal(filtered);
    updateChart(filtered);
  });
  
  document.getElementById('sort').addEventListener('change', function() {
    const value = this.value;
    let sorted = [...products];
    if (value === 'price') {
      sorted.sort((a, b) => a.price - b.price);
    } else if (value === 'stock') {
      sorted.sort((a, b) => a.stock - b.stock);
    }
    afficherProduits(sorted);
    calculerPrixTotal(sorted);
    updateChart(sorted);
  });
  
  let chart;

function updateChart(data) {
  const ctx = document.getElementById('productChart').getContext('2d');
  if (chart) chart.destroy(); // Supprimer ancien graphique

  chart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: data.map(p => p.name),
      datasets: [{
        label: 'Prix (MAD)',
        data: data.map(p => p.price),
        backgroundColor: 'rgba(75, 192, 192, 0.6)'
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}

updateChart(products);
