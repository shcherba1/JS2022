// 1. Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

// let time = prompt();
// if (time <= 15) {
//     console.log('1 чверть години');
// } else if (time > 15 && time <= 30) {
//     console.log('2 чверть години');
// } else if (time > 30 && time <= 45) {
//     console.log('3 чверть години');
// } else if (time > 45 && time <=59) {
//     console.log('4 чверть години');
// }

// 2. У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

// let day = prompt('введіть день місяця');
// if (day > 0 && day <=10) {
//     console.log('1 декада');
// } else if (day > 10 && day <=20) {
//     console.log('2 декада');
// } else if (day > 20 && day <=31) {
//     console.log('3 декада');
// } else if (day > 31 || day <= 0) {
//     console.log('невірно вказана дата');
// }
//

// 3. У нас є змінна test, якщо дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
//     Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)

// let test = confirm('???') ? 'Вірно' : 'Неправильно';
// console.log(test);


// let test = true;
// if (test) {
//     console.log('Вірно') ;
// } else {console.log('невірно')}
//
// test ? console.log('Вірно') : console.log('Неправильно');


// 4. Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
//

// let a = prompt();
// if (a != 0) {
//     test = 'вірно';
// } else {test = 'Невірно'}
// console.log(test);


// 5. Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день.
//

// let day = +prompt('enter day');
// switch (day) {
//     case 1:
//         console.log('sleep');
//         break;
//     case 2:
//         console.log('work')
//         break;
//     case 3:
//         console.log('walk')
//         break;
//     case 4:
//         console.log('sport')
//         break;
//     case 5:
//         console.log('meeting')
//         break;
//     case 6:
//         console.log('rest')
//         break;
//     case 7:
//         console.log('nothing')
//         break;
//     default:
//         console.log('wrong infa')
// }


// 6. Потрібно визначити Високосний рік чи ні. Високосні роки діляться націло на 4.
//

// let r = +prompt();
// if (r % 4 === 0) {
//     console.log('високосний рік');
// } else {
//     console.log('невисокосний рік');
// }


// 7. Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!

// let j = prompt('Яка офіційна назва JavaScript?');
// if (j === 'ECMAScript') {
//     console.log('Правильно!');
// } else {
//     console.log('Не знаєте? ECMAScript!')
// }
