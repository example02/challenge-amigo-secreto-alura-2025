// Desafío amigo secreto. 

// Se declara y crea una lista llamada amigos.
let listaAmigos = [];
let indiceSorteado;
// Se crea la función funcion  Agregar amigos. 
function  agregarAmigos() {
    let nombreCaja = document.getElementById('amigo').value;
    // condicion que no permite ingresar un valor "" y tampoco un número.
        if (nombreCaja != ""  ) {
            if(typeof nombreCaja === "string" && isNaN(nombreCaja)) {
            listaAmigos.push(nombreCaja);
            //console.log(nombreCaja);
            //console.log(listaAmigos);
            } else {
                alert('Por favor, ingrese un nombre valido');
            }
        } else {
            alert("Por favor, inserte un nombre.");
        }
    limpiarNombreCaja();
    recorrerAmigos(listaAmigos);
}

// Se crea la función limpiarCaja. 
function limpiarNombreCaja() {
    let textoCaja = document.querySelector('#amigo').value ='';
}

// Creacion de la función recorrer amigos.
function recorrerAmigos(lista) {
    let listaHTML = document.querySelector('#listaAmigos');
    listaHTML.innerHTML = "";
    // Se realiza un ciclo for: donde se crea un elemento <li> en la lista <ul> para cada nombre de amigo que se ingrese.
    for(i=0; i<listaAmigos.length; i++) {
        let nuevoElemento = document.createElement("li");
        nuevoElemento.textContent = lista[i];
        listaHTML.appendChild(nuevoElemento);
    }
    

}