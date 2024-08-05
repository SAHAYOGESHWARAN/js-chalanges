function myFunction(obj) {
    const { b, ...rest } = obj;
    return rest;
  }
  
const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { x: 10, y: 20 };

console.log(myFunction(obj1)); // Output: { a: 1, c: 3 }
console.log(myFunction(obj2)); // Output: { x: 10, y: 20 }
