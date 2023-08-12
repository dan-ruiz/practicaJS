const prompt = require("prompt-sync")({ sigint: true });

let numUser = parseInt(prompt("Ingresa un numero entre 1 y 10: "));
let numSecreto;

function numeroSecreto(num) {
  numSecreto = Math.floor(Math.random() * 10) + 1;

  if(num === numSecreto) {
    console.log("Felicitaciones! Ese es es numero secreto");
  } else {
    console.log("Esta vez no acertaste, pero siguelo intentando! ... Tu numero ingresado es: " + num + " ... El numero secreto era: " + numSecreto);
  }
}

numeroSecreto(numUser);