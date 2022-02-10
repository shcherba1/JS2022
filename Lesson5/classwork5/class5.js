// Всі функції повинні бути описані стрілочним типом!!!!
// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// let foo = (a,b,c) => {
//     if (a < b && a < c) {
//         console.log(a)
//     } else if (b < a && b < c) {
//         console.log(b)
//     } else if (c < a && c < b) {
//         console.log(c)
//     } else console.log('something else')
// }
//
// foo(4,8,10);
// foo(15,10,45);
// foo(12,12,45);


// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
//
// let foo = (a,b,c) => {
//     if (a > b && a > c) {
//         console.log(a)
//     } else if (b > a && b > c) {
//         console.log(b)
//     } else if (c > a && c > b) {
//         console.log(c)
//     } else console.log('something else')
// }
//
// foo(4,8,10);
// foo(15,10,45);
// foo(12,12,45)


// - створити функцію яка повертає найбільше число з масиву

// let mas = [1, 2, 3, 4, 5];
//
// let foo = (arr) => {
//     min = arr[0];
//     max = min;
//     for (i = 0; i < arr.length; ++i) {
//         if (arr[i] > max) max = arr[i];
//         if (arr[i] < min) min = arr[i];
//     }
//     console.log(max);
// }
// foo(mas);


// - створити функцію яка повертає найменьше число з масиву

// let mas = [1, 2, 3, 4, 5, -5];
//
// let foo = (arr) => {
//     max = arr[0];
//     min = max;
//     for (i = 0; i < arr.length; ++i) {
//         if (arr[i] < min) min = arr[i];
//         if (arr[i] > min) max = arr[i];
//     }
//     console.log(min);
// }
// foo(mas);


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// let mas = [1, 2, 10];
// //
// let foo = (arr) => {
//     let rez = 0;
//     for (i = 0; i < arr.length; i++) {
//         rez += arr[i];
//     }
//     console.log(rez);
// }
// foo(mas);


// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// let mas = [1, 2, 3, 4];
// //
// let foo = (arr) => {
//     let rez = 0;
//     for (i = 0; i < arr.length; i++) {
//         rez += arr[i];
//     }
//     console.log(rez/arr.length);
// }
// foo(mas);


// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

// let foo = (arguments) => {
//     let min = arguments[0];
//     let max = arguments[0];
//     for (const element of arguments) {
//         if (element > max) {
//             max = element;
//         }
//         if (element < min) {
//             min = element;
//         }
//     }
//     console.log("max ", max);
//     return min;
// }
//
// console.log(foo([1,2,3]));


// - створити функцію яка заповнює масив рандомними числами

// let foo = (length) => {
//     let array = [];
//     for (let i = 0; i < length; i++){
//         array.push(Math.floor(Math.random()*100));
//     }
// console.log(array);
// }
// foo(5);


// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit.
// limit - аргумент, який характеризує кінцеве значення діапазону.
//
// let foo = (length, limit) => {
//     let array = [];
//     for (let i = 0; i < length; i++){
//         array.push(Math.floor(Math.random()*limit));
//     }
// console.log(array);
// }
// foo(5,10);


// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

// let mas = [1, 2, 3];
// //
// let foo = (arr) => {
//     let mas1 = [];
// for (let i = arr.length-1; i >=0; i--) {
//     mas1.push(arr[i]);
// }
// return mas1;
// }
// console.log(foo(mas));

