/*
  The Dependency Inversion Principle (DIP) states that high-level modules should not depend on low-level modules; both should depend on abstractions.
  Abstractions should not depend on details. Details should depend upon abstractions.

  To see more clearly, check the src/1 - S - Single.../entities/order.ts file, it depends on 4 other classes
  that are not abstract.

  In this folder, we are going to correct this. Check the src/5 - D - Depen.../classes/order.ts file

  We implemented on the constructor of the Order class, instead of instances of the classes, interfaces that
  represents abstractions of the classes.
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
