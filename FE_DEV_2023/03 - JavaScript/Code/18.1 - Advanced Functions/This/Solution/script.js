const library = {
    name: 'MyLibrary',
    books: [
        { title: 'Book 1', author: 'Author 1' },
        { title: 'Book 2', author: 'Author 2' },
    ],
    listBooks() {
        console.log(`Books in ${this.name}:`);
        this.books.forEach((book) => {
            console.log(`${book.title} by ${book.author}`);
        });
    },
};

const patron = {
    name: 'Patron 1',
    booksBorrowed: [],
    borrowBook(book) {
        this.booksBorrowed.push(book);
        console.log(`${this.name} borrowed ${book.title}`);
    },
};

library.listBooks();

patron.borrowBook({ title: 'Book 3', author: 'Author 3' });
