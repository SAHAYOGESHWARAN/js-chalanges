function myFunction(keys, values) {
    if (keys.length !== values.length) {
      throw new Error('Arrays must be of the same length');
    }
  
    const result = {};
    for (let i = 0; i < keys.length; i++) {
      result[keys[i]] = values[i];
    }
  
    return result;
  }
  const keys = ['name', 'age', 'city'];
const values = ['saha', 20, 'india'];
console.log(myFunction(keys, values));
 
// Output: { name: 'saha', age: 20, city: 'india' }
