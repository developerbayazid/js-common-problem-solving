// We make a animals counter

function animalsCounter(depth) {
    let animals = 0;

    if (depth <= 10) {
        animals = depth * 50;
    } else if (depth <= 20) {
        let firstPart = 10 * 50;
        let remaining = depth - 10;
        let secondPart = remaining * 100;
        animals = firstPart + secondPart;
    } else {
        let firstPart = 10 * 50;
        let secondPart = 10 * 100;
        let remaining = depth - 20;
        let thirdPart = remaining * 300;
        animals = firstPart + secondPart + thirdPart;
    }

    return animals;
}

let result = animalsCounter(50);

console.log(result);
