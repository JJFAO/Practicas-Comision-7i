const formularioForm = document.getElementById('formulario');
const emailInput = document.getElementById('inputEmail');
const passInput = document.getElementById('inputPass');
const nombreInput = document.getElementById('inputNombre');
const usuariosTable = document.getElementById('tabla');
const rolInput = document.getElementById('inputRol');
const json = localStorage.getItem('usuarios'); // Traer de localStorage el dato asociado a la key "usuarios".
const usuarios = JSON.parse(json) || []; // Convertir datos de un string JSON a código JavaScript.

function generarID() {
    // Math.random should be unique because of its seeding algorithm.
    // Convert it to base 36 (numbers + letters), and grab the first 9 characters
    // after the decimal.
    return '_' + Math.random().toString(36).substr(2, 9);
};

formularioForm.onsubmit = function (e) {
    e.preventDefault();
    const usuario = {
        id: generarID(),
        email: emailInput.value,
        pass: passInput.value,
        nombre: nombreInput.value,
        rol: rolInput.value,
    };
    usuarios.push(usuario);
    const json = JSON.stringify(usuarios); // Convertir datos a un string JSON.
    localStorage.setItem('usuarios', json); // Guardar en localStorage un dato asociado a la key "usuarios".
    mostrarUsuarios();
    formularioForm.reset(); // reset limpia los campos del formulario.
};

function mostrarUsuarios() {
    // const usuariosMap = usuarios.map(function (usuario) {
    //     return `
    //         <tr>
    //             <td>${usuario.nombre}</td>
    //             <td>${usuario.email}</td>
    //             <td>${usuario.rol}</td>
    //         </tr>
    //     `;
    // }); // La función recorre y map genera un array nuevo sin modificar el array original.
    // // Recibe por parámetros la función que debe ejecutarse por cada elemento del array.
    // usuariosTable.innerHTML = usuariosMap.join('');
    let filas = [];
    for (let i = 0; i < usuarios.length; i++) {
        const usuario = usuarios[i];
        const tr = `
            <tr>
                <td>${usuario.nombre}</td>
                <td>${usuario.email}</td>
                <td>${usuario.rol}</td>
            </tr>
        `;
        filas.push(tr);
    }
    usuariosTable.innerHTML = filas.join('');
}

mostrarUsuarios();

var numbers = [1, 4, 9];

// Ejemplo usando array map
// function mapRoots(num) {
//     console.log('mapRoots - num', num);
//     console.log('mapRoots - Math.sqrt(num)', Math.sqrt(num));
//     return Math.sqrt(num);
// };

// var roots = numbers.map(mapRoots);
// console.log('numbers', numbers);
// console.log('roots', roots);
