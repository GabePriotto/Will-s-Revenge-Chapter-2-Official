let textoOriginal = "jdsfji";
let texto1 = "*Ei! Parece que o elevador finalmente abriu!";
let texto2 = "*Bem, está na hora de descobrir para onde essa belezinha levará você.";
let texto3 = "*Voce olha para a tabela de botões...";
let texto4 = "*Há realmente muitos botões! Mas parece que alguns deles estão estragados...";
let texto5 = "*Bem, ao que parece, há apenas três andares disponíveis...";
let texto6 = "*Para qual andar você deveria ir?";
let texto7 = "*Esse botão não está mais funcionando...";
let texto8 = "*Tudo bem, lá vamos nós!";
let textoAtual = textoOriginal;

const botoes = document.querySelectorAll('.number');
const caminho = document.querySelectorAll('.andar');
const div = document.querySelector('.tabela');
const socorro = document.getElementById("dialButton");

let greenLight = false;

function dialogo() {
    const normal = document.getElementById("normalMan");
    const messageBox = document.getElementById("messageBox");

    if (textoAtual === textoOriginal) {
        normal.textContent = texto1;
        textoAtual = texto1;
        messageBox.classList.add("visible");
        messageBox.classList.remove("hidden");
        setTimeout(() => {
            messageBox.classList.remove("visible");
            messageBox.classList.add("hidden");
        }, 5000);
    } else if (textoAtual === texto1) {
        normal.textContent = texto2;
        textoAtual = texto2;
    } else if (textoAtual === texto2) {
        normal.textContent = texto3;
        textoAtual = texto3;
    } else if (textoAtual === texto3) {
        normal.textContent = texto4;
        textoAtual = texto4;
    } else if (textoAtual === texto4) {
        normal.textContent = texto5;
        textoAtual = texto5;
    } else if (textoAtual === texto5) {
        normal.textContent = texto6;
        textoAtual = texto6;

        botoes.forEach(b => b.style.display = 'block');
        caminho.forEach(c => c.style.display = 'block');

        div.style.display = 'grid';
        socorro.style.display = "none";
    }

    greenLight = true;
}

function nop() {
    const normal = document.getElementById("normalMan");
    if (greenLight) {
        normal.textContent = texto7;
        setTimeout(() => {
            normal.textContent = "";
        }, 3000);
    }
}

function irPara(destino) {
    const normal = document.getElementById("normalMan");
    const musica1 = document.getElementById('musica1');
    const musica2 = document.getElementById('musica2');
    const musica3 = document.getElementById('musica3');
    const musica = document.getElementById('musica');

    if (greenLight) {
        botoes.forEach(b => b.style.display = 'none');
        caminho.forEach(c => c.style.display = 'none');

        div.style.display = 'none';
        musica.pause();
        normal.textContent = texto8;

        musica1.play();
        musica1.onended = () => musica2.play();
        musica2.onended = () => {
            musica3.volume = 1;
            musica3.play();
        };
        musica3.onended = () => {
            setTimeout(() => {
                window.location.href = destino;
            }, 1000);
        };
    }
}

function sip() { irPara('andar-3.html'); }
function sop() { irPara('andar-5.html'); }
function sup() { irPara('andar-9.html'); }