var textoOriginal = "original";
var texto1 = "Opa! Perdão pelo susto, apenas tirei uma maldição que Will tinha posto em você. Está conseguindo ver melhor, não é?";
var texto2 = "Tudo bem, eu não o julgo. Porém, temos que nos apressar...";
var texto3 = "Não posso ficar neste lugar por muito tempo. Por algum motivo, as Dark Rooms corrompem os números que formam nossos corpos...";
var texto4 = "Se eu ficar muito tempo aqui, posso virar um amálgamo de código binário...";
var texto5 = "Mas não se preocupe. Will nunca chegaria perto daqui, porém...";
var texto6 = "Esse lugar é cheio de Entidades deformadas pelo ambiente. Seria burrice eu te deixar aqui desarmado...";
var texto7 = "Eu queria ter algo mais efetivo, mas só tenho esse pequeno escudo velho. Pegue-o...";
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
}  else if (textoAtual === texto6) {
    elemento.textContent = texto7;
    document.getElementById("rat").style.display = "block";
}
}