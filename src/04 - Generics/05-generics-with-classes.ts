interface StackElements<T> {
  [k: number]: T,
}

export class Stack<T> {
  private counter = 0;
  private elements: StackElements<T> = {};

  push(element: T) {
    this.elements[this.counter] = element;
    this.counter++;
  }

  pop(): T | void {
    if (this.isElementsArrayEmpty()) return undefined;

    this.counter--;

    const removedElement = this.elements[this.counter];
    delete this.elements[this.counter];
    return removedElement;
  }

  isElementsArrayEmpty(): boolean {
    return this.counter === 0;
  }

  length(): number {
    return this.counter;
  }

  showStack(): void {
    for (const key in this.elements) {
      console.log(this.elements[key]);
    }
  }
}


const stack = new Stack<number | string>();

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push('5');

stack.showStack();

while (!stack.isElementsArrayEmpty()) {
  const removedElement = stack.pop();
  console.log('removed ->', removedElement);
}

