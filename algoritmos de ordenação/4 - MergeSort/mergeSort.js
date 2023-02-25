// Este é um algoritmo de ordenação Merge Sort que funciona para ordenar um array de objetos de produtos.
// O código recebe o array de produtos, chama a função mergeSort para realizar a ordenação e imprime o array ordenado.
const listaLivros = require('./array');

// A função mergeSort é chamada recursivamente para dividir o array original em duas partes até que o tamanho do array
// seja 1 ou menor. Então, a função ordena é chamada para juntar as duas partes em um array ordenado.
function mergeSort(array, nivelAninhamento = 0) {

  console.log(`nível de aninhamento: ${nivelAninhamento}`)
  console.log(array)

  if(array.length > 1) 
  {
    const meio = Math.floor(array.length / 2);                                       // pega o meio do array                             
    const parte1 = mergeSort(array.slice(0, meio), nivelAninhamento + 1);            // função recursiva - array do o até o meio
    const parte2 = mergeSort(array.slice(meio, array.length), nivelAninhamento + 1); // função recursiva - array do meio até o fim
    array = ordena(parte1, parte2);                                                  // chama a função de ordenação
  }

  return array;
}

// A função ordena compara os preços dos produtos nas duas partes do array e adiciona os produtos em um novo array 
// resultado em ordem crescente de preços.
function ordena(parte1, parte2) 
{
  let posicaoAtualParte1 = 0 
  let posicaoAtualParte2 = 0
  const resultado = []

  while (posicaoAtualParte1 < parte1.length && posicaoAtualParte2 < parte2.length) 
  {
    let produtoAtualParte1 = parte1[posicaoAtualParte1]
    let produtoAtualParte2 = parte2[posicaoAtualParte2]

    if (produtoAtualParte1.preco < produtoAtualParte2.preco) 
    {
      resultado.push(produtoAtualParte1) // envia para o final do array resultado
      posicaoAtualParte1++
    } else 
    {
      resultado.push(produtoAtualParte2) // envia para o final do array resultado
      posicaoAtualParte2++
    }
  }
  // função tenaria <condição>?<if>:<else>
  return resultado.concat(posicaoAtualParte1 < parte1.length
    ? parte1.slice(posicaoAtualParte1)
    : parte2.slice(posicaoAtualParte2))
}

// Para ajudar na depuração, o nível de aninhamento e o array atual são impressos no console a cada chamada da função
// mergeSort.
console.log(mergeSort(listaLivros));