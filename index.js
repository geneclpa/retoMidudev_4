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

function createXmasTree(height) {
    if(height > 0 && height <= 100){
        let altura = height;
        let guiones = altura * 2;
        let tree = '';
        let counter = 1;

        for(let i = 0; i < altura; i++){
            if(altura === 1){
                tree += ' ' + '_'.repeat(altura) + '*'.repeat(counter) + '_'.repeat(altura) + '\n';
            }else{
                tree += ' ' + '_'.repeat((Math.round(guiones) / 2) - 1) + '*'.repeat(counter) + '_'.repeat((Math.round(guiones) / 2) - 1) + '\n';
                guiones = Math.round(guiones) - 2;
                counter = counter + 2;
            }
        }

        for(let i = 0; i < 2; i++){
            if(altura === 1){
                tree += ' ' + '_'.repeat(altura) + '#' + '_'.repeat(altura) + '\n';
            }else{
                tree += ' ' + '_'.repeat(altura - 1) + '#' + '_'.repeat(altura - 1) + '\n';
            }
        }

        console.log(tree);

    }else{
        tree = "El número de pisos del árbol debe estar entre 0 y 100";
    }
}

createXmasTree(5);