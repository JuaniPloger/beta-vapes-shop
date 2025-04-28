
const products = [
  { name: "Ignite V150", price: 23000, image: "images/ignite_v150.jpg" },
  { name: "Ignite V250", price: 30000, image: "images/ignite_v250.jpg" },
  { name: "Geekbar Pulse X", price: 27000, image: "images/geekbar_pulse_x.jpg" },
  { name: "Lost Mary Mixer", price: 30000, image: "images/lost_mary_mixer.jpg" },
  { name: "Elfbar 40k", price: 40000, image: "images/elfbar_40k.jpg" }
];

function renderProducts(list = products) {
  const container = document.getElementById('products');
  container.innerHTML = '';
  list.forEach(p => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = \`
      <img src="\${p.image}" alt="\${p.name}">
      <h3>\${p.name}</h3>
      <p>$\${p.price}</p>
      <button onclick="buyProduct('\${p.name}')">Comprar</button>
    \`;
    container.appendChild(card);
  });
}

function buyProduct(productName) {
  window.location.href = 'checkout.html?product=' + encodeURIComponent(productName);
}

function orderByPrice() {
  const sorted = [...products].sort((a, b) => a.price - b.price);
  renderProducts(sorted);
}

function showCart() {
  alert('Todavía no implementamos el carrito completo, ¡pero estamos trabajando en eso!');
}

window.onload = renderProducts;
