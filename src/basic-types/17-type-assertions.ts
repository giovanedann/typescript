/*
  Sometimes you will have information about the type of a value that TypeScript can’t know about.
  For example, if you’re using document.getElementById, TypeScript only knows that this will
  return some kind of HTMLElement, but you might know that your page will always have an
  HTMLCanvasElement with a given ID.
  To fix that, it's possible to use type assertions.
*/

const myCanvas = document.getElementById('my-canva') as HTMLCanvasElement;
const myBody = document.querySelector('body') as HTMLBodyElement;
const input = document.querySelector('.input') as HTMLInputElement;
