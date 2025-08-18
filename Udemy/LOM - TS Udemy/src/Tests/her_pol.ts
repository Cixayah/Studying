
class Animal {
    constructor(public name: string) { }
    makeNoise(): void {
        console.log(`${this.name} makes a noise.`);
    }
}

class Dog extends Animal {
    makeNoise(): void {
        console.log(`${this.name} says Woof!`);
    }
}

class Cat extends Animal {
    makeNoise(): void {
        console.log(`${this.name} says Meow!`);
    }
}

class AnimalSounds {
    public playSound(animal: Animal): void {
        animal.makeNoise();
    }
}

const dog = new Dog('Tina');
const cat = new Cat('Suzy');
const animalSounds = new AnimalSounds();
animalSounds.playSound(dog); // Output: Tina says Woof!
animalSounds.playSound(cat); // Output: Suzy says Meow!