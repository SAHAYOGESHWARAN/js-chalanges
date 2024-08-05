function myFunction(a, b) {
    return b in a;
}

let exampleObject = { x: 1, y: 2, z: undefined };
console.log(myFunction(exampleObject, 'x')); // Output: true
console.log(myFunction(exampleObject, 'y')); // Output: true
console.log(myFunction(exampleObject, 'z')); // Output: true
console.log(myFunction(exampleObject, 'a')); // Output: false
