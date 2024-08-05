function myFunction(set, val) {
    return set.has(val);
  }
  

  const mySet = new Set([1, 2, 3, 4, 5]);

console.log(myFunction(mySet, 3)); // Output: true
console.log(myFunction(mySet, 6)); // Output: false
