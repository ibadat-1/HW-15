// console.log("Экзамендин катышуучулары жана результаттары:");



// let firstUserName = 'Nooruz';
// let firstUserPoint = 97;

// let secondUserName = 'Zhakshylyk';
// let secondUserPoint = 89;

// let thirdUserName = 'Alisher';
// let thirdUserPoint = 75;

// let fourthUserName = 'Elizar';
// let fourthUserPoint = 90;

// console.log('1.' + ' ' + firstUserName + ' ' + '-' + ' ' + firstUserPoint + ' ' + 'бaллов из 100');
// console.log('2.' + ' ' + secondUserName + ' ' + '-' + ' ' + secondUserPoint + ' ' + 'бaллов из 100');
// console.log('3.' + ' ' + thirdUserName + ' ' + '-' + ' ' + thirdUserPoint + ' ' + 'бaллов из 100');
// console.log('4.' + ' ' + fourthUserName + ' ' + '-' + ' ' + fourthUserPoint + ' ' + 'бaллов из 100');

// const averageValue = (firstUserPoint+secondUserPoint+thirdUserPoint+fourthUserPoint)/4
// // console.log(averageValue);

// console.log('Экзамендин орточо баллы:' + ' ' + averageValue + ' ' + 'балл"');


// let number = 4;
// console.log(`1 x ${number} = ${1*number}`);
// console.log(`2 x ${number} = ${2*number}`);
// console.log(`3 x ${number} = ${3*number}`);
// console.log(`4 x ${number} = ${4*number}`);
// console.log(`5 x ${number} = ${5*number}`);
// console.log(`6 x ${number} = ${6*number}`);
// console.log(`7 x ${number} = ${7*number}`);
// console.log(`8 x ${number} = ${8*number}`);
// console.log(`9 x ${number} = ${9*number}`);
// console.log(`10 x ${number} = ${10*number}`);

// alert ('Вы успешно зарегистрировались!')
// let info = confirm ('При перезагрузке сайта, введённые данные на форме будут очищены, Вы уверены что хотите перезагрузить?')
// let name = prompt ('Введите ваше имя')

            // HW-17 //


let a = "10";

if (a === "10") {
    console.log("Верно");
} else {
    console.log("Неверно");
}



let baatir = 33;


if (baatir >= 1 && baatir <= 20) {
    console.log("First floor");
} else if (baatir >= 21 && baatir <= 48) {
    console.log("Second floor");
} else if ((baatir >= 49 && baatir <= 90)) {
    console.log("Third floor");
}




let a = 5;

if (a >= 0 && a < 5) {
    console.log("Верно");
} else {
    console.log("Неверно");
}




const hour = 24;
if (hour >= 5 && hour <= 12) {
    console.log('Доброе утро!');
} else if (hour >= 12 && hour <= 17) {
    console.log('Добрый день!');
} else if (hour >= 18 && hour <= 21){
    console.log('Добрый вечер!');
} else {
    console.log("Доброй ночи!");
}



let userName = prompt("Ваше имя:")

console.log(`Кутман кеч, ${userName}!`);



let userAge = 41;

if (userAge <= 6 && userAge >= 65) {
    console.log("Скидка");
} else {
    console.log("Без скидки");
}



let firstPlayer = prompt("Select");
let secondPlayer = prompt("Select");

if (firstPlayer === "бумага" && secondPlayer === "ножницы") {
    console.log("Выиграл второй игрок"); 
} else if (firstPlayer === "ножницы" && secondPlayer === "бумага") {
    console.log("Выиграл первый игрок"); 
} else if (firstPlayer === "бумага" && secondPlayer === "камень") {
    console.log("Выиграл первый игрок"); 
} else if (firstPlayer === "камень" && secondPlayer === "бумага") {
    console.log("Выиграл второй игрок"); 
} else if (firstPlayer === "бумага" && secondPlayer === "бумага") {
    console.log("Ничья");
} else if (firstPlayer === "ножницы" && secondPlayer === "камень") {
    console.log("Выиграл второй игрок"); 
} else if (firstPlayer === "камень" && secondPlayer === "ножницы") {
    console.log("Выиграл первый игрок"); 
} else if (firstPlayer === "камень" && secondPlayer === "камень") {
    console.log("Ничья");
} else if (firstPlayer === "ножницы" && secondPlayer === "ножницы") {
    console.log("Ничья");
}



const number = 7; 

if (number % 2 === 0) { 
             console.log('Число чётное');
 } else { 
            console.log('Число нечётное');
 }

 console.log("если при делении числа на 2 остаток равен 0, то число - четное, а в обратном случае - число нечетное");



let num = 5;

//  if (num === 5) {
//       console.log("Five"); 
// } else {
//       console.log("Not five"); 
// }

let n = num === 5 ? console.log("Five") : console.log("Not five");