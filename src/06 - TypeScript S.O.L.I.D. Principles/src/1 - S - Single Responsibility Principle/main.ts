/*
  The idea behind the SRP is that every class, module, or function in a program should have one responsibility/purpose in a program. As a commonly used definition, "every class should have only one reason to change".

  In this folder we will refactor the src/shopping-cart.ts file applying this principle.
*/

import { Order } from "./entities/order";
import { Product } from "./entities/product";
import { ShoppingCart } from "./entities/shopping-cart";
import { Messaging } from "./services/messaging";
import { Persistency } from "./services/persistency";


const myShoppingCart = new ShoppingCart();
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

myOrder.checkout();
