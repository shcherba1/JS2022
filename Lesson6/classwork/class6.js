// 1. Дано список імен.
// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

//      let n1 = 'Harry..Potter'
//      let n2 = 'Ron---Whisley'
//      let n3 = 'Hermione__Granger'
//
// let foo = (n) => {
//    return n.replaceAll('.', ' ').replaceAll('-',' ').replaceAll('_',' ');
//  }
//  console.log(foo(n1));
//  console.log(foo(n2));
//  console.log(foo(n3));


// 2. створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

// let random = (length) => {
//     let array = [];
//     for (let i = 0; i < length; i++) {
//         array.push(Math.floor(Math.random() * 100));
//     }
//     return array;
// };
// let result = random(10);
// console.log(result);


// 3. створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort

// let random = (length) => {
//     let array = [];
//     for (let i = 0; i < length; i++) {
//         array.push(Math.floor(Math.random() * 100));
//     }
//     return array.sort((a,b) => a - b);
// };
// console.log(random(10));


// 4. створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// відфільтрувати  його за допомоги filter, залишивши тільки парні числа

// let random = (length) => {
//     let array = [];
//     for (let i = 0; i < length; i++) {
//         array.push(Math.floor(Math.random() * 100));
//     }
//         return array.filter(value => value % 2 === 0);
//
// };
// console.log(random(10));


// 5. створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції).
// за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

// let random = (length) => {
//     let array = [];
//     for (let i = 0; i < length; i++) {
//         array.push(Math.floor(Math.random() * 100));
//     }
//         return array.map(value => value.toString());
// };
// console.log(random(10));


// 6. створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]

// let random = (arr, direction) => {
//  if (direction === 'ascending') {
//      return arr.sort((a,b) => a - b);
//     } else if (direction === 'descending')
//     return arr.sort((a,b) => b - a);
// };
// console.log(random(nums, 'descending'));


// 7. є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
//
// let random = (arr) => {
//     return arr.sort((a,b) => b.monthDuration - a.monthDuration);
// };
// console.log(random(coursesAndDurationArray));


// -- відфільтрувати, залишивши тільки курси з тривалістю більше 5 місяців
//
// let random = (arr) => {
//         return arr.filter(value => value.monthDuration > 5);
// };
// console.log(random(coursesAndDurationArray));