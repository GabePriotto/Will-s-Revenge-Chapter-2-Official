let textoOriginal = "se quiser sim";
let texto1 = "Para sua infelicidade, sua pequena história de resistência acaba por aqui...";
let texto2 = "Hã? Ainda deseja lutar? Ainda acha que consegue vencer?";
let texto3 = "<span>Rock</span> deve ter falado para você: o <span>Coração Roxo</span> é o núcleo das Dark Rooms. Até mesmo eu tenho receio de enfrentá-lo...";
let texto4 = "Agora que ele está sobre meu controle, você não tem chance alguma de vitória sozinho...";
let texto5 = "*Você levanta o velho escudo, sua única arma, em um gesto de desafio à Will...";
let texto6 = "...?";
let texto7 = "Tudo bem! Que seja! Odeio pessoas que se gabam demais...";
let textoAtual = textoOriginal;

let playerHP = 100;
let monsterHP = 80;
let phase = 1;
let music = document.getElementById("music");
let battle = false;

const playerHPDisplay = document.getElementById("numbers");
const monsterHPDisplay = document.getElementById("numbers-m");
const attackButton = document.getElementById("sword");
const restButton = document.getElementById("shield");

let isPlayingVideo = false;
let isTransitioning = false;

function check() {
    if (battle === true) return;

    var frase = document.getElementById('monster');
    var scary = document.getElementById('scary');

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
        scary.innerHTML = texto5;
        frase.innerHTML = "";
        textoAtual = texto5;
    } else if (textoAtual === texto5) {
        frase.innerHTML = texto6;
        scary.innerHTML = "";
        textoAtual = texto6;
    } else if (textoAtual === texto6) {
        frase.innerHTML = texto7;
        textoAtual = texto7;
    } else if (textoAtual === texto7) {
        battle = true;
        frase.innerHTML = "";
        music.play();
    }
}

function updateHPDisplay() {
    playerHPDisplay.textContent = Math.floor(playerHP);
    monsterHPDisplay.textContent = Math.floor(monsterHP);
}

function playAttackVideo(videoFile, damage) {
    if (isPlayingVideo || isTransitioning) return;
    isPlayingVideo = true;

    const centralImage = document.getElementById("center-img");
    if (!centralImage) {
        isPlayingVideo = false;
        return;
    }

    const video = document.createElement("video");
    video.src = videoFile;
    video.autoplay = true;
    video.style.width = "500px";
    video.style.height = "350px";
    video.style.display = "block";

    centralImage.style.display = "none";
    centralImage.parentNode.appendChild(video);

    video.onended = () => {
        isPlayingVideo = false;

        centralImage.style.display = "inline-block";
        video.remove();

        if (damage > 0) {
            playerHP -= damage;
            updateHPDisplay();
        }

        checkGameOver();
    };
}

function transitionToPhaseTwo() {
    if (isTransitioning || phase !== 1) return;
    isTransitioning = true;

    monsterHP = 260;

    const centralImage = document.getElementById("center-img");
    const video = document.createElement("video");
    video.src = "deboche.mp4";
    video.autoplay = true;
    video.style.width = "500px";
    video.style.height = "350px";
    video.style.display = "inline-block";

    centralImage.style.display = "none";
    centralImage.parentNode.appendChild(video);

    video.onended = () => {
        alert("Você não achou que seria tão fácil, achou?");
        isTransitioning = false;
        updateHPDisplay();
        music.src = "fase 2 theme.mp3";
        music.play();
        centralImage.style.display = "inline-block";
        video.remove();
        phase = 2;
    };
}

function showBossImages() {
    if (phase !== 2) return;
    if (document.querySelector(".boss-image-container")) return;

    const monsterStatus = document.querySelector(".monster-status");
    const yourStatus = document.querySelector(".your-status");
    const bossImage = document.getElementById("center-img");

    monsterStatus.style.display = "none";
    yourStatus.style.display = "none";
    bossImage.style.display = "none";

    const correctIndex = Math.floor(Math.random() * 3);

    const bossImageContainer = document.createElement("div");
    bossImageContainer.className = "boss-image-container";

    for (let i = 0; i < 3; i++) {
        const image = document.createElement("img");
        image.src = "coração roxo.jpeg";

        if (i === correctIndex) {
            image.classList.add("correct");
        }

        image.addEventListener("click", () =>
            handleBossImageClick(i, correctIndex, bossImageContainer)
        );

        bossImageContainer.appendChild(image);
    }

    document.querySelector(".flex").appendChild(bossImageContainer);
}

function handleBossImageClick(clickedIndex, correctIndex, bossImageContainer) {
    const bossImage = document.getElementById("center-img");

    if (clickedIndex === correctIndex) {
        monsterHP -= 14;
        if (monsterHP < 0) monsterHP = 0;
        updateHPDisplay();

        bossImageContainer.remove();
        restoreDivs();

        if (bossImage) bossImage.style.display = "inline-block";

        checkGameOver();
    } else {
        bossImageContainer.remove();
        restoreDivs();

        randomBossAttack();
    }
}

function restoreDivs() {
    const monsterStatus = document.querySelector(".monster-status");
    const yourStatus = document.querySelector(".your-status");

    if (monsterStatus) monsterStatus.style.display = "block";
    if (yourStatus) yourStatus.style.display = "block";
}

function randomBossAttack() {
    const attacks = [
        { name: "Genkidama", damage: 20, video: "Genkidama.mp4", probability: 30 },
        { name: "Giant Pistol", damage: 25, video: "Giant Pistol.mp4", probability: 25 },
        { name: "HP+", healing: 25, video: "HP+.mp4", probability: 10 },
        { name: "Gatling Gun", damage: 18, video: "gatling gun.mp4", probability: 35 },
    ];

    const totalProbability = attacks.reduce((total, attack) => total + attack.probability, 0);
    const randomNum = Math.random() * totalProbability;

    let accumulatedProbability = 0;

    for (let i = 0; i < attacks.length; i++) {
        accumulatedProbability += attacks[i].probability;

        if (randomNum <= accumulatedProbability) {

            if (attacks[i].name === "HP+") {
                monsterHP += attacks[i].healing;
                monsterHP = Math.min(monsterHP, 300);
                updateHPDisplay();
                playAttackVideo(attacks[i].video, 0);
            } else {
                playAttackVideo(attacks[i].video, attacks[i].damage);
            }

            break;
        }
    }
}

function attack() {
    if (isTransitioning || isPlayingVideo || battle === false || monsterHP <= 0) return;

    if (phase === 1) {
        monsterHP -= 14;
        if (monsterHP < 0) monsterHP = 0;
        updateHPDisplay();

        if (monsterHP <= 0) {
            stopMusic();
            transitionToPhaseTwo();
            return;
        }

        playAttackVideo("gatling gun.mp4", 18);
    } else if (phase === 2) {
        showBossImages();
    }
}

function rest() {
    if (isTransitioning || isPlayingVideo || battle === false || monsterHP <= 0) return;

    if (phase === 1) {
        playerHP = Math.min(playerHP + 2, 100);
        monsterHP = Math.min(monsterHP + 1.5, 80);
    } else {
        playerHP = Math.min(playerHP + 2, 100);
        monsterHP = Math.min(monsterHP + 1.5, 300);
    }

    updateHPDisplay();
}

function checkGameOver() {
    if (monsterHP <= 0 && phase === 2) {
        if (!isPlayingVideo) {
            window.location.href = "coração partido.html";
        }
    } else if (playerHP <= 0) {
        window.location.href = "game-over.html";
    }
}

function stopMusic() {
    if (!music.paused) {
        music.pause();
    }
}

updateHPDisplay();