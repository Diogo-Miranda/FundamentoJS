const nome = 'Rebeca';
const concatenacao = "Olá " + nome + '!';
const template = `
     Olá
     ${nome}!  `;

console.log(concatenacao, template);

//empressoes....
console.log(`1 + 1 = ${1 + 1}`);

//colocar em maiusculo com função arrow
const up = texto => texto.toUpperCase();
console.log(`Ei... ${up('cuidado')}!`)