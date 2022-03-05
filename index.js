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

const lista = document.querySelector("#contenedor-productos");

fetch("/data.json") //--------------------------------------- SE UTILIZO ETCH ---------------------------------------------------//
  .then((res) => res.json())
  .then((data) => {
    data.forEach((producto) => {
      const div = document.createElement("div");
      div.className = "producto";
      div.innerHTML = `
      <img src=${producto.img}>
                <h4><class="card-title">${producto.nombre}</h4> 
                <h6 class="text center  ">$${producto.precio} x KG </h6>
                <button id="btcomprar${producto.id}"> </button> 
                <a href="categorias.html" >CATEGORIA</div>
            `;

      lista.append(div);

      let boton = document.getElementById(`btcomprar${producto.id}`);
      boton.addEventListener("click", respuesta);
      function respuesta() {
        console.log("respuesta1");
      }
    });
  });
