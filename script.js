// People array-аас 18 ба түүнээс дээш настай хүмүүсийн нэрийг шүүж гарга.
// const people = [
//   { name: "John", age: 17 },
//   { name: "Jane", age: 20 },
//   { name: "Jack", age: 18 },
// ];

// const obj = people.filter((person) => person.age >= 18);
// const names = obj.map((el) => el.name);
// console.log(names);

// // Зөвхөн эерэг тоонуудаар массив үүсгэ.
// const nums = [-5, 3, -1, 7, 0];
// const newArray = nums.filter((num) => num > 0);
// console.log(newArray);

// 3 аас дээш тооны урттай элементүүдээр массив үүсгэ.
// const words = ["hi", "hello", "yo", "world"];
// const newArray = words.filter((word) => word.length > 3);
// console.log(newArray);

// Output: ['hello', 'world']

// Доорх array аас сондгой тоонуудыг 2 дахин ихэсгэсэн массив үүсгэ.

// const numbers = [1, 2, 3, 4, 5];
// const newArray = numbers.filter((num) => num % 2 === 1);
// const sum = newArray.map((number) => number * 2);
// console.log(sum);

// Output: [2, 6, 10]

// Pass хийсэн сурагдын firstname ийг нь upperCase болгосон array үүсгэ

// const students = [
//   { firstName: "John", lastName: "Doe", passed: true },
//   { firstName: "Jane", lastName: "Smith", passed: false },
//   { firstName: "Alice", lastName: "Jones", passed: true },
// ];
// const newArray = students.filter((student) => student.passed === true);
// const firstNames = newArray.map((person) => person.firstName);
// const results = firstNames.map((result) => result.toUpperCase());
// console.log(results);

// хамгийн өндөр оноотой 3 дүнгээр нь массив үүсгэ.

const students = [
  { name: "A", score: 88 },
  { name: "B", score: 95 },
  { name: "C", score: 72 },
  { name: "D", score: 99 },
  { name: "E", score: 91 },
];
let newArray = [];
const compare = students.reduce((acc, val) => {
  if (acc.score > val.score) {
    return [acc];
  } else {
    return val;
  }
}, []);
newArray.push(compare);
let container = students.slice(compare);
console.log(container);
//Output: ['D', 'B', 'E']
