var textos = [
    "*Você atravessa a porta e a fecha em seguida...",
    "*Ao fechar, você ouve um som de 'click' vindo de trás. Você olha, e a porta não está mais lá.",
    "*Você respira fundo, percebendo que está em uma sala completamente vazia...",
    "*É estranho, mas esse lugar lhe parece muito familiar...",
    "Graças a Deus! Você sobreviveu!",
    "*Você toma um susto... Chris deveria parar de aparecer assim de repente...",
    "Eu jurei... Jurei que você estava perdido...",
    "*Chris parece meio frenético. Você diz para ele se acalmar...",
    "Perdoe-me mas, sinceramente, eu não acreditava em você...",
    "Depois que <span>Will</span> tomou o controle do <span>NeuraLink</span>, eu perdi as esperanças...",
    "Eu te considerei morto...",
    "Me desculpe...",
    "*Chris te encara fixamente com um olhar distante e entristecido. Ele realmente parece estar se sentindo culpado...",
    "Bem, de qualquer forma, você passou! Você realmente derrotou o <span>Coração Roxo</span> sozinho!",
    "Impressionante! Enfim, bem vindo ao Vazio, um lugar de... absolutamente nad...",
    "*Você interrompe Chris antes que ele termine a frase... Por algum motivo, aquilo te incomodou...",
    "*Sim... Foram exatamente as mesmas palavras que <span>Will</span> usou para descrever o Vazio, da primeira vez em que esteve nele...",
    "Ah... Você... Já esteve aqui? Tudo bem, isso adianta um pouco as coisas...",
    "Então, a <span>Porta Roxa</span> que te falei... Ela está em algum lugar por aqui.",
    "Sim, eu iria te esperar do outro lado, mas depois que <span>Will</span> tomou o controle do <span>NeuraLink</span> eu fiquei preocupado...",
    "Por isso, não consegui esperar e decidi vir por conta própria...",
    "De qualquer forma, precisamos ir até ela. Depois que passarmos por ela, estaremos muito perto de te tirar daqui...",
    "Vamos, me siga. Eu te mostro o caminho."
]

let greenLight = true;
let textoAtual = "";

function dialogo() {
    let normal = document.getElementById("normalMan");
    let angel = document.getElementById("angel");
    let img = document.getElementById("img");
    let music1 = document.getElementById("audio1");
    let music2 = document.getElementById("audio2");
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
        music1.pause();
        music2.play();
        img.style.visibility = 'visible';
        normal.textContent = "";
        angel.textContent = textos[4]
        textoAtual = textos[4];
    } else if(textoAtual === textos[4]) {
        normal.textContent = textos[5];
        angel.textContent = "";
        textoAtual = textos[5];
    } else if(textoAtual === textos[5]) {
        normal.textContent = "";
        angel.textContent = textos[6]
        textoAtual = textos[6];
    } else if(textoAtual === textos[6]) {
        normal.textContent = textos[7];
        angel.textContent = "";
        textoAtual = textos[7];
    } else if(textoAtual === textos[7]) {
        normal.textContent = "";
        angel.textContent = textos[8]
        textoAtual = textos[8];
    } else if(textoAtual === textos[8]) {
        angel.innerHTML = textos[9];
        textoAtual = textos[9];
    } else if(textoAtual === textos[9]) {
        angel.textContent = textos[10];
        textoAtual = textos[10];
    } else if(textoAtual === textos[10]) {
        angel.textContent = textos[11];
        textoAtual = textos[11];
    } else if(textoAtual === textos[11]) {
        normal.textContent = textos[12];
        angel.textContent = "";
        textoAtual = textos[12];
    } else if(textoAtual === textos[12]) {
        normal.textContent = "";
        angel.innerHTML = textos[13]
        textoAtual = textos[13];
    } else if(textoAtual === textos[13]) {
        angel.textContent = textos[14];
        textoAtual = textos[14];
    } else if(textoAtual === textos[14]) {
        normal.textContent = textos[15];
        angel.textContent = "";
        textoAtual = textos[15];
    } else if(textoAtual === textos[15]) {
        normal.innerHTML = textos[16];
        textoAtual = textos[16];
    } else if(textoAtual === textos[16]) {
        normal.textContent = "";
        angel.textContent = textos[17]
        textoAtual = textos[17];
    } else if(textoAtual === textos[17]) {
        angel.innerHTML = textos[18];
        textoAtual = textos[18];
    } else if(textoAtual === textos[18]) {
        angel.innerHTML = textos[19];
        textoAtual = textos[19];
    } else if(textoAtual === textos[19]) {
        angel.textContent = textos[20];
        textoAtual = textos[20];
    } else if(textoAtual === textos[20]) {
        angel.textContent = textos[21];
        textoAtual = textos[21];
    } else if(textoAtual === textos[21]) {
        angel.textContent = textos[22];
        textoAtual = textos[22];
    } else if(textoAtual === textos[22]) {
        angel.textContent = "";
        window.location = "porta roxa.html";
    }
}