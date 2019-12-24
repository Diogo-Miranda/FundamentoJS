let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

isAtivo = 1;
console.log(!!isAtivo);

console.log('os verdadeiros...')
//todos numeros inteiros são verdadeiros
console.log(!!3);
console.log(!!-1);
//espaço vazio
console.log(!!' ');
//array
console.log(!![]);
//objeto
console.log(!!{});
//tipo infinity
console.log(!!Infinity);
//atribuições
console.log(!!(isAtivo = true));

console.log('os falsos...');
console.log(!!0);
//string vazia
console.log(!!'');
//null
console.log(!!null);
//NaN
console.log(!!NaN);
//undefined
console.log(!!undefined);
//atribuições
console.log(!!(isAtivo = false));

console.log("pra finalizar...");
//verdadeiro
console.log(!!("" || null || 0 || ' '));

let nome = "";
console.log(nome || 'Desconhecido');

nome = "Lucas";
console.log(nome || 'Desconhecido');
