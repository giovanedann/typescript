/*
  static methods and attributes are attributes that can only be accessed by the class itself,
  which means that instances of this class cannot have access to these methods or attributes.

  for example:

  ClassName.staticAttribute -> work

  const instance = new ClassName();

  instance.staticAttribute -> doesn't work
*/

export class Person {
  public static defaultAge = 20;
  public static defaultIdNumber = '0'

  constructor(
    public firstName: string,
    public lastName: string,
    public age: number,
    public identityNumber: string) {
  }

  public static sayHi(): void {
    console.log('Hi!');
  }

  public static createPerson(
      firstName: string,
      lastName: string,
      age: number,
      identityNumber: string
    ) {
    return new Person(
      firstName,
      lastName,
      age || Person.defaultAge,
      identityNumber || Person.defaultIdNumber
    )
  }
}

console.log(Person.sayHi());
