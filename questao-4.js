let totalFaturamento = 0;

const faturamentoDetalhado = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
};

for (const valor of Object.values(faturamentoDetalhado)) {
    totalFaturamento += valor;
}

for (const [estado, faturamento] of Object.entries(faturamentoDetalhado)) {
    const percentual = (faturamento / totalFaturamento) * 100;

    console.log(`Percentual de ${estado}: ${percentual.toFixed(2)}%`);
}