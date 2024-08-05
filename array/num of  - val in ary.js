function myFunction(a) {
    return a.filter(number => number < 0).length;
}

let exampleArray = [1, -2, 3, -4, 5, -6];
console.log(myFunction(exampleArray)); 




// Output: 3
