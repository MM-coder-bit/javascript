const livros = require('./listaLivros') // recebe obj() do arquivo listaLivros.js

let maisBarato = 0; // Valor do menor valor

// 'For' resposável por varrer todo o array
for (let atual = 0; atual < livros.length; atual++) 
{
    if (livros[atual].preco < livros[maisBarato].preco) // se o valor do index atual for menor que index o ultimo index do menor valor
    {
        maisBarato = atual; // atual se torna mais barato
    }    
}

console.log(`O livro mais barato custa ${livros[maisBarato].preco}
e seu nome é ${livros[maisBarato].titulo}`)
