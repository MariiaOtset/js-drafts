// //2 За допомогою циклу for знайдіть суму усіх парних чисел у проміжку від min до max включно
// const max = 50;
// const min = 0;
// let sum = 0;
// for (let i = min; i <= max; i++) {
//     if (i % 2 === 0) {
//         sum += i;
//     }
// }
// console.log(sum); // Виведе суму усіх парних чисел від 0 до 50 (включно)


// //3 Написати функцію getCountryInfo(country), котра буде
// // отримувати назву країни і виводити інформацію про неї
// // China => "Китай - найбільша країна за населенням у світі."
// // Australia => "Австралія - найбільший острів та країна в Океанії."
// // France => "Франція відома своєю гастрономією та мистецтвом."
// // Germany => "Німеччина - найбільша економіка в Європі."
// // Canada => "Канада - друга за площею країна у світі, відома своєю природою."
// // Якщо країни немає, вивести повідомлення "Інформація про цю країну відсутня."



// //4
// //function checkString(value) {
//     if (typeof value === "string" && !value.includes("$")) {
//         console.log(`Довжина рядка ${value.length}`);
//     }
//     else {
//         console.log("Невірний ввід");
//     }
// //}
// checkString("world$")
// checkString("world")
// checkString(27)/



// //5 Напишіть функцію formatMinutesToTime(minutes), котра
// // отримає від користувача число(кількість хвилин) і виведе
// // в консоль рядок у форматі годин і хвилин, тобто, якщо користувач
// // вказав число 70, в консолі отримаємо "01:10"
// function formatMinutesToTime(minutes) {
//     const hours = Math.floor(minutes / 60);
//     const modHours = String(hours).padStart(2, "0");
//     console.log(modHours)
//     const modMinutes = String(minutes % 60).padStart(2, "0");
//     return `${modHours}:${modMinutes}`
// }
// //console.log(formatMinutesToTime(63))



// //6 Функція calculateTotal(number) приймає ціле число (параметр number) Використовуючи цикл for, доповни код функції так, щоб вона повертала суму всіх цілих чисел від одиниці до цього числа включно. Наприклад, якщо number дорівнює 3, то сума - це 1 + 2 + 3, тобто 6.
// function calculateTotal(number) {
//    let sum = 0;
//     for (let i = 1; i <= number; i++) {
//         sum += i;
//     }
//     return sum;
// }
// console.log(calculateTotal(7))

// //7 Функція findNumber(start, end, divisor) приймає три параметра, які є цілими числами.
// //Доповни код функції таким чином, щоб вона:
// //повертала перше число у діапазоні від start до end включно, яке ділиться на divisor без остачі

// function findNumber(start, end, divisor) {
//     for (let i = start; i <= end; i++) {
//         if (i % divisor === 0) {
//             return i;
//         }
//     }
// }
// console.log(findNumber(2, 6, 5)); // 5
// console.log(findNumber(8, 17, 3)); // 9



// function getLastElementMeta(array) {
//     const lastIndex = array.length - 1;
//     const lastElement = array[lastIndex];
//     return [lastIndex, lastElement];
// }

// console.log(getLastElementMeta(["apple", "peach", "pear", "banana"]));

// //Функція calculateTotalPrice(order) приймає один параметр order - масив чисел. Доповни функцію так, щоб вона повертала загальну суму елементів з масиву order.
// function calculateTotalPrice(order) {
//   let total = 0;
//   for (const item of order) {
//     total += item;
//   } return total;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]))

// //Функція getEvenNumbers(start, end) має два параметри start та end, які є цілими числами. Доповни код функції так, щоб вона повертала масив усіх парних чисел від start до end. Якщо жодного парного числа немає, то масив має бути пустим.
// function getEvenNumbers(start, end) {
//     let evenNumbers = [];
//     for (let i = start; i <= end; i += 1) {
//         if (i % 2 === 0) {
//             evenNumbers.push(i);
//         }
//     }
//     return evenNumbers;
// }


// //Функція getCommonElements(array1, array2), приймає два масиви (array1 та array2) довільної довжини в якості параметрів.
// //Доповни код функції:
// //Створи порожній масив для зберігання нового масиву.
// ///Використай цикл for для ітерації кожного елемента у array1.
// //У тілі циклу перевір, чи поточний елемент існує у array2 за допомогою методу includes.
// //Якщо він існує, то додай елемент до нового масиву.
// //Поверни наповнений масив спільних елементів як результат роботи функції.
// function getCommonElements(array1, array2) {
//     const commonElements = [];
//     for (let i = 0; i < array1.length; i++) {
//         if (array2.includes(array1[i])) {
//             commonElements.push(array1[i]);
//         }
//     }
    
//     return commonElements;
// }

//console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]))

// Напишіть функцію caclculateAverage()
// яка приймає довільну кількість
// аргументів і повертає їхнє середнє значення.
// Додати перевірку, що аргументи це числа.

// // // Напишіть функцію caclculateAverage()
// // // яка приймає довільну кількість
// // // аргументів і повертає їхнє середнє значення.
// // Додати перевірку, що аргументи це числа.

// function caclculateAverage(...args) {
//     let sum = 0;
//     let count = 0;
//     for (const arg of args) {
//         if (typeof arg === "number") {
//             sum += arg;
//             count += 1;
//      }
//     }
//     return sum / count;
// }
// console.log(caclculateAverage(1, 2, "world", 3, "hello"))

// Є об'єкт, у якому зберігаються обрані товари у кошику.
// Напишіть код для визначення загальної суму замовлення
// і збережіть його результат у змінній totalCost.
// Якщо об'єкт cart порожній, то результат має бути 0.

// const cart = {
//   apple: 50,
//   banana: 30,
//   orange: 40,
// };
// let totalCost = 0;
// // const value = Object.values(cart);
// // const key = Object.keys(cart);
// // for (const item of value) {
// //     totalCost += item;
// //}
// for (const key in cart) {
//     totalCost += cart[key];
// }
// console.log(totalCost)

//function getAllPropValues(propName) {
//     const products = [
//         { name: "Radar", price: 1300, quantity: 4 },
//         { name: "Scanner", price: 2700, quantity: 3 },
//         { name: "Droid", price: 400, quantity: 7 },
//         { name: "Grip", price: 1200, quantity: 9 },
//     ];
//     let propValues = [];

//     for (let product of products) {
//         if (product[propName] !== undefined) {
//             propValues.push(product[propName]);
//         }
//     }

//     return propValues;
// }

// console.log(getAllPropValues("name")); // ["Radar", "Grip", "Scanner"]
// console.log(getAllPropValues("type"));

// function getExtremeScores(scores) {
//   const best = Math.max(...scores);
//   const worst = Math.min(...scores);
//   return {best, worst};
// }
// console.log(getExtremeScores([19, 7, 4, 17, 81, 24]))


// const defaultSettings = {
//   theme: "light",
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };

/**
 * ! Module 5


// const isEveryUserActive = (users) => {
//     return users.every(user => user.isActive);
// }
//  const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ];
// console.log(isEveryUserActive(users));

// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];
// const totalAveragePlaytimePerGame = players.reduce((acc, item) => {
//     const avaragePlayTime = item.playtime / item.gamesPlayed;
//     return acc + avaragePlayTime;

// }, 0);
// console.log(totalAveragePlaytimePerGame);


/** 
 ** const calculateTotalBalance = (users) => {
 return users.reduce((acc, user) => {
        return acc + user.balance;}, 0);
};
const users = [
    {
        name: "Moore Hensley",
        email: "moorehensley@indexia.com",
        eyeColor: "blue",
        friends: ["Sharron Pace"],
        isActive: false,
        balance: 2811,
        gender: "male"
    },
    {
        name: "Sharlene Bush",
        email: "sharlenebush@tubesys.com",
        eyeColor: "blue",
        friends: ["Briana Decker", "Sharron Pace"],
        isActive: true,
        balance: 3821,
        gender: "female"
    },
    {
        name: "Ross Vazquez",
        email: "rossvazquez@xinware.com",
        eyeColor: "green",
        friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
        isActive: false,
        balance: 3793,
        gender: "male"
    },
    {
        name: "Elma Head",
        email: "elmahead@omatom.com",
        eyeColor: "green",
        friends: ["Goldie Gentry", "Aisha Tran"],
        isActive: true,
        balance: 2278,
        gender: "female"
    },
    {
        name: "Carey Barr",
        email: "careybarr@nurali.com",
        eyeColor: "blue",
        friends: ["Jordan Sampson", "Eddie Strong"],
        isActive: true,
        balance: 3951,
        gender: "male"
    },
    {
        name: "Blackburn Dotson",
        email: "blackburndotson@furnigeer.com",
        eyeColor: "brown",
        friends: ["Jacklyn Lucas", "Linda Chapman"],
        isActive: false,
        balance: 1498,
        gender: "male"
    },
    {
        name: "Sheree Anthony",
        email: "shereeanthony@kog.com",
        eyeColor: "brown",
        friends: ["Goldie Gentry", "Briana Decker"],
        isActive: true,
        balance: 2764,
        gender: "female"
    }
]; */



// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;

// const names = books
//   .filter(books.rating > MIN_BOOK_RATING)
//   .map(book => book.author)
//   .toSorted((a, b) => a.author.localeCompare(b.author));
// console.log(names);



/* */
// Practice Module 6

//Напишіть функцію getGirlsPassports() яка поверне масив номерів паспортів дівчат.
// const friends = [
//     { passport: '03005988', name: 'Joseph Francis Tribbiani Jr', age: 32, sex: 'm' },
//     { passport: '03005989', name: 'Chandler Muriel Bing', age: 33, sex: 'm' },
//     { passport: '03005990', name: 'Ross Eustace Geller', age: 33, sex: 'm' },
//     { passport: '03005991', name: 'Rachel Karen Green', age: 31, sex: 'f' },
//     { passport: '03005992', name: 'Monica Geller', age: 31, sex: 'f' },
//     { passport: '03005993', name: 'Phoebe Buffay', age: 34, sex: 'f' }
// ]

// function getGirlsPassports() {
//     return friends.filter(friend => friend.sex === "f")
//     .map(friend => friend.passport)
// }

// console.log(getGirlsPassports())


//Напишіть функцію getTotalBoysYears() яка порахує загальний вік хлопців.

// function getTotalBoysYears() {
//     return friends.filter(friend => friend.sex === "m")
//     .reduce((total, friend) => total + friend.age ,0)
// }

// console.log(getTotalBoysYears())



// Завдання:
// 1. Перевірте, чи всі замовлення виконані.
// 2. Поверніть список товарів з усіх виконаних замовлень.

// const orders = [
//   { id: 1, products: ['Milk', 'Bread'], status: 'completed' },
//   { id: 2, products: ['Eggs', 'Juice'], status: 'processing' },
//   { id: 3, products: ['Pasta', 'Spices'], status: 'completed' },
// ];

// const completed = orders.every(order => order.status === "completed")
// orders.flatMap(order => order.products);

// console.log(completed)


// Є об'єкт і функція для підрахунку суми чисел.
// Виведіть у консоль результат виконання функції, якщо a = 3, b = 5.

// const obj = { num: 2 };

// function add(a, b){
//   return this.num + a + b;
// }

// console.log(add.call(obj, 3, 8));
// console.log(add.apply(obj, [3, 8]));
// const fun = add.bind(obj, 7 , 8);
// console.log(fun());


// Створіть клас BankAccount, який має конструктор для зберігання
// номеру рахунку та балансу.
// Додайте методи:
// withdraw - метод для зняття готівки. Отримує в якості аргументу
// суму готівки котру потрібно зняти. Готівку можна зняти за умови,
// що баланс більше або дорівнює сумі, котру хоче зняти користувач.
// Виводить повідомлення: `Знято amount грн. Залишок на рахунку: balance грн.`
// або "Недостатньо коштів на рахунку."
// deposit - метод для пововнення балансу. Отримує в якості аргументу
// суму котру користувач хоче покласти на рахунок.
// Виводить повідомлення: `Поповнено amount грн. Залишок на рахунку: balance грн.`
// checkBalance - метод для перевірки балансу.
// Виводить повідомлення `Залишок на рахунку: balance грн.`

// class BankAccount {
//     constructor(accountNumber, balance) {
//         this.accountNumber = accountNumber;
//         this.balance = balance;
//     }
//     withdraw(sum) {
//         if (sum <= this.balance) {
//             this.balance -= sum;
//             return `Знято ${sum} грн. Залишок на рахунку: ${this.balance} грн.`
//         } else {
//            return "Недостатньо коштів на рахунку."
// }
//     }
//     deposit(amount) {
//         this.balance += amount;
//         return `Поповнено ${amount} грн. Залишок на рахунку: ${this.balance} грн.`
//     }
//     checkBalance() {
//         return `Залишок на рахунку: ${this.balance} грн.`
//     }
// }
// const myAccount = new BankAccount(12, 1000);

// console.log(myAccount.withdraw(500))
// console.log(myAccount.deposit(200));
// console.log(myAccount.checkBalance());



// Module 8 practice (DOM,destructurisatia, podii)

//task 1
// При натисканні на кнопку "SHOW ME", потрібно за допомогою alert
// вивести значення, яке будемо вводити в інпут.

// const btn = document.querySelector("#alertButton");
// const input = document.querySelector("#alertInput");

// btn.addEventListener("click", onClick);

// function onClick(event) {
//     alert(input.value);
// };

//task 2
// При натисканні на кнопку "Приховати" потрібно введені користувачем
// символи в інпут відображати у вигляді крапок замість звичайного
// тексту, а також змінити назву кнопки на "Показати", при повторному
// натисканні знову будемо відображати символи, а назва кнопки зміниться
// на "Приховати".

// const btn = document.querySelector("#passwordButton");
// const input = document.querySelector("#passwordInput");

// btn.addEventListener("click", handleClick);
// function handleClick(event) {
//     if (input.type === "text") {
//         input.type = "password";
//         btn.textContent = "show";
//         return;
//     } input.type = "text";
// btn.textContent = "hide";
// }

//task 3
// Кнопка "Зменшити" повинна зменшувати квадрат на 10 пікселів.
// Кнопка "Збільшити" повинна збільшувати квадрат на 10 пікселів.
// const box = document.querySelector("#box");
// const decrease = document.querySelector("#decrease");
// const increase = document.querySelector("#increase");

// decrease.addEventListener("click", decreaseBox);
// increase.addEventListener("click", increaseBox);
// console.dir(box);

// function decreaseBox(event) {
//     const { offsetHeight, offsetWidth } = box;
//     box.style.width = `${offsetWidth - 10}px`;
//     box.style.height = `${offsetHeight - 10}px`;
// }

// function increaseBox(event) {
//     const { offsetHeight, offsetWidth } = box;
//     box.style.width = `${offsetWidth + 10}px`;
//     box.style.height = `${offsetHeight + 10}px`;
// }


//task 4
// При кліку на кнопку "Подвоїти" збільшувати значення в кожному
// елементі списку в два рази.

// const list = document.querySelectorAll(".listItem");
// const btn = document.querySelector("#double");
// btn.addEventListener("click", btnBox);

// function btnBox(event) {
//     list.forEach(item => item.textContent = item.textContent * 2);
// }


//task 5
// При кліку на кнопку "Filter" потрібно видалити з списку позначені елементи.

// const form = document.querySelector(".checkboxForm");
// const checkbox = document.querySelectorAll(".checkboxWrapper");
// form.addEventListener("submit", handleSubmit);

// function handleSubmit(event) {
//     event.preventDefault();
//     const filteredList = [...checkbox].filter(item => item.lastElementChild.checked);
//     filteredList.forEach(element => element.remove());
// }


//task 6
// Наведено список людей. Зроби можливість фільтрації (пошуку) за ім'ям або за прізвищем

// const input = document.querySelector(".contactsFilter");
// const list = document.querySelector(".contacts");
// const items = [...list.children];

// input.addEventListener("input", change);

// function change(event) {
//     const value = input.value.toLowerCase().trim();
//     const filteredItems = items.filter(item => item.textContent.toLowerCase().includes(value));
//     list.innerHTML = "";
//     list.append(...filteredItems);
// }

//task 7
// Є форма для замовлення продуктів. Вона містить перелік  продуктів,
// кожен з яких має власний чекбокс та ціну яка зберігається
// у властивості value. Користувач може вибрати бажані продукти,
// після натискання кнопки "Додати у кошик" потрібно вивести суму
// замовлення в спан з ідентифікатором "totalAmount".
// const form = document.querySelector("#orderForm");
// const inputForm = document.querySelectorAll(".product-checkbox");
// const sum = document.querySelector("#totalAmount");

// form.addEventListener("submit", handleSubmit);

// function handleSubmit(event) {
//     event.preventDefault();
//     const amount = [...inputForm].filter(item => item.checked).reduce((total, item) => total += parseFloat(item.value), 0);
//     sum.textContent = amount;
//     inputForm.forEach(item => {
//         if (item.checked) {
//             item.checked = false;
//         }
//     })
// }
console.log(_.sum([4, 2, 8, 6])); // 20
console.log(_.sum([5, 10])); // 15

console.log(_.shuffle([1, 2, 3, 4])); // [4, 1, 3, 2]
console.log(_.shuffle([1, 2, 3, 4])); // [3, 2, 1, 4]
