'use strict';

// const book = [];
// const createBook = function (
//   name = 'Nok',
//   passenger = 1,
//   price = passenger * 100
// ) {
//   const books = {
//     name,
//     passenger,
//     price,
//   };
//   console.log(books);
//   book.push(books);
// };
// createBook('Buyuklik', 4, 500);
// createBook('Olma', 8);
// createBook();
// console.log(book);

// //////////////////////////////////// callback functions //////////////////
// // const arr=['jamshid','xatamov']
// // console.log(arr.join(','))

// const addWords = function (str) {
//   const newArray = str.split(' ');
//   return newArray;
// };

// const upperFirstWord = function (str) {
//   const [first, ...other] = str.split(' ');
//   return [first.toUpperCase(), ...other].join();
// };

// const transform = function (str, callback) {
//   console.log('Orginal str:', str);
//   console.log('Transformed str:', callback(str));
//   console.log('Func name:', callback.name);
// };

// transform('jamshid is very interested person !', addWords);
// transform('jamshid is very interested person !', upperFirstWord);

// //////////////////// returing functions ////////////////

// const greet = str => {
//   return name => {
//     console.log(`${str} ${name}`);
//   };
// };
// const greetArr = str => name => console.log(`${str} ${name}`);
// // bu yerda greet() function ning return qilib yangi function qaytaryabdi.Biz uni yangi variablega saqlayabmiz
// const greeter = greet('Hey');
// greeter('Jamshid');
// greeter('Shamshod');

// // 2chi usuli returndagi functionga qiymat berishni
// greet('Hello')('jamshid')
// greetArr ('Hello')('shamshod')

// ///////////////////////// the call and apply methods ///////////////

// const book = {
//   name: 'Magic the Garden',
//   idCode: 'JX',
//   booking: [],
//   book(person, id) {
//     console.log(
//       `${person} is reading a ${this.name}. This book's id is ${
//         this.idCode + id
//       } !`
//     );
//     this.booking.push({ id: this.idCode + id, person });
//   },
// };

// book.book('Jamshid', 89);
// book.book('Shamshod', 3);
// console.log(book.booking);

// const newBook = book.book;
// // xato beryabdi chunki this kalit so'zi bor
// // newBook('Xurshid',45)
// const book2 = {
//   name: 'Magic',
//   idCode: 'ShX',
//   booking: [],
// };

// // call method bu method bir obect ichiga bsohqa bir function chaqrib ishlatadi
// newBook.call(book2, 'shamshod', 4);
// console.log(book2);
// newBook.call(book, 'Eldor', 34);
// console.log(book);
// // function greet(name, id) {
// //   console.log(this.animal, "typically sleep between", this.sleepDuration,name,id);
// // }

// // const obj = {
// //   animal: "cats",
// //   sleepDuration: "12 and 16 hours",
// // };

// // greet.call(obj,'jamshid',9); // cats typically sleep between 12 and 16 hours
// // console.log(obj)
// // console.log(window)

// // apply method bu method call method ga o'xshash farqi bu array qabul qiladi argumentiga

// const app = {
//   name: 'Red apply',
//   idCode: 'RA',
//   booking: [],
// };
// // apply
// const arr = ['jamshid', 4];
// newBook.apply(app, arr);
// console.log(app);
// // call
// newBook.call(app, 'jamshid', 4); // ...arr
// console.log(app);
// // both is the same result

// /////////////////////////////////// bind method /////////////////////////
// console.log('------------------------------------------------------------');
// const a = {
//   name: 'Apply',
//   idCode: 'SD',
//   booking: [],
//   book(person, id) {
//     this.booking.push(this.idCode + id);
//     return `${person} is reading a ${this.name}. This book's id is ${
//       this.idCode + id
//     } !`;
//   },
// };
// const b = {
//   name: 'Temur',
//   idCode: 'KN',
//   booking: [],
// };

// const book1 = a.book;
// const newFunc = book1.call(b, 'Ali', 45);
// console.log(newFunc);
// console.log(b);

// const newFunc1 = book1.bind(b);
// newFunc1('sabr', 89);
// newFunc1('jim', 567);
// newFunc1('Tom', 56);
// console.log(b);

// // with Event Listeners
// a.planes = 200;
// a.buyPlane = function () {
//   console.log(this);
//   this.planes++;
//   console.log(this.planes);
// };
// // const bindFunc = a.buyPlane.bind(a);
// // console.log(a.buyPlane.bind(a));
// // console.log(a.buyPlane())
// document.querySelector('.buy').addEventListener('click', a.buyPlane.bind(a));

// const addTax=(number,value)=>number+value
// const newAdd=addTax.bind()
// console.log(newAdd(45,56))
// console.log(newAdd(90,8))

////////////////////////////////
let f;
// example 1
const g = function () {
  const a = 9;
  f = function () {
    console.log(a * 2);
  };
};
g();
f();

// example 2

const time = function (wait) {
  // const perGroup=9
  setTimeout(function () {
    console.log('You have passed the exam!!! Congratulation !!!',perGroup);
  }, wait * 1000);
  console.log(`You should wait ${wait} ${wait > 1 ? 'seconds' : 'second'}`);
};
const perGroup=2000
time(5,5);

const a=0
const func=function(){
  console.log(`${a}`)
}
func()