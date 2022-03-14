//¿como volver el nodeList(lista de elementos mostrados despues de solicitarlos en el navegador) a un Array?
const nodeListToArray=[...nodeList];

//para traer un elemento por ID(#)
document.getElementById(#id1);
//devuelve los elementos en el DOM con el ID solicitado
//Para raer un elemento por class name:
document.getElementsByClassName('tagName');//o de la sig forma:
parent.getElementsByClassName('tagname');
//Devuelve un HTML Collection de todas las etiquetas con la misma clase solicitada
//Para traer un elemento segun el tipo de eiqueta html:
document.getElementsByTagName('div');//o de la sig forma:
parent.getElementsByTagName('div');
//Devuelve un HTML Collection de los elementos que exisen en el DOM con la etiqueta solicitada
//
document.querySelector('div'|#identificador);
document.querySelectorAll('p'|#id|'form-control');
