/*
  Type predicates are used when you have sure about the type of a function return.

  For example, the function isNumber, every time the assertion of type guard is true, the return
  will be a number.

  To use type predicates we use the word IS, for example, function(value): value is number
*/

function isNumber(value: unknown): value is number {
  return typeof value === 'number';
}

function sum<T>(...args: T[]): number {
  const sum = args.reduce((acc, curr) => {
    if (isNumber(acc) && isNumber(curr)) return acc + curr
    return acc;
  }, 0);

  return sum;
}

console.log(sum(1, 2, 3, 4))
