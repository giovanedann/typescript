/*
  In TypeScript, we can use this as a type. It represents the subtype of the containing class or interface.
  We can use it to create fluent interfaces easily since we know that each method in the class will be returning the instance of a class.

  If you create a subclass, the object this will refer to the subclass, and not to the superclass.
*/

export class Calculator {
  constructor(
    public number: number
  ) {}

  add(n: number) {
    this.number += n;
    return this;
  }

  subtract(n: number) {
    this.number -= n;
    return this;
  }

  division(n: number) {
    this.number /= n;
    return this;
  }

  multiplication(n: number) {
    this.number *= n;
    return this;
  }
}

export class BetterCalculator extends Calculator {
  pow(n: number): this {
    this.number **= n;
    return this;
  }
}

const myCalculator = new Calculator(10);
const myBetterCalculator = new BetterCalculator(10);

myCalculator.add(10).multiplication(2).division(4).subtract(10);
myBetterCalculator.add(10).multiplication(2).division(4).subtract(10).pow(2);

console.log(myCalculator);
