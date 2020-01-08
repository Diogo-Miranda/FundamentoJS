//utilizando array
function rand([min = 0, max = 1000])
{
    if (min > max) 
    {
        //destructuring 
        [min, max] = [max, min];
    }
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

console.log(rand([50, 40]));