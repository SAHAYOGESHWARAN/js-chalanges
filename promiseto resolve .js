let data = 5;
let result;

const promise = new Promise(function(resolve) {
  console.log('Starting task...');
  setTimeout(function() {
    data = 100;
    console.log('Resolving now...');
    resolve(data); 
  }, 1000);
});

promise.then(function(updatedData) {
  multiply(updatedData);
  console.log(result); 
});

function multiply(val) {
  result = val * val;
}


//output

//Starting task...
//Resolving now...
//10000

