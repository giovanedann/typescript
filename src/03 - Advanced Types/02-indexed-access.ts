/*
  When you need to reference a key of another type, you can use an indexed access type to look up a specific property.

  The indexing type is itself a type, so, we can use unions, keyof, or other types features.

  If you try to index a property that doesn't exist, TypeScript throws an error.
*/

// example 1
export type Vehicle = {
  brand: string
  releaseYear: number | string
}

export type Car = {
  carBrand: Vehicle['brand']
  carReleaseYear: Vehicle['releaseYear']
  carName: string
}

export const car: Car = {
  carBrand: 'Ford',
  carReleaseYear: 2020,
  carName: 'Ford Fiesta 2020'
}

// example 2
export type Person = { age: number; name: string; alive: boolean };
export type Age = Person["age"];

type I1 = Person["age" | "name"]; // type I1 = string | number
 
type I2 = Person[keyof Person]; // type I2 = string | number | boolean
 
type AliveOrName = "alive" | "name";
type I3 = Person[AliveOrName]; // type I3 = string | boolean
