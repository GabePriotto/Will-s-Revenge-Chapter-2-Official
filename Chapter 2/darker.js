
window.addEventListener("popstate", (event) => {
    if (battle === true) {
        alert("Você não pode fugir da batalha!");
        history.pushState(null, document.title, window.location.href);
    }
});
history.pushState(null, document.title, window.location.href);

window.addEventListener("beforeunload", (event) => {
    if (battle === true) {
        event.preventDefault();
        event.returnValue = "";
    }
});

window.addEventListener("popstate", (event) => {
    if (battle === false) {
        alert("Você não pode fugir da batalha!");
        history.pushState(null, document.title, window.location.href);
    }
});
history.pushState(null, document.title, window.location.href);

window.addEventListener("beforeunload", (event) => {
    if (battle === false) {
        event.preventDefault();
        event.returnValue = "";
    }
});

let playerHP = 100;
let monsterHP = 60;

const playerHPDisplay = document.getElementById("numbers");
const monsterHPDisplay = document.getElementById("numbers-m");
const attackButton = document.getElementById("sword");
const restButton = document.getElementById("shield");
let battle = false;

let textoOriginal = "se quiser sim";
let texto1 = "*MAS O QUE DIABOS É ESSA COISA?";
let texto2 = "*Talvez seja melhor não chegar muito perto desse bicho...";
let textoAtual = textoOriginal;

const output = document.getElementById('output');
const imageContainer = document.querySelector(".center");

function updateHPDisplay() {
    playerHPDisplay.textContent = playerHP; 
    monsterHPDisplay.textContent = monsterHP; 
}

function attack() {
    if (battle === false) return;

    const frase = document.getElementById('scary');
    frase.innerHTML = "";

    if (monsterHP > 0) {
        monsterHP -= 14;
        updateHPDisplay();

        const attackSound = new Audio("Undertale Sound Effect - Pushing a button in battle.mp3");
        attackSound.play();

        attackButton.disabled = true;
        restButton.disabled = true;

        setTimeout(() => {
            const videoElement = document.createElement("video");
            videoElement.src = "dancing obama.mp4";
            videoElement.width = 350;
            videoElement.height = 500;
            videoElement.volume = 0.3;
            videoElement.autoplay = true;
            videoElement.onended = () => {
                playerHP -= 10;
                updateHPDisplay();
                checkGameOver();

                imageContainer.innerHTML = '<img src="Obamonstro.jpg" alt="">';

                attackButton.disabled = false;
                restButton.disabled = false;
            };

            imageContainer.innerHTML = "";
            imageContainer.appendChild(videoElement);
        }, 1000);

        if (playerHP <= 30) {
            document.getElementById('scary').innerHTML = "*Você acha que precisa descansar...";
        }
    }
}

function check() {
    if (battle === true) return;

    const frase = document.getElementById('scary');
    if (textoAtual === textoOriginal) {
        frase.innerHTML = texto1;
        textoAtual = texto1;
    } else if (textoAtual === texto1) {
        frase.innerHTML = texto2;
        textoAtual = texto2;
    } else if (textoAtual === texto2) {
        battle = true;
    }
}

function rest() {
    const restSound = new Audio("Undertale Sound Effect - Heal.mp3");
    restSound.play();
    playerHP = Math.min(playerHP + 5, 100);
    monsterHP = Math.min(monsterHP + 6, 100);
    updateHPDisplay();
}

function checkGameOver() {
    if (monsterHP <= 0) {
        window.location.href = "dark.html";
    } else if (playerHP <= 0) {
        window.location.href = "game-over.html"; 
    }
}

updateHPDisplay();
