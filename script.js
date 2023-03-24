'use strict';

const book = [];
const createBook = function (
  name = 'Nok',
  passenger = 1,
  price = passenger * 100
) {
  const books = {
    name,
    passenger,
    price,
  };
  console.log(books);
  book.push(books);
};
createBook('Buyuklik', 4, 500);
createBook('Olma', 8);
createBook();
console.log(book);

//////////////////////////////////// callback functions //////////////////
// const arr=['jamshid','xatamov']
// console.log(arr.join(','))

const addWords = function (str) {
  const newArray = str.split(' ');
  return newArray;
};

const upperFirstWord = function (str) {
  const [first, ...other] = str.split(' ');
  return [first.toUpperCase(), ...other].join();
};

const transform = function (str, callback) {
  console.log('Orginal str:', str);
  console.log('Transformed str:', callback(str));
  console.log('Func name:', callback.name);
};

transform('jamshid is very interested person !', addWords);
transform('jamshid is very interested person !', upperFirstWord);

//////////////////// returing functions ////////////////

const greet = str => {
  return name => {
    console.log(`${str} ${name}`);
  };
};
const greetArr = str => name => console.log(`${str} ${name}`);
// bu yerda greet() function ning return qilib yangi function qaytaryabdi.Biz uni yangi variablega saqlayabmiz
const greeter = greet('Hey');
greeter('Jamshid');
greeter('Shamshod');

// 2chi usuli returndagi functionga qiymat berishni
greet('Hello')('jamshid')
greetArr('Hello')('shamshod')
