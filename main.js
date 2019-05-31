

window.onload = function() {

    let animationInProgress = false;
    let animationCounter = 0;
    let audio = new Audio('dice.mp3');


    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function getRandomDice() {
        return getRandomInt(0, 3);
    }

    function roll() {
        let dice = document.getElementsByClassName('dice');
        dice[0].innerHTML = getRandomDice();
        dice[1].innerHTML = getRandomDice();
    }

    function anim() {
        if (animationCounter < 10) {
            let min = 10 + animationCounter * 8;
            let max = min + 8 + animationCounter * 2;
            let timeOut = getRandomInt(min, max);
            // console.log(min, max, timeOut);
            setTimeout(anim, timeOut);
            roll();
            animationCounter = animationCounter + 1;
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
        anim();
    }

    let clickArea = document.getElementsByClassName('click_area')[0];
    clickArea.addEventListener('click', startRoll);

    //document.addEventListener("touchstart", roll, false);
};
