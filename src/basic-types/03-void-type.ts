/*
  The void type indicates that a function doesn't return anything. For example,
  the forEach function has a void type, because it doesn't return anything
*/

function noReturn(): void {
  console.log('function without return');
}

const hi: () => void = () => {
  console.log('hi');
};
