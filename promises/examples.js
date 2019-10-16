
// A very basic example might be something like this
function fooBar (a, b = 0) {
  return new Promise((resolve, reject) => {
    if (a + b === 4) {
      return resolve('Its four!')
    }

    return reject('It was not four.')
  })
}

// It's important to note that you ALWAYS should have a catch attached to the promise chain
// ALWAYS handle your errors!
// In the future releases not having a catch will cause a crash when an unhandled error happens in your promise chain!
fooBar(2, 2)
  .then(console.log)
  .catch(console.error)

// You can chain promises together
// It's important to note that NESTING promises is considered BAD PRACTICE
// So you should just chain them together instead

fooBar(2, 2)
  .then(fooBar)
  .then(console.log)
  .catch(console.error)
