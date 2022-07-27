/*
  The Interface Segregation Principle (ISP) states that a client should not be exposed to methods, interfaces or types it doesn't need.

  In this example, you cannot have, for example, a single interface Customer because customers can also be a company,
  so the ISP principles encourages to create 2 interfaces to avoid unecessary information on the constructor of each class.

  But this brings another problem,
*/

import { IndividualCustomerProtocol, EnterpriseCustomerProtocol, CustomerOrder } from './interfaces/customer';

export class IndividualCustomer implements IndividualCustomerProtocol, CustomerOrder {
  firstName: string;
  lastName: string;
  cpf: string;

  constructor(firstName: string, lastName: string, cpf: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.cpf = cpf;
  }
  getName(): string {
    return `${this.firstName} ${this.lastName}`
  }
  getIdentificationNumber(): string {
    return this.cpf;
  }
}

export class EnterpriseCustomer implements EnterpriseCustomerProtocol, CustomerOrder {
  name: string;
  cnpj: string;

  constructor(name: string, cnpj: string) {
    this.name = name;
    this.cnpj = cnpj;
  }
  getName(): string {
    return this.name;
  }
  getIdentificationNumber(): string {
    return this.cnpj;
  }
}
