//------------------------------ CARRITO DE COMPRA--------------------------------------------//

const carrito = document.getElementById("carrito");
const Productos = document.getElementById("lista-productos");
const listaProductos = document.querySelector("#lista-carrito");
const vaciarCarritoBtn = document.getElementById("vaciar-carrito");

cargarEventListeners();

function cargarEventListeners() {
  Productos.addEventListener("click", comprarProducto);
  carrito.addEventListener("click", eliminarProducto);
  vaciarCarritoBtn.addEventListener("click", vaciarCarrito);
  document.addEventListener("DOMContentLoaded", leerLocalStorage);
}

function comprarProducto(e) {
  e.preventDefault();
  if (e.target.classList.contains("agregar-carrito")) {
    const Producto = e.target.parentElement.parentElement;
    leerDatosProducto(Producto);
  }
}

function leerDatosProducto(Producto) {
  const infoProducto = {
    imagen: Producto.querySelector("img").src,
    titulo: Producto.querySelector("h4").textContent,
    precio: Producto.querySelector(".precio span").textContent,
    id: Producto.querySelector("a").getAttribute("data-id"),
    cantidad: Producto.querySelector("a").getAttribute("cantidad"),
  };

  insertarCarrito(infoProducto);
}

function insertarCarrito(Producto) {
  const row = document.createElement("tr");
  row.innerHTML = `
       <td>
           <img src="${Producto.imagen}" width=100> 
       </td> 
       <td>${Producto.titulo}</td>
       <td>${Producto.precio}</td>
       <td>
        <a href="#" class="borrar-Producto" data-id="${Producto.id}">X</a>
       </td>
    `;
  listaProductos.appendChild(row);
  guardarProductoLocalStorage(Producto);
}

function eliminarProducto(e) {
  e.preventDefault();

  let Producto, ProductoId;

  if (e.target.classList.contains("borrar-Producto")) {
    e.target.parentElement.parentElement.remove();
    Producto = e.target.parentElement.parentElement;
    ProductoId = Producto.querySelector("a").getAttribute("data-id");
  }
  eliminarProductoLocalStorage(ProductoId);
}

function vaciarCarrito() {
  while (listaProductos.firstChild) {
    listaProductos.removeChild(listaProductos.firstChild);
  }
  vaciarLocalStorage();

  return false;
}

function guardarProductoLocalStorage(Producto) {
  let Productos;

  Productos = obtenerProductosLocalStorage();
  Productos.push(Producto);

  localStorage.setItem("Productos", JSON.stringify(Productos));
}

function obtenerProductosLocalStorage() {
  let Productosb;

  if (localStorage.getItem("Productos") === null) {
    Productosb = [];
  } else {
    Productosb = JSON.parse(localStorage.getItem("Productos"));
  }
  return Productosb;
}

function leerLocalStorage() {
  let Productosb;

  Productosb = obtenerProductosLocalStorage();

  Productosb.forEach(function (Producto) {
    const row = document.createElement("tr");
    row.innerHTML = `
            <td>
                <img src="${Producto.imagen}" width=100>
            </td>
            <td>${Producto.titulo}</td>
            <td>${Producto.precio}</td>
            <td>
                <a href="#" class="borrar-Producto" data-id="${Producto.id}">X</a>
            </td>
        `;
    listaProductos.appendChild(row);
  });
}

function eliminarProductoLocalStorage(Producto) {
  let Productosb;
  Productosb = obtenerProductosLocalStorage();

  Productosb.forEach(function (Productob, index) {
    if (Productob.id === Producto) {
      Productosb.splice(index, 1);
    }
  });

  localStorage.setItem("Productos", JSON.stringify(Productosb));
}

function vaciarLocalStorage() {
  localStorage.clear();
}
