### Task 
Avoid Code Duplication

### Objective
Practice applying the DRY (Don't Repeat Yourself) principle to avoid code duplication and improve code maintainability.

### Scenario
You are developing a JavaScript application for a library. The library has two types of users: regular users and premium users. Both user types can borrow books, but they have different borrowing limits. Regular users can borrow up to 5 books at a time, while premium users can borrow up to 10 books at a time. You have created functions to check if a user has exceeded their borrowing limit, but you've noticed that the code for checking the limits is duplicated for regular and premium users. Your task is to refactor the code to eliminate duplication.

### Instructions
Create a function isBorrowingLimitExceeded that takes two parameters: userType (a string, either "regular" or "premium") and booksBorrowed (a number, the number of books borrowed by the user).

Refactor the code to avoid repeating the logic for checking borrowing limits for regular and premium users. Instead, use the userType parameter to determine the borrowing limit.

Test the function by checking if regular users and premium users have exceeded their borrowing limits. Assume that regular users have borrowed 4 books, and premium users have borrowed 8 books.