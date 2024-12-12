console.log("holaa!");
// 1 function: seleccion de productos
// 2 function: mostrar detalle y precio total de compra
// 3 function: mostrar mensaje de compra exitosa

class Producto {
  constructor(id, nombre, descripcion, stock, precio) {
    this.id = id;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.stock = stock;
    this.precio = precio;
  }
  verProductos() {
    console.log(
      `idProducto: ${this.id} producto: ${this.nombre},descripcion: ${this.descripcion} tiene un precio de: ${this.precio}`
    );
  }
}
// ---creacion de array con productos--
const productos = [];
productos.push(new Producto(1, "zapatilla", "zapatillas blancas", 25, 85000));
productos.push(new Producto(2, "remera", "remera negra", 40, 30000));
productos.push(new Producto(3, "buzo", "buzo estampado gatito", 10, 45000));
productos.push(new Producto(4, "bermuda", "bermuda cargo", 5, 63000));
productos.push(new Producto(5, "zapatilla", "zapatillas negras", 15, 90000));
productos.push(new Producto(6, "bermuda", "bermuda militar", 8, 43000));
//--- seleccion de producto---
function seleccionProducto() {
  const seleccion = [];
  let seguirComprando = true;
  //muestro productos en consola
  for (const prod of productos) {
    prod.verProductos();
  }
  // crear looop para seleccionar productos deseados
  while (seguirComprando) {
    let compra = parseInt(
      prompt("seleccione el id del producto que desee comprar:  ")
    );
    const productoEncontrado = productos.find((p) => p.id === compra);
    if (productoEncontrado) {
      seleccion.push(productoEncontrado);
      alert(`se agrego el producto: ${productoEncontrado.nombre} al carrito!`);
    } else {
      alert("debe ingresar un id valido!");
      seguirComprando = confirm(" desea volver a intentar?");
      continue;
    }
    // Preguntar si quiere seguir comprando
    seguirComprando = confirm("¿Quieres agregar otro producto?");
  }
  return seleccion;
}
//-------mostrar detalle y precio de compra----
function mostrarProducto(carrito) {
  let total = 0;
  if (carrito.length > 0) {
    console.log("Detalle de compra:");
    carrito.forEach((prod) => {
      total = prod.precio + total;
      console.log(` ${prod.nombre} | precio: ${prod.precio}'`);
    });
  } else {
    alert("no hay productos en el carrito!");
  }
  console.log("total compra: " + total);
  return total;
}
//-------function mostrar mensaje de compra exitosa----
function compraConfirmada(total) {
  if (total > 0) {
    alert("Felicitaciones compra finalizada !!");
  }
}
//----------------llamado de funciones---------------------------------
const carrito = seleccionProducto();

const total = mostrarProducto(carrito);
compraConfirmada(total);
