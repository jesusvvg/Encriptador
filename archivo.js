var botonencriptar = document.querySelector(".encriptar");
var botondesencriptar = document.querySelector(".desencriptar");
var muneco = document.querySelector(".contenedor_muneco");
var h3 = document.querySelector(".contenedor_h3");
var parrafo = document.querySelector(".contenedor-parrafo");
var resultado = document.querySelector(".texto-resultado");
var botoncopiar = document.querySelector(".copiar");



botonencriptar.onclick = encriptar;
botondesencriptar.onclick = desencriptar;
botoncopiar.onclick = copiar;


function encriptar(){
    ocultarfront();
    var area = recuperartexto()
    resultado.textContent = encriptartexto(area);
}

function desencriptar(){
    ocultarfront();
    var area = recuperartexto()
    resultado.textContent = desencriptartexto(area);
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
    var texto = mensaje;
    var textofinal = "";

    for(var i = 0; i< texto.length; i++){
        if(texto[i]== "a"){
            textofinal = textofinal + "ai"
        }
        else if(texto[i]== "e"){
            textofinal = textofinal + "enter"
        }
        else if(texto[i]== "i"){
            textofinal = textofinal + "imes"
        }
        else if(texto[i]== "o"){
            textofinal = textofinal + "over"
        }
        else if(texto[i]== "u"){
            textofinal = textofinal + "ufat"
        }
        else{
            textofinal = textofinal + texto[i]
        }
    }
    return textofinal;
}

function desencriptartexto (mensaje){
    var texto = mensaje;
    var textofinal = "";

    for(var i = 0; i< texto.length; i++){
        if(texto[i]== "a"){
            textofinal = textofinal + "a"
            i = i+1;
        }
        else if(texto[i]== "e"){
            textofinal = textofinal + "e"
            i = i+4;
        }
        else if(texto[i]== "i"){
            textofinal = textofinal + "i"
            i = i+3;
        }
        else if(texto[i]== "o"){
            textofinal = textofinal + "o"
            i = i+3;
        }
        else if(texto[i]== "u"){
            textofinal = textofinal + "u"
            i = i+3;
        }
        else{
            textofinal = textofinal + texto[i]
        }
    }
    return textofinal;
}

