// Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
//
// let a = 'hello world'.length;
// let b = 'lorem ipsum'.length;
// let c = 'javascript is cool'.length;
// console.log(a, b, c);


// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let a = 'hello world';
// let b = 'lorem ipsum';
// let c = 'javascript is cool';
//
// let ww = a.toUpperCase();
// let qq = b.toUpperCase();
// let zz = c.toUpperCase();
//
// console.log(ww, qq, zz);

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// let a = 'HELLO WORLD';
// let b = 'LOREM IPSUM';
// let c = 'JAVASCRIPT IS COOL';
//
// let ww = a.toLowerCase();
// let qq = b.toLowerCase();
// let zz = c.toLowerCase();
//
// console.log(ww, qq, zz);


// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// let str = ' dirty string   ';
// let a = str.replaceAll(' ', '');
// console.log(a);


// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.

// let str = 'Каждый охотник желает знать';
// let stringToarray = (str) => {
//         return str.split(' ');
//     }
//     console.log(stringToarray(str));
//     document.write(stringToarray(str));


// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.

// let str = 'Каждый охотник желает знать';
// let delete_characters = (str, length) => {
// return str.substr(0, length);
// }
// document.write(delete_characters(str, 7));


// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами.
// При цьому всі символи рядка необхідно перевести у верхній регістр.

// let str = "HTML JavaScript PHP";
// let insert_dash = (str) => {
//    return str.split(' ').join('-').toUpperCase();
// }
// document.write(insert_dash(str));


// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.

// let str = 'lorem ipsum';
// let qq = (str) => {
//     return str[0].toUpperCase() + str.slice(1);
// }
// document.write(qq(str));


// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
//
// let str = 'lorem ipsum';
// let capitalize = (str) => {
//     return str.split(' ').map(word=>word.charAt(0).toUpperCase()+word.slice(1)).join(' ');
// //
// }
// document.write(capitalize(str));
