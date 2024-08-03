const promise = new Promise(function(resolve) {
    resolve(100);
  });
  promise.then(function(res) {
    console.log(res);
  });
  
  
  // output 100