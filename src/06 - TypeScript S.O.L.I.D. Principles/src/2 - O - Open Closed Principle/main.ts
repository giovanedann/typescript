/*
  The open–closed principle states "software entities (classes, modules, functions, etc.) should be open for extension, but closed for modification".

  That is, such an entity can allow its behaviour to be extended without modifying its source code.
*/

import { ThirtyPercentDiscount } from "./classes/discount";
import { Order } from "./classes/order";
import { Product } from "./classes/product";
import { ShoppingCart } from "./classes/shopping-cart";
import { Messaging } from "./services/messaging";
import { Persistency } from "./services/persistency";

const myDiscount = new ThirtyPercentDiscount();
const myShoppingCart = new ShoppingCart(myDiscount);
const myMessaging = new Messaging();
const myPersistency = new Persistency();
const myOrder = new Order(myShoppingCart, myMessaging, myPersistency);

myShoppingCart.addItem(new Product('Shirt', 50));
myShoppingCart.addItem(new Product('Socks', 40));
myShoppingCart.addItem(new Product('Pants', 10.80));
myShoppingCart.addItem(new Product('Gloves', 11.67));
myShoppingCart.addItem(new Product('Hat', 100.64));
myShoppingCart.addItem(new Product('Shoes', 98.2));
myShoppingCart.addItem(new Product('Glasses', 10.26));

console.log(myShoppingCart.totalValue());

myOrder.checkout();
