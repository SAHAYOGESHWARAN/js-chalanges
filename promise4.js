new Promise(function(resolve, reject) {
    console.log('Starting task...');
    setTimeout(function() {
      resolve();
    }, 1000);
  }).then(function () {
    console.log('Promise fulfilled');
  });
  console.log('I am not blocked');
 
  // output 

  //Starting task...
//I am not blocked
//Promise fulfilled

