// 1. Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна..
// додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//

// function Car(model, make, year, speed, engine) {
//     this.model = model;
//     this.make = make;
//     this.year = year;
//     this.speed = speed;
//     this.engine = engine;
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${this.speed} на годину`);
//     }
//     this.info = function () {
//         for (const item in this) {
//             if (typeof this[item] !== 'function')
//                 console.log(`${item} - ${this[item]}`);
//         }
//     }
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.speed = this.speed + newSpeed;
//     }
//     this.changeYear = function (newValue) {
//         this.year = newValue;
//     }
//     this.addDriver = function (driver) {
//         this.driver = driver;
//     }
// }
//
// let car1 = new Car('Opel', 'Vectra', 2012, 100, 2.0);
// console.log(car1);
// car1.drive();
// car1.info();
// car1.increaseMaxSpeed(50);
// car1.changeYear(2015);
// car1.addDriver('olya');
// console.log(car1);


// 2. (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна.
// додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// class Car {
//     constructor(model, make, year, speed, engine) {
//         this.model = model;
//         this.make = make;
//         this.year = year;
//         this.speed = speed;
//         this.engine = engine;
//     }
//
//         drive () {
//             console.log(`їдемо зі швидкістю ${this.speed} на годину`);
//         }
//         info () {
//             for (const item in this) {
//                 if (typeof this[item] !== 'function')
//                     console.log(`${item} - ${this[item]}`);
//             }
//         }
//         increaseMaxSpeed (newSpeed) {
//             this.speed = this.speed + newSpeed;
//         }
//         changeYear (newValue) {
//             this.year = newValue;
//         }
//         addDriver (driver) {
//             this.driver = driver;
//         }
//
// }
// let car1 = new Car('Opel', 'Vectra', 2012, 100, 2.0);
// console.log(car1);
// car1.drive();
// car1.info();
// car1.increaseMaxSpeed(50);
// car1.changeYear(2015);
// car1.addDriver('olya');
// console.log(car1);

// 3. Cтворити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
//
// function Popel (name, age, size) {
//     this.name = name;
//     this.age = age;
//     this.size = size;
// }
//
// let popel1 = [
//     new Popel('olya', 25, 38),
//     new Popel('ira', 42,40),
//     new Popel('katya',32,39)
// ]
//
// // Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//
// class Prince {
//     constructor(name, age, shose) {
//         this.name = name;
//         this.age = age;
//         this.shose = shose;
//     }
// }
// let prince1 = new Prince('Anton', 30, 38);

//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.

// let they = (x, y) => {
//     for (const item of popel1) {
//         if (prince1.shose === item.size)
//             return `${item.name}`;
//     }
// }
// console.log(they(popel1, prince1));

//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
// let popelushka = popel1.find(item => (item.size === prince1.shose));
// console.log(popelushka);


