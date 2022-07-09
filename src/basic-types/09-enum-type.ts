/*
  like tuples, enum types are not native from JavaScript. Enums allows to define
  a set of named constants. Using enums can make it easier to document intent, or create
  a set of distinct cases. TypeScript provides both numeric and string-based enums
*/

// Default enums
enum Colors {
  red, // red = 0
  blue, // blue = 1
  yellow, // yellow = 2
}

/*
  Now, it's possible to access the number values with the named keys, or access the named
  keys from the values, for example:
*/

console.log(Colors) // returns an object -> { '0': 'red', '1': 'blue', '2': 'yellow', red: 0, blue: 1, yellow: 2 }

console.log(Colors.red) // -> returns 0
console.log(Colors.yellow) // -> returns 2
console.log(Colors[0]) // -> returns red
console.log(Colors[1]) // -> returns blue

// Specifying values for anums
enum Persons {
  Person1 = 10,
  Person2 = 20,
  Person3 = 'Gabriel',
  Person4 = 'Person 4'
}

/*
When specifying string values for enums, you cannot pass another key without specifying
the value because TypeScript will not know which value to assign to the key
*/

// Binding enums
enum Animals {
  cow = 10,
  chicken = 11,
  dog = 12,
}

enum Animals {
  cat = 13,
  wolf,
  eagle,
}

console.log(Animals); // TypeScript recognize equal enums and bind them automatically

// Using enums
function pickAnimal(animal: Animals): void {
  if (Animals[animal]) {
    console.log(Animals[animal]);
    return
  }

  console.log('Animal not found')
};

pickAnimal(Animals.cow);
