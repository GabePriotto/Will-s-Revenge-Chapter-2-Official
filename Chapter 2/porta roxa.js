let textos = [
    "*Você e Chris caminham por um tempo pelos corredores vazios do... Vazio...",
    "*Chris caminha tranquilamente. Ele parece conhecer bem o lugar...",
    "*...",
    "*Após um certo tempo, vocês encontram algumas portas pelo caminho, de várias cores e tipos diferentes...",
    "*Chris pareceu ver seu interesse...",
    "Ah, essas portas são conexões entre outros lugares e o Vazio. Imagina quantos lugares malucos e diferentes podem estar conectados com esse lugar...",
    "De fato, o Vazio é uma espécie de 'centro' daqui. A maioria dos mundos existentes podem ser acessados pelo Vazio.",
    "Você mesmo, que já veio para cá antes, com certeza deve ter usado uma dessas portas para chegar aqui.",
    "*Só de lembrar do tempo que passou com <span>Will</span> você já sente um frio na barriga.",
    "Ah! Finalmente chegamos!",
    "*Chris para, e você vê uma grande <span>Porta Roxa</span> extremamente decorada e estranhamente chamativa.",
    "Vamos! Logo você estará em casa!",
    "*Chris aponta para a porta com um grande sorriso no rosto...",
    "O que está esperando? Entre!"
];
let textoAtual = "";
var greenLight = true;
function dialogo() {
    let normal = document.getElementById("normalMan");
    let angel = document.getElementById("angel");
    if(greenLight === true) {
        greenLight = false;
        normal.textContent = textos[0];
        textoAtual = textos[0];
    } else if(textoAtual === textos[0]) {
        normal.textContent = textos[1];
        textoAtual = textos[1];
    } else if(textoAtual === textos[1]) {
        normal.textContent = textos[2];
        textoAtual = textos[2];
    } else if(textoAtual === textos[2]) {
        normal.textContent = textos[3];
        textoAtual = textos[3];
    } else if(textoAtual === textos[3]) {
        normal.textContent = textos[4];
        textoAtual = textos[4];
    } else if(textoAtual === textos[4]) {
        normal.textContent = "";
        angel.textContent = textos[5];
        textoAtual = textos[5];
    } else if(textoAtual === textos[5]) {
        angel.textContent = textos[6];
        textoAtual = textos[6];
    } else if(textoAtual === textos[6]) {
        angel.textContent = textos[7];
        textoAtual = textos[7];
    } else if(textoAtual === textos[6]) {
        angel.textContent = textos[7];
        textoAtual = textos[7];
    } else if(textoAtual === textos[7]) {
        normal.innerHTML = textos[8];
        angel.textContent = "";
        textoAtual = textos[8];
    } else if(textoAtual === textos[8]) {
        normal.textContent = "";
        angel.textContent = textos[9];
        textoAtual = textos[9];
    } else if(textoAtual === textos[9]) {
        angel.textContent = "";
        normal.innerHTML = textos[10];
        textoAtual = textos[10];
    } else if(textoAtual === textos[10]) {
        angel.textContent = textos[11];
        normal.textContent = "";
        textoAtual = textos[11];
    } else if(textoAtual === textos[11]) {
        angel.textContent = "";
        normal.textContent = textos[12];
        textoAtual = textos[12];
    } else if(textoAtual === textos[12]) {
        angel.textContent = textos[13];
        normal.textContent = "";
        textoAtual = textos[13];
    } else if(textoAtual === textos[13]) {
        angel.textContent = "";
        window.location = "inside.html";
    }
}