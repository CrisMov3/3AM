document.addEventListener("DOMContentLoaded", function() {
    const songs = document.querySelectorAll(".songs li");
    const songImage = document.getElementById("songImage");

    songs.forEach(function(song) {
        song.addEventListener("click", function() {
            const audioPlayer = document.getElementById("audioPlayer");
            const source = this.getAttribute("data-src");
            const songTitle = this.textContent.trim(); 

            const imageFormats = ['jpg', 'png', 'jpeg', 'gif', 'webp'];

            for (let format of imageFormats) {
                const imagePath = `img_canciones/${songTitle}.${format}`;
                const image = new Image();
                image.src = imagePath;

                image.onload = function() {
                    songImage.src = imagePath;

                    songImage.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    return;
                };

                image.onerror = function() {
                    console.log(`No se pudo cargar la imagen: ${imagePath}`);
                };
            }

            audioPlayer.src = source;
            audioPlayer.play();
        });
    });
});
