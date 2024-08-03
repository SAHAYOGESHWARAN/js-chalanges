function getName(callback) {
    let name;
    setTimeout(function() {
      name = 'saha';
      callback(name);
    }, 250);
  }
  function getAge(username, callback) {
    let age;
    setTimeout(function() {
      age = 20;
      callback(username, age);
    }, 250);
  }
  getName(function(username) {
    getAge(username, function(username, age) {
      console.log(`Name: ${username}, Age: ${age}`);
    });
  });




  //output  Name: saha, Age: 20