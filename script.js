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

const book = {
  name: 'Magic the Garden',
  idCode: 'JX',
  booking: [],
  book(person, id) {
    console.log(
      `${person} is reading a ${this.name}. This book's id is ${
        this.idCode + id
      } !`
    );
    this.booking.push({ id: this.idCode + id, person });
  },
};

book.book('Jamshid', 89);
book.book('Shamshod', 3);
console.log(book.booking);

const newBook = book.book;
// xato beryabdi chunki this kalit so'zi bor
// newBook('Xurshid',45)
const book2 = {
  name: 'Magic',
  idCode: 'ShX',
  booking: [],
};

// call method bu method bir obect ichiga bsohqa bir function chaqrib ishlatadi
newBook.call(book2, 'shamshod', 4);
console.log(book2);
newBook.call(book, 'Eldor', 34);
console.log(book);
// function greet(name, id) {
//   console.log(this.animal, "typically sleep between", this.sleepDuration,name,id);
// }

// const obj = {
//   animal: "cats",
//   sleepDuration: "12 and 16 hours",
// };

// greet.call(obj,'jamshid',9); // cats typically sleep between 12 and 16 hours
// console.log(obj)
// console.log(window)

// apply method bu method call method ga o'xshash farqi bu array qabul qiladi argumentiga

const app={
  name:'Red apply',
  idCode:'RA',
  booking:[]
}
// apply
const arr=["jamshid",4]
newBook.apply(app,arr)
console.log(app)
// call
newBook.call(app,'jamshid',4) // ...arr
console.log(app)
// both is the same result


