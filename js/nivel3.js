// Nivel 3

/*
    Introducción
    ============

    Bieeeeen, has llegado lejos en tan poco tiempo!

    Pero todavía tenemos más cosas para vos. Antes de comenzar, abrí index.html, y
    reemplazá nuestro script de nivel2.js al que vamos a utilizar ahora, — nivel3.js.

    TIP: Si querés utilizar multiples archivos .js, simplemente
    agregá más etiquetas <script>.
*/

/*
    Hablemos un poco más de HTML, CSS y de como podemos interactuar con ellos
    en JavaScript.


    Hypertext Markup Language (HTML)
    --------------------------------
    Como te habrás dado cuenta, HTML está dividido en elementos que se ven algo así:

    <header></header>
    <p></p>
    <img />

    A estos elementos los llamamos "tags". Cada elemento de la página tiene un tag 
    que abre y otro que cierra. (NOTA: Algunos tags, como <img />, no necesitan ser
    cerrados con otro tag.)

    La etiqueta que engloba a todas las demás en un archivo HTML es <html>.

    Dentro de la etiqueta <html> encontrarás un tag <head> y un tag <body>.

    En <head> metemos los metadatos, el título de la página y los links a los
    archivos CSS. La etiqueta <body> contiene nuestro contenido.

    Para una lista completa de las etiquetas HTML, podés mirar esta lista:
    http://htmldog.com/references/html/tags/

    En HTML, los tags pueden contener atributos:
    <div class="opciones"></div>

    Esta etiqueta div contiene un atributo llamado "class", el cual tiene como valor: "opciones".


    Cascading Style Sheets (CSS)
    ----------------------------
    CSS describe como se ven los elementos HTML.

    Los archivos CSS consisten en "bloques de declaración". Cada bloque de
    declaración está compuesto de un "selector" y de un conjunto de reglas de estilo
    visuales. Una declaración se ve así:
    
    [selector] {
      nombre-de-estilo: valor;
      nombre-de-estilo: valor;
      nombre-de-estilo: valor;
    }

    Los selectores especifican sobre que elementos son aplicados los
    estilos visuales.

    Los selectores más básicos se refieren a los elementos mediante su nombre de etiqueta,
    se ven algo así:

    body {
      background-color: white;
    }

    Los selectores pueden también referirse a los elementos mediante su atributo
    de "clase", como esto:

    .settings {
      margin: 0;
    }

    o por su ID, así:

    #logo {
      text-align: center;
    }

    La lista de las propiedades de CSS es muy grande, podés leer más acá:
    https://www.w3.org/TR/CSS21/propidx.html

    No te preocupés, no hace falta recordar todo esto ahora mismo!
*/


/*
    Uff, muchas cosas nuevas! Volvamos a JavaScript y veamos como podemos
    interactuar con HTML.
*/


/*
    Elementos de Acceso
    ==================

    Document Object Model (DOM)
    ---------------------------
    El DOM es la representación en JavaScript del elemento HTML que está siendo
    utilizado. EL DOM está disponible bajo una variable global especial llamada
    "document". Podemos obtener nodos específicos (elementos de página) con el
    metodo DOM: '.querySelector'.

    Obtengamos nuestro link de Twitter desde la página.

    Ejemplo:

    const nuestroTwitter = document.querySelector('.twitter');

    // Podemos guardar elementos de la página en variables, 
    // al igual que como cualquier otro valor!
    // De todas formas, fijate que un elemento de página es un objeto,
    // el cual es un "tipo de referencia", así como los arrays (mirá el nivel 2).
    // Eso quiere decir que se pueden cambiar los atributos y propiedades del elemento,
    // pero no la variable en sí misma. Vas a ver esto en acción ahora mismo.
*/

// TAREA: Ahora te toca a vos! — Obtené la etiqueta h1 de la página y guardala en una variable
//       variable llamada nuestroTitulo.
//       Utilizá console.log para ver lo que obtuviste!

const nuestroTitulo = document.querySelector('h1');
console.log(nuestroTitulo);
nuestroTitulo.innerText = 'Hola Paaaaa';

/*
    Obteniendo elementos similares.
    ========================

    También podemos obtener todos los elementos con la misma etiqueta. En nuestro
    pie de página tenemos una lista desordenada (<ul>), con tres elementos de lista (<li>) adentro.
    Obtengamoslos todos con un array de los elementos de la página. Cuando querramos obtener multiples elementos,
    podemos utilizar el método '.querySelectorAll', el cual nos dará una lista con las coincidencias.

    Ejemplo:

    // Esto obtendrá todos los <li> de la página.
    const mediaLinks = document.querySelectorAll('li');
*/

// TAREA: Obtené todos los elementos <li> de la página en una variable llamada mediaLinks.

const mediaLinks = document.querySelectorAll('li');







// TAREA: Ahora utilizá console.log para ver la cantidad de 
// elementos li que hay con mediaLinks.length

console.log(mediaLinks.length);




// TAREA: ¿Te acordás de los bucles del nivel 2? Usando lo que sabés de ellos, realizá iteraciones
//      sobre cada item de mediaLinks y mostralos en pantalla con console.log

for(let i = 0; i<mediaLinks.length; i++){
    console.log(mediaLinks[i].innerText);
}




/*
    Propiedades de los elementos
    ==================
    
    Ok, hasta acá todo bien. Peeeroo, ¿que pasa si queremos obtener SOLO el texto
    de nuestra etiqueta 'h1'?
    Los elementos de página tienen una propiedad para esto: '.textContent'.

    Ejemplo:

    nuestroTwitter.textContent;
    // Obtendremos el texto: 'Twitter: @MusesCodeJSSyd @MusesCodeJSMelb @MCJSHobart @MCJSPerth @BrisMuses'.
*/

// TAREA: Obtené el contenido de nuestro elemento 'h1'
// y utilizá console.log para mostrarlo.

console.log(nuestroTitulo.innerText);




/*
    Editar el contenido de la página
    ====================

    Podemos simplemente cambiar el contenido de las étiquetas utilizando la propiedad que 
    vimos recién, '.textContent'.

    Ejemplo:

    nuestroTwitter.textContent = '@ButenkoMe';
    console.log(nuestroTwitter.textContent);
    // Adiviná que es lo que vamos a ver en la página y en la consola!
*/

// TAREA: Hagamos un nuevo título! Cambiá el contenido de nuestro 'h1' y ponele lo que quieras.

nuestroTitulo.textContent = 'Ya te va saliendo padreeee';
console.log(nuestroTitulo.textContent);


/*
    Editando atributos
    ==================
    
    También podemos cambiar y establecer atributos en nuestros elementos.

    Ejemplo:

    const nuestroTwitter = document.querySelector('.twitter');
    ourTwitter.id = "sorpresa";
*/

// TAREA: Actualizá el valor del atributo 'src' de nuestra etiqueta 'img' a "img/kittens.jpeg".



const nuestroImg = document.querySelector('img').src = 'data:image/jpeg;base64,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';







/*
    Editando estilos
    ==============

    Cambiemos algunos estilos. Los elementos de página tienen una propiedad '.style'.
    Podemos asignarle estilos a esta propiedad utilizando los mismos nombres que en
    los archivos CSS.

    (Si una propiedad tiene '-' en su nombre, como — font-size —, entonces
    el guión será eliminado y las siguiente palabra comenzara con una letra mayúscula, y pasará
    a ser fontSize).

    Ejemplo:

    const nuestroTwitter = document.querySelector('.twitter');
    nuestroTwitter.style.backgroundColor = 'white';
*/

// Tarea: Obtené cualquier elemento de la página y cambiale algunos estilos.

const cuerpoPagina = document.querySelector('body');

cuerpoPagina.style.backgroundColor = 'yellow';




/*
   Creando nuevos nodos (Elementos)
    =============================

    El objeto "document" también nos da maneras de crear nodos desde cero.

    document.createElement('div'); // crea un nuevo elemento llamado 'div'.
    document.createTextNode('foobar'); // crea un nuevo texto que contiene 'foobar'
    existingNode.appendChild(newNode); // agrega un newNode al final de existingNode.

    Ejemplo:

    const nodoPagina = document.querySelector('body');
    const nuevoParrafo = document.createElement('p');
    const textoParrafo = document.createTextNode('Yeeee!');
    nuevoParrafo.appendChild(textoParrafo);
    nodoPagina.appendChild(nuevoParrafo);
*/

// Tarea: Todavía seguís teniendo a los gatitos en tu pantalla? A mí me gusta el logo 
//       y los gatitos.
//       Creá una nueva imagen con nuestro logo como fuente, y ponela
//       en nuestra cabecera.
//
// P.S. También les podés dar estilos al nuevo nodo que creaste.

const nuevaImg = document.createElement('img');
nuevaImg.src = 'data:image/jpeg;base64,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'
document.querySelector('header').appendChild(nuevaImg);



////////////////////////////////////////////////////////////////////////////
// ¡Felicidades! ¡Has terminado el Nivel 3 de JavaScript Básico!          //
// Levántate, estira las piernas y celebra tu logro.                      //
// ¡Creo que esto amerita un festejo!                                     //
////////////////////////////////////////////////////////////////////////////
