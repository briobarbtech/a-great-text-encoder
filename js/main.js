import { funciones } from "./functions.js";
const ventana = document.querySelector('body')
var mensaje = document.getElementById("cajaTexto");
const encriptarButton = document.getElementById("encriptar");
const desencriptarButton = document.getElementById("desencriptar");
const copiarButton = document.getElementById("botonCopiar");
var resultado = document.getElementById("resultado");




encriptarButton.onclick = function(event) {
    event.preventDefault();
    if (funciones.validarInput(mensaje)) {
        funciones.encriptarMensaje(mensaje);
    }

    if (ventana.clientWidth > 480){
        mensaje.focus();
    }
}

desencriptarButton.onclick = function(event){
    event.preventDefault();
    funciones.desencriptarMensaje(mensaje);

    if (ventana.clientWidth > 480){
        mensaje.focus();
    }
}

copiarButton.addEventListener('click', function copyToClickBoard(event){
    event.preventDefault();
    var content = document.getElementById('resultado').innerHTML;
    navigator.clipboard.writeText(content)
})