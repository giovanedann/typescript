/*
  The aggregation relationship defines a one-way relationship that specifies a 'has' relationship between two classes.

  Let's imagine the relationship between a Car and Wheels, both of these objects exists separately, but a car need to
  aggregate wheels to do it's main functionality. With that said, we can say that the car aggregate the wheels.
*/

export class ShoppingCart {
  private readonly _products: Product[] = [];
  
  get products() {
    return this._products;
  }

  public add(...products: Product[]): void {
    products.forEach((product) => this._products.push(product));
  }

  public cartLength(): number {
    return this._products.length;
  }

  public totalPrice(): number {
    return this._products.reduce((totalValue, product) => totalValue + product.price, 0);
  }
}

export class Product {
  constructor(
    public name: string,
    public price: number,
  ) {}
}

const shirt = new Product('Shirt', 45.9);
const glove = new Product('Glove', 20.3);
const bottle = new Product('Bottle', 5.35);
const headphone = new Product('Headphone', 69.4);

const myShoppingCart = new ShoppingCart();

myShoppingCart.add(shirt);
myShoppingCart.add(bottle);
myShoppingCart.add(glove);
myShoppingCart.add(headphone);

console.log(myShoppingCart.products);
console.log(myShoppingCart.cartLength());
console.log(myShoppingCart.totalPrice());
