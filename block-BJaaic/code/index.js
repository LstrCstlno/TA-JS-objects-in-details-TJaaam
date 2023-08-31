function createAnimal(location, numberOfLegs){
    let obj = Object.create(method);
    obj.location = location;
    obj.numberOfLegs = numberOfLegs;
    return obj;
}

let method = {
    eat: function(){
        console.log(`i live in ${this.location} and i can eat`)
    },
    changeLocation : function(newLocation){
        this.location = newLocation;
    },
    summary: function(){
        return `i live in ${this.location} and i have ${this.numberOfLegs} legs`
    }
}

function createDog(location, numberOfLegs, name, color){
    let obj = Object.create(dogMethod);
    obj.location = location;
    obj.numberOfLegs = numberOfLegs;
    obj.name = name;
    obj.color = color;
    return obj;
}

let dogMethod = {
   bark : function(){
    alert(`I am ${this.name} and I can bark 🐶`)
   },
   changeName: function(newName){
    this.name = newName;
   },
   changeColor: function(newColor){
    this.color = newColor;
   },
   summary: function(){
     return `I am ${this.name} and I am of ${this.color} color. I can also bark`
   }
}

Object.setPrototypeOf(dogMethod, method)

function createCat(location, numberOfLegs, name, colorOfEyes){
    let obj = Object.create(catMethod);
    obj.location = location;
    obj.numberOfLegs = numberOfLegs;
    obj.name = name;
    obj.colorOfEyes = colorOfEyes;
    return obj;
}

let catMethod = {
   meow : function(){
    alert(`I am ${this.name} and I can do mewo meow 😹`)
   },
   changeName: function(newName){
    this.name = newName;
   },
   changeColorofEyes: function(newColor){
    this.colorOfEyes = newColor;
   },
   summary: function(){
     return `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`
   }
}

Object.setPrototypeOf(catMethod, method)

let animal = createAnimal("Australia", 12);
let weiss = createDog("Mangalore", 4,"Weiss", "White")
let cayleigh = createCat("Trash can", 4,"Cayleigh", "black")