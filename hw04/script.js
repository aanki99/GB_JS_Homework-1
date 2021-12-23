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


