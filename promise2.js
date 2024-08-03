new Promise(function(resolve, reject) {
    console.log('Starting task...');
    resolve(10);
  }).then(function (result) {
    console.log('Promise fulfilled');
    console.log(result);
  });
 
  
  //output  Starting task...
//Promise fulfilled
//10