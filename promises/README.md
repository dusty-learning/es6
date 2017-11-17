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