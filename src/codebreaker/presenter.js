var randomNumber = Math.floor(Math.random() * 10); // Random number between 0 and 9

export function main (){
  const numero_elem = document.querySelector("#numero");
  const boton_elem = document.querySelector("#arriesgo");
  const resultado = document.querySelector("#resultado");

  boton_elem.addEventListener("click", (event) => {
    event.preventDefault();
    resultado.innerHTML = "Ganaste!";
  });
}
