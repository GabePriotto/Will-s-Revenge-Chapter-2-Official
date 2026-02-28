const audio = document.getElementById("musica");

const tempoSalvo = sessionStorage.getItem("tempoMusica");
if(tempoSalvo) {
    audio.currentTime = tempoSalvo;
}

audio.addEventListener("timeupdate", () => {
    sessionStorage.setItem("tempoMusica", audio.currentTime);
});
audio.play();

let textoOriginal = "ddpa";
let texto1 = "*Ao entrar, você percebe que a sala está completamente escura, sem qualquer luz...";
let texto2 = "*Você tenta dar meia volta, mas a porta se fecha atrás de você com uma batida e desaparece, como se estivesse esperando para isso há muito tempo...";
let texto3 = "*Parece que você está preso aqui...";
let texto4 = "*Talvez haja alguma saída em algum lugar desse breu, talvez uma porta...";
let texto5 = "*Procure alguma saída pela escuridão...";
let textoAtual = textoOriginal;

function dialogo() {
    const normal = document.getElementById("normalMan");
    const div = document.querySelector('.reto');
    const button = document.getElementById("dialButton");
    if(textoAtual === textoOriginal) {
        normal.textContent = texto1;
        textoAtual = texto1;
    } else if(textoAtual === texto1) {
        normal.textContent = texto2;
        textoAtual = texto2;
    } else if(textoAtual === texto2) {
        normal.textContent = texto3;
        textoAtual = texto3;
    } else if(textoAtual === texto3) {
        normal.textContent = texto4;
        textoAtual = texto4;
    } else if(textoAtual === texto4) {
        normal.textContent = texto5;
        textoAtual = texto5;
    } else if(textoAtual === texto5) {
    div.style.display = 'none';
    button.style.display = 'none';
    }
}