function desencriptar(mensaje){
    var str = mensaje.value;
    str = str.replace(new RegExp("ai","g"), "a");
    str = str.replace(new RegExp("enter","g"), "e");
    str = str.replace(new RegExp("imes","g"), "i");
    str = str.replace(new RegExp("ober","g"), "o");
    str = str.replace(new RegExp("ufat","g"), "u");
    var encriptacion = document.getElementById("resultado"); // Obtengo el elemento donde voy a mostrar el mensaje
    encriptacion.innerHTML = str;
}