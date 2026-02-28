let textoOriginal = "textosodadds";
let texto1 = "*Você sai do elevador e olha em volta...";
let texto2 = "*Parece que você está em algum tipo de local abandonado há muito tempo...";
let texto3 = "*Você caminha um pouco ao redor, mas seus passos ecoam por todo o lugar... Você decide parar de caminhar...";
let texto4 = "*Você avista algo no chão, parecido com um pano vermelho, e decide verificar o que é...";
let texto5 = "*Porém, quando você se abaixa para pegar o objeto, algo pula nas suas costas, mas você percebe tarde demais...";
let texto6 = "Já faz muito tempo que viajantes não vêm para cá, sabia?";
let texto7 = "*Você dá um salto para trás e levanta o escudo automaticamente. O que quer que fosse aquilo, teve a chance mas não te atacou...";
let texto8 = "Meu nome é Keanu, perdão pela falta de modos... É que faz tempo que, sabe, <em>pessoas</em> aparecem por aqui...";
let texto9 = "*Você continua com o escudo levantado, sem baixar a guarda. Essa criatura aracnídea não parece confiável...";
let texto10 = "Ora, sinta-se à vontade! Você não estava querendo dar uma olhada nesse negócio atrás de você? Pode olhar, é apenas alguma velharia das últimas pessoas que passaram por aqui...";
let texto11 = "Não vai mesmo dar uma olhada? Você está com tanto medo assim de eu te atacar pelas costas?";
let texto12 = "Tudo bem então... Eu não ia fazer nada com você... Só estava tentando ser educado...";
let texto13 = "*Você continua encarando a aranha gigante fixamente, com o escudo levantado...";
let texto14 = "Sabe, essas ruínas um dia foram um lugar alegre e cheio de energia, sabia?";
let texto15 = "Mas, então, um dia, tudo acabou vazio... e então o tempo foi consumindo com tudo...";
let texto16 = "*Você, visando retornar para o elevador, que ainda está aberto, tenta distrair a aranha, e lhe pergunta o que aconteceu com todas as pessoas daquele lugar...";
let texto17 = "Pessoas? Sim, haviam muitas pessoas aqui antigamente. Porém, todas elas foram dizimadas. Suas almas foram ceifadas de seus corpos...";
let texto18 = "Olha, não foi culpa minha, se é o que você está pensando... Elas apenas receberam esse cruel destino porque não eram nada divertidas...";
let texto19 = "Elas <em>definitivamente</em> não eram divertidas...";
let texto20 = "Por isso, alguns se foram... outros não tiveram essa oportunidade e ainda permanecem aqui, dentro daqueles casulos de teias...";
let texto21 = "*Você vê, com o canto do olho, vários casulos feitos de teias pendurados no teto, e logo abaixo, alguns restos de ossos e lixo...";
let texto22 = "Mas você parece ser alguém que sabe se divertir...";
let texto23 = "O que acha de jogar um jogo?";
let texto24 = "Vai ser rápido, eu prometo, e logo depois você pode ir embora, se é o que pretende...";
let texto25 = "Vamos, o que acha?";
let texto26 = "Ótimo! Sabia que você era um dos bons!";
let texto27 = "Antes de começarmos o jogo, você precisa saber as regras...";
let texto28 = "O jogo é composto por três charadas, que vão aumentando de dificuldade conforme você avança...";
let texto29 = "Você deve responder corretamente para passar para a próxima charada...";
let texto30 = "Você ganha o jogo se responder todas as três charadas corretamente...";
let texto31 = "Porém, se errar qualquer uma das três você perde uma vida...";
let texto32 = "Só que, infelizmente, você só tem uma...";
let texto33 = "Então, perder significa GAME OVER!";
let texto34 = "Em charadas que terminam com <em>Quem sou eu?</em>, você deve responder sempre com um artigo na frente, como <em>a</em> ou <em>o</em>.";
let texto35 = "Por exemplo, se a resposta for <em>lagartixa</em>, a resposta será <em>a lagartixa</em>...";
let texto36 = "Quase esqueci: Você tem apenas três minutos para responder todas as charadas...";
let texto37 = "Regras finalizadas, vamos começar...";
let texto38 = "*Você se vira e caminha em direção ao objeto vermelho no chão...";
let texto39 = "*Você examina cautelosamente e percebe que se trata apenas de um velho pano vermelho, com algumas palavras escritas em dourado...";
let texto40 = "*<em><strong>Para meus apoiadores - R.R.T.E.C.</strong></em>";
let texto41 = "Vê? É apenas uma velharia qualquer...";
let texto42 = "...";
let texto43 = "*Você pergunta mais sobre as pessoas que viviam ali para a criatura aracnídea...";
let textoAtual = textoOriginal;

const normal = document.getElementById("normalMan");
const img = document.getElementById("princImg");
const demon = document.getElementById("demon");
const button1 = document.querySelector(".work");
const button2 = document.querySelector(".works");
const button3 = document.querySelector(".word");
const button4 = document.querySelector(".world");
var prompt = document.getElementById("prompt");
const button5 = document.getElementById("resposta");
const txt = document.getElementById("enredo");
const dial = document.getElementById("dialButton");
var resposta = prompt.value;

let trueFalse = false;
let iAmSteve = true;

function dialogo() {
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
        normal.textContent = "";
        demon.textContent = texto6;
        img.style.visibility = "visible";
        textoAtual = texto6;
    } else if(textoAtual === texto6) {
        normal.textContent = texto7;
        demon.textContent = "";
        textoAtual = texto7;
    } else if(textoAtual === texto7) {
        normal.textContent = "";
        demon.innerHTML = texto8;
        textoAtual = texto8;
    } else if(textoAtual === texto8) {
        normal.textContent = texto9;
        demon.textContent = "";
        textoAtual = texto9;
    } else if(textoAtual === texto9) {
        normal.textContent = "";
        demon.textContent = texto10
        textoAtual = texto10;
    } else if(textoAtual === texto10) {
        button1.style.visibility = "visible";
        button2.style.visibility = "visible";
        trueFalse = true;
    }
}
function nop() {
    if(trueFalse === true) {
        button1.style.display = "none";
        demon.textContent = texto11;
        textoAtual = texto11;
        trueFalse = false;
    } else if(textoAtual === texto11) {
        demon.textContent = texto12;
        textoAtual = texto12;
    } else if(textoAtual === texto12) {
        demon.textContent = "";
        normal.textContent = texto13;
        textoAtual = texto13;
    } else if(textoAtual === texto13) {
        demon.textContent = texto14;
        normal.textContent = "";
        textoAtual = texto14;
    } else if(textoAtual === texto14) {
        demon.textContent = texto15;
        textoAtual = texto15;
    } else if(textoAtual === texto15) {
        demon.textContent = "";
        normal.textContent = texto16;
        textoAtual = texto16;
    } else if(textoAtual === texto16) {
        demon.textContent = texto17;
        normal.textContent = "";
        textoAtual = texto17
    } else if(textoAtual === texto17) {
        demon.textContent = texto18;
        normal.textContent = "";
        textoAtual = texto18
    } else if(textoAtual === texto18) {
        demon.innerHTML = texto19;
        normal.textContent = "";
        textoAtual = texto19
    } else if(textoAtual === texto19) {
        demon.textContent = texto20;
        textoAtual = texto20;
    } else if(textoAtual === texto20) {
        demon.textContent = "";
        normal.textContent = texto21;
        textoAtual = texto21;
    } else if(textoAtual === texto21) {
        demon.textContent = texto22;
        normal.textContent = "";
        textoAtual = texto22;
    } else if(textoAtual === texto22) {
        demon.textContent = texto23;
        textoAtual = texto23;
    } else if(textoAtual === texto23) {
        demon.textContent = texto24;
        textoAtual = texto24;
    } else if(textoAtual === texto24) {
        demon.textContent = texto25;
        textoAtual = texto25;
    } else if(textoAtual === texto25) {
        button2.style.display = "none";
        button3.style.display = "inline-block";
        button4.style.display = "inline-block";
        trueFalse = false;
    } 
}

function play() {
    if(trueFalse === false) {
        button4.style.display = "none";
        demon.textContent = texto26;
        textoAtual = texto26;
        trueFalse = true
    } else if(textoAtual === texto26) {
        demon.textContent = texto27;
        textoAtual = texto27;
    } else if(textoAtual === texto27) {
        demon.textContent = texto28;
        textoAtual = texto28;
    } else if(textoAtual === texto28) {
        demon.textContent = texto29;
        textoAtual = texto29;
    } else if(textoAtual === texto29) {
        demon.textContent = texto30;
        textoAtual = texto30;
    } else if(textoAtual === texto30) {
        demon.textContent = texto31;
        textoAtual = texto31;
    } else if(textoAtual === texto31) {
        demon.textContent = texto32;
        textoAtual = texto32;
    } else if(textoAtual === texto32) {
        demon.textContent = texto33;
        textoAtual = texto33;
    } else if(textoAtual === texto33) {
        demon.innerHTML = texto34;
        textoAtual = texto34;
    } else if(textoAtual === texto34) {
        demon.innerHTML = texto35;
        textoAtual = texto35;
    } else if(textoAtual === texto35) {
        demon.textContent = texto36;
        textoAtual = texto36;
    } else if(textoAtual === texto36) {
        demon.textContent = texto37;
        textoAtual = texto37;
    } else if(textoAtual === texto37) {
        txt.style.display = "block";
        button5.style.display = "inline-block";
        prompt.style.display = "inline-block";
        button3.style.display = "none";
        dial.style.display = "none";
        demon.textContent = "";
        txt.textContent = "Charada 1: Quanto mais de mim houver, menos você verá. Quem sou eu?";
        trueFalse = true;
        timeoutid =  setTimeout(gameOver, 180000);
        input.value = "";

        input.focus();
    }
}

function responder() {
    let resposta = prompt.value.trim();
    
    if (resposta.toLowerCase() === "a escuridão" && trueFalse === true) {
        demon.textContent = "Essa estava muito fácil...";
        trueFalse = false;
        
        
        setTimeout(() => {
            demon.textContent = "";
            txt.innerHTML = "Charada 2: Bote os seus dedos nos meus olhos, e então<br>abrirei minhas mandíbulas devastadoras. Então devorarei<br>tudo que encontrar pela frente, seja papel, roupas ou qualquer outra coisa<br>que minhas mandíbulas aguentem. Quem sou eu?";
        }, 3000);

        input.value = "";

        input.focus();
        
    } else if (resposta.toLowerCase() === "a tesoura" && trueFalse === false) {
        demon.textContent = "Tudo bem... Agora resolva essa última...";
        trueFalse = "panqueca";
        
        setTimeout(() => {
            demon.textContent = "";
            txt.innerHTML = "Charada 3: Trabalha em tempo dobrado, e por muitos é cuidado. Sempre<br>trabalha de noite e de dia. Se, por acaso,<br>se revolta e fica parado, apenas com uma corda andaria.<br>Quem eu sou?";
        }, 3000);

        input.value = "";

        input.focus();
        
    } else if (resposta.toLowerCase() === "o relógio" && trueFalse === "panqueca") {
        demon.textContent = "Droga. Eu errei em subestimar você...";
        const messageBox = document.getElementById("messageBox");
        prompt.style.display = "none";
        button5.style.display = "none";
        txt.style.display = "none";
        messageBox.classList.add("visible");
        messageBox.classList.remove("hidden");
    
        setTimeout(() => {
            messageBox.classList.remove("visible");
            messageBox.classList.add("hidden");
        }, 5000);
        setTimeout(() => {
            demon.textContent = "Claro, cumprirei minha promessa e deixarei você ir embora...";
        }, 11000);
        setTimeout(() => {
            demon.textContent = "";
            normal.textContent = "você corre para o elevador, enquanto a aranha volta para as profundezas da escuridão daquele andar...";
        }, 16000);
        setTimeout(() => {
            window.location.href = "elevator.html";
        }, 21000);
    
    } else {
        morteCerta();
    }
}

function resetTimeout() {
    if (timeoutId) {
        clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(gameOver, 180000);
}

function gameOver() {
    alert('Parece que seu tempo acabou...');
    img.style.display = "none";
    mostrarVideoGameOver();
}

function mostrarVideoGameOver() {
    const video = document.getElementById("gameOverVideo");
    video.hidden = false; 
    video.play();         

    video.onended = function() {
        window.location.href = "game-over.html";
    };
}
function morteCerta() {
    img.style.display = "none";
    mostrarVideoGameOver();
}

function sip() {
    if(iAmSteve === true) {
        demon.textContent = "";
        button2.style.display = "none";
        normal.textContent = texto38;
        textoAtual = texto38;
        iAmSteve = false;
    } else if(textoAtual === texto38) {
        normal.textContent = texto39;
        textoAtual = texto39;
    } else if(textoAtual === texto39) {
        normal.innerHTML = texto40;
        textoAtual = texto40;
    } else if(textoAtual === texto40) {
        demon.textContent = texto41;
        normal.textContent = "";
        textoAtual = texto41;
    } else if(textoAtual === texto41) {
        demon.textContent = texto42;
        textoAtual = texto42;
    } else if(textoAtual === texto42) {
        demon.textContent = texto14;
        normal.textContent = "";
        textoAtual = texto14;
    } else if(textoAtual === texto14) {
        demon.textContent = texto15;
        textoAtual = texto15;
    } else if(textoAtual === texto15) {
        demon.textContent = "";
        normal.textContent = texto43;
        textoAtual = texto16;
    } else if(textoAtual === texto16) {
        demon.textContent = texto17;
        normal.textContent = "";
        textoAtual = texto17
    } else if(textoAtual === texto17) {
        demon.textContent = texto18;
        normal.textContent = "";
        textoAtual = texto18
    } else if(textoAtual === texto18) {
        demon.innerHTML = texto19;
        normal.textContent = "";
        textoAtual = texto19
    } else if(textoAtual === texto19) {
        demon.textContent = texto20;
        textoAtual = texto20;
    } else if(textoAtual === texto20) {
        demon.textContent = "";
        normal.textContent = texto21;
        textoAtual = texto21;
    } else if(textoAtual === texto21) {
        demon.textContent = texto22;
        normal.textContent = "";
        textoAtual = texto22;
    } else if(textoAtual === texto22) {
        demon.textContent = texto23;
        textoAtual = texto23;
    } else if(textoAtual === texto23) {
        demon.textContent = texto24;
        textoAtual = texto24;
    } else if(textoAtual === texto24) {
        demon.textContent = texto25;
        textoAtual = texto25;
    } else if(textoAtual === texto25) {
        button1.style.display = "none";
        button3.style.display = "inline-block";
        button4.style.display = "inline-block";
        trueFalse = false;
    } 
}
