// Basic types
const firstName: string = 'Anything';
const age: number = 23;
const isAdult: boolean = true;
const symbol: symbol = Symbol('any-symbol');
// const bigNumber: bigint = 10n // doesn't work in older versions than ES2020

// Array types
// First way - using generics
const numbersArray1: Array<number> = [1, 2, 3, 4, 5];
const stringsArray1: Array<string> = ['a', 'b', 'c'];
const arrayOfArrays1: Array<number[]> = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

// Second way
const numbersArray2: number[] = [1, 2, 3, 4, 5];
const stringsArray2: string[] = ['a', 'b', 'c'];
const arrayOfArrays2: number[][] = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

// Object Types
const object: { name: string, age: number, isAdult?: boolean } = {
// the question mark (?) in the isAdult property indicates that this is an optional property
  name: 'Anything',
  age: 35,
  isAdult: true,
}

// Function types
// First way
function sum(number1: number, number2: number) {
  return number1 + number2;
}

// Second way
const sum2: (number1: number, number2: number) => number = (x, y) => x + y;
