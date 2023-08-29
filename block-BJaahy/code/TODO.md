# More about class

- Create a class named `Square` which accepts one parameter `side` and will set two property `width` and `height` to the value of `side`.


- Add a method named `description` that will alert a message saying `The square is ${width} x ${height}`

- Create another method named `calcArea` that will return the area of the square.

- Create a getter method named `area` that will return area of the square.

- Create a setter method named `area` that will accept a value (the value will be the area of any square like 124). Based on the input value update the `width` and `height` of the square.(The width and the height will be updated to 12 (12 \* 12 = 124))

- Create a static method named `isEqual` which accepts two square instance (when you create a new object using the class). If the area of both square is same the method should return `true` or `false`. (Static methods are called directly on the class not in the instance)

- Create two instance of the `Square` class (ex: `let s1 = new Square(6);`)

- Check the `area` getter method on both square.

- Check the `isEqual` method and pass the two instance you created above.

```js
class Square{
    constructor(side){
        this.width = side;
        this.height = side;
    }
    description(){
        alert(`The square is ${this.width} x ${this.height}`)
    }
    calcArea(){
        return (this.width*this.height)
    }
    get area(){
        return (this.width*this.height)
    }
    set area(area){
        let side = Math.sqrt(area);
        this.width = side;
        this.height = side;
    }
    static isEqual(instance1, instance2){
        return(instance1.area === instance2.area)
    }
}

let s1 = new Square(6)
let s2 = new Square(20)
let s3 = new Square(6)

console.log(s1)
console.log(s3)
console.log(Square.isEqual(s1, s2))

```

## User Class

- Create a class named `User` that accepts `firstName` and `lastName` property

- Create a getter method named `fullName` that will return the full name of the person.

- Create a `fullName` setter method that will accept full name parameter of the person. It will update the `firstName` and `lastName` based on the input. (Say if the user passed `Arya Stark` it will update the `firstName` to `Arya` and `lastName` to `Stark`. It will also change one condition if the length of the name passed is less than 5 characters it will alert a message saying `Full name should be more than 5 characters`)

- Create a method named `nameContains` which will accept string and will return `true` or `false` based on if the name of the user contains the text that passed by user.

- Create two instance of the `User` class

- Check by using the `fullName` setter method with name bigger than 5 characters.

- Check by using the `fullName` setter method with name less than 5 characters.

- Check the `fullName` using getter

- Check the `nameContains` method

```js
class User{
    constructor(firstName, lastName){
      this.firstName = firstName;
      this.lastName = lastName;
    }
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }
    set fullName(fullName){
        if(fullName.length < 5){
            alert `Full name should be more than 5 characters`
        }else{
            let newName = fullName.split(" ")
            this.firstName = newName[0]
            this.lastName = newName[1]
        }
    }
    nameContains(string){
        return this.fullName.includes(string)
    }
}

let user1 = new User("Lester", "Castelino");
let user2 = new User("Weiss", "Dogson")

console.log(user1)
console.log(user2)

console.log(user1.fullName = "Derek Castelino")
console.log(user2.fullName = "Weiss")
console.log(user1)
console.log(user2)


console.log(user1.nameContains("ek Cas"))
console.log(user1, user2)
```

