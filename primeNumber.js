function primeNumber(num) {
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            return 'Not a Prime Number';
        }
        return 'This is a Prime Number';
    }
}

let result = primeNumber(7);

console.log(result);
