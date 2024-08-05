function myFunction(a, b) {
   
    const diffInMs = Math.abs(a - b);
   
    const diffInDays = diffInMs / (1000 * 60 * 60 * 24);
    
    return Math.round(diffInDays); 
  }
  
 