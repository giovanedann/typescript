/*
  The idea behind the SRP is that every class, module, or function in a program should have one responsibility/purpose in a program. As a commonly used definition, "every class should have only one reason to change".

  In this file we will refactor the src/shopping-cart.ts file applying this principle.
*/

import { CartItem } from './interfaces/cart-item';

export class ShoppingCart {
  private readonly _items: CartItem[] = [];

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

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  clear(): void {
    console.log('Cart cleared successfully!')
    this._items.length = 0;
  }
}
