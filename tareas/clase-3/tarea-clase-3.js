// Tarea 1:
// Preguntarle al usuario su nombre.
// Si el nombre del usuario es el mismo que  el  de ustedes
// Imprimir "Hola, Tocayo! Yo también me llamo " y su nombre.
// Elijan otro nombre, puede ser de un pariente, amigo, conocido.
// Si el nombe del usuario es el mismo que el que nombre que eligieron
// Imprimir "Hola " y el nombre, " te llamás igual que mi ..."
// Si no, simplemente imprimir "Hola " + nombre!

//Tarea 2:
// Preguntar la edad del usuario
// Hacerle saber si tiene más, menos ó la misma edad que nosotros.

//Tarea 3:
// Preguntarle al usuario si tiene documento, y que conteste con "si" o "no".
// Si dice si, preguntarle la edad.
// Si la edad es mayor a 18, dejarlo entrar al bar.
// Si la edad es menor a 18, no dejarlo entrar al bar.
// Si no tiene documento, no dejarlo entrar al bar.
// Si no entendemos la respuesta, le decimos que no entendimos la respuesta.
// Punto bonus: SI, NO, Si, No, si, no.

let documentoUsuario = prompt('Tenes documento?, responde con Si o No');
let edadUsario;

 if(documentoUsuario.toUpperCase() === 'SI'){

    edadUsario = Number(prompt('Cual es tu edad?'));
    if(edadUsario >= 18){
        console.log('Puede entrar al bar');
    }else if(edadUsario < 18){
        console.log('No puede entrar al bar por ser menor de 18 años');         
    }else{
        console.log('No ingreso la edad');
    }
 }else if(documentoUsuario.toUpperCase() === 'NO'){
    console.log('No puede entrar al bar');        
}else{
    console.log('No entiendo la respuesta');
}





/*

const anioNacimiento = Number(prompt('En que año naciste?'));
const anioActual = Number(prompt('En que año estamos?'));
let resultado;

function calcularEdadUsario(anioNacimiento, anioActual){
    return anioActual - anioNacimiento; 
}

resultado = Number(calcularEdadUsario(anioNacimiento, anioActual));

if(resultado > 19){
    console.log('Sos más grande que yo');
}else if(resultado < 19){
    console.log('Sos mas chico que yo');
}else{
    console.log('Tenemos la misma edad');
}
*/   


/*
let nombreUsuario = prompt('Como te llamas?');

if(nombreUsuario.toUpperCase() === 'GASTON'){
    console.log(`Hola, Tocayo! Yo también me llamo ${nombreUsuario}`);
}else if(nombreUsuario.toUpperCase() === 'WALTER'){
    console.log(`Hola ${nombreUsuario} te llamas igual que mi primo`);
}else{
    console.log(`Hola ${nombreUsuario}`);
}


*/




