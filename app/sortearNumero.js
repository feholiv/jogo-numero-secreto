const menorValor = 10;
const maiorValor = 150;
const numeroSecreto = gerarNumero();

function gerarNumero(){
    return parseInt(Math.random() * maiorValor + 1) // + 1, porque o math ramdom nunca conta o 1, ou seja, só mostrará de 0 a 100, por exeplo, todos os numeros menos o 1 e o 100
}

const elementoMenorValor = document.getElementById('menor-valor')
elementoMenorValor.innerHTML = menorValor

const elementoMaiorValor = document.getElementById('maior-valor')
elementoMaiorValor.innerHTML = maiorValor