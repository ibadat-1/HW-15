// ? task 1
// const computers = [
//     {
//         title: "Macbook Air M1",
//         price: 85000,
//     },
//     {
//         title: "Dell",
//         price: 65000,
//     },
//     {
//         title: "Asus Zenbook",
//         price: 40000,
//     },
//     {
//         title: "Acer Aspire",
//         price: 45000,
//     },
//     {
//         title: "Macbook Pro",
//         price: 100000,
//     },
// ];

// computers.sort(function (a, b) {return a.price - b.price});
// console.log(computers);

// computers.sort(function (a, b) {return b.price - a.price});
// console.log(computers);




// ? task 2
// const grades = [4, 4, 4, 5, 3, 5, 3, 3, 2, 5, 1];

// grades.sort();
// console.log(grades);

// grades.sort().reverse();
// console.log(grades);




// ? task 3
// const fruits = ["strawberry", "mango", "watermelon", "grapes", "lemon", "kiwi"];

// fruits.sort();
// console.log(fruits);

// fruits.sort().reverse();
// console.log(fruits);




// ? task 4
// const numbers = [4, 123, -5, 6, 100];

// console.log(Math.min(4, 123, -5, 6, 500));

// let count = 0;

// for (let index = 0; index < numbers.length; index++) {
//     if(numbers[index] < count) {
//         count = numbers[index];
//     };
// };
// console.log(count);

// console.log(Math.max(4, 123, -5, 6, 100));

// for (let index = 0; index < numbers.length; index++) {
//     if(numbers[index] > count) {
//         count = numbers[index];
//     };
// };
// console.log(count);




// ? task 5
// const formatDate = (date) => {
//     const day = date.getDate();
//     const month = `${date.getMonth() + 1}`.padStart(2, 0);
//     const year = date.getFullYear();

//     return `${day}:${month}:${year}`
// };

// formatDate(new Date())

// const result = formatDate(new Date());
// console.log(result);



// const formatTime = (date) => {
//     const hour = date.getHours();
//     const minutes = date.getMinutes();

//     return `${hour}:${minutes}`
// };

// formatTime(new Date());

// const result = formatTime(new Date());
// console.log(result);





// ? task 6
// const instagramUser = {
//     userName: "Uzumaki123",
//     email: "user@gmail.com",
//     password: 123123,
//     avatarUrl: "https://www.google.com/search?q=cat",
//     followers: "1m",
//     following: 512,
//     title: "Never Give up",
// }

// for (const key in instagramUser) {
//     console.log(key);
    
// }

// for (const key in instagramUser) {
//     console.log(instagramUser[key]);
    
// }




// ? task 7
const computers = [
    {
        title: "Macbook Air M1",
        price: 85000,
    },
    {
        title: "Dell",
        price: 65000,
    },
    {
        title: "Asus Zenbook",
        price: 40000,
    },
    {
        title: "Acer Aspire",
        price: 45000,
    },
    {
        title: "Macbook Pro",
        price: 100000,
    },
];

// prices = computers.map((element) => ({price: element.price}));
// console.log(prices);

// let sum = 0;

// for (const object of computers) {
//     sum += object.price;
// };

// console.log(sum);




// ? task 8
const instagramUser = {
    userName: "Uzumaki123",
    email: "user@gmail.com",
    password: 123123,
    avatarUrl: "https://www.google.com/search?q=cat",
    followers: "1m",
    following: 512,
    title: "Never Give up",
}

// const keys = Object.keys(instagramUser);

// for (let index = 0; index < keys.length; index++) {
//     console.log(keys[index]);
// }

// const values = Object.values(instagramUser);

// let count = 0;

// while (count < values.length) {
//     console.log(values[count]);
//     count++;
// };

