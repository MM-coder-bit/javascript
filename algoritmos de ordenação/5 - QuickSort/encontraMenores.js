const listaLivros = require('./array')

// A função "encontraMenores" recebe dois parâmetros: um objeto "pivo" e um array "array". 
// Ela itera sobre o array e conta quantos elementos possuem um preço menor que o preço do objeto pivo. 
// Em seguida, a função chama a função "trocaLugar" para posicionar o pivo em um índice correto do array.
function encontraMenores(pivo, array) 
{
  let menores = 0;

  for(let atual = 0; atual < array.length; atual++) 
  {
    let produtoAtual = array[atual]
    if (produtoAtual.preco < pivo.preco) 
    {
      menores++
    }
  }

  trocaLugar(array, array.indexOf(pivo), menores)
  return array
}

// A função "trocaLugar" recebe três parâmetros: o array, o índice do elemento a ser trocado (de) 
// e o índice do elemento pelo qual ele será substituído (para). A função troca a posição dos 
// elementos de e para no array.
function trocaLugar(array, de, para) 
{
  const elem1 = array[de]
  const elem2 = array[para]

  array[para] = elem1
  array[de] = elem2
}

// A função "divideNoPivo" recebe um array e seleciona um elemento do meio como o pivo. 
// Em seguida, ela itera sobre o array e troca a posição dos elementos menores que o pivo com os
// elementos maiores que o pivo. No final, a função retorna o array.
function divideNoPivo(array) 
{
  let pivo = array[Math.floor(array.length / 2)];
  encontraMenores(pivo, array);
  let valoresMenores = 0;

  for(let analisando = 0; analisando < array.length; analisando++) 
  {
    let atual = array[analisando];
    if(atual.preco <= pivo.preco && atual !== pivo) 
    {
      trocaLugar(array, analisando, valoresMenores)
      valoresMenores++
    }
  }

  return array;
}

// console.log(divideNoPivo(listaLivros));
// console.log(encontraMenores(listaLivros[2], listaLivros));

module.exports = trocaLugar;