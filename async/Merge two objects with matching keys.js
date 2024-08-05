function myFunction(x, y) {
   
    const { b: d, ...restY } = y;
  
    
    return {
      ...x,
      ...restY,
      d
    };
  }
  