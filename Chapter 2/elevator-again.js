let textoOriginal = "fkalfdadf";
let texto1 = "*Parece que você retornou ao elevador...";
let texto2 = "*Para onde você deveria ir agora?";
let texto3 = "*Esse botão não está funcionando...";
let texto4 = "*Tudo bem, lá vamos nós!";
let textoAtual = textoOriginal;

const botoes = document.querySelectorAll('.number');
const caminho = document.querySelectorAll('.andar');
const div = document.querySelector('.tabela');
const socorro = document.getElementById("dialButton");

let greenLight = false;

function dialogo() {
    const normal = document.getElementById("normalMan");

    if (textoAtual === textoOriginal) {
        normal.textContent = texto1;
        textoAtual = texto1;

    } else if (textoAtual === texto1) {
        normal.textContent = texto2;
        textoAtual = texto2;

        // Mostrar botões corretamente mantendo GRID
        botoes.forEach(botao => {
            botao.style.display = 'inline-block';
        });

        caminho.forEach(botao => {
            botao.style.display = 'inline-block';
        });

        div.style.display = 'grid'; // 🔥 ESSA É A CORREÇÃO
        socorro.style.display = "none";

        greenLight = true;
    }
}

function nop() {
    const normal = document.getElementById("normalMan");

    if (greenLight) {
        normal.textContent = texto3;

        setTimeout(() => {
            normal.textContent = "";
        }, 3000);
    }
}

function tocarElevador(destino) {
    const normal = document.getElementById("normalMan");
    const musica = document.getElementById('musica');
    const musica1 = document.getElementById('musica1');
    const musica2 = document.getElementById('musica2');
    const musica3 = document.getElementById('musica3');

    if (!greenLight) return;

    // Esconder interface
    botoes.forEach(botao => botao.style.display = 'none');
    caminho.forEach(botao => botao.style.display = 'none');
    div.style.display = 'none';
    socorro.style.display = 'none';

    musica.pause();
    normal.textContent = texto4;

    musica1.play();

    musica1.onended = () => {
        musica2.play();
    };

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

// Andares
function sip() {
    tocarElevador('andar-3.html');
}

function sop() {
    tocarElevador('andar-5.html');
}

function sup() {
    tocarElevador('andar-9.html');
}