import Codebreaker from "./codebreaker";

const numero_generado = document.querySelector("#numeroGenerado");
const numero_elem = document.querySelector("#numero");
const boton_elem = document.querySelector("#arriesgo");
const resultado = document.querySelector("#resultado");

boton_elem.addEventListener("click", (event) => {
  event.preventDefault();

  let cb = new Codebreaker(numero_generado.value);
  let ok = cb.compare(numero_elem.value);

  if (ok) {
    resultado.innerHTML = "Ganaste!";
    return;
  }
});
