/*
  In TypeScript, classes are created in a simillar way than Java. You can define if the fields
  are readonly, if they are public, and stuff like that. Like JavaScript, TypeScript adds
  type annotations and other syntax to allow you to express relationships between classes
  and other types.

  It's important to know that CREATING A CLASS ALSO CREATES A TYPE. Because deep down. they
  are the same thing.

  readonly -> prevents assignments to the field outside of the constructor
  public -> the default visibility of class members is public. a public member can be accessed anywhere
  protected -> are only visible to subclasses of the class they’re declared in
  private -> same as protected, but doesn’t allow access to the member even from subclasses
*/

export class Employee {
  // Short syntax for doing the same as lines 22~29
  constructor(
    public readonly firstName: string,
    public readonly lastName: string
  ) {}
}

export class Company {
  public readonly name: string;
  private readonly employees: Employee[] = []; // setting a default value to this property
  protected readonly companyId: string;

  constructor(name: string, companyId: string) {
    this.name = name;
    this.companyId = companyId;
  }

  public registerEmployee(...employees: Employee[]): void { // creating class methods
    employees.forEach((employee) => {
      this.employees.push(employee);
    })
  }

  public showEmployees(): void {
    console.log(this.employees);
  }
}

const Toyota = new Company('Toyota', '1nvc-2fidj-9934jc-923n');
const employee1 = new Employee('Jane', 'Doe');
const employee2 = new Employee('John', 'Travolta');
const employee3 = new Employee('Mark', 'Ruffalo');

Toyota.registerEmployee(employee1, employee2, employee3);
Toyota.showEmployees();
