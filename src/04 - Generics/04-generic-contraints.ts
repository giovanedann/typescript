/*
  You may sometimes want to write a generic function that works on a set of types where you have
  some knowledge about what capabilities that set of types will have.

  To add these constraints to generics, we use the word extends.

  In this example, U is a generic, but we know that U is a key of the object of the type T passed as argument, so
  we constraint our Generic

  The generic function is now constrained, so, it will no longer work over any and all types
*/

type ObtainKeyFn = <T, U extends keyof T>(object: T, key: U) => T[U];

const obtainKey: ObtainKeyFn = (object, key) => object[key];

const animal = {
  name: 'Bob',
  color: 'white',
  family: 'cats',
  age: 10
}

const animalFamily = obtainKey(animal, 'family');
const animalAge = obtainKey(animal, 'age');
