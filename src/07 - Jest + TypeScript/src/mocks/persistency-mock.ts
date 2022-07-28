import { PersistencyInterface } from "../services/interfaces/persistency";

export class PersistencyMock implements PersistencyInterface {
  saveOrder(): void {}
}
