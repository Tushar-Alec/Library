
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

function addBookToLibrary(title, author, pages, hasRead) {
    const newBook = new Book(title, author, pages, hasRead === 'yes');
    myLibrary.push(newBook);
}

// Example: Manually add a few books to the array
addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', 300, false);
addBookToLibrary('To Kill a Mockingbird', 'Harper Lee', 250, false);
addBookToLibrary('1984', 'George Orwell', 350, true);
addBookToLibrary('1984', 'George Orwell', 350, true);
addBookToLibrary('1984', 'George Orwell', 350, true);
addBookToLibrary('1984', 'George Orwell', 350, true);
addBookToLibrary('1984', 'George Orwell', 350, true);


let newbookbtn = document.querySelector("#new-book-button");
let newbookform = document.querySelector("#new-book-form");
newbookbtn.addEventListener('click', () => newbookform.style.display = 'block');

function displayBooks() {
    const bookContainer = document.getElementById('book-container');

    // Clear existing book cards
    bookContainer.innerHTML = '';

    // Loop through the myLibrary array
    myLibrary.forEach(book => {
        // Create a div for each book card
        const card = document.createElement('div');
        card.classList.add('book-card');

        // Fill the card with book information
        card.innerHTML = `
            <h2>${book.title}</h2>
            <p><strong>Author:</strong> ${book.author}</p>
            <p><strong>Pages:</strong> ${book.pages}</p>
            <p><strong>Read Status:</strong> ${book.hasRead ? 'Read' : 'Not Read Yet'}</p>
        `;

        // Append the card to the book container
        bookContainer.appendChild(card);
    });
}

// Call the displayBooks function to show the books on the page
displayBooks();
