const{edGalho,edFolha} = require('./arrays');

function juntaListas(lista1, lista2)
{
    let listafinal = [];
    let posAtual1 = 0;
    let posAtual2 = 0; 
    let atual = 0;

    while (posAtual1 < lista1.length  && posAtual2 < lista2.length) 
    {
        let prodAtual1 = lista1[posAtual1];
        let prodAtual2 = lista2[posAtual2];

        if (prodAtual1.preco < prodAtual2.preco)
        {
            listafinal[atual] = prodAtual1;
            posAtual1++;
        }
        else
        {
            listafinal[atual] = prodAtual2;
            posAtual2++;  
        }

        atual++
    }

    // Verifica se sobrou itens nas listas e envia para
    // a lista final
    while (posAtual1 < lista1.length) 
    {
        listafinal[atual] = lista1[posAtual1];
        posAtual1++;
        atual++;
    }

    while (posAtual2 < lista2.length) 
    {
        listafinal[atual] = lista2[posAtual2];
        posAtual2++;
        atual++;
    }


    return listafinal;
}

console.log(juntaListas(edGalho,edFolha));