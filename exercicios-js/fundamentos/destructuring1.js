// novo recurso do ES2015

const pessoa = 
{
    nome: 'Ana',
    idade: 5,
    endereco: 
    {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

// operador destructuring
const { nome, idade } = pessoa;
console.log(nome, idade);

const { nome: n, idade: i } = pessoa; 
console.log(n, i);

const { sobrenome, bemHumorada = true} = pessoa;
console.log(sobrenome, bemHumorada);

//extrai de endereço e não de pessoa diretamente
const { endereco: { logradouro, numero, cep } } = pessoa;
console.log(logradouro, numero, cep);