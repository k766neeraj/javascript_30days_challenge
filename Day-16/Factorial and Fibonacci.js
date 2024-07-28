// 1. Factorial and Fibonacci Script: Write a script that includes recursive functions to calculate the factorial and Fibonacci numbers.


function factorial(n) {
    if (n == 1) {
        return n
    }
    return factorial(n - 1) * n
}


console.log("Factorial of 5:", factorial(5))
console.log("Factorial of 6:", factorial(6))


function fibonacci(n) {
    if (n == 0 || n == 1) {
        return n
    }
    return fibonacci(n - 1) + fibonacci(n - 2)
}

console.log("Fibonacci of 5:", fibonacci(5))
console.log("Fibonacci of 3:", fibonacci(3))
