const add = (a, b) => a + b;
const multiply = (a, b) => a * b;

//callback function
const calculate = (a, b, operation) => operation(a,b);


add(10,20);
multiply(10,20);

function mathOperation(a, b, operation) {
    if (a>b){
        return operation(a, b);
    }
}

setTimeout(() => {
    console.log('timeout');
})