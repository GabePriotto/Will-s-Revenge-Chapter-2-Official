let textos = [
    "*Você entra na sala, Chris entra em seguida, fechando a porta atrás de vocês...",
    "*A nova sala em que se encontram é completamente diferente de tudo o que tinham encontrado até o momento. Ela parece... emitir uma aura estranha...",
    "Bem vindo à Purple Room, garoto. Nunca pensei que voltaria um dia para cá...",
    "Esse lugar... Essa sala em questão... foi onde tudo começou...",
    "Haha... isso soa tão... nostálgico...", //1
    "*Você lembra Chris sobre o que vieram fazer ali.",
    "Ah, sim. Claro. Temos que te tirar daqui...",
    "Não se preocupe, logo você estará são e salvo... em casa...",
    "*Chris te guia em direção ao centro da sala. Você nota certa ansiedade em seus movimentos, sua mão começa a tremer... Seu rosto está mais pálido do que de costume...", //2
    "Sabe... Nunca quis isso. A guerra, a luta... Will... Nunca me deu escolha...",
    "A todo santo momento, eu me pergunto... porque? Porque as coisa tomaram o rumo que tomaram? A culpa... seria minha?",
    "Lembro dos primeiros dias... Confuso, ferido e sozinho. Desespero? Não sei se essa é a palavra certa...",
    "*Chris para de repente. Ele olha para o chão, e depois para você. Seus olhos refletem um brilho azul...", //3
    "Eu me perguntei, muitas e muitas vezes... Se eu tivesse a chance de consertar as coisas, eu teria a coragem necessária?",
    "Eu conseguiria tomar as desisões certas? Por mais dificieis e implacáveis que fossem?", //4
    "Por muito tempo, eu achei que não...",
    "Mas agora... agora eu estou aqui...",
    "VOCÊ está aqui!",
    "*Chris chega mais perto. Ele segura seu ombro, lágrimas escorrem pelo seu rosto...", //5
    "Ouça-me. Will... Ele NUNCA MAIS pode botar os pés no mundo real. Não posso deixar...",
    "Se eu te deixar sair, ele vai atrair outros para cá. E eu... Não vou conseguir impedir ele para sempre...",
    "Mas se eu conseguir deixar essa prisão... Posso acabar com isso! Posso aniquilar Will para sempre...",
    "Você me entende, não é?", //6
    "*Você afasta Chris e recua. Chris suspira, entristecido...",
    "Sempre soube que esse dia chegaria... Mas não pensei que seria tão cedo... Eu... Eu sinto muito, garoto...",
    "*Chris avança lentamente, a sala parece apertar ao seu redor. Você encara os olhos de Chris. Você entende - não há saída..." //7
];

var textoAtual = "";
let greenLight = true;

function dialogo() {

    let normal = document.getElementById("normalMan");
    let angel = document.getElementById("angel");
    let imagemBox = document.getElementById("imagemCentro");
    let imagem = document.getElementById("imagemImg");

    if (greenLight === true) {
        greenLight = false;
        normal.textContent = textos[0];
        textoAtual = textos[0];
        imagemBox.style.display = "none";
    }

    else if (textoAtual === textos[0]) {
        normal.textContent = textos[1];
        textoAtual = textos[1];
        imagemBox.style.display = "flex";
    }

    else if (textoAtual === textos[1]) {
        angel.textContent = textos[2];
        normal.textContent = "";
        textoAtual = textos[2];
    }

    else if (textoAtual === textos[2]) {
        angel.textContent = textos[3];
        textoAtual = textos[3];
    }

    else if (textoAtual === textos[3]) {
        angel.textContent = textos[4];
        textoAtual = textos[4];
        imagem.src = "1.jpg"; 
    }

    else if (textoAtual === textos[4]) {
        normal.textContent = textos[5];
        textoAtual = textos[5];
        angel.textContent = "";
    }

    else if (textoAtual === textos[5]) {
        angel.textContent = textos[6];
        normal.textContent = "";
        textoAtual = textos[6];
    }

    else if (textoAtual === textos[6]) {
        angel.textContent = textos[7];
        textoAtual = textos[7];
    }

    else if (textoAtual === textos[7]) {
        normal.textContent = textos[8];
        angel.textContent = "";
        textoAtual = textos[8];
        imagem.src = "2.jpg"; 
    }

    else if (textoAtual === textos[8]) {
        angel.textContent = textos[9];
        normal.textContent = "";
        textoAtual = textos[9];
    }

    else if (textoAtual === textos[9]) {
        angel.textContent = textos[10];
        textoAtual = textos[10];
    }

    else if (textoAtual === textos[10]) {
        angel.textContent = textos[11];
        normal.textContent = "";
        textoAtual = textos[11];
    }

    else if (textoAtual === textos[11]) {
        normal.textContent = textos[12];
        angel.textContent = "";
        textoAtual = textos[12];
        imagem.src = "3.jpg"; 
    }

    else if (textoAtual === textos[12]) {
        angel.textContent = textos[13];
        normal.textContent = "";
        textoAtual = textos[13];
    }

    else if (textoAtual === textos[13]) {
        angel.textContent = textos[14];
        textoAtual = textos[14];
        imagem.src = "4.jpg"; 
    }

    else if (textoAtual === textos[14]) {
        angel.textContent = textos[15];
        textoAtual = textos[15];
    }

    else if (textoAtual === textos[15]) {
        angel.textContent = textos[16];
        textoAtual = textos[16];
    }

    else if (textoAtual === textos[16]) {
        angel.textContent = textos[17];
        textoAtual = textos[17];
    }

    else if (textoAtual === textos[17]) {
        normal.textContent = textos[18];
        angel.textContent = "";
        textoAtual = textos[18];
        imagem.src = "5.jpg"; 
    }

    else if (textoAtual === textos[18]) {
        angel.textContent = textos[19];
        normal.textContent = "";
        textoAtual = textos[19];
    }

    else if (textoAtual === textos[19]) {
        angel.textContent = textos[20];
        textoAtual = textos[20];
    }

    else if (textoAtual === textos[20]) {
        angel.textContent = textos[21];
        normal.textContent = "";
        textoAtual = textos[21];
    }

    else if (textoAtual === textos[21]) {
        angel.textContent = textos[22];
        textoAtual = textos[22];
        imagem.src = "6.jpg"; 
    }

    else if (textoAtual === textos[22]) {
        normal.textContent = textos[23];
        angel.textContent = "";
        textoAtual = textos[23];
    }

    else if (textoAtual === textos[23]) {
        angel.textContent = textos[24];
        normal.textContent = "";
        textoAtual = textos[24];
    }

    else if (textoAtual === textos[24]) {
        normal.textContent = textos[25];
        angel.textContent = "";
        textoAtual = textos[25];
        imagem.src = "7.jpg"; 
    }

else if (textoAtual === textos[25]) {
    let musica = document.getElementById("bgMusic");

    localStorage.setItem("musicTime", musica.currentTime.toString());

    window.location.href = "The History Continues.html";
}
}