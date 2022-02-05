// -----------------------------------registro de cliente----------------------------------------------------//

let nombreCliente = 0;
let direccion = 0;
let dni = 0;
let celular = 0;

class DatosPersonales {
  constructor(nombreCliente, direccion, dni, celular) {
    (this.nombreCliente = nombreCliente),
      (this.direccion = direccion),
      (this.dni = dni),
      (this.celular = celular);
  }
}
alert(
  "------------------Bienvenidos a BIO+MARKET -------------------------\n\npara poder seguir registrate"
);
const ingresarcliente = [];

let nombreClientep = prompt("ingresa nombre : ");
let direccionp = prompt("ingresa direccion : ");
let dnip = prompt("ingresa dni : ");
let celularp = prompt("ingresar celular : ");

ingresarcliente.push(
  new DatosPersonales(nombreClientep, direccionp, dnip, celularp)
);

for (const cliente of ingresarcliente) {
  console.log(ingresarcliente);
  console.log(cliente.nombreCliente);
  console.log(cliente.direccion);
  console.log(cliente.dni);
  console.log(cliente.celular);
}
alert("tus datos se guardaron correctamente :D!!!!");
//------------------------------------------PRODUCTOS DISPONIBLES A LA VENTA--------------------------------------------------//

nombre = 0;
costo = 0;
stock = 0;
categoria = 0;

class Producto {
  constructor(nombre, costo, stock, categoria) {
    this.nombre = nombre.toUpperCase();
    this.costo = parseFloat(costo);
    this.stock = stock;
    this.categoria = categoria;
  }
}
// array de productos
const productos = [];
productos.push(new Producto("Papaya", "8", "40", "1"));
productos.push(new Producto("Fresa", "10", "50", "2"));
productos.push(new Producto("Durazno", "9", "30", "3"));
productos.push(new Producto("pan", "5", "25", "4"));
productos.push(new Producto("pollo", "12", "15", "5"));
productos.push(new Producto("Fideos", "10", "15", "6"));
productos.push(new Producto("galletas", "8", "15", "7"));

const frutas = productos.filter((producto) => producto.categoria < 4);
console.log(frutas);

const variados = productos.filter((producto) => producto.categoria > 3);
console.log(variados);

alert(
  "Hola :) en  BIO+ MARKET\n\n Tenemos los productos de categoria Fruta : \n\n" +
    JSON.stringify(frutas) +
    "\n\n tambien contamos con la categoria de productos Variado : \n\n" +
    JSON.stringify(variados)
);

//--------------------------------- compra de productos-----------------------------------//

let producto = 0;
let precio = 0;
let cantidad = 0;
let repetir = true;
let arregloProductos = [];
let mostarProductos = "";

class Pedido {
  constructor(producto, precio, cantidad) {
    (this.producto = producto),
      (this.precio = precio),
      (this.cantidad = cantidad);
  }
}
respuesta = parseInt(
  prompt(
    " ------------------------------BIO+MARKET---------------------------------\n\nEscoge el numero de opccion de la operacion que deas realisar luego escribe el numero y da click en aceptar . \n1.Comprar carrito\n2.Salir de Bio+ MARKET"
  )
);
do {
  if (respuesta == 1) {
    comprar();
    alert("Producto ingresado con exito. :");
    respuesta = parseInt(
      prompt(
        "Escoge el numero de opcion de la operacion que deas realizar luego escribe el numero y da click en aceptar .   \n1.Comprar Productos\n2.Salir de Bio+ MARKET"
      )
    );
  } else if (respuesta == 2) {
    repetir = false;
    alert("Ha seleccionado salir.");
  } else {
    alert(
      "Ingresaste una opción incorrecta. Por favor vuelva a intentarlo. :("
    );
    respuesta = parseInt(
      prompt(
        "Escoge el numero de opcion de la operacion que deseas realizar luego escribe el numero y da click en aceptar . \n1.Comprar Productos\n2.Salir de Bio+ MARKET"
      )
    );
  }
} while (repetir);

function comprar() {
  let producto = prompt(
    "¿que deseas comprar?\n   \n1.Papaya. \n2.Fresa. \n3.Durazno. \n4.Pan.   \n5.Pollo.   \n6.Fideoas.  \n7.Galletas. "
  );
  let cantidad = parseInt(prompt("¿Cuántos  platos deas pedir?", 0));

  switch (producto) {
    case "1":
      producto = "Papaya";
      precio = 8;

      break;
    case "2":
      producto = "Fresa";
      precio = 10;

      break;
    case "3":
      producto = "Durazno";
      precio = 9;

      break;
    case "4":
      producto = "Pan";
      precio = 5;
      break;
    case "5":
      producto = "Pollo";
      precio = 12;

      break;
    case "6":
      producto = "Fideos";
      precio = 10;

      break;
    case "7":
      producto = "Galletas";
      precio = 8;

      break;
    default:
      alert("Alguno de los datos ingresados es incorrecto");
  }

  nuevoProducto = new Pedido(producto, precio, cantidad);
  arregloProductos.push(nuevoProducto);

  console.log(nuevoProducto);
}

function recorrerArreglo(item, index) {
  // mostarProductos += index + ": " + item + "<br>"; // object
  mostarProductos += index + ": " + JSON.stringify(item) + "<br>";
}
console.log(typeof `Arreglo productos: ${JSON.stringify(arregloProductos)}`); // string
console.log(typeof arregloProductos); // object

arregloProductos.forEach(recorrerArreglo);

console.log(`Arreglo productos: ${JSON.stringify(arregloProductos)}`);

console.log(arregloProductos);

console.log(JSON.stringify(arregloProductos.length));

const listaNombres = arregloProductos.map((producto) => producto.producto);
console.log(listaNombres);

const total = arregloProductos.reduce(
  (acc, el) => acc + el.precio * el.cantidad,
  0
);
console.log(total);

alert(
  "------------------------- Resumen de la compra -------------------------\n\n" +
    " hola esta es tu compra y el delivery " +
    " es gratis en todas las compras \n" +
    " productos comprados son   :  " +
    JSON.stringify(arregloProductos.length) +
    "\n" +
    " nombre de  productos comprados  :  " +
    listaNombres +
    "\n" +
    " el total es de  :  " +
    "s/." +
    total +
    "\n\n" +
    "--------------------- Gracias por tu compras ----------------------------"
);
