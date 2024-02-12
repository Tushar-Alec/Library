const myLibrary = [];

function Book(title, author, pages , hasRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasRead = hasRead;
    this.info = function() {
        const readStatus = this.hasRead ? "read" : "not read yet";
        return `${this.title} by ${this.author}, ${this.pages} pages, ${readStatus}`;
      };
}


function addBookToLibrary() {
  const  title = prompt( 'Please enter the books title:');
  const author = prompt('Enter the authors name:');
  const pages = prompt('How many pages does this book have?');
  const hasRead = prompt("Have you read the book? (yes/no)").toLowerCase();

const isValidReadStatus = hasRead === 'yes' || hasRead === 'no';
    if (!isValidReadStatus) {
        alert("Invalid input for 'hasRead' field. Please enter 'yes' or 'no'.");
        return;
    }

    const newBook = new Book(title, author, pages, hasRead === 'yes');
    myLibrary.push(newBook);
  }

addBookToLibrary();
console.log(myLibrary);