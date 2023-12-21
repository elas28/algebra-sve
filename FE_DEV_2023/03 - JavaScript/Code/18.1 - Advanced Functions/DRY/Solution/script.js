function isBorrowingLimitExceeded(userType, booksBorrowed) {
    // Define borrowing limits based on user type
    const borrowingLimit = userType === 'premium' ? 10 : 5;

    // Check if borrowing limit is exceeded
    return booksBorrowed > borrowingLimit;
}

// Test the function
console.log(
    'Regular User Limit Exceeded:',
    isBorrowingLimitExceeded('regular', 4)
);
console.log(
    'Premium User Limit Exceeded:',
    isBorrowingLimitExceeded('premium', 8)
);