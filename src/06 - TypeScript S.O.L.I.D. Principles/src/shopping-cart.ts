type CartItem = { name: string, price: number };
type OrderStatus = 'open' | 'closed';

export class legacyShoppingCart {
  private readonly _items: CartItem[] = [];
  private _orderStatus: 'open' | 'closed' = 'open';

  addItem(item: CartItem): void {
    this._items.push(item);
  }

  removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  get items(): Readonly<CartItem[]> {
    return this._items;
  }

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  totalValue(): number {
    const totalPrice: number = this._items.reduce((acc, curr) => acc + curr.price, 0);
    return +totalPrice.toFixed(2);
  }

  checkout(): void {
    if (this._items.length === 0) {
      console.log('Your cart is empty!');
      return;
    }

    this._orderStatus = 'closed';
    this.sendMessage(`Order finished! Total price: ${this.totalValue()}`)
    this.saveOrder();
    this.clear();
  }

  sendMessage(message: string): void {
    console.log(message)
  }

  saveOrder(): void {
    console.log('Order saved successfully!')
  }

  clear(): void {
    console.log('Cart cleared successfully!')
    this._items.length = 0;
  }
}

const myShoppingCart = new legacyShoppingCart();

myShoppingCart.addItem({ name: 'Shirt', price: 50 });
myShoppingCart.addItem({ name: 'Shoes', price: 39.5 });
myShoppingCart.addItem({ name: 'Pants', price: 100.5 });

myShoppingCart.checkout();
