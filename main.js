
window.onload = function() {

    let animationInProgress = false;
    let animationCounter = 0;
    let audio = new Audio('dice.mp3');
    let firstDice = 0;
    let secondDice = 0;

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function getRandomDice() {
        return getRandomInt(0, 3);
    }

    function setDice(first, second) {
        let dice = document.getElementsByClassName('dice');
        dice[0].innerHTML = first;
        dice[1].innerHTML = second;
    }

    function anim() {
        if (animationCounter < 12) {
            setTimeout(anim, 10 + animationCounter * 8);
            animationCounter = animationCounter + 1;
            firstDice = (firstDice + 1) & 3;
            secondDice = (secondDice + 1) & 3;
            setDice(firstDice, secondDice);
        } else {
            animationInProgress = false;
        }
    }

    function startRoll() {
        if (animationInProgress) {
            return;
        }
        animationInProgress = true;
        animationCounter = 0;
        audio.play();
        firstDice = getRandomDice();
        secondDice = getRandomDice();
        anim();
    }

    function touchEventHandler(event) {
        event.preventDefault();
        startRoll();
    }

    let clickArea = document.getElementsByClassName('click_area')[0];
    clickArea.addEventListener('click', startRoll);

    document.addEventListener("touchstart", touchEventHandler, false);
    document.addEventListener("touchmove ", touchEventHandler, false);

    setDice(getRandomDice(), getRandomDice());
};
