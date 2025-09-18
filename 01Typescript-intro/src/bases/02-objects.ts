export const pokemonIds = [1, 20, 30, 33, 66];
pokemonIds.push(3);
pokemonIds.push("xxxx");
console.log(pokemonIds);

/*export const pokemon = {
  id: 22,
  name: "Bulbasur",
};*/
interface Pokemon{
    id: number,
    name:string,
    //age?:number
    age?:number|undefined; // ? -> pude ser nulo
}
export const bulbasaur:Pokemon={
    id:4,
    name:'Bulbasaur'
}
export const charmander:Pokemon={
    id: 0,
    name: ""
}

console.log(bulbasaur);
