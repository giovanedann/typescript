function propertyDecorator(classPrototype: any, propertyName: string | symbol): any {
  console.log(classPrototype);
  console.log(propertyName);

  let propertyValue: any;

  return {
    get: () => propertyValue,
    set: (value: any) =>  {
      propertyValue = value.split('').reverse().join('');
    },
  }
}

export default class Person {
  @propertyDecorator
  firstName: string; // now the firstName property is reversed
  lastName: string;
  age: number;

  constructor(firstName: string, lastName: string, age: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

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

console.log(person.fullName);
