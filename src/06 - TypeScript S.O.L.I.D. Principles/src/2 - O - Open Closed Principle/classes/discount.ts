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
