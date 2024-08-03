//Here we pass a function as argument to getValue. However, we do not use it yet.
// Use the callback function so that the value 5 is logged.


// question

//let result = 0;
//function getValue() {
  // setTimeout(function() {
    
    //  console.log(result);
   //}, 500);
//}
//getValue(function() {
 //  result = 5;
//});

//answer
let result = 0;

function getValue(callback) {
   setTimeout(function() {
      console.log(result);
   }, 500);

   if (callback) {
      callback();
   }
}

getValue(function() {
   result = 5;
});



//output 5