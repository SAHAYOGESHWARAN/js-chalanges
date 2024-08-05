function myFunction(a, b) {
    return a.getTime() < b.getTime();
  }
   

  const date1 = new Date('2024-08-05T10:00:00');
const date2 = new Date('2024-08-05T12:00:00');
const date3 = new Date('2024-08-05T08:00:00');

console.log(myFunction(date1, date2)); // Output: true
console.log(myFunction(date2, date1)); // Output: false
console.log(myFunction(date3, date1)); // Output: true
