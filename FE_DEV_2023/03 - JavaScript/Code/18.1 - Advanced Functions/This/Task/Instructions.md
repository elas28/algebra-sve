
### Objective
Practice working with the "this" keyword in JavaScript and understand its behavior in different contexts.

### Scenario
You are building a small JavaScript application for a library that manages books and patrons. In this exercise, you will explore how the "this" keyword behaves in various situations within your application.

### Instructions
1. Create an object called `library` with the following properties:
   - `name`: A string representing the library's name.
   - `books`: An array of book objects, where each book has a `title` and `author`.

2. Define a method within the `library` object called `listBooks` that logs the titles and authors of all the books in the library.

3. Create a `patron` object with the following properties:
   - `name`: A string representing the patron's name.
   - `booksBorrowed`: An array to keep track of the books the patron has borrowed.

4. Define a method within the `patron` object called `borrowBook` that takes a book object as a parameter and adds it to the `booksBorrowed` array.

5. Use the `library` and `patron` objects to demonstrate how the "this" keyword works in the following contexts:
   - Inside the `listBooks` method of the `library` object.
   - Inside the `borrowBook` method of the `patron` object.