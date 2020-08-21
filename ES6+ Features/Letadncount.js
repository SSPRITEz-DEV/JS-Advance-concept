// var and let is same 

var name = 'ssprite'
name = 'ssatang'
// valuue can change

const person = {name: 'ssprite'}
// name = 'ssatang' this not change
person.name = 'meicowe'

//console.log(person.name)



// for (var num of [1,2,3,4,5]) {
//     setTimeout(function(){
//         console.log(num)
//     },1000);
// }

for (let num of [1,2,3,4,5]) {
    setTimeout(function(){
        console.log(num)
    },1000);
}

