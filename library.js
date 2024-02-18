
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
    this.toggleReadStatus = function () {
        this.hasRead = !this.hasRead;
    };
}

function addBookToLibrary(title, author, pages, hasRead) {
    const newBook = new Book(title, author, pages, hasRead === 'yes');
    myLibrary.push(newBook);
}

addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', 300, false);
addBookToLibrary('To Kill a Mockingbird', 'Harper Lee', 250, false);
addBookToLibrary('1984', 'George Orwell', 350, false);

let newbookbtn = document.querySelector("#new-book-button");
newbookbtn.addEventListener('click', () => newbookform.style.display = 'block');


let newbookform = document.querySelector("#new-book-form");
newbookform.addEventListener('submit', (event) => {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = parseInt(document.getElementById('number-of-pages').value, 10);
    const hasRead = document.getElementById('hasRead').value;

    if (!title || !author || isNaN(pages) || (hasRead !== 'yes' && hasRead !== 'no')) {
        alert("Invalid input. Please make sure to provide valid values.");
        return;
    }

    addBookToLibrary(title, author, pages, hasRead);
    displayBooks();
    newbookform.style.display = 'none';
    newbookform.reset();
});



function displayBooks() {
    const bookContainer = document.getElementById('book-container');

    bookContainer.innerHTML = '';

    // Loop through the myLibrary array
    myLibrary.forEach((book, index) => {
        const card = document.createElement('div');
        card.classList.add('book-card');

        card.innerHTML = `
            <h2>${book.title}</h2>
            <p><strong>Author:</strong> ${book.author}</p>
            <p><strong>Pages:</strong> ${book.pages}</p>
            <p class="read-status"><strong>Read Status:</strong> ${book.hasRead ? 'Read' : 'Not Read Yet'}</p>
            <button class="toggle-read-status" onclick="toggleReadStatus(${index})">Toggle Read Status</button>
            <button class="close-button" onclick="removeBook(${index})">Remove Book</button>
        `;
        bookContainer.appendChild(card);
    });
}
displayBooks();

function toggleReadStatus(index) {
    myLibrary[index].toggleReadStatus();
    displayBooks();
}



function removeBook(index) {
    myLibrary.splice(index, 1);
    displayBooks(); 
}

const closeFormBtn = document.getElementById('close-form-btn');
closeFormBtn.addEventListener('click', () => {
    newbookform.style.display = 'none';
});




