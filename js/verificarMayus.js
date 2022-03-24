function tiene_mayusculas(texto){
    var letras_mayusculas="ABCDEFGHYJKLMNÑOPQRSTUVWXYZ0123456789/[~!@#$%^&*()_+|}{[]\?><:`';.,áéíóúàèìòù]\"";
    for(i=0; i<texto.length; i++){
        if (letras_mayusculas.indexOf(texto.charAt(i),0)!=-1){
            return false;
        }
    }
    return true;
}