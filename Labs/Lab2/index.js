// Promise
function myAsyncFunction(a) {
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
myAsyncFunction(75).then((message) => {
    console.log(message);
}, (error) => {
    console.log(error);
});

myAsyncFunction(25).then((message) => {
    console.log('Second then: ' + message)
}).catch(error => {
    console.log('catch: ' + error);
}).finally(() => {
    console.log('Finally executed!')
});

myAsyncFunction(95).then((message) => {
    console.log('Third then: ' + message);
    return 'Data from Promise!';
}).catch(error => {
    console.log('catch: ' + error);
}).finally(() => {
    console.log('Finally executed!')
});
*/
//Parallel execution
Promise.all()[
    myAsyncFunction(20),
    myAsyncFunction(85),
    myAsyncFunction(100)].then((message) => {
        console.log('promise.all resolved: ', message);
}).catch(error => {
    console.log('Promise.all rejected: ', error);
});