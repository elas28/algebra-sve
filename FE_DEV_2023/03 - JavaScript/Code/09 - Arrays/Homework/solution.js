const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;
let count = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        sum = sum + numbers[i];
        count++;
    }
}

if (count === 0) {
    console.log("No even numbers found in the array.");
} else {
    const average = sum / count;
    console.log("The average of even numbers in the array is:", average);
}