/*
  A literal is a more concrete sub-type of a collective type. What this means is that
  "Hello World" is a string, but a string is not "Hello World" inside the type system.

  There are three sets of literal types available in TypeScript today: strings, numbers,
  and booleans; by using literal types you can allow an exact value which a string, number,
  or boolean must have.
*/

let example1: 200 = 200;
let example2 = 10 as const; // same as const example 2 = 10

const objectExample = {
  name: 'FirstName' as const,
  lastName: 'LastName' as const,
}

/*
  In this object, the only values that can be assigned to the keys name and lastName are
  FirstName and LastName, because we declared the keys as literal types (const)
*/

/*
  Another example of literal types, in this function, only one of the three literal types
  of the argument color can be passed as parameter to the function.
*/
function chooseColor(color: 'red' | 'yellow' | 'blue'): string {
  return color;
}
