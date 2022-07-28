import { EnterpriseCustomer, IndividualCustomer } from "../classes/customer";

describe('Test cases for the IndividualCustomer class', () => {
  it('should have properties firstName, lastName and cpf', () => {
    const sut = new IndividualCustomer('Test', 'Customer', '000.000.000-0');

    expect(sut).toHaveProperty('firstName', 'Test');
    expect(sut).toHaveProperty('lastName', 'Customer');
    expect(sut).toHaveProperty('cpf', '000.000.000-0');
  });

  it('getName method should return the full name of the customer', () => {
    const sut = new IndividualCustomer('Test', 'Customer', '000.000.000-0');

    expect(sut.getName()).toEqual('Test Customer');
  });

  it('getIDN method should return the cpf of the customer', () => {
    const sut = new IndividualCustomer('Test', 'Customer', '000.000.000-0');

    expect(sut.getIDN()).toEqual('000.000.000-0');
  });
});

describe('Test cases for the EnterpriseCustomer class', () => {
  it('should have properties name and cnpj', () => {
    const sut = new EnterpriseCustomer('TestCompany', '000000000000');

    expect(sut).toHaveProperty('name', 'TestCompany');
    expect(sut).toHaveProperty('cnpj', '000000000000');
  });

  it('getName method should return the name of the enterprise', () => {
    const sut = new EnterpriseCustomer('TestCompany', '000000000000');

    expect(sut.getName()).toEqual('TestCompany');
  });

  it('getIDN method should return the cnpj of the enterprise', () => {
    const sut = new EnterpriseCustomer('TestCompany', '000000000000');

    expect(sut.getIDN()).toEqual('000000000000');
  });
});

