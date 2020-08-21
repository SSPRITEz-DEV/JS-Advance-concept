function ssprite(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('result');
        }, 2000);
    })
}

async function prite(){
    var msg = await ssprite()
    console.log(msg)
}

prite()



/**
 *     CODE FROM POR 
 */

function initializeFakeLoad(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Loaded complete')
            resolve();
        }, 1500);
    })
}

async function automateFlow(){
    //....
    //.......
    // User clicked at the repository
    await initializeFakeLoad()
    await initializeFakeLoad()
    await initializeFakeLoad()
    console.log('Show new element') // new page ... etc...
}


automateFlow()

///// alternative

function initializeFakeLoad(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Loaded complete')
            resolve('fuck'); // return alike
        }, 1500);
    })
}

async function automateFlow(){
    let msg = await initializeFakeLoad()
    console.log(msg)
    /*initializeFakeLoad().then((msg) => {
        console.log(msg)
    })*/
}


automateFlow()