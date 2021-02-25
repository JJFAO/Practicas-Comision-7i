const formularioForm = document.getElementById('formulario');
const emailInput = document.getElementById('inputEmail');
const passInput = document.getElementById('inputPass');
const nombreInput = document.getElementById('inputNombre');
const rolInput = document.getElementById('inputRol');
const json = localStorage.getItem('usuarios');
const data = JSON.parse(json);
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
    const json = JSON.stringify(usuarios);
    localStorage.setItem('usuarios', json);
};

