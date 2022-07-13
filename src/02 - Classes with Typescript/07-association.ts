/*
  Association relationships defines that an object can instance another without creating a dependency cicle.
  
  Semantically, association is considered a weak relationship.

  Imagine the relationship between a doctor and a patient. A doctor can be associated with multiple patients.
  At the same time, one patient can visit multiple doctors for treatment or consultation.
  Each of these objects has its own life cycle and there is no “owner” or parent.
  The objects that are part of the association relationship can be created and destroyed independently.
*/

export class Author {
  private _writingTool: WritingTool | null = null;

  constructor(
    private _name: string
  ) {}

  set tool(writingTool: WritingTool | null) {
    this._writingTool = writingTool;
  }

  get writingTool(): WritingTool | null {
    return this._writingTool;
  }

  get name(): string {
    return this._name;
  }

  write(): void {
    if (!this._writingTool) {
      console.log('I cannot write without a writing tool...');
      return;
    }

    this.writingTool?.write();
  }
}

export abstract class WritingTool {
  constructor(
    private _name: string
  ) {}

  abstract write(): void;

  get name(): string {
    return this._name;
  }
}

export class Pen extends WritingTool {
  write(): void {
    console.log(`${this.name} is writing...`)
  }
}

export class Typewriter extends WritingTool {
  write(): void {
    console.log(`${this.name} is typing...`)
  }
}

const author = new Author('Example');
const pen = new Pen('Blue Paint Pen');
const typewriter = new Typewriter('Old Typewritter');

console.log(author.name);
console.log(pen.name);
console.log(typewriter.name);

author.tool = typewriter; // associating the author writingTool attribute with the class Typewriter

author.write(); // Typewriter is typing...

author.tool = pen; // associating the author writingTool attribute with the class Pen

author.write(); // Pen is writing...

author.tool = null; // setting to null

author.write(); // I cannot write without a writing tool...