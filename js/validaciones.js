export function valida(input){
    const tipoDeInput = input.dataset.tipo;
    if(validadores[tipoDeInput]){
        validadores[tipoDeInput](input);
    }
    if (input.validity.valid) {
        input.parentElement.classList.remove("input-container--invalid")
        input.parentElement.querySelector(".input-message-error").innerHTML = ``
    }else{
        input.parentElement.classList.add("input-container--invalid")
        input.parentElement.querySelector(".input-message-error").innerHTML = mostrarMensajeError(tipoDeInput, input);
    }
}
const validadores = {
    nacimiento: input => validarNacimiento(input),
}


const mensajesError = {
    mensaje: {
        valueMissing: "La dirección no puede estar vacía",
    }
}
const tiposDeErrores = [
    "valueMissing",
]

function mostrarMensajeError(tipoDeInput, input) {
    let mensaje = ""
    tiposDeErrores.forEach(error => {
        if(input.validity[error]){
            mensaje = mensajesError[tipoDeInput][error]
        }
    });
    return mensaje;
}