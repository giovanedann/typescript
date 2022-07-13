/*
  Intersection types (&) are closely related to union types, but they are used very differently.
  An intersection type combines multiple types into one. This allows you to add together
  existing types to get a single type that has all the features needed.
*/

/*
  Here, we are getting the intersection of the three types
*/
type AB = 'A' | 'B';
type AC = 'A' | 'C';
type AD = 'A' | 'D';
type Intersection = AB & AC & AD; // type Intersection = "A"


/*
  Combining types
*/
type HasName = { name: string };
type HasLastName = { lastName: string };
type HasAge = { age: number };

type Person = HasName & HasLastName & HasAge;

const person: Person = {
  name: 'John',
  lastName: 'Doe',
  age: 40,
}

export { person }; // importing to avoid global scope problems
