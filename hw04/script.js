//1. Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, мы должны получить на выходе объект, в котором в соответствующих свойствах описаны единицы, десятки и сотни. Например, для числа 245 мы должны получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.

let number = {
    hundreds: 0,
    tens: 0,
    units: 0,
    transformNumber: function (enteredNumber) {
        if (enteredNumber >= 0 && enteredNumber < 1000) {
            this.units = Math.floor(enteredNumber % 10);
            this.tens = Math.floor(enteredNumber / 10 % 10);
            this.hundreds = Math.floor(enteredNumber / 100 % 10);
            console.log('Заданое число: ' + enteredNumber + ' сотни: ' + number.hundreds + ' десятки: ' + number.tens + ' еденицы : ' + number.units );
        }else {
            alert('Введено не верное значение!');
            console.log(number);
        }
    }
};

let userEnteredNumber = parseInt(prompt('Введите любое число от 0 до 999: '), 10);      
number.transformNumber(userEnteredNumber);

//2. Продолжить работу с интернет-магазином: В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы? Реализуйте такие объекты. Перенести функционал подсчета корзины на объектно-ориентированную базу.

//в процессе