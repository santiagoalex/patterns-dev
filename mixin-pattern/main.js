//Mixin pattern now it seems like a bad practice,  because prototype pollution
// instead of Mixin, in react is better to use a HOC

class Dog {
  constructor(name) {
    this.name = name;
  }
}

//First mixin to use with heritance
const mammaslFuntionalities = {
  walk: () => console.log("I am a Walking"),
  sleep: () => console.log("I am sleeping"),
};

//Second Mixin using first mixin and adding properties to class Dog

const dogFunctionality = {
  __proto__: mammaslFuntionalities,
  wagTail: () => console.log("I am waging my tail"),
  bark: () => console.log("I am barking"),
  play: () => console.log("I am playing"),
  walk() {
    super.walk();
  },
  sleep() {
    super.sleep();
  },
};

Object.assign(Dog.prototype, dogFunctionality);

const pet1 = new Dog("Pluto");

console.log(pet1.name);

pet1.wagTail();
pet1.bark();
pet1.play();
pet1.walk();
pet1.sleep();
