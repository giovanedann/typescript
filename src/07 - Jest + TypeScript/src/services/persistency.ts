import { PersistencyInterface } from "./interfaces/persistency";

export class Persistency implements PersistencyInterface {
  saveOrder(): void {
    console.log('Order saved successfully!')
  }
}
