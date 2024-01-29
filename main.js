/*alert('Hello, JavaScript!')
alert('Hello'); alert('World!')*/ 

/*"use strict";*/

/*let a;
const b =12;
var c = 45;
a = 12345;
console.log(a, b);*/
/* function asa(){
    var n = 2
}
n = 15
 console.log(n)*/


/*let a = 15<19;
let n;
console.log(1/n);*/
// console.log(`jhgfdsb ${a}`);



// let user = {    
//     'name': 'Vasya',
//     'age': 15,
//     'email': 'VasyaSuper@mail.ru'
// };
// console.log(typeof 12)
// confirm('Are you Vasya?')
// let a = 15
// console.log(typeof a)
// str = String(a)
// console.log('152' * 2)

// let name = prompt("Ваше имя?", "");
// alert(name);

// Постфиксная и префиксная формы
// let a = 1, b = 1;
// let c = ++a; // c = 2 a = 2;
// let d = b++; // d = 1 b = 2;
// console.log(a, b, c, d);

// Результат присваивания

// let a = 2;
// let x = 1 + (a *=2) // x = 5 a = 4;
// console.log(x, a);

// Преобразование типов

// console.log('' + 1 + 0); // 10
// console.log('' - 1 + 0); // -1
// console.log(true + false); // 1
// console.log(6  / '3'); // 2
// console.log('2'*'3'); // 3
// console.log(4 + 5 + 'px'); // 9px
// console.log('$' + 4 + 5); // $45
// console.log('4' - 2); // 2
// console.log('4px' - 2); // NaN
// console.log(' -9 ' + 5); // -9 5
// console.log(' -9 ' - 5); // -14
// console.log(null + 1); // 1
// console.log(undefined + 1); // NaN
// console.log('\t \n' - 2); // -2

// Исправьте сложение

// let a = prompt('Первое число?', 1);
// let b = prompt('Второе число?', 2);
// let sum = Number(a) + Number(b);
// alert(sum);

// Работа с переменными

// let num = 3;
// alert(num)


// let a = 10, b = 2;
// alert(`a+b=${a + b}`);
// alert(`a-b=${a - b}`);
// alert(`b-a=${b - a}`);
// alert(`a*b=${a * b}`);
// alert(`a/b=${a / b}`);
// alert(`b/a=${b / a}`);

// let c = 15, d = 2;
// let result = c + d;
// alert(result);

// let a = 10, b = 2, c = 5;
// alert(a+b+c)


// let a = 17, b = 10;
// let c = a - b;
// let d = 7;
// let result = c + d;
// alert(result);

// Работа со строками


// let str='Привет, Мир!';
// alert(str);

// let str1 = 'Привет, ', str2 = 'Мир!';
// alert(str1+str2);


// let name = 'Андрей';
// alert(`Привет ${name}!`);

// let age = 17;
// alert(`Мне ${age} лет!`)

// Функция prompt


// let name = prompt("Ваше имя?", "");
// alert(name);


// let num = prompt("Введите число", "");
// alert(`Квадрат числа ${num} равен: ${num * num}`);

// Обращение к символам строки


// let str = 'abcde';
// alert(str[0]);
// alert(str[2]);
// alert(str[4]);

// let num = String(12345);
// alert(num[0] * num[1] * num[2] * num[3] * num[4]);

// Практика


// let secondsInHour = 60 * 60;
// console.log("Количество секунд в часе: " + secondsInHour);


// let secondsInDay = secondsInHour * 24;
// console.log("Количество секунд в сутках: " + secondsInDay);

// let daysInMonth = 30;
// let secondsInMonth = secondsInDay * daysInMonth;
// console.log("Количество секунд в месяце: " + secondsInMonth);


// let date = new Date();
// let hour = date.getHours();
// let minute = date.getMinutes();
// let second = date.getSeconds();

// if (hour < 10) {
//     hour = "0" + hour;
// }
// if (minute < 10) {
//     minute = "0" + minute;
// }
// if (second < 10) {
//     second = "0" + second;
// }

// console.log(`${hour}:${minute}:${second}`);


// let number = 9;
// console.log(`Квадрат числа ${number} равен ${number * number}`);

// Работа с присваиванием и декрементами


// var num = 47;
// num += 7;
// num -= 18;
// num *= 10;
// num /= 15;
// alert(num)


// var num = 10;
// num ++;
// num ++;
// num --;
// alert(num)