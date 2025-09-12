export let name: string = 'Jose';
export const age: number = 31;
export const isValid: boolean = true;
name= 'Melisa';
export const templateString = `Backtick
Esto es un string multilinea
que puede tener " dobes ' simples inyectar valores 
skip dollar \$hola
inyectar valores  ${name}
expresiones ${1+1}
numeros : ${age}
booleanos: ${isValid}
`;

// Se recomienda no colocar codigo que se ejecute
//console.log(name); 
//console.log({isValid});