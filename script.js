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

// const students = [
//   { name: "A", score: 88 },
//   { name: "B", score: 95 },
//   { name: "C", score: 72 },
//   { name: "D", score: 99 },
//   { name: "E", score: 91 },
// ];
// let newArray = [];
// const compare = students.reduce((acc, val) => {
//   if (acc.score > val.score) {
//     return [acc];
//   } else {
//     return val;
//   }
// }, []);
// newArray.push(compare);
// console.log(newArray);
// const student1 = students.filter(student => student !== compare);
// console.log(student1);
// // const compare2 = student1.reduce((acc, val) => {
// //   if (acc.score > val.score) {
// //     return [acc];
// //   } else {
// //     return val;
// //   }}, []) 
// //   newArray.push(compare2); 
// //   console.log(newArray);   

// const students = [
//   { name: "A", score: 88 },
//   { name: "B", score: 95 },
//   { name: "C", score: 72 },
//   { name: "D", score: 99 },
//   { name: "E", score: 91 },
// ];

// let topArray = [];
// let remaining = [...students]; // copy

// for (let i = 0; i < 3; i++) {
//   const highest = remaining.reduce((acc, val) =>{if (acc.score > val.score) {
//     return acc; } 
//     else {
//       return val;
//     }} ,remaining[0]);
//   topArray.push(highest);
//   remaining = remaining.filter(s => s !== highest);
// }

// const names = topArray.map(person => person.name);
// console.log(names);



// cart дахь бүх бараануудын үнийн дүнгийн нийлбэрийг ол
// const cart = [
//   { name: "Book", price: 10, quantity: 2 },
//   { name: "Pen", price: 2, quantity: 5 },
//   { name: "Notebook", price: 5, quantity: 3 },
// ];
// const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
// console.log(total);


// Өгөгдсөн string төрлийн массив дотроос хамгийн урт үгийг ол.
 
// const words = ["hello", "world", "typescript", "js"];
 
// const longestWord = words.reduce((longest, current) => {
//   if(current.length > longest.length ){
//     return current;
//   }else{
//     return longest;
//   }
// }, "");
 
// console.log(longestWord); 


// Доорх массивын бүх элементүүдийн үсгийн нийлбэрийг ол
 
// const words = ["hi", "hello", "hey"];
// const totalLength = words.reduce((acc, word) => acc + word.length, 0);
// console.log(totalLength);


// Хамгийн үнэтэй бүтээгдэхүүнийг харуул
 
// const products = [
//   { name: "Laptop", price: 900 },
//   { name: "Phone", price: 700 },
//   { name: "Monitor", price: 300 },
// ];
// const mostExpensive = products.reduce((acc, product) => {
//   if (acc.price > product.price) {
//     return acc;
//   } else {
//     return product;
//   }
// }, products[0]);
// console.log(mostExpensive);
// бүх бүтээгдэхүүний нийлбэр үнийн дүнг ол
 
// const items = [
//   { name: "Chair", price: 80 },
//   { name: "Desk", price: 120 },
//   { name: "Lamp", price: 150 },
// ];
// const totalPrice = items.reduce((acc, item) => acc + item.price, 0);
// console.log(totalPrice);
    


 

 


  



