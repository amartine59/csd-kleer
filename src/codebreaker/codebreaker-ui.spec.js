import fs from "fs";
describe("Codebreaker", () => {
  beforeEach(() =>{
    document.body.innerHTML = fs.readFileSync("codebreaker.html", "utf8");
  });

  it("muestra una bienvenida", () => {
    const h1 = document.querySelector("h1").innerHTML;
    expect(h1).toEqual("Codebreaker");
  });

  it("Generar numero aleatorio", () => {
    let presenter = require("../codebreaker/presenter");

    expect(presenter.randomNumber).toBeGreaterThanOrEqual(0);
    expect(presenter.randomNumber).toBeLessThanOrEqual(9);
  })

  it("Coincidencia entre numero ingresado y numero generado", () => {
      let presenter = require("../codebreaker/presenter");
      presenter.randomNumber = 5;
  
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
