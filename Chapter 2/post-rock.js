let textoOriginal = "Oi princesa!";
let texto1 = "Uff... Arf... Puf...";
let texto2 = "*Você observa silenciosamente enquanto The Rock solta vários 'ufs' e 'pufs'...";
let texto3 = "Como pode uma criaturinha tão insignificante ser tão... arf... forte?";
let texto4 = "Você só pode estar usando o <span class='span'>Hack...</span>";
let texto5 = "Claro, é óbvio que Chris te ensinou...";
let texto6 = "Mas, fique sabendo, que se eu estivesse com minha força total... puf... você não teria chance...";
let texto7 = "Por enquanto, farei uma retirada estratégica, mas quando eu voltar, você e Chris vão ver do que eu realmente sou capaz...";
let texto8 = "Me aguardem...";
let texto9 = "*The Rock sai correndo pelo corredor com a mão na barriga e mancando...";
let texto10 = "*Talvez você já possa seguir em frente...";
let textoAtual = textoOriginal;

function dialogo() {
    const demon = document.getElementById('demon');
    const messageBox = document.getElementById("messageBox");
    if(textoAtual === textoOriginal) {
        demon.textContent = texto1;
        textoAtual = texto1;
        messageBox.classList.add("visible");
        messageBox.classList.remove("hidden");
    
        setTimeout(() => {
            messageBox.classList.remove("visible");
            messageBox.classList.add("hidden");
        }, 5000);
    } else if(textoAtual === texto1) {
        const normal = document.getElementById('normalMan');
        normal.textContent = texto2;
        textoAtual = texto2;
    } else if(textoAtual === texto2) {
        demon.textContent = texto3;
        textoAtual = texto3;
    } else if(textoAtual === texto3) {
        demon.innerHTML = texto4;
        textoAtual = texto4;
    } else if(textoAtual === texto4) {
        demon.textContent = texto5;
        textoAtual = texto5;
    } else if(textoAtual === texto5) {
        demon.textContent = texto6;
        textoAtual = texto6;
    } else if(textoAtual === texto6) {
        demon.textContent = texto7;
        textoAtual = texto7;
    } else if(textoAtual === texto7) {
        demon.textContent = texto8;
        textoAtual = texto8;
    } else if(textoAtual === texto8) {
        const normal = document.getElementById('normalMan');
        normal.textContent = texto9;
        textoAtual = texto9;
    } else if(textoAtual === texto9) {
        const normal = document.getElementById('normalMan');
        normal.textContent = texto10;
        textoAtual = texto10;
    } else if(textoAtual === texto10) {
        window.location.href = "corredor.html";
    }
}

const audio = document.getElementById("musica");

const tempoSalvo = sessionStorage.getItem("tempoMusica");
if(tempoSalvo) {
    audio.currentTime = tempoSalvo;
}

audio.addEventListener("timeupdate", () => {
    sessionStorage.setItem("tempoMusica", audio.currentTime);
});