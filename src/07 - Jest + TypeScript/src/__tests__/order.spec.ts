import { Order } from "../classes/order";
import { PersistencyMock } from '../mocks/persistency-mock';
import { MessagingMock } from '../mocks/messaging-mock';
import { ShoppingCartMock } from '../mocks/shopping-cart-mock';
import { CustomerMock } from '../mocks/customer-mock';

const createSut = () => {
  const shoppingCartMock = new ShoppingCartMock();
  const persistencyMock = new PersistencyMock();
  const messagingMock = new MessagingMock();
  const customerMock = new CustomerMock();

  const sut = new Order(shoppingCartMock, messagingMock, persistencyMock, customerMock);

  return {
    sut,
    shoppingCartMock,
    persistencyMock,
    messagingMock,
    customerMock
  }
}

describe('test cases for the Order class', () => {
  afterEach(jest.clearAllMocks);

  it('should not checkout if cart is empty', () => {
    const { sut, shoppingCartMock } = createSut();

    const isEmptySpy = jest.spyOn(shoppingCartMock, 'isEmpty').mockReturnValueOnce(true);
    const logSpy = jest.spyOn(console, 'log');

    sut.checkout();

    expect(logSpy).toHaveBeenCalled();
    expect(logSpy).toHaveBeenCalledWith('Your cart is empty!');
    expect(isEmptySpy).toHaveBeenCalled();
    expect(isEmptySpy).toHaveBeenCalledTimes(1);

    expect(sut.orderStatus).toBe('open');
  });

  it('should checkout if cart is not empty', () => {
    const { sut } = createSut();

    sut.checkout();

    expect(sut.orderStatus).toBe('closed');
  });

  it('should call messaging.sendMessage method on checkout', () => {
    const { sut, messagingMock, shoppingCartMock } = createSut();

    const sendMessageSpy = jest.spyOn(messagingMock, 'sendMessage');

    sut.checkout();

    expect(sendMessageSpy).toHaveBeenCalled();
    expect(sendMessageSpy)
      .toHaveBeenCalledWith(`Order finished! Total price: ${shoppingCartMock.totalWithDiscount()}`)
  });

  it('should save order on checkout', () => {
    const { sut, persistencyMock } = createSut();

    const saveOrderSpy = jest.spyOn(persistencyMock, 'saveOrder');

    sut.checkout();

    expect(saveOrderSpy).toHaveBeenCalled();
  });

  it('should clear cart on checkout', () => {
    const { sut, shoppingCartMock } = createSut();

    const clearCartSpy = jest.spyOn(shoppingCartMock, 'clear');

    sut.checkout();

    expect(clearCartSpy).toHaveBeenCalled();
  });
});
