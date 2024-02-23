const startPop = document.getElementById('startPop');
console.log("i");

function startIntro() {
    function callstartintro() {
    startPop.style.display = "none";
    }
    setTimeout(callstartintro, 5000);

}
window.onload = function () {
    startPop.style.opacity = '0';
    startIntro();
}
