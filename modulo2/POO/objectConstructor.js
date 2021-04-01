// Object Literal
const producto = {
    nombre: "celular",
    precio: 20000
}
console.log("producto", producto)

//Object Constructor

function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
}

const producto2 = new Producto("monitor", 30000)
console.log("producto2", producto2)
