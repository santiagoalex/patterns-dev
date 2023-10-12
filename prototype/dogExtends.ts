import Dog from "./dogPrototype";

class SuperDog extends Dog {
  constructor(name){
    super(name) // accede al name de Dog del cual extendio
  }

  fly(){
    return "flying"
  }
}

export default SuperDog