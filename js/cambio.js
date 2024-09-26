const apiKey = "9c1c23f69e9b81d85be54862";
const apiUrl = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/BRL`
const valorDolar = document.querySelector('.dolarValor');
const valorEuro = document.querySelector('.euroValor');
const valorIene = document.querySelector('.yenValor');
const usdPreco = document.querySelector('#usdPreco');
const euroPreco = document.querySelector('#euroPreco');
const yenPreco = document.querySelector('#yenPreco');
const btnConv = document.querySelector('.btn');

async function mostrarValores() {
    const inputValor = document.getElementsByClassName('valorBRL').value;
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new error('erro na network');
        }
        const data = await response.json();
        valorDolar.innerHTML = `dolar para BRL: ${(1 / data.conversion_rates.USD).toFixed(2)}`;
        valorEuro.innerHTML = `euro para BRL: ${(1 / data.conversion_rates.EUR).toFixed(2)}`;
        valorIene.innerHTML = `iene para BRL: ${(1 / data.conversion_rates.JPY).toFixed(2)}`;

        btnConv.addEventListener('click', function () {
            const inputValor = document.querySelector('.valorBRL').value;
            const inputValorFloat = parseFloat(inputValor);
       

            const convDolar = (1 / data.conversion_rates.USD);
            const totalDolar = (inputValorFloat * convDolar).toFixed(2);
            const convEuro = (1 / data.conversion_rates.EUR);
            const totalEuro = (inputValorFloat * convEuro).toFixed(2);
            const convYen = (1 / data.conversion_rates.JPY);
            const totalYen = (inputValorFloat * convYen).toFixed(2);

            usdPreco.innerHTML = `Preço Convertido: ${totalDolar} BRL`;
            euroPreco.innerHTML = `Preço Convertido: ${totalEuro} BRL`;
            yenPreco.innerHTML = `Preço Convertido: ${totalYen} BRL`;
        });

    } catch (error) {
        console.error('Error fetching exchange rates:', error);
    }
}



document.addEventListener('DOMContentLoaded', mostrarValores());
