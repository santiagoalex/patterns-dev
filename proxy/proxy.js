const person ={
    name: "Felipe",
    age: "42",
    nationality:"Colombian"
};

const personProxy = new Proxy(person, {
    get:(obj,prop)=>{
        if(!obj[prop]) {
            console.log('Hmm... it seems that this property doesn´t exist on the target objet object')
            return
        } 
        // console.log(`The value of ${prop} is ${obj[prop]}`) 
        // Reflect is another way to call an use the proxy methods without use [] sintaxys
        console.log(`The value of ${prop} is ${Reflect.get(obj,prop)}`)

    },
    set: (obj,prop,value)=>{
        if(prop === "age" && typeof value !== "number"){
            console.log( "Sorry, but age can´t be a string")
            return
        } 
        if(prop === "name " &&  value.lenght < 2){
            console.log('Sorry, but You need to provide a valid name')
            return
        }

        console.log(`Changed ${prop} from ${obj[prop]} to ${value}`);
        return Reflect.set(obj,prop,value);
        // obj[prop]=value;
    }

});

personProxy.name;
personProxy.age= 45;




