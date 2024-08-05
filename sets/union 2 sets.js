function myFunction(a, b) {
   
    return new Set([...a, ...b]);
  }
  const setA = new Set([1, 2, 3]);
  const setB = new Set([3, 4, 5]);
  
  console.log(myFunction(setA, setB)); 


  
  // Output: Set { 1, 2, 3, 4, 5 }
  