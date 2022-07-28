import { CustomerOrder } from "../classes/interfaces/customer";

export class CustomerMock implements CustomerOrder {
  getName(): string {
    return 'asda';
  }

  getIDN(): string {
    return 'asda';
  }
}
