const escola = "Cod3r";

console.log(escola.charAt(4));
console.log(escola.charAt(5));  //retorna valor vazio

console.log(escola.charCodeAt(3)) //retorna valor na tabela Ascii

console.log(escola.indexOf("3")); // retorna a index 

console.log(escola.substring(1)); // retorna a partir do indice 1

console.log(escola.substring(0, 3)); // vai do indice 0 até o 3 sem inclui-lo

console.log("Escola ".concat(escola).concat("!"));

console.log(escola.replace(3, 'e')); //substitui 3 por "e"
console.log(escola.replace(/\w/g, "e")); // substitutui tudo por "e"
console.log(escola.replace(/\d/, "e")); // substitutui todos os digitos por "e"

console.log("Diogo,Erika,Ana".split(','));
const nomes = ("Diogo,Erika,Ana").split(',');
console.log(nomes);