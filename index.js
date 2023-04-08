// const parent = {
//   value: 2,
//   method() {
//     return this.value + 1;
//   },
// };

// console.log(parent.method());
// const child = {
//   __proto__: parent,
// };
// console.log(child.method());

// const obj1 = {
//   name: "LaxmiPriya",
// };

// const obj2 = {
//   ___proto___: obj1,
//   lname: "Hembram",
// };

// const obj3 = {
//   ___proto___: obj2,
//   age: "22",
// };

// console.log(obj3.lname);

// const obj1 = {
//   firstName: "john",
//   lastName: "Smith",
//   proto: "MyObjecy",
//   name: "0987",

//   ____proto____: {
//     name: "1234",
//   },
// };
// console.log(obj1);

// console.log(obj1.name);

// const obj3 = { myIdea: "learning" };
// const obj2 = Object.create(obj3);
// console.log(obj2, obj3);

// const o = {
//   a: 1,
//   b: 2,
//   // __proto__ sets the [[Prototype]]. It's specified here
//   // as another object literal.
//   __proto__: {
//     b: 3,
//     c: 4,
//     __proto__: {
//       d: 5,
//     },
//   },
// };

// // { a: 1, b: 2 } ---> { b: 3, c: 4 } ---> { d: 5 } ---> Object.prototype ---> null

// console.log(o.d); // 5

// Array.prototype.sum = function () {
//   let result = 0;
//   for (let i = 0; i < this.length; i++) {
//     result += this[i];
//   }
//   return result;
// };

// let N1 = [6, 8, 9];
// let N2 = [7, 8, 6];

// let addition = N1.sum() + N2.sum();
// console.log(addition);

function allKeys(obj) {
  if (!isObject(obj)) return [];
  var keys = [];
  for (var key in obj) keys.push(key);
  return keys;
}
function isObject(obj) {
  var type = typeof obj;
  return type === "function" || (type === "object" && !!obj);
}
function Student(name) {
  this.name = name;
}
Student.prototype.rollno = true;
console.log(allKeys(new Student("Sara")));
