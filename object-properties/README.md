# Better Object Properties

So ES6 added better or "Enhanced" object properties giving us a wider variety in ways to use them.

## Property Shorthand

The first thing being proerty short hands. This allows us to set properties in our object that were saved as variables in the script somewhere. Really helpful for properties that follow the same name.

Here's an example:

This is how you would do it with ES5:

```js
var thing = 'cool string';
var obj = {
  thing: thing
};

console.log(obj.thing); // Outputs: 'cool string'
```

Now here's the same code using the property shorthand:

```js
const thing = 'cool string';
const obj = {
  thing
};

console.log(obj.thing); // Outputs: 'cool string'
```

It's important to note that when using the shorthand that the property will take the same name as the variable that data is assigned to.

## Computed Property Names

So creating dynamic object property names has become a little easier with this new feature. Here's how we achieve this using ES5:

```js
var obj = {
  thing: 'cool'
};
var example = 'other';

obj[example] = 'thing';

console.log(obj); // => { thing: 'cool', other: 'thing' }
```

And now with ES6 you are able to do this:

```js
const example = 'other';
const obj = {
  thing: 'cool',
  [example]: 'thing'
};

console.log(obj); // => { thing: 'cool', other: 'thing' }
```

The main downside to this is it sort of removes your ability to search for code. However so is the original way. The choice is yours to use this or not.

## Method Properties

There's even a shorthand to quickly creating methods inside of your objects

Originally to create a method using es5:

```js
var obj = {
  foo: function (a, b) {
    // Cool Action Code
  },
  bar: function (a ,b) {
    // Cool Action Code
  }
};
```

Using this shorthand with es6 it quickly becomes this:

```js
const obj = {
  foo (a, b) {
    // Cool Action Code
  },
  bar (a, b) {
    // Cool Action Code
  }
};
```

Quickly allowing you to create methods for your objects in a nice and clean manner
