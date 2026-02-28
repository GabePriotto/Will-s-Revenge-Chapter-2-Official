var textoOriginal = "original";
var texto1 = "Certo, agora você consegue ver bem, não é?";
var texto2 = "Will estava te impedindo de ver as coisas como realmente são. Você só podia sentir presenças e ouvir vozes.";
var texto3 = "Agora eu removi essa condição de você. Você pode ver como as coisas realmente são agora..."
var texto4 = "*Seus olhos brilham com essa nova liberdade. Você agora consegue ver o rosto de Chris...";
var texto5 = "Certo... Agora temos que tratar daquilo... Da verdade...";
var texto6 = "Bem, você escolheu saber... Não o julgo. Também teria curiosidade...";
var texto7 = "Então... Por onde devo começar...?";
var texto8 = "Bem, há muito tempo atrás, eu me mudei para uma nova região do lugar onde eu morava...";
var texto9 = "Era um lugar mais tranquilo, perfeito para pessoas como eu. Lá, eu conheci um homem simpático, chamado Will Smith...";
var texto10 = "Por muito tempo, nós fomos grandes amigos. Costumavámos alimentar os pássaros na praça todos os dias.";
var texto11 = "Um certo tempo se passou. Eu fui crescendo socialmente naquela aldeia. Me tornei uma pessoa poderosa financeiramente.";
var texto12 = "Will também era assim. Logo, nós dois construímos impérios gigantescos...";
var texto13 = "Até que... aquele dia chegou...";
var texto14 = "Foi em um dia frio. Houve uma grande festa na aldeia. Eu e Will fomos convidados a participar...";
var texto15 = "Naquela festa, foi nos apresentado uma máquina fantástica, conhecida como computador. Will ficou fascinado logo de cara.";
var texto16 = "Depois daquele dia, os computadores começaram a ser implementados na nossa aldeia...";
var texto17 = "Will começou a agir estranho. Estava vidrado naquela máquina... Passava horas e horas em seu quarto... estudando...";
var texto18 = "Ele nunca mais foi alimentar os pássaros depois daquele dia. Ficava desmontando PCs em seu quarto, para descobrir como funcionavam.";
var texto19 = "Um dia, ele finalmente saiu de sua casa. Parecia um morto-vivo, com a barba desgranhada e o corpo sujo e fedendo...";
var texto20 = "Tentei puxar um papo com ele, mas Will não era mais o mesmo. Agora, ele pensava apenas em uma coisa: poder.";
var texto21 = "Sim, ele queria poder. Era díficil imaginar aquele antigo homem simpático virar um tirano, ditador...";
var texto22 = "Ele fez alterações nos PCs para que fossem máquinas vivas e apenas obedecessem a ele. Criou uma espécie de vírus...";
var texto23 = "Will contaminou todos os PCs da cidade com esse vírus, conectando todos ao seu poder. Ele podia ver tudo que acontecia do outro lado das telas.";
var texto24 = "Assim, todos os PCs da aldeia viraram seus servos. Em pouco tempo, ele adaptou pernas e braços e os transformou em soldados...";
var texto25 = "Ele obrigou a população a fazer tudo o que ele queria. Se tornou o Ditador das Máquinas.";
var texto26 = "Todos que eram contra ele eram mortos. Eu não acreditava no que via...";
var texto27 = "Então, eu decidi agir. Peguei todos os meus subordinados e ataquei a base de Will. Eu era o único que podia fazer isso.";
var texto28 = "Foi aí que a Guerra começou...";
var texto29 = "A Guerra durou muito tempo. Máquinas eram mais resistentes, mas humanos sabiam trabalhar em equipe. Estávamos empatados...";
var texto30 = "Porém, máquinas eram sem valor e facilmente substituíveis. Humanos... não...";
var texto31 = "Quando descobrímos a magia, tudo mudou. Usar magia era muito mais eficaz que balas de ferro. Era nossa salvação...";
var texto32 = "A magia foi algo utilizado por nossos antepassados, mas esquecida no tempo. Quando a reaprendemos, nos tornamos mais fortes...";
var texto33 = "Porém, as mortes ainda eram muitas. Conseguímos consquistar alguns territórios, mas mesmo assim...";
var texto34 = "Foi então que decidi acabar com aquilo. Com ajuda de alguns soldados, me infiltrei na base principal de Will...";
var texto35 = "Eu o confrontei frente a frente. Só nós dois. Líder contra líder. Apenas um combate iria decidir o destino de todos...";
var texto36 = "Will era forte, mais do que eu imaginava...";
var texto37 = "Eu ia perder. Sabia disso. Mas mesmo assim, não conseguia me render...";
var texto38 = "Sabia que minha morte estava perto. Will havia me ferido mortalmente. Porém, eu tinha uma carta na manga...";
var texto39 = "Em meus últimos momentos, conjurei uma magia proíbida e prendi Will em um de seus computadores...";
var texto40 = "Porém, no processo, acabei sendo levado também...";
var texto41 = "Desde então, estamos aqui, presos. Eu acabei não morrendo, pois não sou mais físico. Com o tempo, me tornei apenas números...";
var texto42 = "Eu já desisti de sair a muito tempo. Decidi permanecer aqui e proteger aqueles que caem na lábia de Will, como você.";
var texto43 = "Sim, há como sair daqui, mas não na forma em que estamos...";
var texto44 = "Quando se fica muito tempo preso aqui, seu corpo físico vira números. A partir daí, você não pode mais sair por conta própria.";
var texto45 = "A única forma de sair é deixando alguém físico no seu lugar. Confuso? Eu explico...";
var texto46 = "Will quer pegar você para deixá-lo em seu lugar e sair. Ele quer absorver sua essência física para poder passar pela saída...";
var texto47 = "Porém, se ele absorver sua essência física, quem vira um monte de números é você. Então, você estará preso aqui para sempre...";
var texto48 = "Não podemos deixar que Will escape. Por isso, você precisa sair o quanto antes, entende?";
var texto49 = "Temos apenas um problema. Will é muito poderoso aqui. Na verdade, ele vem estudando esse mundo há muito tempo...";
var texto50 = "Ele entende mais daqui do que eu. Além disso, aqui é diferente de nossa realidade. Não consigo usar a maioria das magias aqui.";
var texto51 = "Seja como for, eu vou guiar você até que esteja pronto para...";
var texto52 = "É... esquece... não era nada importante...";
var texto53 = "Por falar nisso, evite os Campos da Perdição a qualquer custo. Por algum motivo, Will fica extremamente poderoso naquele lugar, muito além da minha comprensão..."
var textoAtual = textoOriginal;

function verdade() {
    const messageBox = document.getElementById("messageBox");
    var elemento = document.getElementById("maio");
    if (textoOriginal === textoAtual) {
        elemento.textContent = texto1;
        textoAtual = texto1;
        messageBox.classList.add("visible");
        messageBox.classList.remove("hidden");
    
        setTimeout(() => {
            messageBox.classList.remove("visible");
            messageBox.classList.add("hidden");
        }, 5000);
    
    } else if (textoAtual === texto1) {
        elemento.textContent = texto2;
        textoAtual = texto2;
    } else if (textoAtual === texto2) {
        elemento.textContent = texto3;
        textoAtual = texto3;
    } else if (textoAtual === texto3) {
        elemento = document.getElementById("sol");
        elemento.textContent = texto4;
        textoAtual = texto4;
    } else if (textoAtual === texto4) {
        elemento = document.getElementById("maio");
        elemento.textContent = texto5;
        textoAtual = texto5;
    } else if (textoAtual === texto5) {
        elemento.textContent = texto6;
        textoAtual = texto6;
    } else if (textoAtual === texto6) {
        elemento.textContent = texto7;
        textoAtual = texto7;
    }else if (textoAtual === texto7) {
        elemento.textContent = texto8;
        textoAtual = texto8;
    }else if (textoAtual === texto8) {
        elemento.textContent = texto9;
        textoAtual = texto9;
    }else if (textoAtual === texto9) {
        elemento.textContent = texto10;
        textoAtual = texto10;
    }else if (textoAtual === texto10) {
        elemento.textContent = texto11;
        textoAtual = texto11;
    }else if (textoAtual === texto11) {
        elemento.textContent = texto12;
        textoAtual = texto12;
    }else if (textoAtual === texto12) {
        elemento.textContent = texto13;
        textoAtual = texto13;
    }else if (textoAtual === texto13) {
        elemento.textContent = texto14;
        textoAtual = texto14;
    }else if (textoAtual === texto14) {
        elemento.textContent = texto15;
        textoAtual = texto15;
    }else if (textoAtual === texto15) {
        elemento.textContent = texto16;
        textoAtual = texto16;
    }else if (textoAtual === texto16) {
        elemento.textContent = texto17;
        textoAtual = texto17;
    }else if (textoAtual === texto17) {
        elemento.textContent = texto18;
        textoAtual = texto18;
    }else if (textoAtual === texto18) {
        elemento.textContent = texto19;
        textoAtual = texto19;
    }else if (textoAtual === texto19) {
        elemento.textContent = texto20;
        textoAtual = texto20;
    }else if (textoAtual === texto20) {
        elemento.textContent = texto21;
        textoAtual = texto21;
    }else if (textoAtual === texto21) {
        elemento.textContent = texto22;
        textoAtual = texto22;
    }else if (textoAtual === texto22) {
        elemento.textContent = texto23;
        textoAtual = texto23;
    }else if (textoAtual === texto23) {
        elemento.textContent = texto24;
        textoAtual = texto24;
    }else if (textoAtual === texto24) {
        elemento.textContent = texto25;
        textoAtual = texto25;
    }else if (textoAtual === texto25) {
        elemento.textContent = texto26;
        textoAtual = texto26;
    }else if (textoAtual === texto26) {
        elemento.textContent = texto27;
        textoAtual = texto27;
    }else if (textoAtual === texto27) {
        elemento.textContent = texto28;
        textoAtual = texto28;
    }else if (textoAtual === texto28) {
        elemento.textContent = texto29;
        textoAtual = texto29;
    }else if (textoAtual === texto29) {
        elemento.textContent = texto30;
        textoAtual = texto30;
    }else if (textoAtual === texto30) {
        elemento.textContent = texto31;
        textoAtual = texto31;
    }else if (textoAtual === texto31) {
        elemento.textContent = texto32;
        textoAtual = texto32;
    }else if (textoAtual === texto32) {
        elemento.textContent = texto33;
        textoAtual = texto33;
    }else if (textoAtual === texto33) {
        elemento.textContent = texto34;
        textoAtual = texto34;
    }else if (textoAtual === texto34) {
        elemento.textContent = texto35;
        textoAtual = texto35;
    }else if (textoAtual === texto35) {
        elemento.textContent = texto36;
        textoAtual = texto36;
    }else if (textoAtual === texto36) {
        elemento.textContent = texto37;
        textoAtual = texto37;
    }else if (textoAtual === texto37) {
        elemento.textContent = texto38;
        textoAtual = texto38;
    }else if (textoAtual === texto38) {
        elemento.textContent = texto39;
        textoAtual = texto39;
    }else if (textoAtual === texto39) {
        elemento.textContent = texto40;
        textoAtual = texto40;
    }else if (textoAtual === texto40) {
        elemento.textContent = texto41;
        textoAtual = texto41;
    }else if (textoAtual === texto41) {
        elemento.textContent = texto42;
        textoAtual = texto42;
    }else if (textoAtual === texto42) {
        elemento.textContent = texto43;
        textoAtual = texto43;
    }else if (textoAtual === texto43) {
        elemento.textContent = texto44;
        textoAtual = texto44;
    }else if (textoAtual === texto44) {
        elemento.textContent = texto45;
        textoAtual = texto45;
    }else if (textoAtual === texto45) {
        elemento.textContent = texto46;
        textoAtual = texto46;
    }else if (textoAtual === texto46) {
        elemento.textContent = texto47;
        textoAtual = texto47;
    }else if (textoAtual === texto47) {
        elemento.textContent = texto48;
        textoAtual = texto48;
    }else if (textoAtual === texto48) {
        elemento.textContent = texto49;
        textoAtual = texto49;
    }else if (textoAtual === texto49) {
        elemento.textContent = texto50;
        textoAtual = texto50;
    }else if (textoAtual === texto50) {
        elemento.textContent = texto51;
        textoAtual = texto51;
    }else if (textoAtual === texto51) {
        elemento.textContent = texto52;
        textoAtual = texto52;
    }else if (textoAtual === texto52) {
        elemento.textContent = texto53;
        textoAtual = texto53;
    } else {
        window.location.href = "continue.html";
    }
}