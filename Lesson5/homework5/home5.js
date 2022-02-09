// - створити функцію яка обчислює та повертає площу прямокутника висотою

// let foo = (a, b) => a*b;
// console.log(foo(2,3));


// - створити функцію яка обчислює та повертає площу кола
//
// let foo = (r) => p*Math.pow(r,2);
// const p = 3.14;
// console.log(foo(5));


// - створити функцію яка обчислює та повертає площу циліндру
//
// let foo = (r, h) => 2*p*r*h;
//   const p = 3.14;
// console.log(foo(5, 6));


// - створити функцію яка приймає масив та виводить кожен його елемент
//
// mas = [1, 2, 3, 4];
// let foo = (arr) => console.log(arr);
// foo(mas);


// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент

// let foo = (t) => document.write(`<p>${t}</p>`);
// foo(`okten`);


// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
//
// let foo = (t) => {
//     document.write(`<ul>`);
//     document.write(`<li>${t}</li>`);
//     document.write(`<li>${t}</li>`);
//     document.write(`<li>${t}</li>`);
//     document.write(`</ul>`);
// }
// foo(`okten`);


// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
//
// let foo = (text, num) => {document.write(`<ul>`);
//     for (let i = 1; i <= num; i++) {
//         document.write(`<li>${text}</li>`);
//     }
//     document.write(`</ul>`);
// }
// foo(`test`, 5);


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let mas = [1, 2, 'a', true];
// let foo = (arr) => {document.write(`<ul>`);
//     for (const item of arr) {
//         document.write(`<li>${item}</li>`);
//     }
//     document.write(`</ul>`);
// }
// foo(mas);


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// let mas = [
//     {id: 1, name: 'Ivan', age: 15},
//     {id: 2, name: 'Oleg', age: 17},
// ];
// let foo = (arr) => {
//     for (const item of arr) {
//         document.write(`<div>${item.id} ${item.name} ${item.age}</div>`);
//     }
// }
// foo(mas);