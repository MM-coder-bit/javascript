// Esse código implementa o algoritmo QuickSort para ordenar um array de livros em ordem crescente de preço.
const listaLivros = require('./array');
const trocaLugar = require('./encontraMenores');

// A função "quickSort" é a função principal do algoritmo e recebe três parâmetros: o array a ser ordenado, 
// o índice esquerdo e o índice direito do subarray que está sendo ordenado. 
// O algoritmo faz uma verificação se o array possui mais de um elemento. 
// Se sim, ele chama a função "particiona" que divide o array em duas partes menores e devolve o índice onde o pivo foi colocado. 
// Em seguida, a função "quickSort" é chamada recursivamente para ordenar os subarrays esquerdo e direito.
function quickSort(array, esquerda, direita) 
{
  if (array.length > 1) 
  {
    let indiceAtual = particiona(array, esquerda, direita);
    if (esquerda < indiceAtual - 1) 
    {
      quickSort(array, esquerda, indiceAtual - 1);
    }
    if (indiceAtual < direita) 
    {
      quickSort(array, indiceAtual, direita)
    }
  }
  return array; // imprime o array de livros ordenado
}

// A função "particiona" recebe três parâmetros: o array, o índice esquerdo e o índice direito. 
// A função seleciona o pivo como o elemento central do array e inicializa dois índices:um para a esquerda e outro para a direita. 
// Em seguida, a função faz um loop enquanto o índice esquerdo for menor ou igual ao índice direito. 
// Dentro do loop, a função move o índice esquerdo até encontrar um elemento maior ou igual ao pivo e 
// move o índice direito até encontrar um elemento menor ou igual ao pivo. 
// Se o índice esquerdo ainda for menor ou igual ao índice direito, a função troca os elementos nas posições do 
// índice esquerdo e direito e incrementa/decrementa os índices, respectivamente. 
// No final, a função retorna o índice esquerdo, que será utilizado para particionar o array em subarrays menores.
function particiona(array, esquerda, direita) 
{
  console.log('array', array)                           // modo Debug
  console.log('esquerda, direita', esquerda, direita)   // modo Debug
  let pivo = array[Math.floor((esquerda + direita) / 2)]// posição do index
  let atualEsquerda = esquerda;                         // 0
  let atualDireita = direita;                           // 10

  while (atualEsquerda <= atualDireita) 
  {
    while (array[atualEsquerda].preco < pivo.preco) 
    {
      atualEsquerda++
    }

    while (array[atualDireita].preco > pivo.preco)
    {
      atualDireita--
    }

    if (atualEsquerda <= atualDireita) 
    {
      trocaLugar(array, atualEsquerda, atualDireita);
      atualEsquerda++;
      atualDireita--;
    }
  }
  return atualEsquerda;
}

// a Função recebe o array, a posição inicial e a posição final
console.log(quickSort(listaLivros, 0, listaLivros.length - 1)) 



