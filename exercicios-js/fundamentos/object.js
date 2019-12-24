//par de chaves indica um objeto criando de forma literal
const prod1 = {};
//nome criado dinamicamente
prod1.nome = 'Celular Ulta Mega';
prod1.preco = 4998.90;
//evitar atributos com espaço (notação com colchetes)
prod1['Desconto Legal'] = 0.40;

console.log(prod1);

//outra notação
const prod2 = 
{
    nome: 'Camisa Polo',
    preco: 79.90,
    obj : 
    {
        blabla : 1,
        //obj é numero de obj aninhado
        obj: 
        {
            blabla: 2
        }
    }
}

//json
'{ "nome": "Camisa Polo", "preco": 79.90 }'
console.log(prod2);