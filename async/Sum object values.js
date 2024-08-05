function myFunction(a) {
    return Object.values(a).reduce((sum, value) => {
     
      return sum + (typeof value === 'number' ? value : 0);
    }, 0);
  }
  