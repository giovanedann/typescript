import { Persistency } from '../services/persistency';

const createSut = () => new Persistency();

describe('Test cases for the Persistency class', () => {
  afterEach(jest.clearAllMocks);

  it('saveOrder method should call console.log (mock with jest.fn)', () => {
    console.log = jest.fn();

    const sut = createSut(); // sut - system under test
    sut.saveOrder();

    expect(console.log).toHaveBeenCalled();
    expect(console.log).toHaveBeenCalledWith('Order saved successfully!');
  });

  it('saveOrder method should call console.log (mock with spyOn)', () => {
    const logSpy = jest.spyOn(console, 'log');

    const sut = createSut(); // sut - system under test
    sut.saveOrder();

    expect(logSpy).toHaveBeenCalled();
    expect(logSpy).toHaveBeenCalledTimes(1);
    expect(logSpy).toHaveBeenCalledWith('Order saved successfully!');
  });

  it('saveOrder method logs the correct message on the console', () => {
    const logSpy = jest.spyOn(console, 'log');
    const sut = createSut(); // sut - system under test

    sut.saveOrder();

    expect(logSpy).toHaveBeenCalledWith('Order saved successfully!');
  });
});
