
const prompt = require("prompt-sync")({ sigint: true });

let sandwichBase = prompt("Que tipo de sandwich deseas?: pollo, carne o veggie ");
let tipoPan = prompt("Que tipo de pan deseas?: blanco, negro o s/gluten ");
let adQueso =  prompt("Desea queso?: si / no: ");
let adTomate =  prompt("Desea tomate?: si / no: ");
let adLechuga =  prompt("Desea lechuga?: si / no:");
let adCebolla =  prompt("Desea cebolla?: si / no: ");
let adMayonesa =  prompt("Desea mayonesa?: si / no: ");
let adMostaza =  prompt("Desea mostaza?: si / no: ");



function orden (base, pan, queso, tomate, lechuga, cebolla, mayonesa, mostaza) {

  let total = 0;

  if (base === "pollo") {
    base = 150;
  } else if( base === "carne") {
    base = 200;
  } else if (base === "veggie") {
    base = 100
  }

  if(pan === "blanco") {
    pan = 50;
  } else if (pan === "negro") {
    pan = 60;
  } else if(pan === "s/gluten") {
    pan = 75;
  }

  if (queso === "si") {
    queso = true;
    if(queso) {
      queso = 20;
    }
  } else {
    queso = 0;
  }

  if (tomate === "si") {
    tomate = true;
    if(tomate) {
      tomate = 15;
    }
  } else {
    tomate = 0;
  }

  if (lechuga === "si") {
    lechuga = true;
    if(lechuga) {
      lechuga = 10;
    }
  } else {
    lechuga = 0;
  }

  if (cebolla === "si") {
    cebolla = true;
    if(cebolla) {
      cebolla = 15;
    }
  } else {
    cebolla = 0;
  }

  if (mayonesa === "si") {
    mayonesa = true;
    if(mayonesa) {
      mayonesa = 5;
    }
  } else {
    mayonesa = 0;
  }

  if (mostaza === "si") {
    mostaza = true;
    if(mostaza) {
      mostaza = 5;
    }
  } else {
    mostaza = 0;
  }

  total = base + pan + queso + tomate + lechuga + cebolla + mayonesa + mostaza;
  return "El total de su orden es: " + total;
}

console.log(orden(sandwichBase, tipoPan, adQueso, adTomate, adLechuga, adCebolla, adMayonesa, adMostaza));


