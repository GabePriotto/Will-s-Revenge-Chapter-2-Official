document.addEventListener("DOMContentLoaded", () => {
    const h1 = document.getElementById("inform");
    const princ = document.querySelector('.principal');
    const help = document.querySelector('.help');
const reto = document.querySelector('.reto');
    setTimeout(() => {
        princ.style.display = "inline-block";
    reto.style.display = "inline-block";
    h1.style.display = "none";
    help.style.display = "inline-block"; 
    }, 17000);
});

var greenLight = true;
var textoAtual = "";

let textos = [
    "*O elevador se abre, e você bota os pés para fora...",
    "*Antes que tenha tempo de fazer qualquer coisa, o elevador se fecha e retorna para cima, te deixando sem volta...",
    "*Parece que só há apenas um caminho para seguir...",
    "EI! ESPERA! Não entre naquela porta!",
    "Ah... Desculpe por te assustar... Sou eu de novo, Chris, falando pelo <span>Neuralink</span>.",
    "Você tem ideia de onde está? Você literalmente está nos domínios do <span>Coração Roxo</span>!",
    "O <span>Coração Roxo</span> é o núcleo das Dark Rooms. Ele controla esse lugar como bem quiser...",
    "Ele é o responsável pelas Dark Rooms continuarem crescendo como um parasita, e também é ele que causa a corrupção dos números binários presentes nos corpos dos habitantes deste lugar...",
    "Ele é um ser muito poderoso... Enfrentá-lo seria loucura!",
    "Normalmente, usaríamos uma passagem para passarmos desperebidos por ele, mas <span>Will Smith</span> destruiu ela há muito tempo...",
    "...",
    "Faça o seguinte: O <span>Coração Roxo</span> provavelmente está depois daquela porta... sim, a única saída dessa sala... aquela que está bem na sua frente...",
    "*Você avista uma porta solitária no final do corredor...",
    "Não temos outra escolha. Você vai ter que entrar e torcer para que ele esteja hibernando, pelo contrário, apenas este escudo velho não salvará você...",
    "Passe pela sala em silêncio, e não baixe a guarda até estar o mais longe possível daquele bicho...",
    "Provavelmente, a porta roxa que te falei estará logo depois, onde estarei te esperando...",
    "Fique firme, garoto... Fique firme...",
    "*Você respira fundo e caminha até a porta que, para sua sorte, abre silenciosamente..."
];

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
    }else if(textoAtual === textos[2]) {
        angel.textContent = textos[3];
        normal.textContent = "";
        textoAtual = textos[3];
    } else if(textoAtual === textos[3]) {
        angel.innerHTML = textos[4];
        textoAtual = textos[4];
    } else if(textoAtual === textos[4]) {
        angel.innerHTML = textos[5];
        textoAtual = textos[5];
    } else if(textoAtual === textos[5]) {
        angel.innerHTML = textos[6];
        textoAtual = textos[6];
    } else if(textoAtual === textos[6]) {
        angel.textContent = textos[7];
        textoAtual = textos[7];
    } else if(textoAtual === textos[7]) {
        angel.textContent = textos[8];
        textoAtual = textos[8];
    } else if(textoAtual === textos[8]) {
    angel.innerHTML = textos[9];
        textoAtual = textos[9];
    } else if(textoAtual === textos[9]) {
        angel.textContent = textos[10];
        textoAtual = textos[10];
    } else if(textoAtual === textos[10]) {
        angel.innerHTML = textos[11];
        textoAtual = textos[11];
    } else if(textoAtual === textos[11]) {
        angel.textContent = "";
        normal.textContent = textos[12]
        textoAtual = textos[12];
    } else if(textoAtual === textos[12]) {
        angel.textContent = textos[13];
        normal.textContent = ""
        textoAtual = textos[13];
    } else if(textoAtual === textos[13]) {
        angel.textContent = textos[14];
        textoAtual = textos[14];
    } else if(textoAtual === textos[14]) {
        angel.textContent = textos[15];
        textoAtual = textos[15];
    } else if(textoAtual === textos[15]) {
        angel.textContent = textos[16];
        textoAtual = textos[16];
    } else if(textoAtual === textos[16]) {
        angel.textContent = "";
        normal.textContent = textos[17];
        textoAtual = textos[17];
    } else {
        window.location = "purple-domain.html";
    }
}
