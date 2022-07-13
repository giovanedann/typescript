/*
  In TypeScript. when creating types, you cannot create 2 types of the same name, or an interface and a type with the same name.

  But, if you create 2 interfaces with the same name, they are merged, like on type intersections.

  If you create 3 interfaces called Dog, with different keys, the interface Dog will have this 3 keys merged into one interface called Dog.
*/

export interface Person {
  readonly firstName: string
  readonly middleName?: string
}

export interface Person {
  readonly lastName: string
}

export interface Person {
  readonly addresses: readonly string[]
}

const person: Person = {
  firstName: 'Jane',
  lastName: 'Doe',
  addresses: ['My address, 193']
}

console.log(person);