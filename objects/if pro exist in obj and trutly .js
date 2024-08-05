function myFunction(a, b) {
    return a[b] ? true : false;
}

let exampleObject1 = { x: 1, y: 0, z: null };
let exampleObject2 = { x: 1, y: 'string', z: undefined };
let exampleObject3 = { x: false, y: 'hello', z: 42 };

console.log(myFunction(exampleObject1, 'x')); // Output: true (truthy value)
console.log(myFunction(exampleObject1, 'y')); // Output: false (falsy value)
console.log(myFunction(exampleObject1, 'z')); // Output: false (null)
