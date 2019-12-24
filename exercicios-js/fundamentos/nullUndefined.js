let valor;// não inicializada
console.log(valor);

valor = null; //ausencia de valor
console.log(valor);

const produto = {};
console.log(produto.preco); //undefined
console.log(produto);

produto.preco = 3.50;
console.log(produto);

produto.preco = undefined // evitar usar isso
console.log(!!produto.preco);
// delete produto.preco;
console.log(produto);

produto.preco = null // sem preço
produto.preco = 0;