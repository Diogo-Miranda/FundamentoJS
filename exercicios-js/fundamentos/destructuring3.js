//vou passar um objeto comp parâmetro
function rand({ min = 0, max = 1000})
{
    const valor = Math.random() * (max - min) + min;
}

console.log(rand({ max: 50, min: 40}));

const obj = { max: 50, min: 40};
console.log(rand(obj));

//pega o valor padrão definido
console.log(rand({min: 955}));
console.log(rand({}));