type Adder = {
  (x: number): number
  (x:number, y: number): number
  (...args: number[]): number
}

const adder: Adder = (x: number, y: number = 0, ...args: number[]): number => {
  if (args.length > 0) return [x, y, ...args].reduce((acc, curr) => acc + curr);
  return x + y;
};

console.log(adder(1));
console.log(adder(1, 2));
console.log(adder(1, 2, 3));
console.log(adder(1, 2, 3, 4));
