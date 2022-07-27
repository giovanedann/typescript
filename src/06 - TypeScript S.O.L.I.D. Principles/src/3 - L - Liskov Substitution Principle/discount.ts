/*
  The Liskov Substitution Principle (LSP) states that objects of a superclass should be replaceable with objects of its subclasses without breaking the application.
  In other words, what we want is to have the objects of our subclasses behaving the same way as the objects of our superclass.

  These Discount subclasses are the perfect example, they all behave like their superclass Discount.
*/

export abstract class Discount {
  protected discount = 0;
  calculate(price: number): number {
    return price - price * (this.discount / 100);
  };
}

export class NoDiscount extends Discount {}

export class TenPercentDiscount extends Discount {
  protected readonly discount: number = 10;
}

export class FifteenPercentDiscount extends Discount {
  protected readonly discount: number = 15;
}

export class ThirtyPercentDiscount extends Discount {
  protected readonly discount: number = 30;
}

export class FiftyPercentDiscount extends Discount {
  protected readonly discount: number = 50;
}
