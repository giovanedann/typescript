/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable no-unused-vars */

/*
  tuples are not a native type for JavaScript, a tuple is an array with a specific length
  and specific types, and each value must have an unique type
  to create a tuple, the types must be in the correct order, as defined in the tuple
*/

const tuple: [number, string, string] = [1, 'a', 'b'];

// optional tuples
const optionalTuple: readonly [number, string, string?] = [1, 'abc'];
const optionalTuple2: readonly [number, string, ...string[]] = [1, 'abc'];

// readonly tuples
const readOnlyTuple: readonly [number, string, string] = [1, 'abc', 'def'];

/* in readonly tuples, none of the array modifiers (push, pop) can be used, neither the
values can be modified */
