import {
  TenPercentDiscount,
  ThirtyPercentDiscount,
  NoDiscount,
  FifteenPercentDiscount,
  FiftyPercentDiscount
} from '../classes/discount';

describe('Test cases for the Discount class', () => {
  it('NoDiscount should return the same price', () => {
    const sut = new NoDiscount();
    const noDiscountPrice = sut.calculate(3000);

    expect(noDiscountPrice).toBe(3000);
  });

  it('ThirtyPercentDiscount should return the price -30%', () => {
    const sut = new ThirtyPercentDiscount();
    const thirtyPercentDiscountPrice = sut.calculate(3000);

    expect(thirtyPercentDiscountPrice).toBe(2100);
  });

  it('TenPercentDiscount should return the price -10%', () => {
    const sut = new TenPercentDiscount();

    const tenPercentDiscountPrice = sut.calculate(3000);

    expect(tenPercentDiscountPrice).toBe(2700);
  });

  it('ThirtyPercentDiscount should return the price -15%', () => {
    const sut = new FifteenPercentDiscount();

    const fifteenPercentDiscountPrice = sut.calculate(5000);

    expect(fifteenPercentDiscountPrice).toBe(4250);
  });

  it('ThirtyPercentDiscount should return the price -50%', () => {
    const sut = new FiftyPercentDiscount();

    const fiftyPercentDiscountPrice = sut.calculate(10000);

    expect(fiftyPercentDiscountPrice).toBe(5000);
  });
});
