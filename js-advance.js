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
        return 'Hello, '+ myobj.name[0];  
        // This is mean where u are in
    }
};
console.log(myobj.hello());
