const frases = [
    "Talvez isso realmente fosse o melhor para você... e para todos nós....",
    "Ei! Levante-se! Eu lhe avisei das consequências, mas você entrou do mesmo jeito. Agora vá e termine o que começou!",
    "Eu não consigo te ver... você consegue me ver? Está tudo tão escuro...",
    "Will ainda não está satisfeito. Rápido, levante-se! Ele ainda precisa da sua boa e velha marionete...",
    "Sinceramente, eu esperava mais de você...",
    "Ainda não é o fim, garoto. Se você se levantar, ainda podemos achar a saída desse lugar... Vamos, eu te ajudo...",
    "EU AINDA CONSIGO TE VER",
    "Não confie neles, não confie neles, não confie neles, não confie neles, não confie neles...",
    "Continue dormindo... continue dormindo...",
    "Acorde! A aventura apenas acabou de começar... eu acho... quem sou eu?",
    "Esses ferimentos parecem sérios... É melhor você não fazer muito esforço...",
    "Talvez você devesse ir ao médico, algo assim... Esse buraco na barriga não é normal, é?",
    "Sente por um instante e reflita sobre seus erros.",
    "Já vi humanos com fraturas, mas tantas de uma só vez é algo novo.",
    "Não ligue para a frase acima, o jogo apenas acabou de começar..."
];

const fraseAleatoria = frases[Math.floor(Math.random() * frases.length)];
document.getElementById("gameOverText").textContent = fraseAleatoria;

function voltar() {
    const previousURL = document.referrer;
    if (previousURL) {
        window.location.href = previousURL;
    } else {
    
        window.location.href = "index.html";
    }
}