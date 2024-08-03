let data = 10;
new Promise(function(resolve, reject) {
  setTimeout(function() {
    data = 2;
  }, 1000);
  resolve(data);
}).then(function (res) {
  console.log(res);
});
 

//output 10