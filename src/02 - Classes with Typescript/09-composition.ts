/*
  The composition relationship also describes a "has" relationship between two classes, but, unlike aggregation,
  in composition, we can say that the relationship is MUST HAVE.
  
  For example, let's imagine the engine of a car, the car exists without an engine, but it is completely
  useless, in other words, a car MUST HAVE an engine to work.

  In composition, unlike aggregation, where you inject classes that are created outside the class,
  we create, for example, the Engine INSIDE the Car, which means that you cannot use the engine outside the car,
  unless we create an isolated instance of the Engine.
*/

export class CarEngine {
  turnOn(): void {
    console.log('Engine working! 🔥')
  }

  turnOff(): void {
    console.log('Engine stopped. ⛔')
  }

  accelerate(): void {
    console.log('Accelerating ⏩')
  }

  brake(): void {
    console.log('Braking ⏪')
  }
}

export class Car {
  private readonly engine: CarEngine = new CarEngine();

  turnOn(): void {
    this.engine.turnOn();
  }

  turnOff(): void {
    this.engine.turnOff();
  }

  accelerate(): void {
    this.engine.accelerate();
  }

  brake(): void {
    this.engine.brake();
  }
}

const myCar = new Car();

myCar.turnOn();
myCar.accelerate();
myCar.brake();
myCar.turnOff();
