// Write a function that returns a message using template literals.

function getMessage(name, age) {
    console.log(`Hello ${name}, Your age is ${age}.`);    
}

// Don't change the code below
console.log(getMessage(process.argv[2], process.argv[3]));

module.exports = getMessage;
