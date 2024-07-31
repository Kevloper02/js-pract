const myArr = [1, 2, 3, 4, 5, true, "Krish"]
// console.log(myArr);
// console.log(typeof myArr);
// slice does not manipulate original array but splice does

const marvel_heroes = ['hulk', 'ironman', 'spiderman']
const dc_heroes = ['batman', 'flash', 'superman']

const all_new_heroes = [...marvel_heroes, ...dc_heroes]
console.log(all_new_heroes); //if used concat then it will merge it but spread will spread the arrays