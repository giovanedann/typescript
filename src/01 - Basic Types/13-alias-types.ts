/*
  Type aliases create a new name for a type. Type aliases are sometimes similar to interfaces,
  but can name primitives, unions, tuples, and any other types that you’d otherwise have
  to write by hand.

  Types need to be written following the PascalCase notation.

  To create alias types, we need to use the reserved word "type"
*/

type Age = number;

type Person = {
  firstName: string,
  middleName?: string,
  lastName: string,
  favoriteColor?: string,
};

// Using union types
type RGBColor = 'Red' | 'Green' | 'Blue';
type NeutralColors = 'Brown' | 'Black' | 'White';
type FavoriteColors = RGBColor | NeutralColors

// Infering created types
const person: Person = {
  firstName: 'John',
  middleName: 'Dane',
  lastName: 'Doe',
}

function setPersonFavoriteColor(person: Person, color: FavoriteColors): Person {
  return ({
    ...person,
    favoriteColor: color,
  });
}

/* If we execute this function, only the colors in the type FavoriteColors can be provided
to the color parameter */
