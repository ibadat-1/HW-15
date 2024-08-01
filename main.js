// ? task 1
// const numbers = [1, 2, 3, 4, 5];

// let degree = numbers.map((element) => element**2)
// console.log(degree);

// ? task 2
// const users = [
//   { firstName: "John", lastName: "Obama", age: 34, gender: "male" },
//   { firstName: "Ariana", lastName: "Grande", age: 22, gender: "female" },
//   { firstName: "Naruto", lastName: "Uzumaki", age: 19, gender: "male" },
//   { firstName: "Cristiano", lastName: "Ronaldo", age: 38, gender: "male"},
// ]
// let array = users.map((element) => {return {fullName: element.firstName + " " + element.lastName, age: element.age, gender: element.gender};});
// console.log(array);


// ? task 3
// const numbers = [1, 2, 3, 4, 5, 4, 8, 34, 3, 6];

// const chetNums = numbers.filter((element) => element % 2 === 0);
// console.log(chetNums);


// ? task 4
// const users = [
//   { firstName: "John", lastName: "Obama", age: 34, gender: "male" },
//   { firstName: "Ariana", lastName: "Grande", age: 18, gender: "female"},
//   { firstName: "Naruto", lastName: "Uzumaki", age: 19, gender: "male" },
//   { firstName: "Kakashi", lastName: "Hatake", age: 28, gender: "male"},
//   { firstName: "Sakura", lastName: "Chan", age: 18, gender: "female"},
// ]
// let gender = users.filter((element) => element.gender === "female")
// console.log(gender);



// ? task 5 
// const numbers =[1, 2, 3, 4, 5, 4, 8, 34, 3, 6];

// let sum = numbers.reduce((a, b) => {return a+b})
// console.log(sum);


// ? task 6
// const numbers =[1, 2, 3, 4, 5, 4, 8, 34, 3, 6];

// let sum = numbers.filter((element) => element % 2 != 0).reduce((a, b) => {return a+b});
// console.log(sum);


// ? task 7
// const users = [
//   { firstName: "John", lastName: "Obama", age: 34, gender: "male" },
//   { firstName: "Ariana", lastName: "Grande", age: 18, gender: "female"},
//   { firstName: "Naruto", lastName: "Uzumaki", age: 19, gender: "male" },
//   { firstName: "Kakashi", lastName: "Hatake", age: 28, gender: "male"},
//   { firstName: "Sakura", lastName: "Chan", age: 18, gender: "female"},
// ]

// let user = users.find((element) => element.firstName === "Naruto")
// console.log(user);


// ? task 8
// const numbers =[1, 2, 3, 4, 5, 4, 8, 34, 3, 6];

// console.log(numbers.indexOf(34));