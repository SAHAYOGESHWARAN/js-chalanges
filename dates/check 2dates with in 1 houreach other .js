function myFunction(a, b) {
 
    const diffInMs = Math.abs(a - b);
    
  
    const oneHourInMs = 1000 * 60 * 60;
    
    return diffInMs <= oneHourInMs;
  }
  