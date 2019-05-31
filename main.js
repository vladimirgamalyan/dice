
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomDice() {
    return getRandomInt(0, 3);
}

window.onload = function() {
    document.getElementsByClassName('container')[0]
        .addEventListener('click', function (event) {
            console.log('click');
            let dice = document.getElementsByClassName('dice');
            dice[0].innerHTML = getRandomDice();
            dice[1].innerHTML = getRandomDice();
        });
};
