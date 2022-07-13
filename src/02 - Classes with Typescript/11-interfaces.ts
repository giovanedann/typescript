/*
  Interfaces works as the same way of types, but they cannot be used with union nor intersection operators
  
  To join 2 interfaces, you need to create a new interface that extends the other 2.

  But, in general, they work the same way as types.
*/

interface PersonType1 {
  firstName: string;
  lastName: string;
}

interface PersonType2 {
  fullName: () => string;
}

interface ExtendedPersonType extends PersonType1, PersonType2 {}

export class Person implements ExtendedPersonType {
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

const personObject: ExtendedPersonType = {
  firstName: 'Aaaa',
  lastName: 'Bbbbb',
  fullName() {
    return `${this.firstName} ${this.lastName}`
  },
} 

console.log(person.fullName());
console.log(personObject.fullName());