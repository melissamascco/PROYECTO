let input1 = document.getElementById("Nombre");
let input2 = document.getElementById("Direccion");
input1.onkeyup = () => {
  console.log("keyUp");
};
input1.onkeydown = () => {
  console.log("keyDown");
};

let midatospersonales = document.getElementById("datospersonales");
midatospersonales.addEventListener("submit", validarFormulario);

function validarFormulario(e) {
  e.preventDefault();

  let datospersonales = e.target;

  console.log(datospersonales.children[1].value);
  console.log(datospersonales.children[4].value);
  console.log(datospersonales.children[7].value);
  console.log(datospersonales.children[10].value);
}
