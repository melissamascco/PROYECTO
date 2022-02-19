//-------------------------REGISTRAR DATOS DE CLIENTE -------------------------------//
let nombre = 0;
let apellido = 0;
let direccion = 0;
let dni = 0;
let cel = 0;
let dexo = 0;
let edad = 0;

class DatosPersonales {
  constructor(nombre, apellido, direccion, dni, cel, sexo, edad) {
    (this.nombre = nombre),
      (this.apellido = apellido),
      (this.direccion = direccion),
      (this.dni = dni);
    this.cel = cel;
    this.sexo = sexo;
    this.sexo = edad;
  }
}
const ingresarcliente = [];

const btnEmpezar = document.getElementById("btnEmpezar");
cargarEventos();
function cargarEventos() {
  btnEmpezar.addEventListener("click", verificar);
}

function verificar(e) {
  e.preventDefault();

  let nombrep = document.getElementById("Nombre").value;
  let apellidop = document.getElementById("Apellido").value;
  let direccionp = document.getElementById("Direccion").value;
  let dnip = document.getElementById("DNI").value;
  let celp = document.getElementById("Cel").value;
  let sexop = document.getElementById("Sexo").value;
  let edadp = document.getElementById("Edad").value;

  ingresarcliente.push(
    new DatosPersonales(
      nombrep,
      apellidop,
      direccionp,
      dnip,
      celp,
      sexop,
      edadp
    )
  );

  for (const cliente of ingresarcliente) {
    console.log(ingresarcliente);
    console.log(cliente.nombre);
    console.log(cliente.apellido);
    console.log(cliente.direccion);
    console.log(cliente.dni);
  }

  const guardarLocal = (clave, valor) => {
    localStorage.setItem(clave, valor);
  };

  guardarLocal("listaclientes", JSON.stringify(ingresarcliente));
}
