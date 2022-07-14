/*
  This is not a type exactly, is an operator available since ES2020.

  If we have, for example, an optional key of an object, which is a string, and we have a function that executes
  the method toUpperCase() in this string, if the key doesn't exist in the object, JavaScript throws an error, but after
  this feature, you can now use ? to stop the chaining if the value is undefined.
*/

type CustomFile = {
  title: string;
  body: string;
  date?: Date;
}

const myFileWithoutDate: CustomFile = {
  title: 'My custom file title',
  body: 'My custom file body',
}

console.log(myFileWithoutDate.date?.toDateString());

/*
  Here, when date is not present in an object of the type CustomFile, JavaScript will not try to execute
  the method toDateString(), he will return undefined instead of throwing an error.
*/
