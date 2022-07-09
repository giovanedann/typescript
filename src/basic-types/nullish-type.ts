/*
nullish types are the undefined and null types.
undefined type is not used for types, they are only used for checking
*/

const createPerson = (firstName: string, lastName?: string): {
  firstName: string, lastName?: string
} => ({
    firstName,
    lastName
  })

// null types are used when you don't know the return of the function, for example:
function squareOf(x: any): number | null {
  if (typeof x === 'number') return x * x;
  return null;
}
