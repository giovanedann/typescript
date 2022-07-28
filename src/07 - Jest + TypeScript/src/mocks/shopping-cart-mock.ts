import { CartItem } from "../classes/interfaces/cart-item";
import { ShoppingCartInterface } from "../classes/interfaces/shopping-cart";

export class ShoppingCartMock implements ShoppingCartInterface {
  get items(): Readonly<CartItem[]> {
    return [];
  }
  addItem(item: CartItem): void {}
  removeItem(index: number): void {}
  totalValue(): number { return 100 }
  totalWithDiscount(): number { return 100 }
  isEmpty(): boolean { return false }
  clear(): void {}
}
