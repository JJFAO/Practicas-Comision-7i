function evaluar10Numeros() {
    // Para resolver este problema necesitaremos de varios contadores porque se requiere registrar distintas cantidades.
    let contadorDeNegativos = 0;
    let contadorDePositivos = 0;
    let contadorDeMultiplos15 = 0;
    // Y de un acumulador porque es necesario calcular una suma dentro del bucle.
    let sumadorPares = 0;

    for (let contador = 0; contador < 3; contador++) {
        // Usamos un bucle for () para pedir 10 números al usuario y evaluar cada uno.
        const numero = prompt('Ingrese un número.');
        // Guardamos en una constante el número ingresado ya parseado/convertido a entero.
        const numeroEntero = parseInt(numero);

        if (numero < 0) {
            // Le sumamos +1 al contador de Negativos si se cumple que numeroEntero es negativo.
            contadorDeNegativos = contadorDeNegativos + 1;
        } else if (numero > 0) {
            contadorDePositivos = contadorDePositivos + 1;
        }

        const esPar = numeroEntero % 2 === 0;
        if (esPar) {
            // Sumamos el número ingresado al acumulador si se cumple que el número ingresado es par.
            sumadorPares = sumadorPares + numeroEntero;
        }

        const esMultiplo15 = numeroEntero % 15 === 0;
        if (esMultiplo15) {
            contadorDeMultiplos15 = contadorDeMultiplos15 + 1;
        }
    }

    console.log('La cantidad de negativos: 😎', contadorDeNegativos);
    console.log('La cantidad de positivos: 😒', contadorDePositivos);
    console.log('La cantidad de múltiplos de 15: 🤞', contadorDeMultiplos15);
    console.log('La suma de números pares: 😏', sumadorPares);
    // Al finalizar la ejecución del bucle, mostramos los valores que guardan las variables.
}
