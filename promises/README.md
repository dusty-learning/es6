# Promises

Promises are probably one of nicest additions with ES6, the ability to get rid of callback hell is a nice feeling.

## What is a promise

The best way to think of a promise is to think of it the same way you would imagine a normal callback. Only much more organized and way easier to use.

Essentially you promise that when this function finishes its execution then you want something else to happen.

## Syntax

Let's take a look at the syntax of a promise setup.

```js
const isTheOvenReady = ovenAtRightTemp => new Promise((resolve, reject) => {
  if (ovenAtRightTemp) {
    return resolve('The Oven is ready');
  }

  return reject(new Error('The Oven is not ready'));
});
```

- Take not that we are using the new keyword here
- Also take note that the main parameter of the Promise is a function
    - This function gets 2 functions as parameters, one ends the promise as a success, the other as an error
- If our condition is met we resolve with our value of `the oven is ready`
- Else we respond with an error saying that the oven is not ready
- **NOTE** You do not NEED to return the resolve or reject, I just find it to be better practice to return instead of using an `if else`

## How Can I Use The Promise?

Let's start by taking our example above and we will use it within our code

```js
const isTheOvenReady = ovenTemp => new Promise((resolve, reject) => {
  if (ovenTemp >= 400) {
    return resolve('The Oven is ready');
  }

  return reject(new Error('The Oven is not ready'));
});

isTheOvenReady(200)
  .then(msg => {
    console.log(msg);
  })
  .catch(err => {
    console.error(err);
  });
// This will console out our err object sent back by the promise

isTheOvenReady(400)
  .then(msg => {
    console.log(msg);
  })
  .catch(err => {
    console.error(err);
  });
// This one will console out our message that the oven is ready
```

- We are using a `.then()` and `.catch()` to listen for the promise to end
- If the `resolve` is called, our `.then` will trigger
- If the `reject` is called our `.catch` will trigger

## So What Is the Benefit?

The benefit to using Promises is to escape callback hell, nested callbacks within nested callbacks etc.

Promises allow you to simply chain `.then()` as you go through your list of promises, as well as allowing you to simply use a `Promise.all()` which will execute promises in a consecutive order. Keeping things together in case certain promises require data from others.

So lets check out an example... So here is an example talking to several apis, heres how we can achieve it using callbacks

```js
api(function(result){
    api2(function(result2){
        api3(function(result3){
             // do work
        });
    });
});
```

Now here's one way to handle it with a promise

```js
api().then(result => {
    return api2();
}).then(result2 => {
    return api3();
}).then(result3 => {
     // do work
});

// Say each api relied on the results of the previous, you could do something like:

api()
.then(api2)
.then(api3)
.then(results => {
  // Do Work
});
```

An even better way

```js
api()
.then(api2)
.then(api3)
.then(results => {
  // Do Work
})
.catch(function(error) {
     // Handle any error that may occur before this point
})
.then(() => {
     // Do something whether there was an error or not
     // Like hiding an spinner if you were performing an AJAX request.
});
```

And of course a way using the `Promise.all()` functionality

```js
Promise.all([api(), api2(), api3()]).then(result => {
    // Do work
    // Result is an array contains the values of the three fulfilled promises.
}).catch(function(error) {
    // Handle the error. At least one of the promises rejected.
});

```

Not only is a promise cleaner, but handling the flow of your code is also an added benefit when working with a promise.
