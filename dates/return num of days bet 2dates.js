function myFunction(a, b) {
   
    const diffInMs = Math.abs(a - b);
   
    const diffInDays = diffInMs / (1000 * 60 * 60 * 24);
    
    return Math.round(diffInDays); 
  }
  
  const date1 = new Date('2024-08-01');
const date2 = new Date('2024-08-05');

console.log(myFunction(date1, date2)); 

// Output: 4
