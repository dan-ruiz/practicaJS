const prompt = require("prompt-sync")({ sigint: true });

let velUser = parseInt(prompt("Cual es la velocidad en km/h?: "));
let alturaUser = parseInt(prompt("Cual es la altura en metros?: "));


function abrirParacaidas(velocidad, altura) {
  if(velocidad < 1000 && altura >= 2000 && altura < 3000 ){
    console.log("Abre el paracaidas");
  } else {
    console.log("No abras el paracaidas");
  }
}

abrirParacaidas(velUser, alturaUser);