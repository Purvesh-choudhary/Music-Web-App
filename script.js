const startPop = document.getElementById('startPop');
console.log("i");

function startIntro() {
    function callstartintro() {
        
        startPop.style.display = "none";
    }
    setTimeout(callstartintro, 4000);

}
window.onload = function () {
    startIntro();
}
