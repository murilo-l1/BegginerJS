function times(a, b) {
    return b === 0
        ? 0
        : a + times(a, b - 1);
}

console.log(times(8, 2));

const is_even = n => n % 2 === 0;

function fast_times(a, b){
    const double = x => x + x;

    const halve = x => x / 2;

    return b === 1
        ? a
        : b === 0 || a === 0
        ? 0
        : is_even(b)
        ? double(fast_times(a, halve(b)))
        : a + fast_times(a, b - 1)
}
console.log(fast_times(5, 5));

function fib(n){
    return n === 0
           ? 0
           : n === 1
           ? 1
           : fib(n - 1) + fib(n - 2);
}
console.log(fib(6));

function fast_fib(n){
    function fib_iter(a, b, p, q, count){
        return count === 0
               ? b
               : is_even(count)
               ? fib_iter(a, b, p * p + q * q, (2 * p * p + q * q) , count / 2)
               : fib_iter(b * q + a * q + a * p, b * p + a * q, p, q, count - 1);
    }
    return fib_iter(1, 0, 0, 1, n);
}
console.log(fast_fib(6))