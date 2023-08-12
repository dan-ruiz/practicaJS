let edad=21;


if(edad<0) {
  console.log("Error, edad inválida. Por favor ingrese un número válido.");
} else if(edad<18 && edad % 2 !==0) { 
  console.log("No puede pasar al bar. ¿Sabías que tu edad es impar?");
} else if(edad < 18){
  console.log("No puede pasar al bar.");
} else if(edad<21){ 
  console.log("Puede pasar al bar, pero no puede tomar alcohol.") 
} else if(edad === 21) {
  console.log("Bienvenido y Felicidades! Llegaste a la mayoria de edad");
} else if (edad > 21 && edad % 2 !==0) {
  console.log("Puede pasar al bar y tomar alcohol. ¿Sabías que tu edad es impar?");
} else{ 
  console.log("Puede pasar al bar y tomar alcohol.");
} 
