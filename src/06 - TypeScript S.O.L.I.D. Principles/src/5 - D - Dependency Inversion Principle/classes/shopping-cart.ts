import { Discount } from './discount';
import { CartItem } from './interfaces/cart-item';
import { ShoppingCartInterface } from './interfaces/shopping-cart';

export class ShoppingCart implements ShoppingCartInterface {
  private readonly _items: CartItem[] = [];

  constructor(private readonly discount: Discount) {}

  addItem(item: CartItem): void {
    this._items.push(item);
  }

  removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  get items(): Readonly<CartItem[]> {
    return this._items;
  }

  totalValue(): number {
    const totalPrice: number = this._items.reduce((acc, curr) => acc + curr.price, 0);
    return +totalPrice.toFixed(2);
  }

  totalWithDiscount(): number {
    const discountPrice = this.discount.calculate(this.totalValue());
    return +discountPrice.toFixed(2);
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  clear(): void {
    console.log('Cart cleared successfully!')
    this._items.length = 0;
  }
}
