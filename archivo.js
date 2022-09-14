var botonencriptar = document.querySelector(".encriptar");
var botondesencriptar = document.querySelector(".desencriptar");
var muneco = document.querySelector(".contenedor_muneco");
var h3 = document.querySelector(".contenedor_h3");
var parrafo = document.querySelector(".contenedor-parrafo");
var resultado = document.querySelector(".texto-resultado")

botonencriptar.onclick = encriptar;

function encriptar(){
    ocultarfront();
    resultado.textContent = recuperartexto();
}

function recuperartexto(){
    var area = document.querySelector(".area");
    return area.value; 
}

function ocultarfront(){
    muneco.classList.add("ocultar");
    h3.classList.add("ocultar");
    parrafo.classList.add("ocultar");
}

function encriptartexto (mensaje){
    var texto = mensaje:
    var textofinal = "";

    for(var i = 0; i< texto.length; i++)


}
  


