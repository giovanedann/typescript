/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable no-unused-vars */

/*
  The any type allows you to store a value of any type. It instructs the compiler to skip
  type checking. You usually use any type to store a value that you don’t actually know
  its type at the compile-time or when you migrate a JavaScript project over to a
  TypeScript project. If you are starting a new project using TypeScript, you should avoid
  using the any type.
*/

function returnAnything(anything) {
  return anything;
}

/*
  the function returnAnything infers the type of the anything argument of being any by
  default, since it's not explicit the type of the argument, but it's possible to set the
  type of something as any.
 */

function returnAnything2(anything: any) {
  return anything;
}

// With any, every value passed as parameter for the function will be accepted
