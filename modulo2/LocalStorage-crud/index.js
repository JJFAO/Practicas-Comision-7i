const formularioForm = document.getElementById('formulario');
const emailInput = document.getElementById('inputEmail');
const passInput = document.getElementById('inputPass');
const nombreInput = document.getElementById('inputNombre');
const usuariosTable = document.getElementById('tabla');
const rolInput = document.getElementById('inputRol');
const editarForm = document.getElementById('formularioEditar');
const editarNombreInput = document.getElementById('editarNombre');
const editarRolInput = document.getElementById('editarRol');
const json = localStorage.getItem('usuarios'); // Traer de localStorage el dato asociado a la key "usuarios".
let usuarios = JSON.parse(json) || []; // Convertir datos de un string JSON a código JavaScript.
let usuarioId = '';

function generarID() {
    // Math.random should be unique because of its seeding algorithm.
    // Convert it to base 36 (numbers + letters), and grab the first 9 characters
    // after the decimal.
    return '_' + Math.random().toString(36).substr(2, 9);
}

formularioForm.onsubmit = function (e) {
    e.preventDefault();
    const usuario = {
        id: generarID(),
        email: emailInput.value,
        pass: passInput.value,
        nombre: nombreInput.value,
        rol: rolInput.value,
        registro: Date.now(),
    };
    usuarios.push(usuario);
    const json = JSON.stringify(usuarios); // Convertir datos a un string JSON.
    localStorage.setItem('usuarios', json); // Guardar en localStorage un dato asociado a la key "usuarios".
    mostrarUsuarios();
    console.log("Se registró exitosamente un usuario. 👨‍💻");
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
                <td>
                    <button onclick="mostrarDetalle('${usuario.id}')" type="button" class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#modalDetalle">Ver detalle</button>
                    <button onclick="cargarModalEditar('${usuario.id}')" type="button" class="btn btn-success btn-sm" data-bs-toggle="modal"
                    data-bs-target="#modalEditar">Editar</button>
                    <button onclick="eliminarUsuario('${usuario.id}')" class="btn btn-danger btn-sm">Eliminar</button>
                </td>
            </tr>
        `;
        filas.push(tr);
    }
    usuariosTable.innerHTML = filas.join('');
}

mostrarUsuarios();

function eliminarUsuario(id) {
    // const usuariosFiltrados = usuarios.filter((usuario) => usuario.id !== id);

    let usuariosFiltrados = [];
    for (let i = 0; i < usuarios.length; i++) {
        const usuario = usuarios[i];
        const coincideId = usuario.id === id;
        if (!coincideId) {
            usuariosFiltrados.push(usuario);
        }
    }
    const json = JSON.stringify(usuariosFiltrados);
    localStorage.setItem('usuarios', json);
    usuarios = usuariosFiltrados;
    console.log("Se eliminó exitosamente un usuario. 👨‍💻");
    mostrarUsuarios();
}

function mostrarDetalle(id) {
    const usuarioEncontrado = usuarios.find((usuario) => usuario.id === id);
    const detalleDiv = document.getElementById('detalleUsuario');
    const fecha = new Date(usuarioEncontrado.registro);
    console.log('mostrarDetalle - fecha', fecha);
    const detallesUsuario = `
        <p>Email: ${usuarioEncontrado.email}</p>
        <p>Nombre: ${usuarioEncontrado.nombre}</p>
        <p>Rol: ${usuarioEncontrado.rol}</p>
        <p>Fecha de registro: ${fecha.toLocaleString()}</p>
    `;
    detalleDiv.innerHTML = detallesUsuario;
}

// Esta función carga los datos del usuario seleccionado,
// en los campos del formulario del documento HTML.
function cargarModalEditar(id) {
    // Buscar el usuario en el array usando el método find().
    const usuarioEncontrado = usuarios.find((usuario) => usuario.id === id);
    editarNombreInput.value = usuarioEncontrado.nombre;
    editarRolInput.value = usuarioEncontrado.rol;
    // Actualizar el valor de la variable global usuarioId, con el id del usuario encontrado.
    usuarioId = usuarioEncontrado.id;
}

// Al evento submit del formulario de edición le asignamos esta función,
// que actualiza al usuario seleccionado, con los datos ingresados.
editarForm.onsubmit = function editarUsuario(e) {
    e.preventDefault();
    // Actualizar un usuario del array, usando map().
    const usuariosModificado = usuarios.map((usuario) => {
        // Usamos el id de usuario guardado en usuarioId,
        // para modificar solo al usuario que coincida con este.
        if (usuario.id === usuarioId) {
            // Usar spread syntax para copiar las propiedades de un objeto a otro.
            const usuarioModificado = {
                ...usuario,
                nombre: editarNombreInput.value,
                rol: editarRolInput.value,
            };
            return usuarioModificado;
        } else {
            // Retornar el usuario sin modificar en los casos que no coincida el id.
            return usuario;
        }
    });

    // Esto puede ser expresado también con el operador ternario:
    // const usuariosModificado = usuarios.map((usuario) => (usuario.id === usuarioId) ? {
    //         ...usuario,
    //         nombre: editarNombreInput.value,
    //         rol: editarRolInput.value,
    //     }
    //     : usuario
    // );

    const json = JSON.stringify(usuariosModificado);
    // Guardar lista de usuarios en localStorage.
    localStorage.setItem('usuarios', json);
    usuarios = usuariosModificado;
    console.log("Se modificó exitosamente un usuario. 👨‍💻");
    mostrarUsuarios();
    // Ocultar el modal con las funciones incluidas en bootstrap.
    const modalDiv = document.getElementById('modalEditar');
    const modalBootstrap = bootstrap.Modal.getInstance(modalDiv);
    modalBootstrap.hide();
};

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
