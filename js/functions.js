function tiene_mayusculas(texto){
    var letras_mayusculas="ABCDEFGHYJKLMNÑOPQRSTUVWXYZ0123456789/[~!@#$%^&*()_+|}{[]\?><:`';.,áéíóúàèìòù]\"";
    for(let i = 0; i<texto.length; i++){
        if (letras_mayusculas.indexOf(texto.charAt(i),0)!=-1){
            return false;
        }
    }
    return true;
}

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

function desencriptarMensaje(mensaje){
    var str = mensaje.value;
    str = str.replace(new RegExp("ai","g"), "a");
    str = str.replace(new RegExp("enter","g"), "e");
    str = str.replace(new RegExp("imes","g"), "i");
    str = str.replace(new RegExp("ober","g"), "o");
    str = str.replace(new RegExp("ufat","g"), "u");
    var encriptacion = document.getElementById("resultado"); // Obtengo el elemento donde voy a mostrar el mensaje
    encriptacion.innerHTML = str;
}
function validarInput(input){
    const aviso = 'Debe tener solo letras minúsculas y no deben ser utilizados letras con acentos ni caracteres especiales';
    input.setCustomValidity(aviso)
}

export const funciones = {
    encriptarMensaje,
    desencriptarMensaje,
    tiene_mayusculas,
    validarInput,
}