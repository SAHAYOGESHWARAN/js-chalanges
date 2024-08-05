function myFunction(a, b) {
    const result = {};
  
    for (const [key, value] of Object.entries(a)) {
      // Multiply each value by the number 'b' and assign to the new object
      result[key] = value * b;
    }
  
    return result;
  }
  