const audio = document.getElementById("musica");

const tempoSalvo = sessionStorage.getItem("tempoMusica");
if(tempoSalvo) {
    audio.currentTime = tempoSalvo;
}

audio.addEventListener("timeupdate", () => {
    sessionStorage.setItem("tempoMusica", audio.currentTime);
});
audio.play();

let textoOriginal = "soods";
let texto1 = "*Você finalmente encontra uma porta no meio da escuridão e a atravessa...";
let texto2 = "*A porta se fecha atrás de você e desaparece, como se nunca tivesse existido...";
let texto3 = "*Ao olhar ao redor, você percebe que está em outro lugar das Dark Rooms... com uma atmosfera diferente...";
let texto4 = "*Você caminha alguns passos... a mesma solidão, o mesmo vazio... o mesmo de sempre...";
let texto5 = "*Você larga o escudo velho no chão e se senta para descansar por alguns instantes... Depois de todas aquelas batalhas, respirar um pouco deve fazer bem...";
let texto6 = "*Você percebe que, até aquele momento, não sentiu fome nem sede... mas cansaço e dor sim... porque?";
let texto7 = "*Talvez você devesse fazer algumas perguntas para Chris quando se reencontrar com ele.";
let texto8 = "*Você levanta, pega o escudo e continua a caminhada...";
let texto9 = "*Após algum tempo andando pelos corredores, você encontra um elevador de serviço... algo que não combinava muito com o ambiente ao redor...";
let texto10 = "*Você tenta de todas as formas possiveis abrí-lo, mas não parece funcionar...";
let texto11 = "*Você, então, percebe alguns botões na parede, ao lado do elevador, juntamente de inscrições em vermelho vivo ao lado... Talvez o elevador precise de uma senha para funcionar...";
let texto12 = "*Mas... que senha?";
let textoAtual = textoOriginal;

function dialogo() {
    const normal = document.getElementById("normalMan");
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
        normal.textContent = texto6;
        textoAtual = texto6;
    } else if(textoAtual === texto6) {
        normal.textContent = texto7;
        textoAtual = texto7;
    } else if(textoAtual === texto7) {
        normal.textContent = texto8;
        textoAtual = texto8;
    } else if(textoAtual === texto8) {
        normal.textContent = texto9;
        textoAtual = texto9;
    } else if(textoAtual === texto9) {
        normal.textContent = texto10;
        textoAtual = texto10;
    } else if(textoAtual === texto10) {
        normal.textContent = texto11;
        textoAtual = texto11;
    } else if(textoAtual === texto11) {
        normal.textContent = texto12;
        textoAtual = texto12;
        img.style.display = 'inline';
        contButton.style.display = 'inline-block';
        input.style.display = 'inline-block';
        red.style.display = 'inline';
        socorro.style.marginTop = '310px';
    }
}

const normal = document.getElementById("normalMan");
const img = document.querySelector('.img');
const contButton = document.querySelector('.continue');
const input = document.querySelector('.textInput');
const red = document.getElementById("red");
const socorro = document.getElementById("dialButton");

contButton.addEventListener('click', cont);

function cont() {
    if(input.value == "buscai justiça") {
        window.location.href = "elevator.html";
    } else {
        normal.textContent = "*O elevador ainda não abriu...";
        setTimeout(() => {normal.textContent = "" }, 5000);
    }
}

