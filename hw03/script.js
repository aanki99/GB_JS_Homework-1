console.log('С помощью цикла while вывести все простые числа в промежутке от 0 до 100');


var n = 100;
var i = 1;
while (true) {
    if (i % 2 !== 0) {
        console.log(i);
    }

    if (i > n - 1) {
        break;
    }
    i++
}




console.log('С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины. Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров. Товары в корзине хранятся в массиве. Задачи:a) Организовать такой массив для хранения товаров в корзине;b) Организовать функцию countCartPrice, которая будет считать стоимость корзины.');

var basket = [{
        product: "samsungs20",
        price: 100
    },
    {
        product: "iphone11pro",
        price: 150
    },
    {
        product: "samsungs21ultra",
        price: 200
    },
    {
        product: "iphone12pro",
        price: 175
    },
    {
        product: "iphone13max",
        price: 235
    }
];

function countCartPrice(basket) {
    let sum = 0;
    for (let value of basket) {
        sum += value.price;
    }
return sum;
    }

console.log('!Ответ! Стоимость корзины: ' + countCartPrice(basket));



console.log('Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. Выглядеть это должно так: for(…){// здесь пусто');

for (let i = 0; i < 10; console.log(i++)) {}

console.log('*Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5');

let row = 'x';
for (let i = 0; i < 20; i++) {
    console.log(row);
    row += 'x';
}