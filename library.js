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

const book1 = new Book('70 days', 'abc' , '240' , 'read');

const book2 = new Book('The art of war', 'sun tzu' , '200' ,'');

console.log(book2.info());