
/* Reglas de encriptación:
"e" es convertido para "enter"
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras
*/

/* Reglas de desencriptación:
lo mismo pero al revés.
*/
const txtAEncriptar = document.querySelector("#textoAEncriptar");
const txtResultado = document.querySelector("#textoResultado");


function botonEncriptar(){
    const txt = txtAEncriptar.value;
    const encriptado = txt.replace(/(e)/gi, 'enter').replace(/(i)/gi, 'imes').replace(/(a)/gi, 'ai').replace(/(o)/gi, 'ober').replace(/(u)/gi, 'ufat');
    txtResultado.value = encriptado
    txtAEncriptar.value=" ";
    setMsgTituloResultado();
}

var btnEncriptar = document.querySelector("#btnEncriptar");
btnEncriptar.onclick = botonEncriptar;

function botonDesencriptar(){
    const txt = txtAEncriptar.value.replace(/(enter)/gi, 'e').replace(/(imes)/gi, 'i').replace(/(ai)/gi, 'a').replace(/(ober)/gi, 'o').replace(/(ufat)/gi, 'u');
    txtResultado.value = txt;
    txtAEncriptar.value;
    setMsgTituloResultado();
}

var buttonDesencriptar = document.querySelector("#btnDesencriptar");
buttonDesencriptar.onclick = botonDesencriptar;

function setMsgTituloResultado(){
    var msg = "Este es el resultado: ";
    var tituloElement = document.querySelector(".resultTitle");
    tituloElement.innerText = msg;

    var btnCopiar = document.querySelector('#divInvisible');
    btnCopiar.classList.remove("invisible");
}

function botonCopiar(){
    txtAEncriptar.value = txtResultado.value;
    txtResultado.value = "";

    var btnCopiar = document.querySelector('#divInvisible');
    btnCopiar.classList.add("invisible");
}
var buttonCopiar = document.querySelector("#btnCopiar");
buttonCopiar.onclick = botonCopiar;
