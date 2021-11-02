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