// Esse código é uma implementação de um algoritmo de busca binária, que é um algoritmo de busca
// eficiente para encontrar um valor em uma lista ordenada.
// A primeira linha do código importa um array de livros ordenado pelo preço, 
// que será utilizado para a busca. Em seguida, há uma função chamada "busca" que recebe quatro 
// parâmetros: um array, dois índices que indicam o intervalo da busca e um valor que será buscado 
// nesse intervalo.
// A primeira linha da função calcula o índice do elemento do meio do intervalo utilizando a 
// fórmula "(de + ate) / 2", arredondando para baixo com a função "Math.floor()". 
// Em seguida, a função armazena o valor do elemento do meio em uma variável chamada "atual".
// A partir daí, a função realiza uma série de comparações para determinar em qual metade do 
// intervalo o valor buscado está. Se o valor buscado for igual ao preço do livro atual, 
// a função retorna o índice desse livro na lista.
// Se o valor buscado for menor que o preço do livro atual, a função chama a si mesma com uma nova 
// busca no intervalo que vai de "de" até "meio-1", ou seja, a metade inferior do intervalo. 
// Se o valor buscado for maior que o preço do livro atual, a função chama a si mesma com uma nova 
// busca no intervalo que vai de "meio+1" até "ate", ou seja, a metade superior do intervalo.
// Por fim, o código chama a função de busca, passando o array de livros ordenados, o índice inicial
// (0), o índice final (tamanho do array - 1) e o valor buscado (50). O resultado da busca é 
// impresso no console com a função "console.log()".
// No caso específico deste código, ele busca o livro que tem o preço igual a 50 e retorna o 
// índice desse livro no array de livros ordenados. Se o livro não for encontrado, 
// a função retorna -1.

const listaLivros = require('./arrayOrdenado');

function busca(array, de, ate, valorBuscado) 
{
  console.log('de,ate',de,ate);
  const meio = Math.floor((de + ate) / 2);
  const atual = array[meio]; // acessando o objeto

  if (de > ate) 
  {
    return -1; // retorna -1 se não encontrar o valor
  }

  if (valorBuscado === atual.preco) 
  {
    return meio;
  }

  if (valorBuscado < atual.preco) 
  { 
    // recursão
    // busca do inicio até o index central (-1)
    return busca(array, de, meio - 1, valorBuscado);
  }

  if (valorBuscado > atual.preco) 
  {
    // recursão
    // busca do meio (+1) até o final
    return busca(array, meio + 1, ate, valorBuscado);
  }
}

console.log(busca(listaLivros, 0, listaLivros.length - 1, 78));




