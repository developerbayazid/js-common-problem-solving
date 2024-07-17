//0, 1, 1, 2, 3, 5, 8, 13, 21

const fibonacciRecursive = (num) => {
    if (num == 0) return 0;
    if (num == 1) return 1;
    return fibonacciRecursive(num - 1) + fibonacciRecursive(num - 2);
};
 
let result = fibonacciRecursive(10);

// console.log(result);

function fibonacciSeriesRecursive (num) {
    if(num == 0){
        return [0];
    } 
    else if(num == 1){
        return [0, 1];
    }
    else {
        let fibo = fibonacciSeriesRecursive(num - 1);
        let nextElement = fibo[num -1] + fibo[num -2];
        fibo.push(nextElement);
        return fibo;
    } 
}

let result2 = fibonacciSeriesRecursive(10);

console.log(result2);