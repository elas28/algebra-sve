const library = {
    name: 'MyLibrary',
    books: [
        { title: 'Book 1', author: 'Author 1' },
        { title: 'Book 2', author: 'Author 2' },
    ],
    listBooks() {
        // Implement the logic to list books
    },
};

const patron = {
    name: 'Patron 1',
    booksBorrowed: [],
    borrowBook(book) {
        // Implement the logic to borrow a book
    },
};

// Demonstrate the "this" keyword in various contexts
// Inside the listBooks method
library.listBooks();

// Inside the borrowBook method
patron.borrowBook({ title: 'Book 3', author: 'Author 3' });