let playerHP = 100;
let monsterHP = 80;

const playerHPDisplay = document.getElementById("numbers");
const monsterHPDisplay = document.getElementById("numbers-m");
const attackButton = document.getElementById("sword");
const restButton = document.getElementById("shield");
let battle = false;

let textoOriginal = "se quiser sim";
let texto1 = "Ei, aqui é o Chris! Estou falando com você através de um <span class='span'>NeuraLink!</span>";
let texto2 = "Parece que você se meteu em encrenca, não foi? Justo três minutos desde que fui embora!";
let texto3 = "Bem, este na sua frente deve ser o <span class='span'>The Rock</span>...";
let texto4 = "Ele é... um velho inimigo... se posso dizer assim...";
let texto5 = "Desde que adentrei esta dimensão, essa carinha insiste em implicar comigo... e com meus protegidos...";
let texto6 = "É uma história meio engraçada, para falar a verdade...";
let texto7 = "Ele, basicamente, não suporta a ideia de termos nomes parecidos, e diz que eu o imito...";
let texto8 = "Bem, infelizmente, você terá que enfrentá-lo sozinho, mas não se preocupe, vou te ensinar como lutar contra ele...";
let texto9 = "Vê os dois botões no centro? O botão <span class='span'>Atacar</span> irá desferir dano no oponente. Use-o com sabedoria pois, logo após seu ataque, será a vez do oponente...";
let texto10 = "Caso se sinta muito cansado, experimente dar uma pausa apertando o botão <span class='span'>Descansar</span>. Ao fazer isso, você recupera HP, mas cuidado, pois caso você descanse, o seu oponente também irá descasar...";
let texto11 = "É sempre bom ficar atento aos <span class='span'>Status</span>, tanto os seus como os de seu oponente...";
let texto12 = "Da última vez, <span class='span'>The Rock</span> possuia apenas dois ataques, que ele usa de forma aleatória. Tome cuidado...";
let texto13 = "Bem, isso é tudo. Boa sorte com esse cara, e não se esqueça: <span class='span'>PORTA ROXA!</span>";
let textoAtual = textoOriginal;



const output = document.getElementById('output');

function updateHPDisplay() {
    playerHPDisplay.textContent = playerHP; 
    monsterHPDisplay.textContent = monsterHP; 
}

function attack() {

    if (battle === false) return;

    var frase = document.getElementById('angel');
    frase.innerHTML = "";

    if (monsterHP > 0) {
        monsterHP -= 7;
        updateHPDisplay();

        const attackSound = new Audio("Undertale Sound Effect - Pushing a button in battle.mp3");
        attackSound.play();

        attackButton.disabled = true;
        restButton.disabled = true;

        setTimeout(() => {
            const randomChance = Math.random();
            let damageToPlayer;
            let videoElement = document.createElement("video");

            videoElement.style.width = "450px";
videoElement.style.height = "600px";

            if (randomChance < 0.6) {
                videoElement.src = "DARK ROCK.mp4";
                damageToPlayer = 15;
            } else {
                videoElement.src = "The Rock KAMEHAMEHAAA.mp4";
                damageToPlayer = 25;
            }

            videoElement.autoplay = true;
            videoElement.onended = () => {
                playerHP -= damageToPlayer;
                updateHPDisplay();
                checkGameOver();

                const imageContainer = document.querySelector(".center");
                imageContainer.innerHTML = '<img src="The_Rock.webp" alt="">';

                attackButton.disabled = false;
                restButton.disabled = false;
            };

            const imageContainer = document.querySelector(".center");
            imageContainer.innerHTML = "";
            imageContainer.appendChild(videoElement);
        }, 1000);
        if (monsterHP <= 40) {
            var monsterSpeak = document.getElementById('monster');
            monsterSpeak.innerHTML = "Arf... Nada mau, baixinho, mas até agora eu só estava... arf... Brincando com você...";
        }
        if (playerHP <= 30) {
            var playerSpeak = document.getElementById('scary');
            playerSpeak.innerHTML = "*Você acha que precisa descansar..."
            ;
        }
    }

}

function check() {

    if (battle === true) return;

    var frase = document.getElementById('angel');
    if (textoAtual === textoOriginal) {
        frase.innerHTML = texto1;
        textoAtual = texto1;
    } else if (textoAtual === texto1) {
        frase.innerHTML = texto2;
        textoAtual = texto2;
    } else if (textoAtual === texto2) {
        frase.innerHTML = texto3;
        textoAtual = texto3;
    } else if (textoAtual === texto3) {
        frase.innerHTML = texto4;
        textoAtual = texto4;
    } else if (textoAtual === texto4) {
        frase.innerHTML = texto5;
        textoAtual = texto5;
    } else if (textoAtual === texto5) {
        frase.innerHTML = texto6;
        textoAtual = texto6;
    } else if (textoAtual === texto6) {
        frase.innerHTML = texto7;
        textoAtual = texto7;
    } else if (textoAtual === texto7) {
        frase.innerHTML = texto8;
        textoAtual = texto8;
    } else if (textoAtual === texto8) {
        frase.innerHTML = texto9;
        textoAtual = texto9;
    } else if (textoAtual === texto9) {
        frase.innerHTML = texto10;
        textoAtual = texto10;
    } else if (textoAtual === texto10) {
        frase.innerHTML = texto11;
        textoAtual = texto11;
    } else if (textoAtual === texto11) {
        frase.innerHTML = texto12;
        textoAtual = texto12;
    } else if (textoAtual === texto12) {
        frase.innerHTML = texto13;
        textoAtual = texto13;
    } else if (textoAtual === texto13) {
        battle = true;
    }

}

function rest() {
    const restSound = new Audio("Undertale Sound Effect - Heal.mp3");
    restSound.play();
    playerHP = Math.min(playerHP + 2.5, 100);
    monsterHP = Math.min(monsterHP + 2, 100);
    updateHPDisplay();
    
}

function checkGameOver() {
    if (monsterHP <= 0) {
        window.location.href = "post-rock.html";
    } else if (playerHP <= 0) {
        window.location.href = "game-over.html"; 
    }
}

attackButton.addEventListener("click", attack);
restButton.addEventListener("click", rest);


updateHPDisplay();

