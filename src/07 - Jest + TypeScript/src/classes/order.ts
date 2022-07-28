import { MessagingInterface } from "../services/interfaces/messaging";
import { PersistencyInterface } from "../services/interfaces/persistency";
import { ShoppingCartInterface } from "./interfaces/shopping-cart";
import { OrderStatus } from "./interfaces/order-status";
import { CustomerOrder } from "./interfaces/customer";

export class Order {
  private _orderStatus: OrderStatus = 'open';

  constructor(
    private readonly cart: ShoppingCartInterface,
    private readonly messaging: MessagingInterface,
    private readonly persistency: PersistencyInterface,
    private readonly customer: CustomerOrder,
    ) {}

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  checkout(): void {
    if (this.cart.isEmpty()) {
      console.log('Your cart is empty!');
      return;
    }

    this._orderStatus = 'closed';
    this.messaging.sendMessage(
      `Order finished! Total price: ${this.cart.totalWithDiscount()}`
    )
    this.persistency.saveOrder();
    this.cart.clear();

    console.log(
      `The customer is: ${this.customer.getName()} - ${this.customer.getIDN()}`
    );
  }


}
