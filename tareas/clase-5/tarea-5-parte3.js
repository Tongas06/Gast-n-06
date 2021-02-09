
 

const horas = [];
const min = [];
const seg = [];

 function sum(numeros){
    let suma = 0;
    for(let i = 0; i < numeros.length; i++){
        suma += numeros[i];
        // numero = numeros[i];
        // suma = suma + numero;
    }    
    return suma;
 } 

$ingresar = document.querySelector('#ingresar');

$calcularTotal = document.querySelector('#calcular-total');

$ingresar.onclick = function(){
    horas.push(Number(document.querySelector('#horas-de-clase').value));
    min.push(Number(document.querySelector('#minutos-de-clase').value));
    seg.push(Number(document.querySelector('#segundos-de-clase').value));

    document.querySelector('#horas-de-clase').value = "";
    document.querySelector('#minutos-de-clase').value = "";
    document.querySelector('#segundos-de-clase').value = "";

    return false;
}

$calcularTotal.onclick = function(){
    const totalHoras = Number(sum(horas) + sum(min)/60 + sum(seg)/3600);

    document.querySelector('#total').value = totalHoras;

    return false;
}






