function myFunction(a) {
    return a.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}


let exampleArray = [1, 2, 3, 4, 5];
console.log(myFunction(exampleArray)); 


// Output: 15
