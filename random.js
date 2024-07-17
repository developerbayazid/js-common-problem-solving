// let num = 4.5;

// let result = Math.floor(num);
// let result2 = Math.ceil(num);
// let result3 = Math.round(num);

function randomNum(num, rand) {
    const generateRandomNumber = [];
    for (let i = 0; i < num; i++) {
        let random = Math.random() * rand;
        let output = Math.round(random);
        generateRandomNumber.push(output);
    }
    return generateRandomNumber;
}

let result = randomNum(5, 6);

console.log(result);
