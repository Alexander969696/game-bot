'use strict';

const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
}

const gameBot = function(value) {
    let num = prompt('Угадай число от 1 до 100');
    function second () {
        if (+num === value) {
            return alert('Поздравляю, Вы угадали!');
        } else if (num === null) {
            return alert('Игра окончена');
        } else if (num === '') {
            num = prompt('Введи число');
            second();
        } else if (+num > value) {
            num = prompt('Загаданное число меньше. Введите число заново');
            second();
        } else if (+num < value) {
            num = prompt('Загаданное число больше. Введите число заново');
            second();
        } else if (!isNumber(+num)) {
            num = prompt('Введи число');
            second();
        } 
    }
    return second();
}

gameBot(10);