const livros = require('./listaLivros');
const menorValor = require('./menorValor');

 // verifica todo o array de (livros -1)
for (let atual = 0; atual < livros.length - 1; atual++) 
{
  let menor = menorValor(livros, atual)            // chama a função que retorna o menor valor

  let livroAtual = livros[atual];                  // var recebe a posição atual do index
  console.log('posição atual', atual)              // modo debug
  console.log('livro atual', livros[atual])        // modo debug
  let livroMenorPreco = livros[menor];             // var recebe a posição do menor valor
  console.log('livro menor preço', livros[menor])  // modo debug

  livros[atual] = livroMenorPreco 
  livros[menor] = livroAtual
}
console.log(livros)