// Un uso que le daremos a las funciones es el de contener una secuencia de instrucciones
// que queramos ejecutar y posiblemente reutilizar. ('modularizar')
// Sería conveniente separar los ejercicios de práctica en distintas funciones por este motivo,
// y para evitar tener mucho código comentado.

// Para este ejemplo vamos a llamar a estas funciones en el evento click de un botón en el html.

// Declaramos una función bucleEvaluarParidad que llamara a su vez a evaluarParidad.
function bucleEvaluarParidad3() {
    // Esta función tiene un bucle que se repetirá mientras que se cumpla la condición indicada.
    // Cuando esta no se cumpla, es decir que la condición resulte en false, saldrá del bucle.
    let contador = 0;
    
    while (contador < 3) {
        // Mientras el contador sea menor a 3, el resultado será true.
        evaluarParidad();
        contador++;
        // el operador ++ le suma +1 a contador, esto es lo que hará que el bucle deje de repetirse cuando no se cumpla la condición.
    }
    console.log('Terminó el bucle');
}

function evaluarParidadEnBucle() {
    // Aquí el bucle se repetirá mientras el usuario presione Aceptar en la ventana del confirm().
    let aceptar = true;
    
    while (aceptar) {
        evaluarParidad();
        aceptar = confirm('¿Desea ingresar otro número para evaluar?');
    }
}
