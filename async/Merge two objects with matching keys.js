function myFunction(x, y) {
   
    const { b: d, ...restY } = y;
  
    
    return {
      ...x,
      ...restY,
      d
    };
  }
  

  const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { b: 20, d: 4, e: 5 };

console.log(myFunction(obj1, obj2)); 



// Output: { a: 1, b: 2, c: 3, d: 20, e: 5 }
