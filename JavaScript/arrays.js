var frutas = ["Manzana", "Platano", "Cereza", "Fresa"];

console.log(frutas);

console.log(frutas.length);

console.log(frutas[2]);

var masFrutas = frutas.push("Uvas");

var ultimo = frutas.pop("Uvas"); //Eliminar un elemento del array

var nuevoLongitud = frutas.unshift("Uvas"); //Agregar al principio

var borrarFruta = frutas.shift("Uvas");//Eliminar el primer elemento

var posicion = frutas.indexOf("Cereza")//Traer la posicion de un elemento
