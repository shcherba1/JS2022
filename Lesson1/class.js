// 1. Створити масив з 10 чисел (можна використовувати Math.random Та Math.floor). Скласти результат цих чисел в змінній result.

let mas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(mas);
let res = mas[0] + mas[1] + mas[2] + mas[3] + mas[4] + mas[5] + mas[6] + mas[7] + mas[8] + mas[9];
console.log(res);

// 2. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр

let book1 = {
    title: 'City',
    page: 100,
    genre: 'comedy'
}
console.log(book1);

// 3. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр, автори

let book2 = {
    title: 'Town',
    page: 120,
    genre: 'drama',
    author: 'Someone'
}
console.log(book2);

// 4. Створити маис об'єктів book з наступними полями  - назва, кількість сторінок, жанр, автори. Вивести кожну книгу як окремий об'єкт

let book = [{book1}, {book2}];
console.log(book);
console.log(book[0]);
console.log(book[1]);

// 5. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
// Значення площі зберігати в змінній s.

// let height = 23;
// let width = 10;
// let s = height*width;
// console.log(s);

// 6. Напиши код, який знаходить об'єм циліндра заввишки 10м (змінна heightC) та діаметром основи 4м (dC),
// результат помістіть у змінну v.

let height = 10;
let dC = 4;
const pi = 3.14;
let v = pi*height*(Math.pow((dC/2),2));
console.log(v);

// 7. У прямокутного трикутника дві сторони n (зі значенням 3) та m (зі значенням 4).
// Знайдіть гіпотенузу k за теоремою Піфагора (потрібно використовувати функцію Math.pow (число, ступінь) або оператор зведення в ступінь **).

let n = 3;
let m = 4;
let k = Math.sqrt(Math.pow(n,2)+Math.pow(m,2));
console.log(k);
