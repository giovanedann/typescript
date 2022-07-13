/*
  the unknown type is simillar to any type, but safer. unknown types are used when you
  declare a variable, but doesn't know the type of the variable yet.
*/

let x: unknown;
x = '100';
const y: number = 300;

/*
  if we try to do something like x + y, TypeScript warns that the type of the variable x
  is unknown, and may cause unexpected behavior when summing the 2 variables. If we declared
  the variable x with any type, this warning is not shown.
*/
