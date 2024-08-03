//Adjust the code snippet so that the value 0 is logged first and then the value 1.

//question
//let count = 0;
//function increment() {
// count = count + 1;//
//}
//increment();
//setTimeout((1) => {
  
  //console.log(count);
//}, 1000);
 
//console.log(count);


//answer
let count = 0;
function increment() {
  count = count + 1;
}

increment(); 

console.log(count); 

setTimeout(() => {
  console.log(count); 
}, 1000);
