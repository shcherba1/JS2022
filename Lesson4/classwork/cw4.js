// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// function foo(a,b,c) {
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
// function foo(a,b,c) {
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
// function foo(arr) {
//     min = arr[0];
//     max = min;
//     for (i = 0; i < arr.length; ++i) {
//         if (arr[i] > max) max = arr[i];
//         if (arr[i] < min) min = arr[i];
//     }
//     return max;
// }
// console.log(foo(mas));
//

// - створити функцію яка повертає найменьше число з масиву

// let mas = [1, 2, 3, 4, 5, -5];
//
// function foo(arr) {
//     max = arr[0];
//     min = max;
//     for (i = 0; i < arr.length; ++i) {
//         if (arr[i] < min) min = arr[i];
//         if (arr[i] > min) max = arr[i];
//     }
//     return min;
// }
// console.log(foo(mas));


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// let mas = [1, 2, 3, 10];
//
// function foo(arr) {
//     let rez = 0;
//     for (i = 0; i < arr.length; i++) {
//         rez += arr[i];
//     }
//     return rez
// }
// console.log(foo(mas));


// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// let mas = [1, 2, 3, 4];
//
// function foo(arr) {
//     let rez = 0;
//     for (i = 0; i < arr.length; i++) {
//         rez += arr[i];
//     }
//     return rez/arr.length
// }
// console.log(foo(mas));


//  - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);



// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

//
// function foo(len) {
//     let QQ = [];
//     len = QQ.length;
//     QQ = Math.round(Math.random()*100);
// return QQ;
// }
// console.log(foo(4));


// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.



// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

// let mas = [1, 2, 3];
//
// function foo(arr) {
//     for (const item of arr) {
//        return arr.reverse()
//     }
// }
// console.log(foo(mas));
