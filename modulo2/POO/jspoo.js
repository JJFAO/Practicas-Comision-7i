// en 2015 llegan las clases a JS, que es una mejora del objectConstructor

// declaración de clase
class User {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }

    // Métodos, funciones especificas para la clase
    mostrarInfo() {
        return `Nombre: ${this.nombre} \nApellido: ${this.apellido}`;
    }
}

// Con la palabra reservada new, llamamos al método constructor de la clase.
// Lo que retorna una instancia u objeto generado a partir de una clase.
const user = new User('Ricky', 'Moreno');
console.log('user', user.nombre);
console.log(user.mostrarInfo());

//----- Herencia ------
// La palabra reservada extends hace que una clase extienda otra,
// es decir hereda todas las propiedades y métodos previamente declarados
// en la clase que extiende.
class ClienteCuenta extends User {
    constructor(nombre, apellido, saldo) {
        // La función reservada super(), llama al constructor de la clase extendida.
        super(nombre, apellido);
        this.saldo = saldo;
    }

    // Un método puede llamar a otros métodos,
    // incluso a los que heredan si extienden otra clase.
    mostrarInfoYSaldo() {
        return this.mostrarInfo() + 'El saldo es: ' + this.saldo;
    }
}

const cuenta = new ClienteCuenta('Rolling', 'Code', 200000);
cuenta.saldo = 3000000;
console.log('cuenta', cuenta);
console.log(cuenta.mostrarInfo());

//Propiedades privadas (nuevo)

class Usuario {
    #password;
    constructor(nombre, password) {
        // Se usa el prefijo _ para indicar que la propiedad
        // no debe ser modificada de forma directa por fuera de la clase.
        this._nombre = nombre;
        // Anteponer el # a la propiedad, es la forma propuesta aún no oficial
        // para declarar propiedades estrictamente privadas.
        // Es decir que que solo pueden ser accedidas y modificadas por los métodos de la clase.
        this.#password = password;
    }

    // Métodos, funciones especificas para la clase.
    mostrarInfo() {
        return `Nombre: ${this.nombre}`;
    }

    // Métodos para modificar propiedades del objeto.
    cambiarPassword(newPassword) {
        this.#password = newPassword;
    }
}

const usuario = new Usuario('Javier', 'contraseña');
console.log('usuario._nombre', usuario._nombre);
// Si intentamos modificar la propiedad #password, de forma directa,
// nos indicará un error de acceso en la consola.
// console.log('usuario.#password', usuario.#password);
