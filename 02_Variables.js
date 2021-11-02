/**
 * Variables
 * 3 formas de definir variables
 * 
 * var
 * let
 * const
 * 
 */

 // variables con VAR
var nombre = "Lucia";
console.log(nombre);

var edad = 27; 
console.log(edad)

var persona = {
    nombre: 'Lucia',
    apellido: 'Leites',
    edad: 27,
    direccion: {
        calle:'siempre viva',
        numeroDeCasa: 123,
                },
            ciudadesVisitadas: [
                'Guayaquil','Santa Fe','Rosario','Salta'
                             ]
    }           

//variables con LET
let nombre = 'Lucia'
console.log(nombre);

{
    let saludo = "Hola soy Lucia";
    console.log(saludo);
}

console.log(saludo);


{
    var saludo = "Hola soy Lucia";
    console.log(saludo);
}

console.log(saludo);

//variables con CONST

const PI = 3.14;
console.log(PI);

var nombre = "lu";
var saludo = `Hola soy ${nombre}`;
console.log(saludo);
