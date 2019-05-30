
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

window.onload = function() {
    console.log('onload epta');
    document.getElementsByClassName('col')[0]
        .addEventListener('click', function (event) {
            console.log('clicknuli');
            let dice = document.getElementsByClassName('first_dice');
            dice[0].innerHTML = getRandomInt(0, 3);
            dice[1].innerHTML = getRandomInt(0, 3);
        });
};
