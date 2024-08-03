function add(a, b, callback) {
    const result = a + b;
    callback(result);
  }
  add(2, 3, function(result) {
    console.log(result);
  });


  //output 5