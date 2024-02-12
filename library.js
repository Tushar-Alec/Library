function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.info = function() {
        console.log(this.title,"is written by", this.author,"and has",this.pages,"pages.");
      };
}

const book1 = new Book('70 days', 'abc' , '240');

const book2 = new Book('The art of war', 'sun tzu' , '200');

book1.info();
book2.info();