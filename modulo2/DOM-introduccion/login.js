const formularioForm = document.getElementById('formulario');
const emailInput = document.getElementById('inputEmail');
const passInput = document.getElementById('inputPass');
const alertaDiv = document.getElementById('alerta');

const usuario = { email: 'admin@asd', pass: 'admin', nombre: 'Rick' }

formularioForm.onsubmit = function (event) {
  event.preventDefault();
  const coincideEmail = usuario.email === emailInput.value;
  const coincidePass = usuario.pass === passInput.value;
  if (coincideEmail && coincidePass) {
    alert(`Hola ${usuario.nombre}.`);
    alertaDiv.classList.add('d-none');
    window.location.href = './index.html';
  } else {
    // alertaDiv.style = "display: block !important"
    alertaDiv.classList.remove('d-none');
  }
}