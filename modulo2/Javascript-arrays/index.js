//     Solicitar Notas de: Primer Parcial, Segundo Parcial y Proyecto Final.
//     Ingresar el valor para cada nota.
//     Calcular el promedio.
//     Validar si gana o pierde la materia.

function calcularPromedio() {
    const notas = [];
    const nota1 = prompt('Ingrese la nota del primer parcial.');
    const nota2 = prompt('Ingrese la nota del segundo parcial.');
    const nota3 = prompt('Ingrese la nota del proyecto final.');
    let notasSumadas = 0;

    notas.push(nota1);
    notas.push(nota2);
    notas.push(nota3);

    for (let contador = 0; contador < notas.length; contador++) {
        const nota = notas[contador];
        notasSumadas += parseFloat(nota);
    }
  
  const promedio = notasSumadas / notas.length;
  console.log("El promedio de notas es 😎: ", promedio);
}


function calcularAprobados() {
  const cantidadDeAlumnos = parseInt(prompt('Ingrese la cantidad de alumnos'));
  const notas = [];
  let cantidadDeAprobados = 0;

  for (let i = 0; i < cantidadDeAlumnos; i++) {
      const nota = parseInt(prompt('Ingrese una nota'));
      notas.push(nota);
  }

  for (let i = 0; i < notas.length; i++) {
      const nota = notas[i];
      if (nota >= 6) {
          cantidadDeAprobados += 1;
      }
  }
  console.log(`Del total de alumnos ${cantidadDeAlumnos} ,la cantidad de aprobados es: 😏 ${cantidadDeAprobados}`);
  // console.log('Del total de alumnos ' + cantidadDeAlumnos + ',la cantidad de aprobados es: 😏' + cantidadDeAprobados);
}