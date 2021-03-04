// Guardamos en variables los nodos del html que manipularemos.
const tituloH1 = document.getElementById('titulo');
const formularioForm = document.getElementById('formulario');
const textoInput = document.getElementById('inputTexto');
console.log('textoInput', textoInput);
const listaUl = document.getElementById('lista');

// Agregar tareas a la lista
formularioForm.onsubmit = function (event) {
  event.preventDefault();
  const li = document.createElement("li");
  li.innerHTML = textoInput.value;
  listaUl.appendChild(li);
};


