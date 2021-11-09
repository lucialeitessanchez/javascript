/**
 * Ciclos
 */

//while
var contador = 0;
while(contador <= 100){
    console.log('Hola mundo!');
    contador++;
}

//do-while 
var contador =1;
do {
    console.log('Hola mundo!');
    contador +=1;
} while (contador <= 10);

//for in
var persona = {
    nombre: 'Lucia',
    apellido: 'Leites',
    edad: 27
}

for(let clave in persona){
    console.log(clave, persona[clave]);
}

//for iterar un elemento o repetir una serie de elementos
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}

//for of
var arreglo = [1,2,3,4,5]
for (let valor of arreglo) {
    console.log(valor);
}