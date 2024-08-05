function myFunction(arr) {
    return arr.sort((a, b) => b - a);
}


let exampleArray = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
console.log(myFunction(exampleArray)); 


// Output: [9, 6, 5, 5, 5, 4, 3, 3, 2, 1, 1]
