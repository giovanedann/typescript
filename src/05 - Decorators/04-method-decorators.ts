/*
  A Method Decorator is declared just before a method declaration.
  The decorator is applied to the Property Descriptor for the method, and can be used to observe, modify, or replace a method definition.

  The expression for the method decorator will be called as a function at runtime, with the following three arguments:

  1 - Either the constructor function of the class for a static member, or the prototype of the class for an instance member.
  2 - The name of the member.
  3 - The Property Descriptor for the member.

  If the method decorator returns a value, it will be used as the Property Descriptor for the method.
*/

function methodDecorator(
  classPrototype: any,
  methodName: string,
  descriptor: PropertyDescriptor
): PropertyDescriptor | void {
  console.log(classPrototype);
  console.log(methodName);
  console.log(descriptor);

  return {
    value: function (...args: any[]) {
      return args[0].toUpperCase();
    }
  }
}

export class Person {
  firstName: string;
  lastName: string;
  age: number;

  constructor(firstName: string, lastName: string, age: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  @methodDecorator
  public message(msg: string): string {
    return `${this.firstName} ${this.lastName}: ${msg}`;
  }

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(name: string) {
    const sepparatedNames = name.split(' ');
    this.firstName = sepparatedNames[0];
    this.lastName = sepparatedNames[1];
  }
}

const person = new Person('Jane', 'Doe', 46);
const message = person.message('the decorator is going to uppercase me!');

console.log(message);
