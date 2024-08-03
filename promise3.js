new Promise(function(resolve, reject) {
    console.log('Starting task...');
    setTimeout(function() {
      resolve(10);
    }, 1000);
  }).then(function (result) {
    console.log('Promise fulfilled');
    console.log(result);
  });
   

  
  //output  Starting task...
//Promise fulfilled
//10