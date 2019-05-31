

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

    function updateDice() {
        setDice(firstDice, secondDice);
    }

    function roll() {
        setDice(getRandomDice(), getRandomDice());
    }

    function anim() {
        if (animationCounter < 8) {
            setTimeout(anim, 1 + animationCounter * 12);
            animationCounter = animationCounter + 1;
            firstDice = firstDice + 1;
            if (firstDice > 3) {
                firstDice = 0;
            }
            secondDice = secondDice + 1;
            if (secondDice > 3) {
                secondDice = 0;
            }
            updateDice();
        } else {
            animationInProgress = false;
            roll();
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
};
