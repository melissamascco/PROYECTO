//-------------------------REGISTRAR DATOS DE CLIENTE -------------------------------//
let nombre = 0;
let apellido = 0;
let direccion = 0;
let dni = 0;
let cel = 0;
let sexo = 0;
let edad = 0;

class DatosPersonales {
  constructor(nombre, apellido, direccion, dni, cel, sexo, edad) {
    (this.nombre = nombre),
      (this.apellido = apellido),
      (this.direccion = direccion),
      (this.dni = dni);
    this.cel = cel;
    this.sexo = sexo;
    this.edad = edad;
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
    console.log(cliente?.nombre || "nombre no ingresado"); //--------------OPTIMIZANDO EL PROYECTO-OPERADOR LÓGICO OR----------------//
    console.log(cliente?.apellido || "apellido no ingresado"); //----------OPTIMIZANDO EL PROYECTO-OPERADOR LÓGICO OR----------------//
    console.log(cliente?.direccion || "direccion no ingresado"); //--------OPTIMIZANDO EL PROYECTO-OPERADOR LÓGICO OR----------------//
    console.log(cliente?.dni || "dni no ingresado"); //--------------------OPTIMIZANDO EL PROYECTO-OPERADOR LÓGICO OR----------------//
    console.log(cliente?.cel || "cel no ingresado"); //---------------------OPTIMIZANDO EL PROYECTO-OPERADOR LÓGICO OR----------------//
    console.log(cliente?.sexo || "sexo no ingresado"); //------------------OPTIMIZANDO EL PROYECTO-OPERADOR LÓGICO OR----------------//
    console.log(cliente?.edad || "edad no ingresado"); //------------------OPTIMIZANDO EL PROYECTO-OPERADOR LÓGICO OR----------------//
  }

  const guardarLocal = (clave, valor) => {
    localStorage.setItem(clave, valor);
  };

  guardarLocal("listaclientes", JSON.stringify(ingresarcliente));
}

const btn = document.getElementById("btnEmpezar"); //-----------------------------INCORPORANDO LIBRERÍAS-----------------------------//

btn.addEventListener("click", () => {
  swal({
    title: "Genial!",
    text: " Sus datos fueron guardados correctamente!",
    icon: "success",

    confirm: "ok",
  });
});
