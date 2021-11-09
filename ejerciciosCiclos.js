/**
 * 
 1.Imprima las tablas de multiplicar del 2 al 12 utilizando la declaración for.

Pista: anidamiento.

2.Realice el equivalente con la declaración while y do-while


 */


for (let i = 2; i <= 12; i++) {
    
        for (let index = 1; index < 10; index++){
            console.log(i+'por'+index);
            r=i*index;
            console.log(r);
        
        }
}

var i=1;

while (i<11) {
    var j=1;
    console.log('Tabla del: '+i);
    while (j<=12) {
        console.log(i*j);
        j++
    }
    i++
}

do {
    var i=
} while (condition);