// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// function foo(a,b) {
//    return a*b;
// }
// console.log(foo(2,3))

// - створити функцію яка обчислює та повертає площу кола з радіусом r

// function foo(r) {
//   const p = 3.14;
//     return p*Math.pow(r,2);
// }
// console.log(foo(5))

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// function foo(r, h) {
//   const p = 3.14;
//     return 2*p*r*h;
// }
// console.log(foo(5, 6))

// - створити функцію яка приймає масив та виводить кожен його елемент

// mas = [1, 2, 3, 4]
// function masuv(arr) {
//     for (const items of arr) {
//         console.log(items);
//     }
// }
// masuv(mas);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// function foo(t) {
//   document.write(`<p>${t}</p>`)
// }
// foo(`okten`);

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function foo(t) {
//   document.write(`<ul>`);
//     document.write(`<li>${t}</li>`);
//     document.write(`<li>${t}</li>`);
//     document.write(`<li>${t}</li>`);
//     document.write(`</ul>`)
// }
// foo(`okten`);


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function foo(text, num) {
//     document.write(`<ul>`);
//     for (let i = 1; i <= num; i++) {
//         document.write(`<li>${text}</li>`);
//     }
//     document.write(`</ul>`);
// }
// foo(`test`, 5);


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let mas = [1, 2, 'a', true];
//
// function masuv(arr) {
//     document.write(`<ul>`);
//     for (const item of arr) {
//         document.write(`<li>${item}</li>`);
//     }
//     document.write(`</ul>`);
// }
// masuv(mas);


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// let mas = [
//     {id: 1, name: 'Ivan', age: 15},
//     {id: 2, name: 'Oleg', age: 17},
// ];
//
// function masuv(arr) {
//     for (const item of arr) {
//         document.write(`<div>${item.id} ${item.name} ${item.age}</div>`);
//     }
// }
//
// masuv(mas);



