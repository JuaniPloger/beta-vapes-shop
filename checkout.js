window.onload = function() {
  const params = new URLSearchParams(window.location.search);
  const product = params.get('product');
  const price = params.get('price');
  const quantity = params.get('quantity');

  if (product && price && quantity) {
    const pedido = `${quantity} x ${product} ($${price} c/u)`;
    document.getElementById('pedido').innerText = pedido;
  }
}

function sendOrder(event) {
  event.preventDefault();
  alert('Pedido enviado correctamente. ¡Nos pondremos en contacto!');
}