function myFunction(a, b) {
 
    const diffInMs = Math.abs(a - b);
    
  
    const oneHourInMs = 1000 * 60 * 60;
    
    return diffInMs <= oneHourInMs;
  }
  

  const date1 = new Date('2024-08-05T12:00:00');
const date2 = new Date('2024-08-05T12:30:00');
const date3 = new Date('2024-08-05T13:15:00');

console.log(myFunction(date1, date2)); // Output: true
console.log(myFunction(date1, date3)); // Output: false
