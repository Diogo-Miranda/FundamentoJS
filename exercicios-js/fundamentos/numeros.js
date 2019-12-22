//Criar números
const peso1 = 1.0;
const peso2 = Number('2.0');

console.log(peso1, peso2);

console.log(Number.isInteger(peso1));

const avaliacao1 = 8.22221;
const avaliacao2 = 5.22210;
 
const total = avaliacao1 * peso1 + avaliacao2 * peso2;
const media = (total) / (peso1 + peso2);

console.log(media.toFixed(2));

if(media > 6)
{
    console.log("Passou");
}else
{
    console.log("Reprovou");
}

console.log(media.toString()); //transforma em String

console.log(media.toString(2)); //transforma em binário