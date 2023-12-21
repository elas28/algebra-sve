function isRegularUserBorrowingLimitExceeded(booksBorrowed) {
    return booksBorrowed > 5;
}

function isPremiumUserBorrowingLimitExceeded(booksBorrowed) {
    return booksBorrowed > 10;
}

// Test the functions
console.log(
    'Regular User Limit Exceeded:',
    isRegularUserBorrowingLimitExceeded(4)
);
console.log(
    'Premium User Limit Exceeded:',
    isPremiumUserBorrowingLimitExceeded(8)
);