import { CartItem } from '../interfaces/cart-item';

export interface ShoppingCartInterface {
  items: Readonly<CartItem[]>
  addItem(item: CartItem): void
  removeItem(index: number): void
  totalValue(): number;
  totalWithDiscount(): number;
  isEmpty(): boolean;
  clear(): void;
}
