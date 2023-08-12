const prompt = require("prompt-sync")({ sigint: true });

let tipoVehiculo = prompt("Ingrese el tipo de vehiculo: ");
let litros = parseInt(prompt("Litros: "));
let precio = 0;
let litrosEntre0y25 = 50;
let litrosMayor25 = 25;

function totalAPagar(vehiculo, litrosConsumidos) {
  if (litrosConsumidos >= 0 && litrosConsumidos <= 25){
    if (vehiculo === "coche") {
      return precio = 86 + litrosEntre0y25;
    } else if(vehiculo === "moto"){
      return precio = 70 + litrosEntre0y25;
    } else if(vehiculo === "autobus") {
      return precio = 55 + litrosEntre0y25; 
    } 
  } else if (litrosConsumidos > 25) {
    if (vehiculo === "coche") {
      return precio = 86 + litrosMayor25;
    } else if(vehiculo === "moto"){
      return precio = 70 + litrosMayor25;
    } else if(vehiculo === "autobus") {
      return precio = 55 + litrosMayor25; 
    } 
  } else {
    console.log("Dato no valido");
  }
}

console.log(totalAPagar(tipoVehiculo, litros));