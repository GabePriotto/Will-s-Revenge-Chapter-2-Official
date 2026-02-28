const audio = document.getElementById("musica");

const tempoSalvo = sessionStorage.getItem("tempoMusica");
if (tempoSalvo) {
    audio.currentTime = tempoSalvo;
}

audio.addEventListener("timeupdate", () => {
    sessionStorage.setItem("tempoMusica", audio.currentTime);
});
audio.play();

let textoOriginal = "AJJSD";
let texto1 = "*Você caminha pelos corredores escuros das Dark Rooms...";
let texto2 = "*Não há ninguém por perto. Apenas um silêncio absoluto...";
let texto3 = "*O silêncio dos corredores te faz pensar: Quem você realmente é?";
let texto4 = "*Desde que levantou, você apenas se lembra do que aconteceu <em>depois</em> de adentrar o computador...";
let texto5 = "*Mas, quem de fato é você? E como entrou ali?";
let texto6 = "*Você apenas lembra da voz simpática de Will falando com você, mas isso quando  já estava dentro do compuutador...";
let texto7 = "*Sim... Will... Ele lançou uma maldição em você... Você nem sequer sabe como é o rosto dele...";
let texto8 = "*Ainda bem que Rock retirou essa maldição, caso contrário você nunca teria sequer consigo lutar contra The Rock...";
let texto9 = "*Em meio a todos esses pensamentos, você não percebe uma porta de madeira no fim do corredor, e bate de cara nela...";
let texto10 = "*Talvez você devesse abrí-la?";
let texto11 = "*Você abre a porta com cuidado e entra...";
let texto12 = "*Então, o que você deveria fazer?";
let texto13 = "*Você olha para trás e percebe que, no lugar do extenso corredor, há uma parede de tijolos sólida bloqueando o caminho...";
let texto14 = "*Você sente como se estivesse sendo observado...";
let texto15 = "*Você decide que é melhor entrar...";

let textoAtual = textoOriginal;
let trueFalse = true;

function dialogo() {
    const normal = document.getElementById("normalMan");

    if (textoAtual === textoOriginal) {
        normal.textContent = texto1;
        textoAtual = texto1;
    } else if (textoAtual === texto1) {
        normal.textContent = texto2;
        textoAtual = texto2;
    } else if (textoAtual === texto2) {
        normal.textContent = texto3;
        textoAtual = texto3;
    } else if (textoAtual === texto3) {
        normal.innerHTML = texto4;
        textoAtual = texto4;
    } else if (textoAtual === texto4) {
        normal.textContent = texto5;
        textoAtual = texto5;
    } else if (textoAtual === texto5) {
        normal.textContent = texto6;
        textoAtual = texto6;
    } else if (textoAtual === texto6) {
        normal.textContent = texto7;
        textoAtual = texto7;
    } else if (textoAtual === texto7) {
        normal.textContent = texto8;
        textoAtual = texto8;
    } else if (textoAtual === texto8) {
        normal.textContent = texto9;
        textoAtual = texto9;
    } else if (textoAtual === texto9) {
        normal.textContent = texto10;
        textoAtual = texto10;
    } else if (textoAtual === texto10) {
        const imagem = document.querySelector(".alt");
        const button1 = document.getElementById("truco");
        const button2 = document.getElementById("duno");

        imagem.style.display = "inline";
        button1.style.display = "inline-block";
        button2.style.display = "inline-block";
    }
}

function socorro() {
    const normal = document.getElementById("normalMan");
    const button2 = document.getElementById("duno");

    if (textoAtual === texto10) {
        trueFalse = false;
        normal.textContent = texto11;
        textoAtual = texto11;
        button2.style.display = "none";
    } else if (textoAtual === texto11) {
        window.location.href = "dark.html";
    }
}

function dontOpen() {
    const normal = document.getElementById("normalMan");
    const button1 = document.getElementById("truco");
    const button2 = document.getElementById("duno");

    if (textoAtual === texto10) {
        normal.textContent = texto12;
        textoAtual = texto12;
        button1.style.display = "none";
    } else if (textoAtual === texto12) {
        const button3 = document.getElementById("trino");
        button3.style.display = "inline-block";
        button2.style.display = "none";
    }
}

function reTurn() {
    const normal = document.getElementById("normalMan");
    const button1 = document.getElementById("truco");
    const button3 = document.getElementById("trino");

    if (textoAtual === texto12) {
        normal.textContent = texto13;
        textoAtual = texto13;
    } else if (textoAtual === texto13) {
        normal.textContent = texto14;
        textoAtual = texto14;
    } else if (textoAtual === texto14) {
        normal.textContent = texto15;
        textoAtual = texto15;
    } else if (textoAtual === texto15) {
        trueFalse = true;
        button1.style.display = "inline-block";
        button3.style.display = "none";
    }
}

function help() {
    if (trueFalse === true) {
        window.location.href = "dark.html";
    }
}