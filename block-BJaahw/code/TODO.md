1. Create a function `createUser` that accepts `name` and `age` and returns a new object with those properties.

```js
function createUser(name , age){
    let object = {};
    objecct.name = name;
    object.age = age;
    return object
}
```

2. Add a method named `sayHello` inside the object created above. When called it should alert `Welcome {user}`. Replace `{user}` with the name of the user.
```js
function createUser(name , age){
    let object = {};
    object.name = name;
    object.age = age;
    object.sayHello = function(){
        return `Welcome ${object.name}`
    }
    return object
}
```

3. Use the data (name, age) of two different person to create the object using `createUser`. Store the returned value in `personOne` and `personTwo`.
```js
let personOne = createUser("Lester" , 26)
let personTwo = createUser("Derek" , 36)
```
4. Change the code inside `createUser` in such a way that the methods `sayHello` doesn't have to be in all object. Use the prototypal nature. (Hint Object.create())
```js
let methods = {
        sayHello: function(){
        return `Welcome ${object.name}`
    }
}

function createUser(name , age){
    let object = Object.create(methods);
    object.name = name;
    object.age = age;
    return object
}
```

5. Convert the `createUser` function into Pseudoclassical pattern of object creation. Use `F.prototype` to store the methods. `F.prototype` means storing the methods in prototype property of the function.
```js
createUser.prototype = {
        sayHello: function(){
        return `Welcome ${object.name}`
    }
}

function createUser(name , age){
    let object = Object.create(createUser.prototype);
    object.name = name;
    object.age = age;
    return object
}
```

6. Use `new` to create two new objects with the data of two different person and re-assign the value of `personOne` and `personTwo`.

```js
CreateUser.prototype = {
        sayHello: function(){
        return `Welcome ${this.name}`
    }
}

function CreateUser(name , age){
    this.name = name;
    this.age = age;
}

let personOne = new CreateUser("Lester" , 26)
let personTwo = new CreateUser("Derek" , 36)
```

7. Try calling `personOne.sayHello()` and `personTwo.sayHello()`. Check if you get the required output.


8. Convert the `createUser` function into `User` class.
```js
class User{
    constructor(name, age){
    this.name = name;
    this.age = age;
    }
    sayHello(){
    return `Welcome ${this.name}`
    }
}
```

9. Check by creating two instance of the class using data of two different persons and re-assign the value of `personOne` and `personTwo`

```js
let personOne = new User("Lester" , 26)
let personTwo = new User("Derek" , 36)

personOne = new User("Castelino" , 26)
personTwo = new User("Dummy" , 36)
```

10. Try calling `personOne.sayHello()` and `personTwo.sayHello()`. Check if you get the required output.
```js
console.log(personOne.sayHello())
console.log(personTwo.sayHello())
```
