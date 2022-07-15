/*
  It's possible to add default values to Generics, for example, if you have a generic and want to
  give it a default value if the user don't pass the type, you can do it simillar as in functions.

  If you don't have a default generic type, when you use the interface/type, you will need to pass
  the types, or TypeScript will return an error, but with default values, when the user doesn't specify the type
  the generic will assume the default types
*/

interface PersonProtocol<T, U> {
  firstName: T
  lastName: T
  age: U
}

interface PersonProtocolWithDefault<T = string, U = number> {
  firstName: T
  lastName: T
  age: U
}

const person1: PersonProtocol<string, number> = {
  firstName: 'Jane',
  lastName: 'Doe',
  age: 12,
}

const person2: PersonProtocolWithDefault = {
  firstName: 'Jane',
  lastName: 'Doe',
  age: 12,
}
