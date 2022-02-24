//------------------------------------------INCORPORANDO LIBRERÍAS-------------------------------------------//

Swal.fire({
  title: "Bienvenido a BIO+MARK!",
  text: "el mejor lugar para hacer tus compras saludables ingresa el  distro donde vives.",

  input: "select",
  inputPlaceholder: "Distrito",
  inputValue: "",
  inputOptions: {
    surco: "Surco",
    Barranco: "Barranco",
    Chorrilos: "Chorrilos",
    Ate: "Ate",
    Lurin: "Lurin",
  },
});
//----------------------------------------------------------------------------------------------------------------//
let titulo = document.getElementById("titulo1");

titulo.innerText = "----- TE OFRECEMOS SIEMPRE LO MEJOR ------";
console.log(titulo.innerText);

let contendor = document.getElementById("subtexto");
contendor.innerHTML = "<h1>ven y disfruta </h1>";

const contendorproducto = document.getElementById("contenedor-productos");

mostrarProducto(dataProducto);

function mostrarProducto(array) {
  array.forEach((producto) => {
    let div = document.createElement("div");

    let { img, nombre, precio, id } = producto; //------------DESESTRUCTURACIÓN- OPTIMIZANDO EL PROYECTO------------//
    div.className = "producto";
    div.innerHTML = `
    <img src=${img}>
    
    <h4><class="card-title">${nombre}</h4> 
    <h6 class="text center  ">$${precio} x KG </h6>
    <button id="btcomprar${id}"> </button> 
    <a href="categorias.html" >CATEGORIA</div>`;

    contendorproducto.appendChild(div);

    let boton = document.getElementById(`btcomprar${producto.id}`);
    boton.addEventListener("click", respuesta);
    function respuesta() {
      console.log("respuesta1");
    }
  });
}
