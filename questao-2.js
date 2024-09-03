let n = 1205781798;

function fibonacci(n) {

    let a = 0, b = 1

    while (a < n) {
        let temp = a;
        a = b;
        b = temp + b;
    }

    return a === n
}

const resultado = fibonacci(n) ?
    `${n} pertence à sequência de Fibonacci.` :
    `${n} não pertence à sequência de Fibonacci.`;

console.log(resultado);

