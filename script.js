const startPop = document.getElementById("startPop");
const MusicCatalog = document.getElementById("musicCatalog");

let currentAudioElement;
let currentAudioElementSrc;
let previousParentDiv;

console.log("i");

function startIntro() {
    function callstartintro() {
        startPop.style.display = "none";
    }
    setTimeout(callstartintro, 5000);
}

MusicCatalog.addEventListener("click", async function (e) {
    const target = e.target;

    if (target.tagName === "IMG") {
        console.log("IMG IS CLICKED - " + target.getAttribute("src"));
        const parentDiv = target.parentElement;
        const sourceElement = parentDiv.querySelector("source");
        const audioSrc = sourceElement.getAttribute("src");
        console.log("AUDIO SRC IS HERE - " + audioSrc);

        if (
            currentAudioElement &&
            currentAudioElement.play &&
            currentAudioElementSrc === audioSrc
        ) {
            // If the clicked audio is already playing, pause it
            if (!currentAudioElement.paused) {
                console.log("Already Playing song is paused");
                currentAudioElement.pause();

                // currentAudioElement.pause();
            } else {
                console.log("Already Playing song is Played");
                currentAudioElement.play();
            }
            parentDiv.classList.toggle("CURRENTSONG");
        } else {
            if (currentAudioElement && !currentAudioElement.paused) {
                // If another audio is already playing, stop it
                console.log("another playing song is paused");
                await stopPlayingSong();
            }
            // Play the clicked audio
            console.log("Played Now");
            await playingSong(audioSrc, parentDiv);
        }
        // parentDiv.classList.toggle('CURRENTSONG');
    }
});

function playingSong(songsrc, parentDiv) {
    currentAudioElement = new Audio(songsrc);
    currentAudioElementSrc = songsrc;
    currentParentDiv = parentDiv;
    currentAudioElement.play();
    currentParentDiv.classList.add("CURRENTSONG");
    if (previousParentDiv) {
        previousParentDiv.classList.remove("CURRENTSONG");
    }
    previousParentDiv = currentParentDiv;
}

function stopPlayingSong() {
    currentAudioElement.pause();
    currentAudioElement.currentTime = 0;
    currentAudioElementSrc = "";
    if (previousParentDiv) {
        previousParentDiv.classList.remove("CURRENTSONG");
    }
}

window.onload = function () {
    startPop.style.opacity = "0";
    startIntro();
};
