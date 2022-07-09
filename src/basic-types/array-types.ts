/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable no-unused-vars */

/*
  There are two forms of typing arrays on typescript: using generics and array types
*/

// Using generics - Array<type>
function multiply(...args: Array<number>): number {
  return args.reduce((acc, curr) => acc * curr, 1);
}

// Using array types - T[] (T -> type)
function concatenateStrings(...args: string[]): string {
  return args.join('');
}

function arrayToUpperCase(...args: string[]): string[] {
  return args.map((item) => item.toUpperCase());
}
