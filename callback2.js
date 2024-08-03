function welcomeUser(username) {
    console.log(`Welcome ${username}`);
  }
  function getName(callback) {
    let name;
    setTimeout(function() {
      name = 'Jane';
      callback(name);
    }, 500);
  }
  getName(welcomeUser);



  //output welcome jane