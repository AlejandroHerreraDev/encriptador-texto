
let campoDeTexto = document.querySelector(`.campo1`);
let campoDeMensaje = document.querySelector(`.campo2`);
let matrizCode =[
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"]
];
let contenidoCampo2 =document.querySelector(".contenedor-muneco");
let contenidoCampo3 =document.querySelector(".contenedor-mensajes-campo");

function botonEncriptar() {
    let textoDeUsuario = encriptar(campoDeTexto.value);
    campoDeTexto.value = "";
    campoDeMensaje.value = textoDeUsuario;
    contenidoCampo2.remove();
    contenidoCampo3.style.display = "none";
    document.querySelector(".boton-copiar").style.visibility = "visible";
}

function botonDesencriptar() {
    let textoDeUsuario = desencriptar(campoDeTexto.value);
    campoDeTexto.value = "";
    campoDeMensaje.value = textoDeUsuario;
}

function botonCopiar() {
    let textoCopiado = campoDeMensaje;
    textoCopiado.select();
    document.execCommand("copy");
    campoDeMensaje.value = "";
    
}

function encriptar(textoIngresado) {
    for (let i = 0; i < matrizCode.length; i++) {
        if(textoIngresado.includes(matrizCode[i][0])){
            textoIngresado = textoIngresado.replaceAll(matrizCode[i][0], matrizCode[i][1]);
        }
    }
    return textoIngresado;
}

function desencriptar(textoIngresado) {
    for (let i = 0; i < matrizCode.length; i++) {
        if (textoIngresado.includes(matrizCode[i][1])) {
            textoIngresado = textoIngresado.replaceAll(matrizCode[i][1], matrizCode[i][0]);
        }
    }
    return textoIngresado;
}





