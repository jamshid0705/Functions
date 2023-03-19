'use strict';

const book=[]
const createBook=function(name='Nok',passenger=1,price=passenger*100){
  const books={
    name,
    passenger,
    price
  }
  console.log(books)
  book.push(books)
}
createBook('Buyuklik',4,500)
createBook('Olma',8)
createBook()
console.log(book)
