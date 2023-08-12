const prompt = require("prompt-sync")({ sigint: true });

let palabraUser = prompt("Ingresa una palabra a ser traducida: ");

switch (palabraUser) {
  case "casa":
    console.log("House");
    break;
  case "perro":
    console.log("Dog");
    break;
  case "pelota":
    console.log("Ball");
    break;
  case "arbol":
    console.log("Tree");
    break;
  case "genio":
    console.log("Genius");  
    break;
  default:
    console.log("La palabra ingresada es incorrecta");
    break;
}