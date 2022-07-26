/*
  Decorators composition allows the merging of two decorators on the same class.

  IMPORTANT: merged decorators are called in order from bottom to top

  @first -> called last
  @second -> called second
  @third -> called first
*/

type AnimalConstructor = new (...args: any[]) => any;

function firstDecorator(target: AnimalConstructor) {
  console.log('Decorator one');
}

function secondDecorator(target: AnimalConstructor) {
  console.log('Decorator two');
}

function thirdDecorator(target: AnimalConstructor) {
  console.log('Decorator three');
}

@firstDecorator
@secondDecorator
@thirdDecorator
export class Animal {
  constructor(
    public name: string,
    public color: string,
  ) {}
}

console.log(Animal);
