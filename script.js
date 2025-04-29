// Inicializar EmailJS
emailjs.init("YOUR_USER_ID"); // Reemplaza con tu User ID de EmailJS

const products = [
  {
    id: 1,
    name: "Lost Mary Mixer 30K Puffs",
    price: 30000,
    image: "lost_mary_mixer.jpg"
  },
  {
    id: 2,
    name: "Geekbar Pulse X 25K Puffs",
    price: 28000,
    image: "geekbar_pulse_x.jpg"
  },
  {
    id: 3,
    name: "Ignite V150 15K Puffs",
    price: 18000,
    image: "ignite_v150.jpg"
  },
  {
    id: 4,
    name: "Ignite V250 25K Puffs",
    price: 28000,
    image: "ignite_v250.jpg"
  },
  {
    id: 5,
    name: "Elfbar 40K Puffs",
    price: 35000,
    image: "elfbar_40k.jpg"
  }
];

let cart = [];

function loadProducts() {
  const productList = document.getElementById("product-list");
  products.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>Precio: $${product.price}</p>
      <button onclick="addToCart(${product.id})">Comprar</button>
    `;
    productList.appendChild(card);
  });
}

function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById("cart-items");
  const cartCount = document.getElementById("cart-count");
  const cartTotal = document.getElementById("cart-total");
  cartItems.innerHTML = "";
  let total = 0;
  cart.forEach((item, index) => {
    total += item.price;
    const li = document.createElement("li");
    li.innerHTML = `
      ${item.name} - $${item.price}
      <button onclick="removeFromCart(${index})">🗑️</button>
    `;
    cartItems.appendChild(li);
  });
  cartCount.textContent = cart.length;
  cartTotal.textContent = total;
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();
}

function toggleCart() {
  const cartElement = document.getElementById("cart");
  cartElement.style.display = cartElement.style.display === "none" ? "flex" : "none";
}

function checkout() {
  const name = prompt("Ingrese su nombre completo:");
  const email = prompt("Ingrese su correo electrónico:");
  const address = prompt("Ingrese su dirección:");
  const instructions = prompt("Ingrese indicaciones adicionales:");

  const orderDetails = cart.map(item => `${item.name} - $${item.price}`).join("\n");
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const templateParams = {
    to_name: "Vapes Beta Shop",
    from_name: name,
    message: `Pedido:\n${orderDetails}\n\nTotal: $${total}\n\nDirección: ${address}\nIndicaciones: ${instructions}`,
    reply_to: email
  };

  emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", templateParams)
    .then(response => {
      alert("Pedido enviado correctamente. Redirigiendo a Mercado Pago...");
      // Redirigir a Mercado Pago
      window.location.href = "https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=YOUR_PREFERENCE_ID";
    }, error => {
      alert("Error al enviar el pedido. Por favor, inténtelo de nuevo.");
    });
}

window.onload = loadProducts;
