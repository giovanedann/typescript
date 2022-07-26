/*
  A Decorator is a special kind of declaration that can be attached to a class declaration, method, accessor, property, or parameter.
  Decorators use the form @expression, where expression must evaluate to a function that will be called at runtime with information about the decorated declaration.
  Decorators can observe, change and completely modify what he's attached.
*/

/*
  In classes decorators, imagine if you created a class, and you can change (add methods, add property) it without modifying the superclass.
  To do that, we need to use a decorator.
  A decorator will behaviour like the superclass, allowing to make modifications on the class, or executing methods that are not on
  the superclass, before returning the superclass itself.
*/

@decorator
export class Animal {
  constructor(
    public name: string,
    public color: string,
  ) {}
}

function decorator<TClass extends new (...args: any[]) => any>(target: TClass): TClass {
  return class extends target {
    color: string;
    name: string;

    constructor(...args: any[]) {
      super(...args);
      this.name = this.reverseString(args[0]);
      this.color = 'any color';
    }

    reverseString(value: string): string {
      return value.split('').reverse().join('')
    }
  };
}

const myAnimal = new Animal('Jane Doe', 'purple');

console.log(myAnimal);
