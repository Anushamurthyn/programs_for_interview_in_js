//Reject
let promise1 = new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error("Whoops!")), 1000);
  });
  
  
  promise1.catch(alert);
