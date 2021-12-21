// Дан код:
var a = 1,
    b = 1,
    c, d;
c = ++a;
alert(c); // 2
//Префиксная форма возвращает новое значение

d = b++;
alert(d); // 1
//постфиксная форма возвращает старое (до увеличения/уменьшения числа)

c = (2 + ++a);
alert(c); // 5
//мы уже выше увеличили переменную "а" 1, и она на момент вычесления ровна 2, 2+ не сработает, и в итоге 2 + 3 равно 5

d = (2 + b++);
alert(d); // 4
//постфиксная форма вернет нам старое значение "b" 2, которое уже увеличено на 2, 2 + 2 будет равно 4
alert(a); // 3
// значение увеличено два раза
alert(b); // 3
// значение увеличено два раза


// Чему будет равен x в примере ниже?

var a = 2;
var x = 1 + (a *= 2); //a = a * 2
x = 5


/*
Объявить две целочисленные переменные a и b и задать им произвольные начальные значения. Затем написать скрипт, который работает по следующему принципу:
если a и b положительные, вывести их разность;
если а и b отрицательные, вывести их произведение;
если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом.
*/

var a = -5;
var b = -10;

if (a >= 0) {
    if (b >= 0)
        alert(a - b);
    else(alert(a + b));
} else(alert(a * b));

//Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15.

var a = prompt('Присвоить переменной а значение в промежутке [0..15]', 7);
a = Number(a);
switch (a) {
    case 0:
        console.log('0123456789101112131415');
        break;
    case 1:
        console.log('123456789101112131415');
        break;
    case 2:
        console.log('23456789101112131415');
        break;
    case 3:
        console.log('3456789101112131415');
        break;
    case 4:
        console.log('456789101112131415');
        break;
    case 5:
        console.log('56789101112131415');
        break;
    case 6:
        console.log('6789101112131415');
        break;
    case 7:
        console.log('789101112131415');
        break;
    case 8:
        console.log('89101112131415');
        break;
    case 9:
        console.log('9101112131415');
        break;
    case 10:
        console.log('101112131415');
        break;
    case 11:
        console.log('1112131415');
        break;
    case 12:
        console.log('12131415');
        break;
    case 13:
        console.log('131415');
        break;
    case 14:
        console.log('1415');
        break;
    case 15:
        console.log('15');
        break;
    default:
        console.log('неправильно число');
        break;

}

//### 5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return.
function addition(x, y) {
    return (x + y);
}

function subtraction(x, y) {
    return (x - y);
}

function multiplication(x, y) {
    return (x * y);
}

function division(x, y) {
    return (x / y);
}


//### 6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от переданного значения операции выполнить одну из арифметических операций (использовать функции из пункта 3) и вернуть полученное значение (использовать switch).

function mathOperation(arg1, arg2, operation) {

    switch (operation) {
        case 'addition':
            return arg1 + arg2;
            break;
        case 'subtraction':
            return arg1 - arg2;
            break;
        case 'multiplication':
            return arg1 * arg2;
            break;
        case 'division':
            return arg1 / arg2;
            break;
    }
}
var res = mathOperation(7,9,'multiplication');
console.log(res);



//### 7. *Сравнить null и 0. Попробуйте объяснить результат.

alert( null > 0 );  //false
alert( null == 0 ); //false
alert( null >= 0 ); //true

/*Причина в том, что нестрогое равенство и сравнения > < >= <= работают по-разному. Сравнения преобразуют null в число, рассматривая его как 0. Поэтому выражение (3) null >= 0 истинно, а null > 0 ложно.

С другой стороны, для нестрогого равенства == значений undefined и null действует особое правило: эти значения ни к чему не приводятся, они равны друг другу и не равны ничему другому. Поэтому (2) null == 0 ложно.*/



//### 8. *С помощью рекурсии организовать функцию возведения числа в степень. Формат: function power(val, pow), где val – заданное число, pow – степень.

function power(val, pow) {
    if (pow == 1) {
      return val;;
    } else {
      return val * power(val, pow - 1);
    }
  }