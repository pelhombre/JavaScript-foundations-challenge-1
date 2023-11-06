/*
    Create a program that starts with a number variable.
    The program will return the variable is even or odd.

    Change the variable to test it works for different cases.
    Print result.

    HINT: modulus operator ( % ) is your friend
*/

let number = 7;

if (number % 2 === 0) {
    console.log(number + " Even.");
} else {
    console.log(number + " Odd.");
}

number = 2;

if (number % 2 === 0) {
    console.log(number + " Even.");
} else {
    console.log(number + " Odd.");
}
