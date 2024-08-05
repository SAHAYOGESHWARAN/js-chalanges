function myFunction(a, b, c) {
    return new Set([a, b, c]);
  }
    

  console.log(myFunction(1, 2, 3));         // Output: Set { 1, 2, 3 }
console.log(myFunction(1, 1, 2));         // Output: Set { 1, 2 }
console.log(myFunction('a', 'b', 'a'));   // Output: Set { 'a', 'b' }
console.log(myFunction(1, 'text', true)); // Output: Set { 1, 'text', true }
