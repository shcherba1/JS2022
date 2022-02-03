// Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write

// let x1 = 'hello';
// let x2 = 'owu';
// let x3 = 'com';
// let x4 = 'ua';
// let x5 = 1;
// let x6 = 10;
// let x7 = -999;
// let x8 = 123;
// let PI = 3.14;
// let x9 = 2.7;
// let x10 = 16;
// let x11 = true;
// let x12 = false;
//
// console.log(x1);
// console.log(x2);
// console.log(x3);
// console.log(x4);
// console.log(x5);
// console.log(x6);
// console.log(x7);
// console.log(x8);
// console.log(x9);
// console.log(x10);
// console.log(x11);
// console.log(x12);
//
// document.write(x1 + ' ' + x2 + ' ' + x3 + ' ' + x4)
// document.write(x5 + ' ' + x6 + ' ' + x7 + ' ' + x8)
// document.write('<div>' + PI + '</div>')
// document.write('<div>' + x10 + '</div>')
// document.write('<div>' + x11 + '</div>')
// document.write('<div>' + x12 + '</div>')

// alert(x1);
// alert(x2);
// alert(x3);
// alert(x4);
// alert(x5);
// alert(x6);
// alert(x7);
// alert(x8);
// alert(PI);
// alert(x10);
// alert(x11);
// alert(x12);

// Переприсвоїти кожній змінній з завдання значення на довільне.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write

// x1 = 'world';
// x2 = 20;
// console.log(x1);
// console.log(x2);
// document.write('<div>' + x1 + '</div>');
// document.write('<div>' + x2 + '</div>');
// alert(x1);
// alert(x2);

// Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person. (Не об'єкт)

// let firstName = 'Olga';
// let middleName = 'Volodymyrivna';
// let lastName = 'Shcherba';
// let person = firstName + ' ' + middleName + " " + lastName;
// console.log(person);

// За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
//     Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".

// let nameUser = prompt('Name');
// let surNameUser = prompt('Surname');
// let ageUser = prompt('Age');
// let result = 'Вітаю' + ' ' + nameUser + ' ' + surNameUser + '.' + 'Тобі' + ageUser;
// let res = `Вітаю ${nameUser} ${surNameUser}.Тобі ${ageUser} років`;
// console.log(result);
// console.log(res);

// За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;

let a = 100;
let b = '100';
let c = true;

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);

// Визначити відповідний оператор в виразах що б вийшов відповідний результат.
//     В однакових виразах не використовувати однакові оператори!!!
//
//     5 ? 6 -> true
// 5 ? 6 -> false
// 5 ? 6 -> false
// 5 ? 6 -> false
// 10 ? 10 -> true
// 10 ? 10 -> true
// 10 ? 10 -> false
// 10 ? 10 -> false
// 10 ? 10 -> false
// 123 ? '123' -> false
// 123 ? '123' -> true

// let t1 = 5 < 6
// console.log(t1)
//
// let t2 = 5 > 6
// console.log(t2)
//
// let t3 = 5 >= 6
// console.log(t3)
//
// let t4 = 5 === 6
// console.log(t4)
//
// let t5 = 10 === 10
// console.log(t5)
//
// let t6 = 10 == 10
// console.log(t6)
//
// let t7 = 10 > 10
// console.log(t7)
//
// let t8 = 10 < 10
// console.log(t8)
//
// let t9 = 10 !== 10
// console.log(t9)
//
// let t10 = 123 === '123'
// console.log(t10)
//
// let t11 = 123 !== '123'
// console.log(t11)

// Подумайте Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
//     let str = "20";
// let a = 5;
// document.write(str + a + "<br/>"); // '205'
// document.write(str - a + "<br/>"); //15
// document.write(str * "2" + "<br/>"); //40
// document.write(str / 2 + "<br/>"); //10