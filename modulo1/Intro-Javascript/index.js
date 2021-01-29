// console.log('hola mundo');

// console.log() es una función para mostrar mensajes o datos en la consola del navegador.

// console.log(); alert(); prompt(); confirm(); son funciones definidas en el navegador que podemos utilizar.

// alert('Esto es un alerta');

let texto = "¿Desea continuar?";


// let booleano = confirm(texto);

texto = "Otro texto";

// console.log(texto, booleano);

// console.log(texto + 'Más texto')
//----------


let numero = 1000; // dato de tipo number

let resultado = numero + 10; // primero se ejecuta la división y por último se asigna el resultado a la variable.

// console.log('Resultado: ' + resultado); // primero se concatenan los valores y el resultado es mostrado en consola.

// let textoDelUsuario = prompt('Ingrese un mensaje');

// console.log("textoDelUsuario", textoDelUsuario)


function mostrarHola() {
    let hola = 'hola mundo'
    console.log(hola)
}

// mostrarHola();

function mostrarMensaje(mensaje) {
    alert('El mensaje es: ' + mensaje)
}

mostrarMensaje('hola mundo');