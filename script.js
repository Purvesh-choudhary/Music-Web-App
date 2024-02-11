const fileInput = document.getElementById('fileInput');
const audioPlayer = document.getElementById('audioPlayer');

function getList() {
    console.log('rrrr')
}


fileInput.addEventListener('change', function (event) {
    const file = event.target.files[0];
    if (file) {
        const objectURL = URL.createObjectURL(file);
        audioPlayer.src = objectURL;
        audioPlayer.style.display = 'block'; // Show the audio player
        audioPlayer.play(); // Autoplay the audio
    }
});