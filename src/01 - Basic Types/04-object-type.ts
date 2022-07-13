const objectA = {
  a: 'A value',
  b: 'B value',
}

/*
in this object, the type { a: string, b: string } is automatically made by typescript,
if we want to add another key to the object, this will not work because it's not in the
object type
*/

// typing objects

const typedObject: {
  a: string;
  b: string;
  c?: string; // optional key
  [key: string]: unknown; // allowing the creation of another keys in the object, not recommended to use unknown
} = {
  a: 'abc',
  b: 'def',
}

// now it's possible to add another keys to the object

typedObject.anotherKey = 'abcde';

// DO NOT USE THE UNKNOWN TYPE.

// ReadOnly keys - lock the keys so they cannot be modified
const typedObject2: {
  readonly a: string;
  readonly b: string;
} = {
  a: 'abc',
  b: 'def',
}
