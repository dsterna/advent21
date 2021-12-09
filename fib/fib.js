



function fib(n, memo = {}) {
    if (n in memo) {
        return memo[n]
    }
    if (n <= 1) return 1
    memo[n] = fib(n - 1, memo) + fib(n - 1, memo)
    return memo[n]
}


console.log(fib(700))