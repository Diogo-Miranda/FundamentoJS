let numero = 1;
{
    //let só se comporta dentro do escopo
    //variavel (var) : escopo global, escopo de função
    //variavel (let) : escopo global, escopo de função, escopo de bloco
    let numero = 2;
    console.log('dentro = ', numero); // 2
}
console.log('fora =', numero); // 1