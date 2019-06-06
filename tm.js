
window.onload = function() {

    let seconds = 0;
    let player = 0;

    function updateScreen() {
        let dice = document.getElementsByClassName('dice');
        dice[0].innerHTML = seconds;
        let playerText = "Iuliia";
        if (player === 1) {
            playerText = "Vova";
        }
        dice[1].innerHTML = playerText;
    }

    function reset() {
        seconds = 0;
        player = 1 - player;
        updateScreen();

        clearInterval(timerHandle);
        timerHandle = setInterval(countTimer, 1000);
    }

    function touchEventHandler(event) {
        event.preventDefault();
        reset();
    }

    let clickArea = document.getElementsByClassName('click_area')[0];
    clickArea.addEventListener('click', reset);

    document.addEventListener("touchstart", touchEventHandler, false);
    document.addEventListener("touchmove ", touchEventHandler, false);

    function countTimer() {
        ++seconds;
        updateScreen();
    }

    updateScreen();
    let timerHandle = setInterval(countTimer, 1000);
};
