import fs from "fs";
import Codebreaker  from "../codebreaker/codebreaker";

describe("Codebreaker", () => {
  beforeAll(() =>{
    document.body.innerHTML = fs.readFileSync("codebreaker.html", "utf8");
    require("../codebreaker/presenter");
  });

  it("muestra una bienvenida", () => {
    const h1 = document.querySelector("h1").innerHTML;
    expect(h1).toEqual("Codebreaker");
  });

  it("Generar numero aleatorio", () => {
    let cb = new Codebreaker();

    expect(cb.RandomNumber).toBeGreaterThanOrEqual(0);
    expect(cb.RandomNumber).toBeLessThanOrEqual(9);
  })

  it("Coincidencia entre numero ingresado y numero generado", () => {
    arriesgo("5");
    document.querySelector("#arriesgo").click();

    const resultado = document.querySelector("#resultado").innerHTML;
    expect(resultado).toEqual("Ganaste!");
  });

  it("Si numero ingresado es igual a numero generado, mostrar ganaste", () => {
    document.querySelector("#numeroGenerado").value = 5;

    arriesgo("5");
    document.querySelector("#arriesgo").click();

    const resultado = document.querySelector("#resultado").innerHTML;
    expect(resultado).toEqual("Ganaste!");
  });

  it("Si numero ingresado no es igual a numero generado, mostrar perdiste", () => {
    document.querySelector("#numeroGenerado").value = 6;

    arriesgo("5");
    document.querySelector("#arriesgo").click();

    const resultado = document.querySelector("#resultado").innerHTML;
    expect(resultado).toEqual("Ganaste!");
  });


  function arriesgo(numero) {
    document.querySelector("#numero").value = numero;
    document.querySelector("#arriesgo").click();
  }
});
