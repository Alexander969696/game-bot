'use strict';

const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
}

const getRandom = function(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

const gameBot = function(value) {
    let count = 10;
    let num = prompt('Угадай число от 1 до 100');

    function second () {
        if (count > 0) {
            if (+num === value) {
                return confirm('Поздравляю, Вы угадали! Хотели бы сыграть еще?') ? 
                gameBot(getRandom(1, 101)) : alert('Игра окончена');
            } else if (num === null) {
                return alert('Игра окончена');
            } else if (num === '') {
                num = prompt('Введи число');
                second();
            } else if (+num > value) {
                num = prompt('Загаданное число меньше. Введите число заново. Осталось попыток: ' + count);
                count--;
                second();
            } else if (+num < value) {
                num = prompt('Загаданное число больше. Введите число заново. Осталось попыток: ' + count);
                count--;
                second();
            } else if (!isNumber(+num)) {
                num = prompt('Введи число');
                second();
            } 
        } else {
            return confirm('Попытки закончились! Хотели бы сыграть еще?') ? 
            gameBot(getRandom(1, 101)) : alert('Игра окончена');
        }
    }
    return second();
}

gameBot(getRandom(1, 101));