const heroes = ['Batman', 'Superman', 'Flash', 'Aquaman'];
const heroesCopy = heroes;

//Ordenar con na copia
const sortedHeroes = heroes.toSorted();

//Ordenar y dejar a la inversa
heroes.sort();
//heroes.reverse();
const reversedHeroes = heroes.toReversed();

//slice -> toSplice para no mutar el primer arreglo
//const deleteHero = heroes.splice(0, 2, 'Green Lanter');
const deleteHero = heroes.toSpliced(0, 2, 'Green Lanter');


console.log(heroes);
console.log(sortedHeroes);
console.log(reversedHeroes);
console.log(deleteHero);