const startPop = document.getElementById('startPop');
const MusicCatalog = document.getElementById('musicCatalog'); 

let currentAudioElement;

console.log("i");

function startIntro() {
    function callstartintro() {
    startPop.style.display = "none";
    }
    setTimeout(callstartintro, 5000);

}

MusicCatalog.addEventListener("click", async function (e){
    const target = e.target;

    if (target.tagName === "IMG") {
        console.log("IMG IS CLICKED" + target.getAttribute("src"));
        const parentDiv = target.parentElement;
        const sourceElement = parentDiv.querySelector("source");
        const audioSrc = sourceElement.getAttribute("src");
        console.log("AUDIO SRC IS HERE - " + audioSrc); 
        playingSong(audioSrc);

        if (currentAudioElement && !currentAudioElement.paused && currentAudioElement.src === audioSrc) {
            // If the clicked audio is already playing, pause it
            currentAudioElement.pause();
        } else {
            if (currentAudioElement && !currentAudioElement.paused) {
                // If another audio is already playing, stop it
                await stopPlayingSong();
            }
            // Play the clicked audio
            await playingSong(audioSrc);
        }
    }
});

function playingSong(songsrc){
    return new Promise((resolve, reject) => {
        currentAudioElement = new Audio(songsrc);
        currentAudioElement.play()
            .then(() => {
                resolve();
            })
            .catch((error) => {
                console.error("Error playing audio:", error);
                reject(error);
            });
    });
}

function stopPlayingSong() {
    return new Promise((resolve, reject) => {
        if (currentAudioElement && !currentAudioElement.paused) {
            currentAudioElement.pause(); // Pause the currently playing song
            currentAudioElement.currentTime = 0; // Reset playback to the beginning
            resolve();
        } else {
            resolve(); // If no song is playing, resolve immediately
        }
    });
}



window.onload = function () {
    startPop.style.opacity = '0';
    startIntro();
}
