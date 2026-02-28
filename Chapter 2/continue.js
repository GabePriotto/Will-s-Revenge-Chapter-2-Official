var textoOriginal = "original";
var texto1 = "Tudo bem, agora você sabe a verdade e por que está aqui...";
var texto2 = "Não posso ficar neste lugar por muito tempo. Por algum motivo, as Dark Rooms corrompem os números que formam nossos corpos...";
var texto3 = "Se eu ficar muito tempo aqui, posso virar um amálgama de código binário...";
var texto4 = "Mas não se preocupe. Will nunca chegaria perto daqui, porém...";
var texto5 = "Esse lugar é cheio de Entidades deformadas pelo ambiente. Seria burrice eu te deixar aqui desarmado...";
var texto6 = "Eu queria ter algo mais efetivo, mas só tenho esse pequeno escudo velho. Pegue-o...";
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
    document.getElementById("rat").style.display = "block";
}
}