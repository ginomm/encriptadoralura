const inputTexto = document.querySelector(".input-texto");
const mensaje = document.querySelector(".mensaje");

//Aqui va el boton ENcriptar


function encriptar(stringEncriptada){
    let matrizCodigo =[["e", "enter"], ["i", "imes"],["a", "ai"], ["o", "ober"],["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for( let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll
            (matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }
return  stringEncriptada;
}

function btnEncriptar(){
    const TextoEncriptado = encriptar(inputTexto.value);
    mensaje.value = TextoEncriptado;
    mensaje.style.backgroundImage = "none";
    inputTexto.value = "";
}

//Aqui va el boton DESENcriptar

function Desencriptar(stringDesencriptada) {
    let matrizCodigo = [["a", "ai"], ["e", "enter"], ["i", "imes"], ["o", "ober"],["u","ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for( let i = 0; i < matrizCodigo.length; i++) {
        if(stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll
            (matrizCodigo[i][1],matrizCodigo[i][0])
        }
    }

return  stringDesencriptada;
}
function btnDesencriptar(){
    const TextoEncriptado = Desencriptar(inputTexto.value);
    mensaje.value = TextoEncriptado;
    mensaje.style.backgroundImage = "none";
    inputTexto.value = "";
}



function copiar(){
    mensaje.select()
    navigator.clipboard.writeText(mensaje.value);
    mensaje.value = ""
    alert("Texto Copiado");
}