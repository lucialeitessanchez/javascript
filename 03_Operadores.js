//operador de asginacion de multiplicacion (*=)

var x=1;
var y = 2;

// X=X*y

x *=y;
console.log(x);

//operador de asignacion de division (/=)

var x=1;
var y = 2;

// x=x/y

x /=y;
console.log(x);

//operador de  asignacion de residuo o modulo (%=)

var x=1;
var y = 2;

// x=x%y

x %=y;
console.log(x);

//operador de asignacion de exponenciacion (**=)

var x=2;
var y = 3;

// x=x elevado a y

x **=y;
console.log(x);

//compara los operandos y nos devuelve un operador logico verdadero o falso

/**
 * Operadores de comparacion
 */

//operador igual (==) OJO NO ASIGNA

console.log(3==3); 
console.log(3 == '3'); //mas laxo que el estricto

//operador no es igual (!=)
console.log(3!=3);


//operador estrictamente igual (===)
console.log(3 === 3);
console.log(3 === '3'); // en produccion siempre hay que intentar usar este

//operador desigualdad estricta (!==)
console.log(3!=='3');

// operadores > >= mayor , < <= menor
console.log(3>4);
console.log(3>=3);
console.log(2<4);
console.log(2<=2);

/**
 * Operadores aritmeticos
 *  +,-,*,/,%,** (expoenciacion)
 */

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2/2);
console.log(2**2);
console.log(2%2);

//Operadores aritmeticos de incremento (++)
var numero=0;
//console.log(++numero);
console.log(numero++);
console.log(numero); //cuando pongo el simbolo despues lo incrementa en el siguiente uso

//Operadores aritmeticos de decremento (--)
var numero = 3;
//console.log(--numero);
console.log(numero--);
console.log(numero);

/**
 * Operadores logicos
 */

//AND
console.log(true && true);
console.log(2>3 && 1<=2);

//or 
console.log(true || false); //si uno d los dos es verdadero entonces el resultado es verdadero
console.log(false || false);

//not la negacion de un valor
console.log(!true);
console.log(!false);

//operador de cadena o concatenacion (+)
  var nombre = 'Lucia';
  var apellido = ' Leites Sanchez';
var nombreCompletos = nombre + apellido;
console.log(nombreCompletos);

//Operador condicional (condicion ? valor a retornar: valor a retornar si es falso)
console.log(2>3?'el numero es mayor':'es menor');

//operador de desestructuracion 
var persona = {
    nombre: 'Lucia',
    apellido: 'Leites'
}

//el operador necesita ser definido en una variable . No se modifica en si, solo se puede utilizar
var {nombre} = persona; //desestructurarlo, yo solo quiero nombre
console.log(nombre);
console.log(persona);


var {nombre:xy} = persona; //desestructurarlo, y lo llamo xy como variable a lo que contiene nombre
console.log(xy);

//desustructuracion de arreglos
var arreglo = [1,2,3,4,5]

var [primeraPosicion, dos]=arreglo;
console.log(primeraPosicion);
console.log(dos);

/**
 * operador de miembro o acceso de propiedad
 */

//notacion de punto
var persona = {
    nombre: 'Gabriel',
    apellido: 'Arguello'
}

console.log(persona.nombre); //accedo al objeto en tal atributo
console.log(persona.apellido);

//notacion por corchetes
var persona = {
    nombre: 'Gabriel',
    apellido: 'Arguello'
}

console.log(persona['nombre']); //obtengo el valor dentro del objeto

//notacion por corchete en arreglos
var arreglo = [21,22,23,24,25,26,27];
console.log(arreglo[3]); //tengo que acceder mediante la posicion del dato que quiero obtener, en arreglos pasa eso : ojo que se empieza a contar desde el 0

//operacion de determinacion de tipo (typeof) retorna el tipo de dato de un valor
console.log(typeof'Gabriel');
console.log(typeof 21);
