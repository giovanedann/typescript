/*
  Generics are a TypeScript tool for creating reusable components, that is, being able to create a component that can work over a variety of types rather than a single one.

  Generics are used when you don't know exactly what is going to return from, for example, an API response, or a generic function, for example,
  the filter/map function.

  Generics can be used in different places of the code, for example, if you want your generic type to be
  infered when your function is called, your Type need to be placed at the end of the function name, for example,
  function<T>().

  This T is a generic type, it can be replaced with any name, but by default a T is used to indicate generic types.
*/

type CustomFilterCallback<T> = (
  value: T,
  index?: number,
  array?: T[]
) => boolean;

function customFilter<T>(array: T[], callbackfn: CustomFilterCallback<T>): T[] {
  const filteredArray = [];

  for (let i = 0; i < array.length; i++) {
    if (callbackfn(array[i])) {
      filteredArray.push(array[i]);
    }
  }

  return filteredArray;
};

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const array2 = ['1', '2', '3', '4', '5'];

const lessThanFive = array.filter((number) => number < 5);

const lessThanFiveCustomFilter = customFilter(array, (number) => number < 5);
