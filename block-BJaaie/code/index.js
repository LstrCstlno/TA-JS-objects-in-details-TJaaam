// pseudoclassical pattern

function CreateAnimal0(location , numberOfLegs){
    this.location = location;
    this.numberOfLegs = numberOfLegs;
}

CreateAnimal0.prototype = {
    eat: function(){
        console.log(`I live in ${this.location} and I can eat`);
    },
    changeLocation: function(newLocation){
        this.location = newLocation;   
    },
    summary: function(){
        return `I live in ${this.location} and I have ${this.numberOfLegs} legs`;
    }
}

function CreateDog0(location , numberOfLegs, name, color) {
    CreateAnimal0.call(this,location, numberOfLegs);
    this.name = name;
    this.color = color;
}

CreateDog0.prototype = {
    bark: function(){
        alert(`I am ${this.name} and I can bark 🐶`)
    },
    changeName: function(newName){
        this.name = newName;
    },
    changeColor:function(newColor){
        this.color = newColor;
    },
    summary: function(){
        return `I am ${this.name} and I am of ${this.color} color. I can also bark`
    }
}

Object.setPrototypeOf(CreateDog0.prototype, CreateAnimal0.prototype)

let spark = new CreateDog0("Mangalore", 4,"Spark", "Brown")

function CreateCat0(location , numberOfLegs, name, colorOfEyes) {
    CreateAnimal0.call(this,location, numberOfLegs);
    this.name = name;
    this.colorOfEyes = colorOfEyes;
}

CreateCat0.prototype = {
    meow: function(){
        alert(`I am ${this.name} and I can do mewo meow 😹`)
    },
    changeName: function(newName){
        this.name = newName;
    },
    changeColorOfEyes:function(newColorOfEyes){
        this.colorOfEyes = newColorOfEyes;
    },
    summary: function(){
        return `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`
    }
}

Object.setPrototypeOf(CreateCat0.prototype, CreateAnimal0.prototype)

let Nami = new CreateCat0("trash", 4,"Nami", "blue")

// classical pattern

class CreateAnimal{
    constructor(location , numberOfLegs){
        this.location = location;
        this.numberOfLegs = numberOfLegs;
    }
    eat(){
        console.log(`I live in ${this.location} and I can eat`);
    }
    changeLocation(newLocation){
        this.location = newLocation;   
    }
    summary(){
        return `I live in ${this.location} and I have ${this.numberOfLegs} legs`;
    }
}

let animal = new CreateAnimal("Bangalore", 2);

class CreateDog extends CreateAnimal{
    constructor(location , numberOfLegs, name, color){
    super(location , numberOfLegs)
    this.name = name;
    this.color = color;
    }
    bark(){
        alert(`I am ${this.name} and I can bark 🐶`)
    }
    changeName(newName){
        this.name = newName;
    }
    changeColor(newColor){
        this.color = newColor;
    }
    summary(){
        return `I am ${this.name} and I am of ${this.color} color. I can also bark`
    }
}

let weiss = new CreateDog("Mangalore", 4,"Weiss", "White")

class CreateCat extends CreateAnimal{
    constructor(location , numberOfLegs, name, color){
    super(location , numberOfLegs)
    this.name = name;
    this.colorOfEyes = this.colorOfEyes;
    }
    meow(){
        alert(`I am ${this.name} and I can do mewo meow 😹`)
    }
    changeName(newName){
        this.name = newName;
    }
    changeColorOfEyes(newColorOfEyes){
        this.colorOfEyes = newColorOfEyes;
    }
    summary(){
        return `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`
    }
}

let cayleigh = new CreateCat("trash", 4,"Cayleigh", 4)