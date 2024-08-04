const promise = new Promise(function(resolve) {
    console.log('Starting task...');
    let data;
    setTimeout(function() {
      data = 100;
      resolve(data);
    }, 1000);
  });
  promise.then(function(res) {
    console.log('Promise fulfilled');
    console.log(res);
  });


  //output 

//  Starting task...
//Promise fulfilled
//100
