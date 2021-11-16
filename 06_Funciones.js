/**
 * Funciones
 */

//function nombreDeLaFuncion(){
    //cuerpo de nuestra funcion

//}

function saludar(){
     console.log('Hola soy Lucia');
}

saludar();

function saludar(nombre){
    console.log(`Hola soy ${nombre}`);
}

saludar('Lucia');

function saludar(nombre){
return `Hola soy ${nombre}`
}

var saludo = saludar('Lu');
console.log(saludo); // imprime cualquier tipo de valor

/**
 * no es necesario que una funcion retorne ningun valor a veces y eso esta bien, pero si ejecuta una tarea, se las conoce como funciones void 
 * las funcoines que retorna algo no hay drama 
 */

//funciones de expresion, las funciones pueden ser tratadas tambien como valores 

//expresion o anonimas, ya que la funcion no tiene nombre
var suma = function(a, b){
    return a + b;
}

console.log(suma(2,3));

//funcion flecha, alternativa para compactar las funciones pero mas limitadas

//arrow function
var restar = (a,b) => { // de este tipo se usa cuando hay que desarrollar bastante adentro 
    return a - b;
}

console.log(restar(4,2));

var multiplicar = (a,b) =>  a * b; // tiene implicito el return
console.log(multiplicar(2,2));


