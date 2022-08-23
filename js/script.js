// Programming Foundations - Module 1
// Lesson Task 4 Questions

// Question 1
// Write a loop that logs the numbers 0 to 7.

for (var i = 0; i <= 7; i++) {
    console.log(i);
}

// Question 2
// Write a loop that logs the numbers 10 to 1. Count down from 10 to 1.

for (var i = 10; i >= 1; i--) {
    console.log(i);
}

// Question 3
// Write a loop that counts from 10 to 20, and log only the odd numbers. 11, 13, 15, etc

for (var i = 10; i <= 20; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}
