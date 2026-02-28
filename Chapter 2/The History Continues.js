window.addEventListener("DOMContentLoaded", function() {

    const musica = document.getElementById("bgMusic");
    const tempoSalvo = localStorage.getItem("musicTime");

    musica.addEventListener("loadedmetadata", function() {

        if (tempoSalvo !== null) {
            musica.currentTime = parseFloat(tempoSalvo);
        }

        musica.play().catch(() => {});
    });

});