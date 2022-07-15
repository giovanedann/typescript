/*
  When you think "where are generics used?" it's pretty simple to answer that question.

  Arrays are generics, because the function don't know the type of the arguments that the user is going to pass.

  Promises are also generics, because the function don't know what the promise resolve/reject is going to return.
*/

const numbersArray: Array<number> = [1, 2, 3, 4, 5];

async function returnPromise(): Promise<number> {
  return 1;
};

function myPromise(): Promise<number | string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(1)
    }, 1000)
  })
}
