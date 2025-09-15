async function myAsyncFunction(a) {
    const myPromise = new Promise((resolve, reject) => {
        if (a > 50) {
            const result = {
                data: 'some data',
                info: 'additional info'
            }
            resolve(result)
        } else
            reject('promise rejected!');
    })
    return myPromise
}

/*
myAsyncFunction(100).then(message => {
    console.log(message);
}).catch(error => {
    console.log(error);
});
*/

async function callPromise() {
    try {
        myAsyncFunction(55).then(message => {
            console.log('******* Then inside async function')
        }).catch(error => {
            console.log('******* Catch inside async function')
        })
        var response = await myAsyncFunction(100);
        console.log(response);
        response = await myAsyncFunction(90);
        console.log(response);
        response = await myAsyncFunction(80);
        console.log(response);
    } catch (error) {
        console.log(error);
    } finally {
        console.log('finally executed');
    }
}

callPromise();