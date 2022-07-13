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

myCalculator.add(10).multiplication(2).division(4).subtract(10);

console.log(myCalculator);