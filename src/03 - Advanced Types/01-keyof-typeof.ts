/*
  TypeScript adds a typeof operator that you can use in a type context to refer to the type of a variable or property:

  The keyof operator takes an object type and produces a string or numeric literal union of its keys.
*/

const colorsObject = {
  red: 'vermelho',
  green: 'verde',
  blue: 'azul',
  purple: 'roxo',
  white: 'branco',
  brown: 'marrom',
  black: 'preto',
}

type ColorsObject = typeof colorsObject;
type ColorsObjectKeys = keyof ColorsObject;

function translateColorToPortuguese(color: ColorsObjectKeys, colors: ColorsObject): string {
  return colors[color];
}

console.log(translateColorToPortuguese('red', colorsObject));