# Destructuring

ES6 added the ability which is called `destructuring` which essentially allows us to quickly set variables to values inside of `arrays` or `objects`

## Destructuring Arrays

The concept here is pretty easy. So let's take a look

```js
const [my, var] = ['new', 'one', 'test'];

console.log(my); // Output: 'new'
console.log(var); // Output: 'one'
```

Catch on what we did there? We created two new variables from our array of values. This follows the index, the good news here is that you can name the vars whatever you want.

The above is essentially the same as:

```js
const arr = ['new', 'one', 'test'];

const my = arr[0];
const var = arr[1];
```

But say we wanted to skip the middle value so we could get our last one?

```js
const [my,, var] = ['new', 'one', 'test'];

console.log(my); // Output: 'new'
console.log(var); // Output: 'test'
```

We just leave the center value blank but make sure to place the extra commma, this skips the middle value of one to get us back test.

You can skip any value you need.

```js
const [,my, var] = ['new', 'one', 'test'];

console.log(my); // Output: 'one'
console.log(var); // Output: 'test'
```

Pretty nifty right?

## Destructuring Objects

Destructuring objects is similar but different in it's own way. You have to make sure to use the property names when destructuring and object like so:

```js
const { test, things } = {test:  'cool', things: 'features'};

console.log(test); // Output: 'cool'
console.log(things); // Output: 'features'

// If we did something like
const { test } = { thing: 'cool' };

console.log(test); // Output: undefined
```

You cannot however use destructuring to get back values from a nested object

```js
const { things } = { test: { things: 'cool' } }

console.log(things); // Output: undefined

const { test.things } = { test: { things: 'cool' } } // This will throw an error
```

Think of destructuring as a shorthand to calling a value.

```js
const myObj = { test: 'Features' };
const { test } = myObj;

// Is the same as doing this:

const test = myObj.test;
```

## Working Code Example

You can find the working code example here: [Destructuring](https://github.com/dusty-learning/learnyoues6/blob/master/examples/destructuring)

