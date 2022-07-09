/*
  the never type is used when the function never return, for example, in an infinite loop
  or when throwing an error, for example
*/

function throwError(): never {
  throw new Error('Error');
}
