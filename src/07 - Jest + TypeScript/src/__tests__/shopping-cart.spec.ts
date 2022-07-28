import { Discount } from "../classes/discount";
import { ShoppingCart } from "../classes/shopping-cart";
import { CartItem } from "../classes/interfaces/cart-item";

const createDiscountMock = () => {
  class DiscountMock extends Discount {
    protected readonly discount: number = 10;
  }
  return new DiscountMock();
}

const createSut = () => {
  const discountMock = createDiscountMock();
  const sut = new ShoppingCart(discountMock);
  return { sut, discountMock }
}

const createCartItem = (name: string, price: number) => {
  class CartItemMock implements CartItem {
    constructor(public name: string, public price: number) {}
  }
  return new CartItemMock(name, price);
}

const createSutWithProducts = () => {
  const { sut, discountMock } = createSut();

  const cartItem1 = createCartItem('Shirt', 30);
  const cartItem2 = createCartItem('Glove', 40);

  sut.addItem(cartItem1);
  sut.addItem(cartItem2);

  return { sut, discountMock };
}

describe('test cases for the ShoppingCart class', () => {
  afterEach(jest.clearAllMocks);

  it('should be an empty cart if no product is added', () => {
    const { sut } = createSut();

    expect(sut.isEmpty()).toBeTruthy();
  });

  it('should add products properly', () => {
    const { sut } = createSut();

    const cartItem1 = createCartItem('Shirt', 30);
    const cartItem2 = createCartItem('Glove', 32.5);

    sut.addItem(cartItem1);
    sut.addItem(cartItem2);

    expect(sut.isEmpty()).toBeFalsy();
    expect(sut.items).toHaveLength(2);
  });

  it('should remove items properly', () => {
    const { sut } = createSutWithProducts();

    sut.removeItem();
    sut.removeItem();

    expect(sut.isEmpty()).toBeTruthy();
    expect(sut.items).toHaveLength(0);
  });

  it('totalValue method should calculate the total value correctly', () => {
    const { sut } = createSutWithProducts();

    expect(sut.totalValue()).toBeCloseTo(70);
  });

  it('clear method should clear the cart', () => {
    const { sut } = createSutWithProducts();

    expect(sut.items).toHaveLength(2);
    sut.clear();
    expect(sut.items).toHaveLength(0);
  });

  it('totalWithDiscount method should return the value with discount', () => {
    const { sut } = createSutWithProducts();

    expect(sut.totalWithDiscount()).toBe(sut.totalValue() - sut.totalValue() * 0.1);
  });

  it('should call discount.calculate with the correct value when totalWithDiscount method is called', () => {
    const { sut, discountMock } = createSutWithProducts();

    const calculateSpy = jest.spyOn(discountMock, 'calculate');

    sut.totalWithDiscount();

    expect(calculateSpy).toHaveBeenCalled();
    expect(calculateSpy).toHaveBeenCalledTimes(1);
    expect(calculateSpy).toHaveBeenCalledWith(sut.totalValue());
  })
});
