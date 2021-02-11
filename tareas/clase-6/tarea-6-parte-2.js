

document.querySelector('#siguiente-accion').onclick = function(event) {
    const $cantidadTrabajadores = document.querySelector('#cantidad-trabajadores');
    const cantidadTrabajadores = Number($cantidadTrabajadores.value);

    borrarTrabajadoresAnteriores();
    crearTrabajadores(cantidadTrabajadores);

    event.preventDefault();
};

document.querySelector('#calcula').onclick = function(event) {
    const numeros = obtenerSalariosTrabajadores();
    mostrarSalario('mayor', obtenerMayorNumero(numeros));
    mostrarSalario('menor', obtenerMenorNumero(numeros));
    mostrarSalario('promedio', obtenerPromedio(numeros));
    mostrarResult();
  
    event.preventDefault();
  };
  
  document.querySelector('#resetea').onclick = resetea;


function borrarTrabajadoresAnteriores() {
    const $trabajadores = document.querySelectorAll('.trabajador');
    for (let i = 0; i < $trabajadores.length; i++) {
      $trabajadores[i].remove();
    }
  }




function crearTrabajadores(cantidadTrabajadores){

    if (cantidadTrabajadores > 0) {
        mostrarBotonCalcula();
      } else {
        resetea();
      }
    
    for(let i = 0; i < cantidadTrabajadores; i++) {
        crearTrabajador(i);
    }
}


function crearTrabajador(indice) {
    const $div = document.createElement('div');
    $div.className = 'trabajador';
  
    const $label = document.createElement('label');
    $label.textContent = 'Salario del trabajador #: ' + (indice + 1);
    const $input = document.createElement('input');
    $input.type = 'number';
  
    $div.appendChild($label);
    $div.appendChild($input);
  
    const $trabajadores = document.querySelector('#trabajadores');
    $trabajadores.appendChild($div);
 }


 function resetea() {
    borrarTrabajadoresAnteriores();
    ocultarBotonCalcula();
    ocultarResult();
}
  


  function ocultarBotonCalcula() {
    document.querySelector('#calcula').className = 'oculto';
  }

  function mostrarBotonCalcula() {
    document.querySelector('#calcula').className = '';
  }

  function ocultarResult() {
    document.querySelector('#result').className = 'oculto';
  }

  function mostrarResult() {
    document.querySelector('#result').className = '';
  }

  function borrarTrabajadoresAnteriores() {
    const $trabajadores = document.querySelectorAll('.trabajador');
    for (let i = 0; i < $trabajadores.length; i++) {
      $trabajadores[i].remove();
    }
  }

function mostrarSalario(tipo, valor) {
    document.querySelector(`#${tipo}-salario`).textContent = valor;
  }

function obtenerSalariosTrabajadores() {
    const $trabajadores = document.querySelectorAll('.trajador input');
    const salarios = [];
    for (let i = 0; i < $trabajadores.length; i++) {
      salarios.push(Number($trabajadores[i].value));
    }
    return salarios;
 }

console.log('Que pesado gitdesktop');







