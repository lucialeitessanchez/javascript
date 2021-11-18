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
var estudiantes = ['Dayana','Pamela','Ada','German']; // vamos a transformar cada uno de estos elementos en objetos pero no va a mutar 
var asistencia = estudiantes.map((nombre)=> `${nombre}.`)
/*var asistencia = estudiantes.map((nombre)=>{
    return  {
        nombre: nombre,
        assistencia: false
    }
});*/

console.log(estudiantes);
console.log(asistencia);
console.log(estudiantes);

var productos = [
    {nombre: 'camisetas',precio: 15},
    {nombre: 'zapatillas',precio: 20},
    {nombre: 'pantalon',precio: 25}
]

var productosImpuesto = productos.map((producto)=>{
    return {
        ...producto,
        impuesto: .12
    }
})

var precios = productos.map((producto)=> producto.precio) // por cada iteracion inyecta el precio (osea lo saca ) y ya con la funcion => tiene implicito el return

console.log(productos); 
console.log(productosImpuesto);
console.log(precios);

//filter inmutable, no va a modificar el arreglo de orgien, va a ayudarnos a filtrar el elemento de un objeto en base a una condicion que debe devolver un valor logico
var estudiantes = [
    {nombre: 'Ada',edad:20,matriculado:true},
    {nombre: 'Lucia',edad:20,matriculado:true},
    {nombre: 'Rodrigo',edad:19,matriculado:false},
    {nombre: 'Maria',edad:22,matriculado:false},
    {nombre: 'Leo',edad:21,matriculado:true},
    {nombre: 'Raul',edad:19,matriculado:false}
]

//var filtrado = estudiantes.filter((estudiante)=> estudiante.edad >= 21);
var filtrado = estudiantes.filter((estudiante)=> estudiante.edad >= 21 && estudiante.matriculado);
console.log(filtrado);
console.log(estudiantes);

//reduce reduce el todo el arreglo a un solo valor, recibd dos parametros, el primero es una funcion 
 