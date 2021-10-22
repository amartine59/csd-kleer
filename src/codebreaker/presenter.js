import Codebreaker from "./codebreaker";

const numero_generado = document.querySelector("#numeroGenerado");
const numero_elem = document.querySelector("#numero");
const boton_elem = document.querySelector("#arriesgo");
const pistas = document.querySelector("#pistas");
const resultado = document.querySelector("#resultado");

let cb = new Codebreaker(numero_generado.value);

boton_elem.addEventListener("click", (event) => {
  event.preventDefault();

  let value = numero_elem.value;

  let ok = cb.compare(value);

  if (ok) {
    resultado.innerHTML = "Ganaste!";
    cb.CurrentAttempt = 0;
    return;
  }
  
  resultado.innerHTML = "Sigue intentando";
  cb.CurrentAttempt++

  if (cb.CurrentAttempt >= 3) {
    resultado.innerHTML = "Perdiste!";
    cb.CurrentAttempt = 0;
  }
});
