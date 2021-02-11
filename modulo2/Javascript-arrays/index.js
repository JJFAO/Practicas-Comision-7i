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
    console.log('El promedio de notas es 😎: ', promedio);
}

function calcularAprobados() {
    const cantidadDeAlumnos = parseInt(prompt('Ingrese la cantidad de alumnos'));
    const notas = [];
    let cantidadDeAprobados = 0;

    for (let i = 0; i < 5; i++) {
        const nota = parseInt(prompt('Ingrese una nota'));
        notas.push(nota);
    }

    for (let i = 0; i < notas.length; i++) {
        const nota = notas[i];
        if (nota >= 6) {
            cantidadDeAprobados += 1;
        }
    }
    console.log(
        `Del total de alumnos ${cantidadDeAlumnos} ,la cantidad de aprobados es: 😏 ${cantidadDeAprobados}`
        // console.log('Del total de alumnos ' + cantidadDeAlumnos + ',la cantidad de aprobados es: 😏' + cantidadDeAprobados);
    );
}

const ricky = { rol: 'Co-mentor', onda: 'buena' };
// console.log(ricky.onda);
ricky.rol = 'Mentor';
// console.log(ricky)

const array = [1, 2, 3];
// console.log('array', array);
array[0] = 5;
// console.log('array', array);

// -----------------------
// "Hardcodear" un array de objetos de productos, con nombre y precio.
// Pedir al usuario un nombre y precio,
// para agregar un producto al array.

const productos = [
    { nombre: 'manzana 🍎', precio: 50 },
    { nombre: 'pera 🍐', precio: 40 },
    { nombre: 'naranja 🍊', precio: 30 },
];

function agregarProducto() {
    const nombre = prompt('Ingrese el nombre del producto.');
    const precio = parseFloat(prompt('Ingrese el precio del producto.'));

    const producto = { nombre: nombre, precio: precio };
    
    productos.push(producto);
}

//-------- Adicional
// Que el usuario pueda seleccionar distintos productos de la lista.
// Que estos se agreguen a un array de compras.
// Y al finalizar que muestre la suma total de todos los productos
// que seleccionó el usuario.

function mostrarProductos() {
    for (let i = 0; i < productos.length; i++) {
        const producto = productos[i];
        console.log(`codigo: ${i}, ${producto.nombre}, $${producto.precio}`);
    }
}

const listaCompras = [];

function seleccionarProducto() {
    const codigo = prompt('Ingrese el código del producto');
    console.log(`El código ${codigo}, corresponde al producto ${productos[codigo].nombre}`);
    listaCompras.push(codigo);
}

function calcularTotalCompra() {
    let sumaTotal = 0;
    for (let i = 0; i < listaCompras.length; i++) {
        const codigo = listaCompras[i];
        const precio =  productos[codigo].precio;
        sumaTotal += precio;
    }
    console.log(`La suma total de la compra es: ${sumaTotal}🍕`);
}