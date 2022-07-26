/*
  If we want to customize how a decorator is applied to a declaration, we can write a decorator factory
  A Decorator Factory is simply a function that returns the expression that will be called by the decorator at runtime.
*/

type AnimalConstructor = new (...args: any[]) => any;

@decoratorFactory('Decorator param 1', 'Decorator param 2')
export class Animal {
  constructor(
    public name: string,
    public color: string,
  ) {}
}

function decoratorFactory(param1: string, param2: string) {
  return function decorator<TClass extends AnimalConstructor>(target: TClass): TClass {
    return class extends target {
      color: string;
      name: string;

      constructor(...args: any[]) {
        super(...args);
        this.name = this.reverseString(args[0]);
        this.color = 'any color';
        this.logDecoratorParams();
      }

      reverseString(value: string): string {
        return value.split('').reverse().join('')
      }

      logDecoratorParams() {
        console.log(param1, param2);
      }
    };
  }
}
