function openLetter(){

    document.getElementById("letter").style.display="block";

    let music = document.getElementById("music");

    music.volume = 0.5;

    music.play()
    .catch(error => {
        console.log("Music blocked:", error);
    });

}