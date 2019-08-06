//by value 
let a = 5;
let b = 6;
b++;

//by reference
let c = [1,2,3,4,5];
let d = c;
d.push(6);
console.log(d);
console.log(c);

//clone object
let obj = {
    user:'Gabriel',
    pass:'123456',
    quote:{
        says:'love is in the air',
    }
};
let clone = {...obj};
let superClone = JSON.parse(JSON.stringify(obj));

obj.quote.says = "not";
console.log(clone);
console.log(obj);
console.log(superClone);




//#3 create two classes: an Animal class and a Mamal class. 
// create a cow that accepts a name, type and color and has a sound method that moo's her name, type and color. 

class Animal{
    constructor(name,type,color){
        this.name = name;
        this.type = type;
        this.color = color;
    }
}

class Mamal extends Animal{
    constructor(name,type,color){
        super(name,type,color);
    }
    sound(){
        console.log(`Moooo I'm ${this.name} and I'm a ${this.color} ${this.type}`);
    }
}
const cow = new Mamal('shelly','cow', 'brown');