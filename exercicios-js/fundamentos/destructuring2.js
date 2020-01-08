//array
const [a] = [10];
console.log(a); 

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8];
console.log(n1, n3, n5, n6);

/*ignora o primeiro elemento doa array, e o segundo elemento
é um array com o primeiro elemento ignorado
*/
const [ , [ , nota]] = [[, 8, 8], [9, 6, 8]]; 
console.log(nota); // 6