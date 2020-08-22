/**
 *   CL
 */


function useState(init_value:string = ''){
    let state:string = init_value;
    let getState = function():string{
        return state
    }
    let setState = function(value){
        state = value
    }
    return {
        getState,
        setState
    }
}

let myState = useState('Hello, SSPRITE.')
console.log(myState.getState())


// myState.setState(`hello from the other side`)
// console.log(myState.getState())