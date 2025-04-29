function comprar(producto) {
  alert(`Seleccionaste comprar: ${producto}\nPronto se abrirá la página de pago.`);
  // Acá podrías redirigir a una página especial de cada producto
  window.location.href = "https://www.mercadopago.com.ar"; // Cambiar por el link real
}

// Envío del formulario
document.getElementById('formulario-contacto').addEventListener('submit', function(e) {
  e.preventDefault();
  const nombre = document.getElementById('nombre').value;
  const email = document.getElementById('email').value;
  const mensaje = document.getElementById('mensaje').value;

  const mailtoLink = `mailto:vapesbeta@gmail.com?subject=Consulta Beta Vapes&body=Nombre: ${nombre}%0ACorreo: ${email}%0AMensaje: ${mensaje}`;
  window.location.href = mailtoLink;
});
