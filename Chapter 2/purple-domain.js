let textos = [
    "*Você entra na sala e, de cara, percebe um enorme coração arroxeado no centro, conectado às paredes por enormes artérias, e seu pulso é tão forte que atravessa seu corpo e te enche de sensações ruins...",
    "*Você sente medo, mas força seu corpo a continuar...",
    "Isso, isso mesmo... Com calma... Devagarinho...",
    "*Você caminha com passos pequenos, silenciosamente, em direção à porta, que está bem na sua vista...",
    "*Porém, você acaba pisando em algo gosmento no chão e faz barulho... Você instintivamente para e olha para a criatura no centro da sala...",
    "*Ela não se mexeu nem um centímetro. Parece que está tudo bem...",
    "Continue... Contin...",
    "Espera... Isso...? Corra... CORRA AGORA!",
    "*Você não entende o que aconteceu, já que o Coração parece estar quieto, mas você corre rapidamente na direção da porta, fazendo muito barulho...",
    "Corra mais rápido! Mais rápido!",
    "*Você finalmente alcança a maçaneta, mas a porta parece estar trancada...",
    "Tarde demais... Will está aqui...",
    "*A sala inteira começa a tremer, e você olha para trás, desesperado, apenas para ver que o Coração já despertou... Você tenta abrir a porta com força bruta, mas ela desapareceu, transformando-se em parte da parede da sala...",
    "VOCÊ PRECISA SAIR DAÍ! WILL ESTÁ CO... CORAÇ... ÃO...",
    "*A voz de Chris começa a se dissipar e uma nova voz toma o seu lugar e grita em sua cabeça, uma vez grossa, ameaçadora e com sede de sangue.",
    "Saudações novamente, pequeno fugitivo... Acabei perdendo-o por um tempo, sim, mas o que importa é que nos reencontramos, não é mesmo?",
    "Sim, sim... Eu não arriscaria entrar nas Dark Rooms pessoalmente, por isso, tive que pegar um pequeno peão... emprestado...",
    "*O Coração começa a se contorcer de maneira procupante... parece que seu coração vai saltar pela boca...",
    "Tudo seria mais fácil se tivesse se entregado nos Campos da Perdição... Pelo menos lá sua morte seria rápida e indolor...",
    "Infelizmente para você, não posso oferecer isso agora =(",
    "*O Coração arranca as artérias que o prendem de maneira violenta...",
    "Tudo bem, tudo bem... Sei que ás vezes acabo falando demais...",
    "SENHORAS E SENHORES, DAMAS E CAVALHEIROS...",
    "EM COMEMORAÇÃO AO REENCONTRO DESTA ALMA MISERÁVEL E EU, FAREI UM SHOW ESPECIAL ESTA NOITE!",
    "Ah, isso é tão nostálgico! Onde eu já vi isso antes?",
    "*O Coração Roxo investe contra você violentamente."
]
var textoAtual = "";
let greenLight = true;

function dialogo() {
    let normal = document.getElementById("normalMan");
    let angel = document.getElementById("angel");
    let demon = document.getElementById("demon");
    if(greenLight === true) {
        greenLight = false;
        normal.textContent = textos[0];
        textoAtual = textos[0];
    } else if(textoAtual === textos[0]) {
        normal.textContent = textos[1];
        textoAtual = textos[1];
    }  else if(textoAtual === textos[1]) {
        angel.textContent = textos[2];
        normal.textContent = "";
        textoAtual = textos[2];
    } else if(textoAtual === textos[2]) {
        normal.textContent = textos[3];
        textoAtual = textos[3];
        angel.textContent = "";
    }  else if(textoAtual === textos[3]) {
        normal.textContent = textos[4];
        textoAtual = textos[4];
    }  else if(textoAtual === textos[4]) {
        normal.textContent = textos[5];
        textoAtual = textos[5];
    } else if(textoAtual === textos[5]) {
        angel.textContent = textos[6];
        normal.textContent = "";
        textoAtual = textos[6];
    }  else if(textoAtual === textos[6]) {
        angel.textContent = textos[7];
        textoAtual = textos[7];
    } else if(textoAtual === textos[7]) {
        normal.textContent = textos[8];
        angel.textContent = "";
        textoAtual = textos[8];
    } else if(textoAtual === textos[8]) {
        angel.textContent = textos[9];
        normal.textContent = "";
        textoAtual = textos[9];
    } else if(textoAtual === textos[9]) {
        normal.textContent = textos[10];
        angel.textContent = "";
        textoAtual = textos[10];
    } else if(textoAtual === textos[10]) {
        angel.textContent = textos[11];
        normal.textContent = "";
        textoAtual = textos[11];
    } else if(textoAtual === textos[11]) {
        normal.textContent = textos[12];
        angel.textContent = "";
        textoAtual = textos[12];
    } else if(textoAtual === textos[12]) {
        angel.textContent = textos[13];
        normal.textContent = "";
        textoAtual = textos[13];
    } else if(textoAtual === textos[13]) {
        normal.textContent = textos[14];
        angel.textContent = "";
        textoAtual = textos[14];
    } else if(textoAtual === textos[14]) {
        demon.textContent = textos[15];
        normal.textContent = "";
        textoAtual = textos[15];
    } else if(textoAtual === textos[15]) {
        demon.textContent = textos[16];
        normal.textContent = "";
        textoAtual = textos[16];
    } else if(textoAtual === textos[16]) {
        normal.textContent = textos[17];
        demon.textContent = ""
        textoAtual = textos[17];
    } else if(textoAtual === textos[17]) {
        demon.textContent = textos[18];
        normal.textContent = "";
        textoAtual = textos[18];
    } else if(textoAtual === textos[18]) {
        demon.textContent = textos[19];
        textoAtual = textos[19];
    } else if(textoAtual === textos[19]) {
        normal.textContent = textos[20];
        demon.textContent = "";
        textoAtual = textos[20];
    } else if(textoAtual === textos[20]) {
        demon.textContent = textos[21];
        normal.textContent = "";
        textoAtual = textos[21];
    } else if(textoAtual === textos[21]) {
        demon.textContent = textos[22];
        textoAtual = textos[22];
    } else if(textoAtual === textos[22]) {
        demon.textContent = textos[23];
        textoAtual = textos[23];
    } else if(textoAtual === textos[23]) {
        demon.textContent = textos[24];
        textoAtual = textos[24];
    } else if(textoAtual === textos[24]) {
        normal.textContent = textos[25];
        demon.textContent = "";
        textoAtual = textos[25];
    } else if(textoAtual === textos[25]) {
        window.location = "vs Purple Heart.html";
    }
}

