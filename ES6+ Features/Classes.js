class Person {
    constructor(name = 'N/A'){
        this.name = name;
    }
    sayHello(){
        return `Hello, ${this.name}.`
    }
}
const ssprite = new Person('sspritez')

//console.log(ssprite.sayHello())


class Player {
    constructor(){
        this.x = 0
        this.y = 0
    }
}

class Vehicle extends Player{
    constructor(){
        super()
        this.mph = 100
    }
}
console.log(new Vehicle())
