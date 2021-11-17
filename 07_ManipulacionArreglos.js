/**
 * Manipulacion de arreglos
 */

//ForEach recibe una funcion como parametro, solo nos permite recorrer los elementos de una arreglo
var letras =['a','b','c','d','e'];

console.log(letras.length);

/*for (let index = 0; index <  letras.length; index++) {
    const element = letras[index];
    console.log(element);
}*/

//letras.forEach((element)=>{
 //   console.log(element);
//})

letras.forEach((element) => console.log(element));

//push shift pop, 3 funciones

var letras =['a','b','c','d','e'];
letras.push('f');
console.log(letras);

//shift nos sirve para obetener el primer elemento de algo, va a modificar el arreglo, lo va a dejar sin el primer elemento digamos
var primerElemento =letras.shift();
console.log(primerElemento); //sacamos el primer elemento pero lo guardamos
console.log(letras);
letras.pop(); //lo mismo que shift pero con el ultimo elemento
console.log(letras);


//map ejemplo de asistencia 
var estudiantes = ['Dayana','Pamela','Ada','German'];
var asistencia = estudiantes.map(()=>{
    return 
});
