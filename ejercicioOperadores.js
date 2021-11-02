/**
 * 1. Escribir un programa que calcule el número de segundos que existen en un día.

Para ello debemos multiplicar los segundos de un minuto, por los minutos de

una hora, por las horas de un día. Como todo el mundo sabe, un día tiene 86400 segundos.
 */

var minuto = 60 ; // en un segundo hay 60 minutos
var hora = 60; //en una hora hay 60 minutos
var dia = 24; //en un dia hay 24 hs

console.log(minuto*hora*dia);

/**
 * 2. Realiza un programa que a partir de los valores ancho=2 y alto=5,

calcule el área de un rectángulo.
 */

var base = 2;
var altura = 5;
var area = base * altura;
console.log(area);

/**
 * 3. Hacer un conversor de grados centígrados a grados Fahrenheit.

Para ello deberé multiplicar por 9/5 y sumar 32.

Como todo el mundo sabe, 20 grados centígrados son 68 grados Fahrenheit.
 */

var grados = 20;

var pasarF = {
    multiplico : 9/5,
    sumo : 32
}
var f = grados * pasarF.multiplico;
f+= pasarF.sumo;
console.log('Grados= '+grados+' En Fahrenheit: '+ f);

