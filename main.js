

window.onload = function() {

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

    let clickArea = document.getElementsByClassName('click_area')[0];
    clickArea.addEventListener('click', roll);

    document.addEventListener("touchstart", roll, false);
};
 