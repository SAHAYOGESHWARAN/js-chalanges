let data = 10;
new Promise(function(resolve, reject) {
  setTimeout(function() {
    data = 2;
    resolve(data);
  }, 1000);
}).then(function (res) {
  console.log(res);
});
 

//output   2