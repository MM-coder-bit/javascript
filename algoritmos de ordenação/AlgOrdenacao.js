// Precos do livros
const precosLivros = [25,15,30,50,45,20];

let maisBarato = 0; // Valor do menor valor

// 'For' resposável por varrer todo o array
for (let atual = 0; atual < precosLivros.length; atual++) 
{
    if (precosLivros[atual] < precosLivros[maisBarato]) // se o valor do index atual for menor que index o ultimo index do menor valor
    {
        maisBarato = atual; // atual se torna mais barato
    }    
}

console.log(`O livro mais barato custa ${precosLivros[maisBarato]}`)
