// -Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
//
// function User(id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }

// створити пустий масив, наповнити його 10 об'єктами new User(....)

// let user1 = [
//     new User(1, 'olya', 'aa', 'aaaa', 30578545),
//     new User(2, 'ivan', 'bb', 'bbbb', 30789642),
//     new User(3, 'oleg', 'cc', 'cccc', 32794562),
//     new User(4, 'vasya', 'dd','dddd', 32794562),
//     new User(5, 'olya', 'ee', 'eeee', 32794562),
//     new User(6, 'vika', 'ff', 'ffff', 37955424),
//     new User(7, 'pavlo', 'gg', 'gggg', 3789456),
//     new User(8, 'yana', 'hh', 'hhhh', 7556222),
//     new User(9, 'natali', 'kk', 'kkkk', 78945352),
//     new User(10, 'ira', 'jj', 'jjjj', 4567892)
//     ]

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

// let dd = user1.filter((value) => {
//     return value.id % 2 === 0
// });
// console.log(dd);


// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
//
// let tt = user1.sort((a, b) => {
//     user1.sort((a,b) => b.id - a.id);
// })
// console.log(tt);


// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)

// class Client {
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }

// створити пустий масив, наповнити його 10 об'єктами Client

// let client1 = [
//     new Client(1, 'olya', 'aa', 'aaaa', 30578545, ['bla', 'bla']),
//     new Client(2, 'ivan', 'bb', 'bbbb', 30789642, ['bla', 'bla', 'bla']),
//     new Client(3, 'oleg', 'cc', 'cccc', 32794562, ['bla', 'bla']),
//     new Client(4, 'vasya', 'dd','dddd', 32794562, ['bla', 'bla', 'bla']),
//     new Client(5, 'olya', 'ee', 'eeee', 32794562, ['bla', 'bla', 'bla']),
//     new Client(6, 'vika', 'ff', 'ffff', 37955424, ['bla', 'bla', 'bla', 'bla']),
//     new Client(7, 'pavlo', 'gg', 'gggg', 3789456, ['bla', 'bla', 'bla']),
//     new Client(8, 'yana', 'hh', 'hhhh', 7556222, ['bla']),
//     new Client(9, 'natali', 'kk', 'kkkk', 78945352, ['bla', 'bla', 'bla']),
//     new Client(10, 'ira', 'jj', 'jjjj', 4567892, ['bla', 'bla', 'bla'])
// ]

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

// let tt = client1.sort((a, b) => b.order.length - a.order.length)
//
// console.log(tt);