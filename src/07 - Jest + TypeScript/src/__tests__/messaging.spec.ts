import { Messaging } from "../services/messaging";

const createSut = () => new Messaging();

describe('Test cases for the Messaging class', () => {
  afterEach(jest.clearAllMocks);

  it('sendMessage method should call console.log with the right message (spyOn mock)', () => {
    const logSpy = jest.spyOn(console, 'log');
    const sut = createSut();

    sut.sendMessage('Test message');

    expect(logSpy).toHaveBeenCalled();
    expect(logSpy).toHaveBeenCalledTimes(1);
    expect(logSpy).toHaveBeenCalledWith('Test message');
    expect(logSpy).not.toHaveBeenCalledWith('Any other message');
  });

  it('sendMessage method should call console.log with the right message (jest.fn mock)', () => {
    console.log = jest.fn();
    const sut = createSut();

    sut.sendMessage('Test message');

    expect(console.log).toHaveBeenCalled();
    expect(console.log).toHaveBeenCalledTimes(1);
    expect(console.log).toHaveBeenCalledWith('Test message');
    expect(console.log).not.toHaveBeenCalledWith('Any other message');
  });
});
