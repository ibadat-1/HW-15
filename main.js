// ? task 1
// const student1 = {
//     name: "John",
//     lang: "KG",
//     age: 24
// };

// const student2 = student1;
// delete student2.age

// console.log(student2);

// ? task 2
// Существуют хранения по ссылке и значению:

// По значению хранятся примитивные данные(string, number, boolean, null, undefined, symbol, bigint).
// При их объявлении в памяти сохраняется их количество байт. При работе с ними используются их побайтовые значения.

// По ссылке хранятся объекты, функции, массивы. Для работы с ними мы обраещаемся к их ссылкам. Данные внутри объектов,
// массивов и функций периодически меняется, поэтому нам не известно сколько памяти понадобится для них.

// Stack(стек) используется для хранения примитивных данных.
// Heap(куча) используется для хранения функций, объектов, массивов.

// ? task 3
// const array = [1, true, 3, {name: "ZH", hobbies: ["swimming", "reading"]}, 5, "hello", "hi"];

// console.log(array[1]);
// console.log(array[4]);
// console.log(array[3].hobbies);
// console.log(array[3].hobbies.shift());

// array.unshift("JS-3");
// console.log(array);

// array.push("ibadat");
// console.log(array);

// array.shift();
// console.log(array);

// const arr = array.indexOf("hello");
// console.log(arr);

// const sliceElts = array.slice(-3);
// console.log(sliceElts);

// const arr = array.splice(3, 0, "football");
// console.log(arr);

// const arr = array.filter((element) => element !== 5 && element !== "hello")
// console.log(arr);

// console.log(array.length);

// ? task 4
// const array = [1, 2, 3, "sdf", 4, "sdf", {}, 3, true, 2, [1, 6, 3], 1];

// const sum = array.reduce((a, b) => a + b);
// console.log(sum);

// let numbers = array.filter((element) => typeof element === "number");

// console.log(numbers);

// let sum = 0;

// for (let index = 0; index < number.length; index++) {
//     const element = array[index];

// }

// const result = numbers.reduce((a, b) => {
//   return a + b;
// });

// console.log(result);

