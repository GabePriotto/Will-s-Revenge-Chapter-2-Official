document.getElementById('targetImage').addEventListener('click', () => {
    const overlay = document.getElementById('overlay');
    const image = document.getElementById('targetImage');
    const alert = document.querySelector(".alert");
    const audio1 = document.getElementById("audio1");
    const audio2 = document.getElementById("audio2");
    const textElement = document.getElementById('text');
    const body = document.getElementById("body");
    const newImage = document.getElementById("newImage"); 
    const message1 = "I-incrível! Como... qual é o nível da sua força...?";
    const message2 = "Você acabou de mudar todos os conceitos que eu possuía sobre os seres humanos.";
    const message3 = "Talvez... Talvez ainda haja esperança, enfim...";
    const message4 = "Nos veremos novamente. Não se esqueça disso...";

    const speed = 50;
    let index = 0;

    function typeWriter(message, callback) {
        if (index < message.length) {
            textElement.textContent += message.charAt(index);
            index++;
            setTimeout(() => typeWriter(message, callback), speed);
        } else if (callback) {
            setTimeout(callback, 5000);
        }
    }

    overlay.style.opacity = '1';
    audio1.play();

    setTimeout(() => {
        body.style.height = '59vh';
        alert.style.display = 'none';
        image.style.display = 'none';
        overlay.style.opacity = '0';
        audio2.play();

        
        setTimeout(() => {
            textElement.textContent = ""; 
            index = 0; 
            typeWriter(message1, () => {
                textElement.textContent = "";
                index = 0; 
                typeWriter(message2, () => {
                    textElement.textContent = ""; 
                    index = 0; 
                    typeWriter(message3, () => {
                        textElement.textContent = ""; 
                        index = 0; 
                        typeWriter(message4, () => {
                            
                            setTimeout(() => {
                                textElement.textContent = ""; 
                                
                                setTimeout(() => {
                                    newImage.style.display = "inline-block"; 
                                }, 500); 
                            }, 5000); 
                        });
                    });
                });
            });
        }, 9000); 
    }, 800);
});
