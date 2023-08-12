const prompt = require("prompt-sync")({ sigint: true });

let valoracionPeli = prompt("Como valoras la pelicula?: Muy buena, Buena, Mediocre, Mala o Muy mala: ");

switch (valoracionPeli) {
  case "Muy buena":
    console.log("Calificaste la película como Muy Buena. Nos alegra mucho... Gracias por tu visita!");
    break;
  case "Buena":
    console.log("Calificaste la película como Buena. Nos alegra mucho... Gracias por tu visita!");
    break;
  case "Mediocre":
    console.log("Calificaste la película como Mediocre. Lo lamentamos mucho... Gracias por tu visita!");
    break;
  case "Mala":
    console.log("Calificaste la película como Mala. Lo lamentamos mucho... Gracias por tu visita!");
    break;
  case "Muy mala":
    console.log("Calificaste la película como Muy Mala. Lo lamentamos mucho... Gracias por tu visita!");  
    break;
  default:
    console.log("Ingresaste un valor inválido");
    break;
}