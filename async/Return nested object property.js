
function myFunction(obj) {
    if (obj && obj.a && obj.a.b !== undefined) {
      return obj.a.b;
    }
    return undefined;
  }

const obj1 = { a: { b: 'value' } };
const obj2 = { a: {} };
const obj3 = {};

console.log(myFunction(obj1)); // Output: 'value'
console.log(myFunction(obj2)); // Output: undefined
console.log(myFunction(obj3)); // Output: undefined
