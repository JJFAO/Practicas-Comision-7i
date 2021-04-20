// Esta función retorna un objeto de tipo Promise.
// Normalmente no crearemos objetos Promise sino que será el retorno algunas funciones externas,
// por ej. fetch() o axios.get() .
function resolveAfter2Seconds() {
    return new Promise(resolve => {
        // new Promise recibe como parámetro un callback o declaración de una función,
        // y esta a su vez recibe como argumento la función que debe ejecutar una vez completada
        // la operación asíncrona.
        setTimeout(() => {
            // Este setTimeOut simula la demora que tendría una operación asincrónica.
            resolve('resolved');
        }, 2000);
    });
}

// -------------
// Para poder utilizar el resultado o dato de una promesa, utilizamos el método then(),
// este recibe dos callbacks por parámetro. El primero es una función que se ejecutará
// cuando la operación haya terminado exitosamente, esta función recibe como argumento
// el dato obtenido de dicha operación. El segundo parámetro es una función que se ejecutara
// en caso de que falle la operación, y recibe como argumento un mensaje o detalle del error.

// Podemos declarar y guardar ambos callbacks en constantes para una mejor legibilidad.
const exitoCallback = (resultado) => console.log(resultado);
const falloCallback = (error) => console.log(error);

const promesa = resolveAfter2Seconds();
promesa.then(exitoCallback, falloCallback);


// ----------
// Como alternativa al método then() del objeto promise, podemos utilizar la sintaxis
// async await. Anteponemos la palabra async a una función,
// donde se ejecutaran las promesas. Lo que nos permite utilizar await dentro de esta función.
// Await hará que la ejecución de esta función se detenga hasta que la promesa
// se haya completado o rechazado.

const asyncCall = async () => {
    // Con el bloque try-catch podemos capturar si ocurre algún error
    // en los datos o ejecución de la promesa. 
    try {
        const resultado = await resolveAfter2Seconds();
        console.log(resultado)
    } catch (error) {
        console.log(error)
    }
}