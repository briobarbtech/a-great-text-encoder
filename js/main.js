var mensaje = document.getElementById("cajaTexto");
mensaje.focus();
var encriptarButton = document.getElementById("encriptar");
var resultado = document.getElementById("resultado");




encriptarButton.addEventListener('click',(event) => {
    event.defaultPrevented()
    encriptarMensaje(mensaje)
})
var desencriptarButton = document.getElementById("desencriptar");
desencriptarButton.addEventListener('click', (event)=>{
    event.defaultPrevented()
    desencriptar(mensaje);
})

var copiarButton = document.getElementById("botonCopiar");
copiarButton.addEventListener('click',(event)=>{ 
    event.defaultPrevented
    copyToClickBoard();

});


function copyToClickBoard(){
    var content = document.getElementById('resultado').innerHTML;

    navigator.clipboard.writeText(content)

 
}