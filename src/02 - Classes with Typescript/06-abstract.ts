/*
  In TypeScript, classes, methods and attributes may be abstracts.

  Abstract classes CANNOT BE INSTANTIATED DIRECTLY, only subclasses of it.

  An abstract method or abstract field is one that hasn’t had an implementation provided. These members
  must exist inside an abstract class, which cannot be directly instantiated. The role of abstract classes
  is to serve as a base class for subclasses which do implement all the abstract members. When a class doesn’t
  have any abstract members, it is said to be concrete.

  abstract class methods doesn't have a body, you just call it inside the super class to make it required,
  so every child of this class need to implement this method or attribute.

  If you forget to implement the base class’s abstract members, TypeScript will return an error.
*/

export abstract class Character {
  protected abstract emoji: string;

  constructor(
    protected name: string,
    protected strength: number,
    protected healthPoints: number,
  ) {}

  public attack(attackedCharacter: Character): void {
    console.log(this.catchPhrase());
    console.log(`
      ${this.name} attacked ${attackedCharacter.name} with ${this.strength} strength points
    `);

    attackedCharacter.loseHealth(this.strength);
  }

  public loseHealth(attackStrength: number): void {
    console.log(`${this.name} attacked, lost ${attackStrength} health points`);
    this.healthPoints -= attackStrength;
    console.log(`${this.emoji} ${this.name} has now ${this.healthPoints} health points`);
  }

  public abstract catchPhrase(): string
}

class Warrior extends Character {
  protected emoji = '⚔️';

  public catchPhrase(): string {
    return this.emoji + ' I will kill you, monster!'
  }
};

class Orc extends Character {
  protected emoji = '👹';

  public catchPhrase(): string {
    return this.emoji + ' AAAARNANAHAAA!'
  }

};

const warrior = new Warrior('Loth', 30, 400);
const orc = new Orc('Bammcla', 10, 600);

orc.attack(warrior);
warrior.attack(orc);