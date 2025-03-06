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
}

