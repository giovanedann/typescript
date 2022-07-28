import { Product } from '../classes/product';

const createSut = (name: string, price: number): Product => new Product(name, price);

describe('Test cases for the Product class', () => {
  it('The product object have the right properties when instanced', () => {
    const sut = createSut('Playstation 5', 3000);

    expect(sut).toHaveProperty('name', 'Playstation 5');
    expect(sut).toHaveProperty('price', 3000);

    expect(sut.name).toBe('Playstation 5');
    expect(sut.price).toEqual(3000);
  });
});
