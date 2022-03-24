function encriptarMensaje(mensaje){
    var str = mensaje.value;
    var textoEncriptado;
    var verificarMayusculas = tiene_mayusculas(str)
    if(verificarMayusculas){
        textoEncriptado = str.replace(RegExp("e","g"), "enter");
        textoEncriptado = textoEncriptado.replace(RegExp("i","g"), "imes");
        textoEncriptado = textoEncriptado.replace(RegExp("a","g"), "ai");
        textoEncriptado = textoEncriptado.replace(RegExp("o","g"), "ober");
        textoEncriptado = textoEncriptado.replace(RegExp("u","g"), "ufat");
    }
    if (verificarMayusculas){
        var encriptacion = document.getElementById("resultado"); // Obtengo el elemento donde voy a mostrar el mensaje
        encriptacion.innerHTML = textoEncriptado;
    }
    else {
        alert("No se puede encriptar")
    }

}

