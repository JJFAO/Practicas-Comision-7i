const rolesForm = document.getElementById('formularioRoles');
const crearRolInput = document.getElementById('nuevoRol');
const rolInput = document.getElementById('inputRol');
const rolesUl = document.getElementById('listaRoles');
let roles = JSON.parse(localStorage.getItem('roles')) || ['Dev', 'Master'];

function submitAltaRol(e) {
    e.preventDefault();
    const rol = crearRolInput.value;
    roles.push(rol);
    localStorage.setItem('roles', JSON.stringify(roles)); // Guardar en localStorage un dato asociado a la key "usuarios".
    mostrarRoles();
    // console.log('Se registró exitosamente un usuario. 👨‍💻');
    // formularioForm.reset(); // reset limpia los campos del formulario.
}

function mostrarRoles() {
    const rolesMap = roles.map(
        (rol) => `
            <option>${rol}</option>
        `
    ); // La función recorre y map genera un array nuevo sin modificar el array original.
    // // Recibe por parámetros la función que debe ejecutarse por cada elemento del array.
    rolInput.innerHTML = rolesMap.join('');

    const listaRolesMap = roles.map(
        (rol) => `
    <li>
        <span style="min-width: 150px; display: inline-block">${rol}</span>
        <button type="button" class="btn btn-sm btn-danger">Eliminar</button>
    </li>
    `
    );
    rolesUl.innerHTML = listaRolesMap.join('');
}

mostrarRoles();
rolesForm.onsubmit = submitAltaRol;
