
const $mostrarDatos = document.querySelector('#ingresar');


$mostrarDatos.onclick = function(){

    const nombreUsuario = document.querySelector("#nombre-usuario").value;
    const apellidoUsuario = document.querySelector('#apellido-usuario').value;
    const edadUsuario = document.querySelector('#edad-usuario').value;
   


    const nodoPagina = document.querySelector('body');
    const nuevoParrafo = document.createElement('p');
    const textoParrafoNombre = document.createTextNode(nombreUsuario + ' ');
    const textoParrafoApellido = document.createTextNode(apellidoUsuario + ' ');
    const textoParrafoEdad = document.createTextNode(edadUsuario);
    nuevoParrafo.appendChild(textoParrafoNombre);
    nuevoParrafo.appendChild(textoParrafoApellido);
    nuevoParrafo.appendChild(textoParrafoEdad);
    nodoPagina.appendChild(nuevoParrafo);
    
    const tituloBienvenidos = document.querySelector('h1');

    tituloBienvenidos.textContent = tituloBienvenidos.textContent +' '+ nombreUsuario; 

    return false;
}




















