function inverterString(str) {
    let resultado = '';

    for (let i = str.length - 1; i >= 0; i--) {
        resultado += str[i];
    }
    return resultado;
}

const stringOriginal = 'Target Sistemas, me dê uma oportunidade.';
const stringInvertida = inverterString(stringOriginal);

console.log(`Original: ${stringOriginal}`);
console.log(`Invertida: ${stringInvertida}`);
