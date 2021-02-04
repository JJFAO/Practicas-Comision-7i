// Se necesita un programa que pueda evaluar si un número ingresado es par.
// - Pedir un número al usuario.
// - Evaluar si es par el número ingresado.
// - Mostrar el resultado indicando si es par o impar.

function evaluarParidad() {
    // Esta función llama a prompt() para tomar un número ingresado por el usuario.
    const numero = prompt('Ingrese un número');
    const noValido = validarNumero(numero);
    // Luego se evalúa si el valor ingresado no es un número, si no lo es se muestra una alerta.
    if (noValido) {
        alert(`El valor ingresado: ${numero}. No es un número valido.`);
        return;
    }

    const resto = parseInt(numero) % 2;
    const esPar = resto === 0;
    if ('si') {
        alert(`El valor ingresado: ${numero}. Es un número par.`);
    } else {
        alert(`El valor ingresado: ${numero}. Es un número impar.`);
    }
}

function validarNumero(numero) {
    // Esta función devuelve verdadero si alguno de las 3 operaciones resulta en verdadero.
    return numero === null || numero === '' || isNaN(numero);
}
