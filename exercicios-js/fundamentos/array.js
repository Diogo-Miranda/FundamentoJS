//declarando de forma literal
const valores = [7.7, 8.9, 6.3, 9.2];
console.group(valores[0], valores[3]);
console.log(valores[4]);

valores[4] = 10;
console.log(valores[4]);
//tamanho
console.log(valores.length);

//push adiciona novos alementos;
valores.push({id: 3}, false, null, 'teste');
console.log(valores);

//retira o ultimo valor do array 
console.log(valores.pop());

//deletar algum item
delete valores[0];
console.log(valores);

//array é object
console.log(typeof valores);