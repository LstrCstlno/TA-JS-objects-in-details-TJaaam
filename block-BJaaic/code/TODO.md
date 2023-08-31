<!-- # Inheritance

Convert the below requirements into inheritance using prototypal patters.

#### Animal

Properties:

- `location`
- `numberOfLegs`

Methods

- `eat()` - log a message saying `I live in ${location} and I can eat`

- `changeLocation(newLocation)` - accepts location and updates the location of the animal

- `summary()` - returns `I live in ${location} and I have ${numberOfLegs}`

#### Dog

It will have all the properties and methods of the Animal. These are the extra properties and methods these dogs will have.

Properties:

- `name`
- `color`

Methods:

- `bark()` - alerts a message saying `I am ${name} and I can bark 🐶`
- `changeName(newName)` - accepts the name property and updates the name of the dog
- `changeColor(newColor)` - accepts the new color and updates the color of the dog
- `summary()` - returns `I am ${name} and I am of ${color} color. I can also bark`

#### Cat

It will have all the properties and methods of the Animal. These are the extra properties and methods these dogs will have.

Properties:

- `name`
- `colorOfEyes`

Methods:

- `meow()` - alerts a message saying `I am ${name} and I can do mewo meow 😹`

- `changeName(newName)` - accepts the name property and updates the name of the dog

- `changeColorOfEyes(newColor)` - accepts the new color and updates the color of the dog

- `summary()` - returns `I am ${name} and the color of my eyes are ${colorOfEyes}. I can also do meow meow`

```js
function createAnimal(location, numberOfLegs){
    let obj = Object.create(method);
    this.location = location;
    this.numberOfLegs = numberOfLegs;
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
        return `i live in ${this.location} and i have ${this.numberOfLegs}`
    }
}

function createDog(location, numberOfLegs, name, color){
    let obj = Object.create(method);
    this.location = location;
    this.numberOfLegs = numberOfLegs;
    this.name = name;
    this.color = color;
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
    let obj = Object.create(method);
    this.location = location;
    this.numberOfLegs = numberOfLegs;
    this.name = name;
    this.colorOfEyes = colorOfEyes;
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
     return `I am ${this.name} and the color of my eyes are ${colorOfEyes}. I can also do meow meow`
   }
}

Object.setPrototypeOf(catMethod, method) -->

```