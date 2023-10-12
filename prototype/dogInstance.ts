import Dog from "./dogPrototype";
import SuperDog from "./dogExtends";

const dog1: Dog = new Dog("Fido")



console.log(dog1.name)


const superDog1 : SuperDog = new SuperDog("pluto")

console.log(superDog1.name)
console.log(superDog1.bark())
console.log(superDog1.fly())



