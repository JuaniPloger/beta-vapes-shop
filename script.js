const products = [
  {
    name: "Lost Mary Mixer",
    puffs: "30.000 Puffs",
    price: 30000,
    image: "assets/lostmary.png",
  },
  {
    name: "Elfbar 40K",
    puffs: "40.000 Puffs",
    price: 35000,
    image: "assets/elfbar.png",
  },
  {
    name: "Geekbar Pulse X",
    puffs: "25.000 Puffs",
    price: 28000,
    image: "assets/geekbar.png",
  },
  {
    name: "Ignite V150",
    puffs: "15.000 Puffs",
    price: 18000,
    image: "assets/ignitev150.png",
  },
  {
    name: "Ignite V250",
    puffs: "25.000 Puffs",
    price: 28000,
    image: "assets/ignitev250.png",
  },
];

const container = document.getElementById("products");

products.forEach((product) => {
  const card = document.createElement("div");
  card.classList.add("product-card");

  card.innerHTML = `
    <img src="${product.image}" alt="${product.name}" />
    <h3>${product.name}</h3>
    <p>${product.puffs}</p>
    <p class="price">$${product.price.toLocaleString()}</p>
    <button onclick="buyNow('${product.name}', ${product.price})">Comprar</button>
  `;

  container.appendChild(card);
});

function buyNow(name, price) {
  alert(`Elegiste comprar ${name} por $${price.toLocaleString()}`);
}
