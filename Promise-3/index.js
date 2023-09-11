function greet(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof name === 'string') { 
        resolve('hello ' + name);
      } else {
        reject('Greet expects a string!');
      }
    }, 1000);
  });
}

function uppercaser(str) {
  return new Promise((resolve, reject) => {
    setTimeout(() =>{
      if (typeof str === 'string') {
        resolve(str.toUpperCase());
      } else {
        reject('Argument to uppercaser must be string');
      }
    }, 1000);
  });
}


// Above we have two functions that return promises. 
// These are greet and uppercaser. 
// Notice below how we chain these promises together. The 
// Result of one is then passed to the next. 
// When chained all of the promises have to resolve for success. 
// If any of the promises reject then you end in the catch block. 

greet('Your name') // Returns a Promise
  .then(str => uppercaser(str))  // Upper case the results from greet() Returns a Promise
  .then(str => console.log(str)) // Log the results of uppercaser()
  .catch(err => console.log(err)) // Catches an error

greet(12)
.then(str => uppercaser(str))
.then(str => console.log(str))
.catch(err => console.log(err));

uppercaser(123)
.then(str => console.log(str))
.catch(err => console.log(err));

// Challenges: get greet() to fail by passing a non string value
// What happens? 
// The promise gets rejected with an "ERR_UNHANDLED_REJECTION" error. 
// Specifically, the error is "Greet expects a string!"

// Challenge: get uppercaser() to fail by passing a non string value
// What happens? 
// The promise gets rejected with an "ERR_UNHANDLED_REJECTION" error. 
// Specifically, the error is "Argument to uppercaser must be string."

// Challenge: Notice there is only a single .catch() at the end. 
// Explain the behavior?
// The .catch() at the end catches any errors that occur throughout the function execution.
