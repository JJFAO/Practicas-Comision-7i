const formularioForm = document.getElementById('formulario');
const emailInput = document.getElementById('inputEmail');
const passInput = document.getElementById('inputPass');
const nombreInput = document.getElementById('inputNombre');
const rolInput = document.getElementById('inputRol');
const json = localStorage.getItem('usuarios'); // Traer de localStorage el dato asociado a la key usuarios.
const data = JSON.parse(json); // Convertir datos de un string JSON a código JavaScript.
const usuarios = data || [];

formularioForm.onsubmit = function (e) {
    e.preventDefault();
    const usuario = {
        email: emailInput.value,
        pass: passInput.value,
        nombre: nombreInput.value,
        rol: rolInput.value,
    };
    usuarios.push(usuario);
    const json = JSON.stringify(usuarios); // Convertir datos a un string JSON.
    localStorage.setItem('usuarios', json); // Guardar en localStorage un dato asociado a la key "usuarios".
};

