var textoOriginal = "original";
var texto1 = "Ótimo. Agora você está pronto para ir.";
var texto2 = "Tente não causar confusão. As Entidades são muito fortes, evite lutar contra elas...";
var texto3 = "Procure por uma PORTA ROXA, ela vai te levar diretamente para o local onde está a porta de saída deste lugar.";
var texto4 = "Lembre-se: PORTA ROXA.";
var texto5 = "Agora eu tenho que ir. Já estou sentindo meu corpo ficar esquisito...";
var texto6 = "Boa-sorte. Nos vemos no local da saída. Eu espero...";
var textoAtual = textoOriginal;

function dialogo() {
    var elemento = document.getElementById("angel");
    if (textoAtual === textoOriginal) {
    elemento.textContent = texto1;
    textoAtual = texto1;
} else if (textoAtual === texto1) {
    elemento.textContent = texto2;
    textoAtual = texto2;
} else if (textoAtual === texto2) {
    elemento.textContent = texto3;
    textoAtual = texto3;
} else if (textoAtual === texto3) {
    elemento.textContent = texto4;
    textoAtual = texto4;
} else if (textoAtual === texto4) {
    elemento.textContent = texto5;
    textoAtual = texto5;
} else if (textoAtual === texto5) {
    elemento.textContent = texto6;
    textoAtual = texto6;
} else {
    window.location.href = "The Real Dark.html";
}
}