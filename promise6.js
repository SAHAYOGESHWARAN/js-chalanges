let data = 10;
new Promise(function(resolve, reject) {
  setTimeout(function() {
    data = 2;
  }, 1000);
  resolve(data);
});
console.log(data);
    


//output  10