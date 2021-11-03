/**
 * Control de flujo
 */

//estructura if 

var llueve = true;
if(llueve){
    console.log('Necesito un paraguas');
}

var administrador = 'administrador';
if (administrador === 'administrador') {
    console.log('Bienvenido al sistema');
}

const MAYORIA_DE_EDAD = 18;
var edadPErsona = 18;


if (edadPErsona >= MAYORIA_DE_EDAD) {
    console.log('Es mayor de edad');
} else {
    console.log('Es menor de edad ');
}

//ejemplo semaforo de carrera

var semaforo = 'purpura';
if (semaforo === 'verde') {
    console.log('Arranca');
}else if(semaforo === 'amarillo'){
    console.log('Listo?');
}else if(semaforo === 'rojo'){
    console.log('motores apagados');
} else {                                // si ninguna condicion de las anteriores se cumple entonces ejecuta esta 
    console.log('color no identificado');
}

//switch

switch (key) {
    case value:
        
        break;

    default:
        break;
}