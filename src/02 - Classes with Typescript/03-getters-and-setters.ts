/*
  getters and setters are used to modify or access privade attributes of the TypeScript classes.

  to create a getter, which will get a value, we use the reserved word get
  to create a setter, which will set a value, we use the reserved word set

  to access this methods, you cannot call them like that Class.getter() or Class.setter(),
  this results in an error because both of these accessors are treated like properties of
  the Object generated by the class.

  To set a value:
  Class.setter = 'new value'

  To get a value:
  Class.getter
*/

export class Person {
  private readonly firstName: string;
  private readonly lastName: string;
  protected _identityNumber: string;

  constructor(firstName: string, lastName: string, identityNumber: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this._identityNumber = identityNumber;
  }

  public set newIdNumber(newIdNumber: string) {
    this._identityNumber = newIdNumber;
  }

  public get formattedIdNumber(): string {
    return this._identityNumber.replace(/\D/g, '');
  }

  public get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

const person = new Person('John', 'Travolta', '923-34-5-934');

// Accessing setters
person.newIdNumber = '654-77-1-131';

// Accessing getters
console.log(person.formattedIdNumber);
console.log(person.fullName);
