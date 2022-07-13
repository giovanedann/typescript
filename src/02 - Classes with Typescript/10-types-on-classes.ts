/*
  To implement types on classes, we cannot use the reserved word extends, instead, we use the word implement.

  When implementing a type on a class, you cannot use private/protected, neither the super() on the constructor.

  If you need to use stuff like that, it's beter to implement an Abstract Class instead of a type.

  A cool feature is that you can implement more than one type in a class.
*/

type PersonType = {
  firstName: string;
  lastName: string;
}

type PersonFullName = {
  fullName: () => string;
}

export class Person implements PersonType, PersonFullName {
  public firstName: string;
  public lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  public fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  };
}

const person = new Person('Jane', 'Doe');

console.log(person.fullName());