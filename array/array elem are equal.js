function myFunction(arr) {
    return arr.every(element => element === arr[0]);
}

let exampleArray1 = [1, 1, 1, 1];
let exampleArray2 = [1, 2, 1, 1]; 
console.log(myFunction(exampleArray1));    // Output: true
console.log(myFunction(exampleArray2));      // Output: false
