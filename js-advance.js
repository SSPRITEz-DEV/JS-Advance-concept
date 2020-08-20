// Functions 

function sayHello(name) {
    return console.log('Hello, '+name);
}

// or 
var sayHello2 = function(name){

}

//or 

sayHello3 = (name) => {
    return console.log("Hello, Bitch")
}

//-- sayHello3();

// Global Namespace


// IIFE

(function(){
    var name = 'sspritez';
})();


// This 


let myobj = {
    name: ['ssprite','por'],
    hello: function(){
        return 'Hello, '+ this.name[0];  
        // This is mean where u are in
    }
};
//-console.log(myobj.hello());


// Object Creation

var person = function(name, age){
    this.name = name;
    this.age = age;
}
var sspritez = new person('sspritez', 22);

//-console.log(sspritez);

// Prototype

var person2 = function(){}

person2.prototype.name = 'n/a';
person2.prototype.age = 0;
//comment : Prototype is like when you do a obj creation and no send value to func prototype will create or set a default what ever u will set;

var sspritez = new person2();

//-console.log(sspritez.age);


// Call 

var mObj = {
    num: 10
}

var mFunc = function(add){
    return this.num + add;
}
//==console.log(mFunc.call(mObj, 5));

// Apply 

// same as call but aggrument to array
//==console.log(mFunc.apply(mObj, [5] ));


////// test from another 

var sobj = {
    name: "Tanawatt Jituthai",
    sayNameAndDay: function saysomething(day){
        console.log('Hello, '+ this.name+'.Today is '+day+'day.');
    },
}

var sobj2 = {
    name: 'Piemsub',
    lastname: 'ssp2',
    age: 22,
}

sobj.sayNameAndDay('Mon');
sobj.sayNameAndDay.call(sobj2, 'Mon');
sobj.sayNameAndDay.apply(sobj2, ['Mon']);
sobj.sayNameAndDay.bind(sobj2)('Mon');


///   clear with call, apply and bind

////// test from another 


// Classes

// Closures


