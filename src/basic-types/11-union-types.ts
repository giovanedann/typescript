/*
  union types are used when we specify that a function or a variable can have more than
  one type, to use union types, the PIPE (|) operator is used
*/

function addOrConcatenate(x: number | string, y: number | string): number | string {
  if (typeof x === 'number' && typeof y === 'number') return x + y;
  return `${x}${y}`;
}
