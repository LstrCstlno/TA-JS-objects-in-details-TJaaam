class person{
    constructor(name,age,gender){
        this.name = name;
        this.age = age;
        this.gender = gender
    }
    eat(){
        return `${this.name} is eating`;
    }
    sleep(){
        return `${this.name} is sleeping`;
    }
    walk(){
        return `${this.name} is walking`;
    }
}

class player extends person{
    constructor(name,age,gender, sportsname){
        super(name,age,gender);
        this.sportsname = sportsname;
    }
    play(){
        return `${this.name} is playing ${this.sportsname}`;
    }
}

class teacher extends person{
    constructor(name,age,gender, institutename){
        super(name,age,gender);
        this.institutename = institutename;
    }
    teach(){
        return `${this.name} is teaching at ${this.institutename}`;
    }
}

class artist extends person{
    constructor(name,age,gender, kind){
        super(name,age,gender);
        this.kind = kind;
    }
    createArt(){
        return `${this.name} is a ${this.kind}`;
    }
}

class cricketer extends player{
    constructor(name,age,gender, sportsname, teamname){
        super(name,age,gender, sportsname);
        this.teamname = teamname;
    }
    playCricket(){
        return `${this.teamname} is playing ${this.sportsname}`;
    }
}


let user1 = new person("Lester", 27, "male")
let user2 = new player("lester", 27,"male", "basketball")
let user3 = new teacher("Lester", 27, "male", "aloysias")
let user4 = new artist("Lester", 27, "male", "beatboxer")
let user5 = new cricketer("lester", 27, "male", "cricket", "Warriors")
console.log(user1);
console.log(user2);
console.log(user3);
console.log(user4);
console.log(user5)