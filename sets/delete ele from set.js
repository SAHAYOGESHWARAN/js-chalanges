function myFunction(set, val) {
    set.delete(val);
    return set;
  }
  
  const mySet = new Set([1, 2, 3, 4]);

console.log(myFunction(mySet, 3)); // Output: Set { 1, 2, 4 }
console.log(myFunction(mySet, 5)); // Output: Set { 1, 2, 4 }
