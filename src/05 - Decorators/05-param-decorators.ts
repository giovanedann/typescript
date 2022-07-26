/*
  A Parameter Decorator is declared just before a parameter declaration. The parameter decorator is applied to the function for a class constructor or method declaration.
  A parameter decorator cannot be used in a declaration file, an overload, or in any other ambient context (such as in a declare class).
  The return value of the parameter decorator is ignored.
*/

function parameterDecorator(
  classPrototype: any,
  methodName: string | symbol,
  parameterIndex: number,
): any {
  console.log(classPrototype);
  console.log(methodName);
  console.log(parameterIndex);
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

  public message(@parameterDecorator msg: string): string {
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
