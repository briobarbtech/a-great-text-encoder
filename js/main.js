var mensaje = document.getElementById("cajaTexto");
mensaje.focus();
var encriptarButton = document.getElementById("encriptar");
var resultado = document.getElementById("resultado");




encriptarButton.onclick = function() {
    //console.log("Encriptando!!!!!")
    encriptarMensaje(mensaje)
}
var desencriptarButton = document.getElementById("desencriptar");
desencriptarButton.onclick = function(){
    //console.log("Desencriptandoooo!!!!")
    desencriptar(mensaje);
    
}

var copiarButton = document.getElementById("botonCopiar");
copiarButton.onclick = copyToClickBoard;


function copyToClickBoard(){
    var content = document.getElementById('resultado').innerHTML;

    navigator.clipboard.writeText(content)

 
}