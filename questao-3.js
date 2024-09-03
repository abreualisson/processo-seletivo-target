const fs = require('fs');
const filePath = 'dados.json';


function calcularFaturamento(filePath) {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

    const faturamentos = data
        .filter(entry => entry.valor > 0)
        .map(entry => entry.valor);

    if (faturamentos.length === 0) {
        console.log('Não há dias com faturamento.');
        return;
    }

    const menorFaturamento = Math.min(...faturamentos);
    const maiorFaturamento = Math.max(...faturamentos);

    let somaFaturamentos = 0;
    for (let i = 0; i < faturamentos.length; i++) {
        somaFaturamentos += faturamentos[i];
    }
    const mediaMensal = somaFaturamentos / faturamentos.length;

    const diasAcimaMedia = faturamentos.filter(f => f > mediaMensal).length;

    console.log(`O menor valor de faturamento foi: ${menorFaturamento}`);
    console.log(`O maior valor de faturamento foi: ${maiorFaturamento}`);
    console.log(`Número de dias superior à média mensal: ${diasAcimaMedia}`);
}

calcularFaturamento(filePath);
