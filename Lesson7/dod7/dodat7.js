// 1. Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
//     id: 1,
//         name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//     street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//         lat: '-37.3159',
//             lng: '81.1496'
//     }
// },
//     phone: '1-770-736-8031 x56442',
//         website: 'hildegard.org',
//     company: {
//     name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
// }

// function Some (id, yourname, surname, email, street, suite, city, zipcode, lat, lng, phone, website, compname, catchPhrase, bs) {
//     this.id = id;
//     this.yourname = yourname;
//     this.surname = surname;
//     this.email = email;
//     this.address = {street: street,  suite: suite, city: city, zipcode: zipcode, geo: {lat: lat, lng: lng}};
//     this.phone = phone;
//     this.website = website;
//     this.company = {compname: compname, catchPhrase: catchPhrase, bs: bs};
// }
//
// let some1 = new Some(5, 'Olga', 'Scherba', 'gggg@jjjj', 'hhhhh', 'uu45', 'Lviv', '789456', '36.5896', '78.4589', '789456123', 'ghjjkl', 'qwerty', 'blablabla', 'poilkj');
// console.log(some1);


// -  Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
//     -назва тегу ()
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результуючого об'єкту
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
// }



class Qwerty {
    constructor(tegname, opys) {
        this.tegname = tegname;
        this.opys = opys;
    }
}


class Atr {
    constructor(atrname, atropys) {
        this.atrb = {atrname: atrname, atropys: atropys};
    }
}


    let Qwerty1 = new Qwerty('a', 'предназначен для создания ссылок', new Atr('href', 'Задает адрес документа, на который следует перейти'));

console.log(Qwerty1);
