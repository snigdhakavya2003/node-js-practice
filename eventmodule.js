const EventEmitter=require("events");
const event=new EventEmitter();
event.on("tut",(num1,num2)=>{
    console.log("done!!!!",num1+num2);
});
event.emit("tut",1,2);
class Person extends EventEmitter{
    constructor(name){
        super();
        this._name=name;
    }
    get name(){
        return this._name;
    }
}
let ns=new Person("pandu");//let is used for mutable variable declaration,const is immutable variable declaration
let chr=new Person("bunny");
chr.on("name",()=>{
    console.log("name is "+chr.name);
});

ns.on("name",()=>{
    console.log("name is "+ns.name);
});
ns.emit("name");
chr.emit("name");
