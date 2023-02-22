const livros = require('./listaLivros'); // recebe obj() do arquivo listaLivros.js

function menorValor(arrProdutos,posInicial)
{
    let maisBarato = posInicial; // Valor do menor valor

    // 'For' resposável por varrer todo o array
    for (let atual = posInicial; atual < arrProdutos.length; atual++) 
    {
        if (arrProdutos[atual].preco < arrProdutos[maisBarato].preco) // se o valor do index atual for menor que index o ultimo index do menor valor
        {
            maisBarato = atual; // atual se torna mais barato
        }    
    }
    return maisBarato;
}
module.exports = menorValor;