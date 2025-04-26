function showForm(productName, productPrice) {
  document.getElementById('purchaseForm').classList.remove('hidden');
  document.getElementById('productName').value = productName;
  document.getElementById('productPrice').value = productPrice;
}

function cancelPurchase() {
  document.getElementById('purchaseForm').classList.add('hidden');
}

function confirmPurchase(event) {
  event.preventDefault();
  const name = document.getElementById('productName').value;
  const price = document.getElementById('productPrice').value;
  const quantity = document.getElementById('quantity').value;
  window.location.href = `checkout.html?product=${encodeURIComponent(name)}&price=${price}&quantity=${quantity}`;
}