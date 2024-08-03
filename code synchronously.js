//Adjust the code snippet so that the console.log statement logs the value 2.

// question

//let i = 0;
//function func() {
 //i = 2;
//}
//setTimeout(func, 100);
// expected output = 2
//console.log(i);

//answer
let i = 0;
function func() {
  i = 2;
}

setTimeout(func, 100);
setTimeout(() => console.log(i), 200); 

    // Output: 2