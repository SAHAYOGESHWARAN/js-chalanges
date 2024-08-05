function myFunction(a, b) {
    const result = {};
  
    for (const [key, value] of Object.entries(a)) {
      // Multiply each value by the number 'b' and assign to the new object
      result[key] = value * b;
    }
  
    return result;
  }
  

  const obj = { x: 2, y: 5, z: 10 };
const multiplier = 3;

console.log(myFunction(obj, multiplier));
// Output: { x: 6, y: 15, z: 30 }

