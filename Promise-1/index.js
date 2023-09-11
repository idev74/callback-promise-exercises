// Make a new Promise
const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    // reject("--- Oops ---");
    resolve('>>> Success! <<<');
  }, 2000);
});

p.then((message) => {
  console.log('Promise resolved! 😀');
  console.log(message);
}).catch((err) => {
  console.log('Promise rejected! 😞');
  console.log(err);
});

// **Problems to solve**

// **1)** What happens when a promise is rejected? Test it by calling `reject()`
// When a promise is rejected, it outputs the reject message (or whatever is inside the reject function) in the console. It also outputs the message "Promise rejected! 😞" in the console.

// **2)** What happens when you call both `resolve` and `reject`? Test this.
// When you call both resolve and reject, the promise will be rejected and the resolved message will not be printed in the console, only rejected one will.

// **3)** Does the order matter you call resolve and reject matter? Test this. 
// The order does matter. Whatever is called first will be chosen to execute.

// **4)** What happens if you call `resolve` or `reject` more than once? Test this out for yourself.
// If you call them multiple times, the first one will be executed and the rest will be ignored.