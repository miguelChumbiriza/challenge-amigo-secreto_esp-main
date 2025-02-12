// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos=[];

function agregarAmigo(){
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();
    if (nombre==="") {
        alert("Ingresa un nombre válido")
        return;
    }
    if (amigos.includes(nombre)) {
        alert("El nombre ya está ingresado");
        return;
    }
    amigos.unshift(nombre);
    mostrarAmigos();
    input.value="";

}
function mostrarAmigos(){
    let lista=document.getElementById("listaAmigos");
    lista.innerHTML="";

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent=amigos[i];
        lista.appendChild(li);
        
    }
}
function sortearAmigo(){
    if(amigos.length<2){
        alert("Debe haber almenos 2 participantes");
        return;
    }
    let sorteo = Math.floor(Math.random()*amigos.length);
    let amigoSecreto = amigos[sorteo];

    document.getElementById("resultado").textContent = `El amigo secreto es:  ${amigoSecreto}`;
}