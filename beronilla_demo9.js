const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter 3 fruits: ", (input) => {
    let fruits = input.split(" ");

    console.log(fruits);

    rl.close();
});