/*
  Inheritance is a concept of Oriented Object Programming, which says that a subclass
  can inherit from a father (super) class!

  In a real life example, a Person is a super class. Each person has a name and age.

  A Student, for example, is a person which have the same attributes as a Person (name, age),
  but also have a new "property" that only the students have, the name of the school.

  With that said, we can inherit the attributes from the super class (name, age), to avoid
  creating a new constructor. To inherit from a super class, we use the word extends.
*/

export class Person {
  public readonly firstName: string;
  public readonly lastName: string;
  private age: number;
  protected identityNumber: string;

  constructor(firstName: string, lastName: string, age: number, identityNumber: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.identityNumber = identityNumber;
  }

  public getAge(): number {
    return this.age;
  }

  public getIdNumber(): string {
    return this.identityNumber;
  }

  public getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

export class Student extends Person {
  public readonly schoolName;

  constructor(
      firstName: string,
      lastName: string,
      age: number,
      identityNumber: string,
      schoolName: string
    ) {
    super(firstName, lastName, age, identityNumber);
    this.schoolName = schoolName;
  }

  public getFullName(): string {
    console.log('Getting student fullname...')
    return super.getFullName();
  }

  public getNameAndSchool(): string {
    return `Student: ${this.firstName} | School: ${this.schoolName}`;
  }
}

const person = new Person('John', 'Travolta', 54, '923-34-5-934');
const student = new Student('John', 'Travolta', 54, '312-94-2-200', 'Harvard');
