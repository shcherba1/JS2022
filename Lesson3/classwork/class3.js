// 1. зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
//     - перебрати його циклом while

let menu = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

// let i = 0;
// while (i < 10) {
//     console.log(menu[i]);
//     i++;
// }

//     - перебрати його циклом for
// //
// for (let i = 0; i < 10; i++) {
//     console.log(menu[i]);
// }

//     - перебрати циклом while та вивести  числа тільки з непарним індексом

// let i = 0;
// while (i < 10) {
//     if (i%2 !== 0)
//         console.log(menu[i]);
//         i++;
// }

// - перебрати циклом for та вивести  числа тільки з непарним індексом
//
// for (let i = 0; i < 10; i++) {
//     if (i%2 !== 0)
//     console.log(menu[i]);
// }

// 5. перебрати циклом while та вивести  числа тільки парні  значення

// let i = 0;
// while (i < 10) {
//     if (i % 2 === 0)
//         console.log(menu[i]);
//         i++;
// }

// 6. перебрати циклом for та вивести  числа тільки парні  значення
//
// for (let i = 0; i < 10; i++) {
//     if (i%2 === 0)
//     console.log(menu[i]);
// }

// 7. замінити кожне число кратне 3 на слово "okten"
//
// for (let i = 0; i < 10; i++) {
//     if (menu[i] % 3 === 0) {
//         menu[i] = 'okten';
//         console.log(menu[i]);
//     }
// }

// 8. вивести масив в зворотньому порядку.
//
// for (let i = menu.length - 1; i >= 0; i--) {
//     console.log(menu[i]);
// }

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

// let i = menu.length - 1;
// while (i >= 0) {
//     console.log(menu[i]);
//     i--;
// }

//
// let i = menu.length - 1;
// while (i >= 0) {
//     if (i%2 !== 0)
//         console.log(menu[i]);
//         i--;
// }
//
// for (let i = menu.length - 1; i >= 0; i--) {
//     if (i%2 !== 0)
//     console.log(menu[i]);
// }
//
// let i = menu.length - 1;
// while (i >= 0) {
//     if (i % 2 === 0)
//         console.log(menu[i]);
//         i--;
// }
// //
// for (let i = menu.length - 1; i >= 0; i--) {
//     if (i%2 === 0)
//     console.log(menu[i]);
// }