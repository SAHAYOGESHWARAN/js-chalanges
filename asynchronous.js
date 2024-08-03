function pause() {
    const start = new Date().getTime();
    while (new Date().getTime() - start < 3000);
    console.log('Hello!');
  }
   
  pause();
  console.log('Another log message.');



  //output
  //Hello!
//Another log message.