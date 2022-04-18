import { funciones } from "./functions.js";
var mensaje = document.getElementById("cajaTexto");
const encriptarButton = document.getElementById("encriptar");
const desencriptarButton = document.getElementById("desencriptar");
const copiarButton = document.getElementById("botonCopiar");
var resultado = document.getElementById("resultado");




encriptarButton.onclick = function(event) {
    event.preventDefault();
    var aviso = document.querySelector('#aviso');
    if (mensaje.validity.valueMissing == true) {
        aviso.innerHTML = 'Debe tener solo letras minúsculas y no deben ser utilizados letras con acentos ni caracteres especiales';
        aviso.classList.remove('hidden')
        setTimeout(()=>{
            aviso.classList.add('hidden')
        },4000)
    }
    else{
        aviso.classList.add('hidden')
        funciones.encriptarMensaje(mensaje);
    }

    mensaje.focus();
}

desencriptarButton.onclick = function(event){
    event.preventDefault();
    var message = mensaje.value
    if (message == "") {
        console.log(mensaje.validity)
    }
    else{
        funciones.desencriptarMensaje(mensaje);
    }

    mensaje.focus();
}

copiarButton.addEventListener('click', function copyToClickBoard(event){
    event.preventDefault();
    var content = document.getElementById('resultado').innerHTML;
    navigator.clipboard.writeText(content)
})