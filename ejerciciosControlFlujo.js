/**
 * 1.Escribir un programa que según el día de la semana ingresado proporcione el día en inglés.
 * El programa debe ser escrito dos veces, una con la declaración if else y otra con la declaración switch
 */


//if else
var dia = 'martes';

if(dia == 'lunes'){
    console.log('Monday');
    }    
else if(dia == 'martes'){
console.log('Tuesday');
}
else if(dia == 'miercoles'){
    console.log('Wednesday');
    }
   else if(dia == 'jueves'){
        console.log('Thursday');
        }
     else if(dia == 'viernes'){
            console.log('Friday');
            }
          else if(dia == 'sabado'){
                console.log('Saturday');
                }
                else if(dia == 'domingo'){
                    console.log('Sunday');
                }
else{
    console.log('no se entiende el dia');
}

//swithc
var dia= 'miercoles';
switch (dia) {
    case 'lunes':
        console.log('Monday');
        break;
        case 'martes':
            console.log('Tuesday');
            break;
            case 'miercoles':
        console.log('Wednesday');
        break;
        case 'jueves':
        console.log('Thursday');
        break;
        case 'viernes':
        console.log('Friday');
        break;
        case 'sabado':
        console.log('Saturday');
        break;
        case 'domingo':
        console.log('Sunday');
        break;
    default:
        console.log('no se reconoce ese dia');
        break;
}

/**
 * 2.Escribir un programa que según el total de la compra, se agregue un valor de envio.

Si la compra es menor o igual a los $10 se agregará un gasto de envió de $3

Si la compra es menor o igual a los $20 y mayor a los $10 se agregará un gasto de envío de $5

Si la compra es menor o igual a los $50 y mayor a los $20 se agregará un gasto de envío de $7

Si la compra supera los $50 el gasto de envío será gratuito

El programa debe ser escrito dos veces, una con la declaración if else y otra con la declaración switch
 */

//if else
var totalCompra = 51;
if (totalCompra <= 10) {
    console.log('La compra es de $'+ totalCompra +' y se suma un gasto de envio, total:$'+(totalCompra+3));
} else if(totalCompra <= 20 && totalCompra > 10) {
    console.log('La compra es de $'+ totalCompra +' y se suma un gasto de envio, total:$'+(totalCompra+5));
} else if(totalCompra <= 50 && totalCompra>20){
    console.log('La compra es de $'+ totalCompra +' y se suma un gasto de envio, total:$'+(totalCompra+7));
} else if(totalCompra > 50){
    console.log('La compra es de $'+ totalCompra +' y no hay gasto de envio');
}

//switch
var totalCompra = 5;
switch (totalCompra) {
    case (totalCompra <= 10):
        console.log('La compra es de $'+ totalCompra +' y se suma un gasto de envio, total:$'+(totalCompra+3));
        break;
     case (totalCompra <= 20 && totalCompra > 10):
        console.log('La compra es de $'+ totalCompra +' y se suma un gasto de envio, total:$'+(totalCompra+5));
        break;
    case (totalCompra <= 50 && totalCompra > 20):
        console.log('La compra es de $'+ totalCompra +' y se suma un gasto de envio, total:$'+(totalCompra+7));
        break;
    case (totalCompra > 50):
        console.log('La compra es de $'+ totalCompra +' y no hay gasto de envio');
        break;
}