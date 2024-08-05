function myFunction(a, b) {
    return a.getFullYear() === b.getFullYear() &&
           a.getMonth() === b.getMonth() &&
           a.getDate() === b.getDate();
  }
  const date1 = new Date('2024-08-05');
const date2 = new Date('2024-08-05');
const date3 = new Date('2024-08-06');
const date4 = new Date('2023-08-05');

console.log(myFunction(date1, date2)); // Output: true
console.log(myFunction(date1, date3)); // Output: false
console.log(myFunction(date1, date4)); // Output: false
