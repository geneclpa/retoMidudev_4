/*
Página web: https://adventjs.dev/
Challenges: 4

    ¡Es hora de poner el árbol de navidad en casa! 🎄

    Para ello vamos a crear una función que recibe la altura del árbol, que será un entero positivo del 1 a, como máximo, 100.

    Si le pasamos el argumento 5, se pintaría esto:

    Ver ejemplo en la página web referenciada arriba.

    Creamos un triángulo de asteríscos * con la altura proporcionada y, a los lados, usamos el guión bajo _ para los espacios. Es muy importante que nuestro árbol siempre tenga la misma longitud por cada lado.

    Todos los árboles, por pequeños o grandes que sean, tienen un tronco de dos líneas de #.

    Otro ejemplo con un árbol de altura 3.

    Ver ejemplo en la página web referenciada arriba.

    Ten en cuenta que el árbol es un string y necesitas los saltos de línea \n para cada línea para que se forme bien el árbol.
*/

let heigth = 7;
let guiones = heigth * 2;
let tree = '';
let counter = 1;

for(let i = 0; i < heigth; i++){
    if(heigth === 1){
        tree += '_'.repeat(heigth) + '*'.repeat(counter) + '_'.repeat(heigth) + '\n';
    }else{
        tree += '_'.repeat(Math.round(guiones) / 2) + '*'.repeat(counter) + '_'.repeat(Math.round(guiones) / 2) + '\n';
        guiones = Math.round(guiones) - 2;
        counter = counter + 2;
    }
}

for(let i = 0; i < 2; i++){
    if(heigth === 1) heigth = 2;
    tree += '_'.repeat(heigth) + '#' + '_'.repeat(heigth) + '\n';
}

console.log(tree);