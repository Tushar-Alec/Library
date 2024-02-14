const myLibrary = [];

function Book(title, author, pages, hasRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasRead = hasRead;
    this.info = function () {
        const readStatus = this.hasRead ? "read" : "not read yet";
        return `${this.title} by ${this.author}, ${this.pages} pages, ${readStatus}`;
    };
}
let pages = 0;

function addBookToLibrary() {
    // const title = prompt('Please enter the book\'s title:');
    // const author = prompt('Enter the author\'s name:');
    // const pages = parseInt(prompt('How many pages does this book have?'), 10);
    // const hasRead = prompt("Have you read the book? (yes/no)").toLowerCase();

    // if (!title || !author || isNaN(pages) || (hasRead !== 'yes' && hasRead !== 'no')) {
    //     alert("Invalid input. Please make sure to provide valid values.");
    //     return;
    // }

    const newBook = new Book(title, author, pages, hasRead === 'yes');
    myLibrary.push(newBook);
}

addBookToLibrary();
console.log(myLibrary);

let newbookbtn = document.querySelector("#new-book-button");
let newbookform = document.querySelector("#new-book-form");
newbookbtn.addEventListener('click', () => newbookform.style.display = 'block');



