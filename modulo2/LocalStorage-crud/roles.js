const rolesForm = document.getElementById('formularioRoles');
const crearRolInput = document.getElementById('nuevoRol');
// const rolInput = document.getElementById('inputRol');
const rolesUl = document.getElementById('listaRoles');
let roles = JSON.parse(localStorage.getItem('roles')) || ['Dev', 'Master'];

function submitAltaRol(e) {
    e.preventDefault();
    const rol = crearRolInput.value;
    roles.push(rol);
    localStorage.setItem('roles', JSON.stringify(roles)); // Guardar en localStorage un dato asociado a la key "usuarios".
    mostrarRoles();
    console.log('Se agregó exitosamente un rol. 👨‍💻');
    rolesForm.reset(); // reset limpia los campos del formulario.
}

function mostrarRoles() {
    const rolesMap = roles.map(
        (rol) => `
            <option>${rol}</option>
        `
    );
    rolInput.innerHTML = rolesMap.join('');
    editarRolInput.innerHTML = rolesMap.join('');

    const listaRolesMap = roles.map(
        (rol) => `
    <li>
        <span style="min-width: 150px; display: inline-block">${rol}</span>
        <button onclick="eliminarRol('${rol}')" type="button" class="btn btn-sm btn-danger">Eliminar</button>
    </li>
    `
    );
    rolesUl.innerHTML = listaRolesMap.join('');
}

function eliminarRol(rol) {
    console.log(rol)
    const rolesFiltrados = roles.filter((r) => r !== rol);
    localStorage.setItem('roles', JSON.stringify(rolesFiltrados)); // Guardar en localStorage un dato asociado a la key "usuarios".
    roles = rolesFiltrados;
    console.log('Se eliminó exitosamente un rol. 👨‍💻');
    mostrarRoles();
}

mostrarRoles();
rolesForm.onsubmit = submitAltaRol;
