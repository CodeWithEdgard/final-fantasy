
let books = [

       {
              title: "Speaking JavaScript",
              autor: "Axel Rauschmayer",
              pages: 460
       },
       {
              title: "Programming JavaScript Applications",
              autor: "Eric Elliott",
              pages: 254
       },
       {
              title: "Understanding ECMAScript 6",
              autor: "Nicholas C. Zakas",
              pages: 352
       }
]
// Add a new book to the collection: Learning JavaScript Design Patterns, by Addy Osmani, 254 pages.
// Use the appropriate method to do this, which will attach the book at the end of the array.
// Display the length of the array and, in turn, all the book names in the collection.

let newBook = {

       title: "Learning JavaScript Design Patterns",
       autor: "Addy Osmani",
       pages: 254
}
books.push(newBook);

// Use the slice command to copy the last two books to the new array.
let arr = books.slice(-2)

// The first book from the collection is lost in unexplained circumstances.
// You have already accepted the loss, so remove it from the array.
// Which method will you use for this purpose? Display the length of the array and all the names of the books from the collection in turn.

books.shift(0);
console.log(books.length);

console.log(books[0]);
console.log(books[1]);
console.log(books[2]);

// Display the sum of the pages of all the books from the collection.

let totalPages = books[1].pages + books[2].pages + books[0].pages;

console.log(`pages: ${totalPages}`);

let h = "hello";

console.log(h.charAt());
