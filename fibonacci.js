
//0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144

// fibo[2] = fibo[2-1] + fibo[2-2]
// fibo[3] = fibo[3-1] + fibo[3-2]
// fibo[4] = fibo[4-1] + fibo[4-2]
// fibo[5] = fibo[5-1] + fibo[5-2]
// fibo[i] = fibo[i-1] + fibo[i-2]

const fibonacci = (num) => {
    const fibo = [0, 1];
    for(let i = 2; i <= num; i++){
        fibo[i] = fibo[i-1] + fibo[i-2];
    }
    return fibo;
}

let fib = fibonacci(10);

console.log(fib);