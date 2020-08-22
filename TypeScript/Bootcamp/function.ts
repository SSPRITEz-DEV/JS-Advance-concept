function convertNumberToString(target_number:number):string{
    return target_number.toString()
}

function sayHello(word):void{
    console.log(word)
}
sayHello('Hello SSPRITE.')
console.log(typeof convertNumberToString(255))

/**
 *      CREATING TYPE
 */


type addFunction = (x:number, y:number) => number

function addFunction(x,y):addFunction{
    return x+y
}

console.log(addFunction(5,10))