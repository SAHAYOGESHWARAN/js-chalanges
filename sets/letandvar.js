function userDetails(username) {
    if (username) {
      var salary; // Hoisting means it's accessible but undefined until initialized
      let age;    // Block scoped, so we can't access it before declaration
  
      console.log(salary); // undefined due to hoisting
      // console.log(age); // This will still throw a ReferenceError, so comment it out
      age = 30;   // Initialize age
      salary = 10000; // Initialize salary
      console.log(age); // 30
    }
    
    console.log(salary); 
    
  }
  userDetails("saha");
  