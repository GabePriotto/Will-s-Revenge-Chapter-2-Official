var textoOriginal = "bcsdfbsad";
var texto1 = "*Você põe os pés para fora do elevador, mas eles afundam no chão até a altura da coxa...";
var texto2 = "*Você percebeu tarde demais que este lugar estava completamente inundado...";
var texto3 = "*Mesmo assim, talvez não seja má ideia dar uma olhada por aí...";
var texto4 = "Você caminha um pouco pela água... É estranho ver novamente um lugar com céu aberto depois de tanto tempo...";
var texto5 = "*Ao longe, você avista uma espécie de cabana, e parece que tem alguem lá...";
var texto6 = "*Você decide verificar...";
var texto7 = "*Ao chegar perto da cabana, você avista um velho homem sentado em uma cadeira de balanço, segurando uma vara de pescar...";
var texto8 = "Olá, jovem... O que deseja?";
var texto9 = "Você está no Lago das Lágrimas, um lugar meio difícil de encontrar caso não esteja procurando...";
var texto10 = "Na verdade, esse lago foi, há muito tempo, amaldiçoado...";
var texto11 = "Sinceramente, está mais para uma prisão...";
var texto12 = "Ah, meu nome é Morgan Freeman, sou apenas um pescador...";
var texto13 = "Na verdade, uma vez fui um grande aventureiro, mas acabei preso aqui para todo o sempre...";
var texto14 = "Em uma de minhas aventuras, conheci um ser chamado Will Smith. Ele amaldiçoou a mim e ao lago em que estamos...";
var texto15 = "Ele me prendeu neste lugar para sempre, e não posso mais sair...";
var texto16 = "Tudo o que me resta fazer é sentar e pescar...";
var texto17 = "Tudo isso apenas porque ajudei um de seus inimigos... Um feiticeiro estranho...";
var texto18 = "Sim... Na época, ajudei ele e mais um garoto, muito parecido com você inclusive, a passar pelo <span class='span'>Coração Roxo</span>, sem que ele percebesse...";
var texto19 = "Havia um caminho secreto que eu conhecia, que passava pelo <span class='span'>Coração Roxo</span> sem precisar entrar naquela sala, mas Will Smith acabou destruindo...";
var texto20 = "Enfim, isso é passado. Agora, comando este clube de pesca.";
var texto21 = "Há muitos peixes aqui, todos únicos! Você não os encontrará em nenhum outro lugar...";
var texto22 = "Você gostaria de pescar?";
var texto23 = "É! Pescar... Sabe... Jogar a vara e esperar o peixe fisgar a isca...";
var texto24 = "É muito divertido, e você ainda pode encontrar vários peixes raros!";
var texto25 = "Você até pode encontrar o mítico <span class='span'>Peixe Lendário Patatá Dourado!</span> É o peixe mais raro de todos. Eu com certeza pagaria uma fortuna por ele...";
var texto26 = "O que me diz?";
var texto27 = "Antigamente, este lugar foi um vilarejo alegre, cheio de pessoas...";
var texto28 = "No centro do vilarejo, havia um lago enorme, o Lago Dourado do Rei.";
var texto29 = "Foi aqui que eu nasci e cresci...";
var texto30 = "Este vilarejo acabou sofrendo uma maldição, que fez a água do lago subir até encobrir todo o vilarejo...";
var texto31 = "Todos acabaram sendo pegos desprevinidos. A cheia aconteceu de um dia para o outro. Todos se afogaram. Nenhum sobrevivente...";
var texto32 = "Depois disso, a água baixou um pouco, porém nunca totalmente. Devido a maldição, a água permanecerá nesse nível para sempre.";
var texto33 = "E, ainda, não importa para onde vá, não irá encontrar mais nada além dessa cabana e essas ruínas ao redor...";
var texto34 = "Ótimo! Aqui está uma vara de pescar e um balde...";
var texto35 = "*Você pega os dois objetos.";
var texto36 = "Enfim, pesque o maior número de peixes que puder... Na verdade, normalmente eu cobraria 30 moedas por pescaria, mas farei apenas por 10 moedas para você...";
var texto37 = "*Você diz ao velho que não tem nenhum tipo de dinheiro...";
var texto38 = "Tudo bem, não se preocupe com isso... Já que é sua primeira vez, te darei 60 moedas para começar...";
var texto39 = "Você pode conseguir mais moedas me vendendo os peixes que pescar...";
var texto40 = "Cada peixe tem um valor, depende muito da raridade.";
var texto41 = "Para pescar, basta apertar na barra quando ela estiver verde, lembre-se bem disso...";
var texto42 = "*Você não entende muito bem o que barras tem a ver com pescaria, mas decide ignorar por enquanto...";
var texto43 = "*Está na hora de pescar!";
var textoAtual = textoOriginal;

let normal = document.getElementById("normalMan");
const img = document.getElementById("princ-img");
let fishman = document.getElementById("fishman");
const button1 = document.getElementById("local");
const button2 = document.getElementById("you");
const dial = document.getElementById("dialButton");
const button3 = document.getElementById("voltar");
const button4 = document.getElementById("pescar");
const div = document.getElementById("reto");
const infoArea = document.getElementById("infoArea");
const fishList = document.getElementById("fishList");

let greenLight = false;

let coins = 60;
let fishCount = 0;

const fishButton = document.getElementById("fishButton");
const coinCount = document.getElementById("coinCount");
const fishCountDisplay = document.getElementById("fishCount");
const gameArea = document.getElementById("gameArea");
const forceBar = document.getElementById("forceBar");
const fishResult = document.getElementById("fishResult");
const fishImage = document.getElementById("fishImage");
const fishName = document.getElementById("fishName");
const fishRarity = document.getElementById("fishRarity");
const fishDescription = document.getElementById("fishDescription");
const sellButton = document.getElementById("sellButton");
const porcent = document.getElementById("porcentage");

function dialogo() {
    if(textoAtual === textoOriginal) {
        normal.textContent = texto1;
        textoAtual = texto1;
    } else if(textoAtual === texto1) {
        normal.textContent = texto2;
        textoAtual = texto2
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
        img.style.visibility = "visible";
        normal.textContent = "";
        fishman.textContent = texto8;
        textoAtual = texto8;
    } else if(textoAtual === texto8) {
        button1.style.display = "inline-block";
        button2.style.display = "inline-block";
        dial.style.display = "none";
        greenLight = true;
    }
}

function local() {
    if(greenLight === true) {
        button2.style.display = "none";
        fishman.textContent = texto9;
        textoAtual = texto9;
        greenLight = false;
    } else if(textoAtual === texto9) {
        fishman.textContent = texto10;
        textoAtual = texto10;
    } else if(textoAtual === texto10) {
        fishman.textContent = texto11;
        textoAtual = texto11;
    } else if(textoAtual === texto11) {
        fishman.textContent = texto27;
        textoAtual = texto27;
    } else if(textoAtual === texto27) {
        fishman.textContent = texto28;
        textoAtual = texto28;
    } else if(textoAtual === texto28) {
        fishman.textContent = texto29;
        textoAtual = texto29;
    } else if(textoAtual === texto29) {
        fishman.textContent = texto30;
        textoAtual = texto30;
    } else if(textoAtual === texto30) {
        fishman.textContent = texto31;
        textoAtual = texto31;
    } else if(textoAtual === texto31) {
        fishman.textContent = texto32;
        textoAtual = texto32;
    } else if(textoAtual === texto32) {
        fishman.textContent = texto33;
        textoAtual = texto33;
    } else if( textoAtual === texto33) {
        fishman.textContent = "";
        button1.style.display = "none";
        button2.style.display = "inline-block";
        greenLight = true;
    }
}

function what() {
    if(greenLight === true) {
        button1.style.display = "none";
        fishman.textContent = texto12;
        textoAtual = texto12;
        greenLight = false;
    } else if(textoAtual === texto12) {
        fishman.textContent = texto13;
        textoAtual = texto13;
    } else if(textoAtual === texto13) {
        fishman.textContent = texto14;
        textoAtual = texto14;
    } else if( textoAtual === texto14) {
        fishman.textContent = texto15;
        textoAtual = texto15;
    } else if( textoAtual === texto15) {
        fishman.textContent = texto16;
        textoAtual = texto16;
    } else if( textoAtual === texto16) {
        fishman.textContent = texto17;
        textoAtual = texto17;
    } else if( textoAtual === texto17) {
        fishman.innerHTML = texto18;
        textoAtual = texto18;
    } else if( textoAtual === texto18) {
        fishman.innerHTML = texto19;
        textoAtual = texto19;
    } else if( textoAtual === texto19) {
        fishman.textContent = texto20;
        textoAtual = texto20;
    } else if( textoAtual === texto20) {
        fishman.textContent = texto21;
        textoAtual = texto21;
    } else if( textoAtual === texto21) {
        fishman.textContent = texto22;
        textoAtual = texto22;
    } else if( textoAtual === texto22) {
        fishman.textContent = texto23;
        textoAtual = texto23;
    } else if( textoAtual === texto23) {
        fishman.textContent = texto24;
        textoAtual = texto24;
    } else if( textoAtual === texto24) {
        fishman.innerHTML = texto25;
        textoAtual = texto25;
    } else if( textoAtual === texto25) {
        fishman.textContent = texto26;
        textoAtual = texto26;
    } else if( textoAtual === texto26) {
        button2.style.display = "none";
        button3.style.display = "inline-block";
        button4.style.display = "inline-block";
        greenLight = true;
    }
}

function pescar() {
    if(greenLight === true) {
        button3.style.display = "none";
        fishman.textContent = texto34;
        textoAtual = texto34;
        greenLight = false;
    } else if(textoAtual === texto34) {
        fishman.textContent = "";
        normal.textContent = texto35;
        textoAtual = texto35;
    } else if(textoAtual === texto35) {
        fishman.textContent = texto36;
        normal.textContent = "";
        textoAtual = texto36;
    } else if(textoAtual === texto36) {
        fishman.textContent = "";
        normal.textContent = texto37;
        textoAtual = texto37;
    } else if(textoAtual === texto37) {
        fishman.textContent = texto38;
        normal.textContent = "";
        textoAtual = texto38;
    } else if(textoAtual === texto38) {
        fishman.textContent = texto39;
        textoAtual = texto39;
    } else if(textoAtual === texto39) {
        fishman.textContent = texto40;
        textoAtual = texto40;
    } else if(textoAtual === texto40) {
        fishman.textContent = texto41;
        textoAtual = texto41;
    } else if(textoAtual === texto41) {
        fishman.textContent = "";
        normal.textContent = texto42;
        textoAtual = texto42;
    } else if(textoAtual === texto42) {
        normal.textContent = texto43;
        textoAtual = texto43;
    } else if(textoAtual === texto43) {
        img.style.display = "none";
        div.style.display = "none";
        button4.style.display = "none";
        infoArea.style.display = "inline-block";
        fishButton.style.display = "inline-block";
        fishList.style.display = "inline-block";
    }
}

const fishes = [
    { name: "Peixe Faro", rarity: "Comum", porcent: "50% de chance de captura" ,description: "É um peixe apresentador que gosta de One Piece", value: 5, img: "Peixe Faro.jpg" },
    { name: "Peixe Fausto", rarity: "Comum", porcent: "50% de chance de captura" , description: "Um peixe conhecido por seu senso de humor facilmente inflável", value: 6, img: "Peixe Fausto.jpg" },
    { name: "Apresentador Peixe Hulk", rarity: "Comum", porcent: "50% de chance de captura" , description: "É o mais forte do oceano, mas seu interior é verde e nojento e tem um péssimo gosto", value: 5, img: "Apresentador Peixe Hulk.jpg" },
    { name: "Tony Peixamos", rarity: "Incomum", porcent: "30% de chance de captura" , description: "Os outros peixes fazem bulling com ele o chamando de Tony Erramos", value: 8, img: "Tony Peixamos.jpg" },
    { name: "Peixe Núcleo", rarity: "Incomum", porcent: "30% de chance de captura" , description: "Ao contrário da maioria dos peixes, este em especial não será atraído pela isca CLT", value: 11, img: "Peixe Núcleo.jpg" },
    { name: "Michael Fish Jackson", rarity: "Raro", porcent: "15% de chance de captura" , description: "Lendas diziam que este peixe estava extinto, mas isso se provou contrário quando encontraram sua espécie vivendo em Marte", value: 15, img: "Michael Fish Jackson.jpg" },
    { name: "Peixe Véio Careca", rarity: "Raro", porcent: "15% de chance de captura" , description: "Tenta se passar de bonzinho, mas todos sabem que ele vende armas para os peixes Russos", value: 15, img: "Peixe Véio Careca.jpg"},
    { name: "Peixe Papa", rarity: "Exótico", porcent: "04% de chance de captura" , description: "É o líder dos peixes católicos", value: 25, img: "Peixe Papa.jpg" },
    { name: "Peixe Smith", rarity: "Exótico", porcent: "04% de chance de captura" , description: "Se formou quando o lago foi amaldiçoado, e desde então corrompe os recifes e peixes", value: 25, img: "Peixe Smith.jpg" },
    { name: "Peixe Lendário Patatá Dourado", rarity: "Mítico", porcent: "01% de chance de captura" , description: "É o último de sua espécie. Estes peixes vivem bilhões de anos, e sua carne é a mais macia e saborosa de todas", value: 100000, img: "Peixe Lendário Patatá Dourado.jpg" }
];

let isFishing = false;
let force = 0;
let direction = 1;
let interval;

const messageBox = document.getElementById("messageBox");

function startFishing() {
    let currentCoins = parseInt(coinCount.textContent, 10);
    if (currentCoins < 10) {
        alert("Você não tem moedas suficientes para pescar!");
        return;
    }
    force = 0;
    direction = 1;

    fishButton.style.display = "none";

    const greenStart = 35;
    const greenEnd = 65;

    let speed = Math.floor(Math.random() * 12) + 2;

    currentCoins -= 10;
    coinCount.textContent = currentCoins.toString();
    gameArea.style.display = "block";
    gameArea.addEventListener("click", stopFishing);
    gameArea.style.border = "2px solid blue";

    interval = setInterval(() => {
      force += direction;
      if (force >= 100 || force <= 0) direction *= -1;
      forceBar.style.width = `${force}%`;

      if (force >= greenStart && force <= greenEnd) {
        forceBar.style.backgroundColor = "green";
    } else {
        forceBar.style.backgroundColor = "red";
    }
    }, speed);
}

function stopFishing() {
    clearInterval(interval);
    gameArea.style.display = "none";
  
    const greenStart = 35;
    const greenEnd = 65; 

    if (force >= greenStart && force <= greenEnd) {
        let randomValue = Math.random();
        let selectedFish;

        if (randomValue < 0.01) {
            selectedFish = fishes.filter(fish => fish.rarity === "Mítico"); 
        } else if (randomValue < 0.05) {
            selectedFish = fishes.filter(fish => fish.rarity === "Exótico"); 
        } else if (randomValue < 0.15) {
            selectedFish = fishes.filter(fish => fish.rarity === "Raro");
        } else if (randomValue < 0.45) {
            selectedFish = fishes.filter(fish => fish.rarity === "Incomum"); 
        } else {
            selectedFish = fishes.filter(fish => fish.rarity === "Comum"); 
                }

        const fish = selectedFish[Math.floor(Math.random() * selectedFish.length)];

        fishImage.src = fish.img;
        fishName.textContent = fish.name;
        fishRarity.textContent = `Raridade: ${fish.rarity}`;
        fishDescription.textContent = fish.description;
        porcent.textContent = fish.porcent;
        fishResult.dataset.value = fish.value;
        fishResult.style.display = "block";
        fishCount++;
        fishCountDisplay.textContent = fishCount;

        if (fish.rarity === "Mítico") {
            messageBox.classList.add("visible");
            messageBox.classList.remove("hidden");

            setTimeout(() => {
                messageBox.classList.remove("visible");
                messageBox.classList.add("hidden");
            }, 5000); 
        }

    } else {
        alert("Você perdeu o peixe!");
        fishButton.style.display = "inline-block";
    }

    isFishing = false;
}


function sellFish() {
    fishButton.style.display = "inline-block";
  const value = parseInt(fishResult.dataset.value, 10);
  let currentCoins = parseInt(coinCount.textContent, 10);
  currentCoins += value;
  coinCount.textContent = currentCoins.toString();
  fishResult.style.display = "none";
}

fishButton.addEventListener("click", startFishing);
gameArea.addEventListener("click", stopFishing);
sellButton.addEventListener("click", sellFish);
let time = true;

function fishTime() {
    if(time === true) {
        fishList.style.visibility = "visible";
        time = false;
    } else {
        fishList.style.visibility = "hidden";
        time = true;
    }
}
