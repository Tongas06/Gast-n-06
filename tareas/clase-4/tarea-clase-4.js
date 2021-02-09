// TAREA: Imprimí cada 3er número del 3 al 22 usando un 'bucle for'.

/*
function tarea1(){
for (let i = 3; i <= 22; i+=3){
    console.log(i)
}
}

tarea1();
*/

// TAREA: Usando un bucle 'while', decile a tu computadora que registre los números de
//       diez a uno.

/*
function tarea2(){
let i = 10

while(i > 0){
    console.log(i);
    i -= 1;
}
}

tarea2();
*/

// TAREA: Ha llegado el momento de un ejercicio clásico: 'FizzBuzz'.
// Cuenta del 1 al 50 e imprime los números:
// * Si un número es múltiplo de tres, imprime 'Fizz'.
// * Si es un múltiplo de 5, imprime 'Buzz'.
// * Si es un múltiplo de 3 y 5, imprime 'FizzBuzz'.
// * Para todo lo demás, imprime el número mismo.
// NOTA: Es posible que desees utilizar el operador aritmético modulo (%):
// Calcula el resto al dividir.
// 10% 3 = 1 - en 10 tenemos 3 * 3 + 1
// 16% 4 = 0 - en 16 tenemos 4 * 4
// 19% 4 = 3 - en 19 tenemos 4 * 4 + 3, etc.
/*
function fizzBuzzClasico(){
for(let i = 1; i <= 50; i++){
    if(i%3 === 0 && i%5 === 0){
        console.log('FizzBuzz');
    }else if(i%3 === 0){
        console.log('Fizz');
    }else if(i%5 === 0){
        console.log('Buzz');
    }else{
        console.log(i);
    }
}
}
*/
//fizzBuzzClasico();

function fizzBuzzNew(){
    for(let i = 0; i <= 50; i++){
       let texto = ''
        if(i%3 === 0){
            texto = 'Fizz';
        }
        if(i%5 === 0){
            texto += 'Buzz';
        }
        console.log(texto || i);
    }
}

fizzBuzzNew();

//OPERADOR TERNARIO
// (CONDICION) ? SI ES VERDADERO LEFT : SI ES FALSO RIGHT

// Calcular el promedio de todos los números en un array de números. (y ponerlo en una función)
// ej.: calcularPromedio([10,5,4,2,8])

/*
function calcularPromedio(notasParciales){
    let totalNotas = 0;

    for(let i = 0; i < notasParciales.length; i++){
        totalNotas = totalNotas + notasParciales[i];
    }
    return totalNotas;
}

const notasParciales = [10, 5, 4, 2, 8];
totalNotas = calcularPromedio(notasParciales);

console.log(totalNotas / notasParciales.length);

*/
/*
let z = function(){
    console.log('Sos un crak perri');
}

z();

let mult = function(number){
   console.log(number * number);
}

mult(4);

function sumar(n1,n2){
    return n1 + n2;
}

function tareaOperador(funcionOperador, n1, n2){
    console.log(funcionOperador(n1,n2));
}

tareaOperador(sumar, 1, 2);
*/















