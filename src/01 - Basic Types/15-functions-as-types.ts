/*
  This file has an example of how to type possible callback functions
*/

type MapStringsCallback = (indexItem: string) => string;

function mapStrings(array: string[], callbackfn: MapStringsCallback): string[] {
  const newArray: string[] = [];

  for (let i = 0; i < array.length; i += 1) {
    newArray[i] = (callbackfn(array[i]));
  }

  return newArray;
}

export const example = ['a', 'b', 'c', 'd', 'e', 'f'];

const mappedExample = mapStrings(example, function (i) {
  return i.toUpperCase();
});

console.log(example);
console.log(mappedExample);
