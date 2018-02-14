# Arrow Functions

MDN link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

The next prominent feature I'm sure you've seen through ES6 is the use of arrow functions

Arrow functions give us the ability to create single line functions, simpler methods, and simpler function expressions all in a little arrow.

It's important to note that single line arrow functions are called `Expression Bodies`, where multi line arrow functions are called `Statement Bodies`

## Usage

So how do we use it? Well lets begin with a tradional function we would be familiar with:

```js
var init = function (param) {
  return 'Do a Thing';
};
```

Pretty Standard right? Let's take the same function and turn it into an arrow function

```js
const init = (param) => {
  return 'Do a Thing';
};
```

Not to bad right? This is known as a "Statement Body" style arrow function

But what if we take it a step further?

```js
const init = param => 'Do a Thing';
```

Whoa. So a whole lot of things changed huh? Here's some explanation:

- Since the function is immediatly returning something that value can go right after the arrow
- Since we only had one param, we were able to strip out the parens wrapped around it
- Since we put it on 1 line, we are able to get rid of the curly brackets.
- This is known as an 'Expression Body' arrow function

Arrow functions are really grand when you need to work with higher order functions or functional iterators.

```js
const results = nums.map(val => val * 2);
```

Notice we were able to use the 'Expression Body' Style with our map iterator here. Where as traditionally it would look something like this:

```js
var results = nums.map(function (val) {
  return val * 2;
});
```

## "Lexical" This

What I mean by this is if you are in need to use the `this` keyword your scoping won't go all bonkers, and you no longer need to do that silly setter of `var self = this;` all the time.

Here's an example:

```js
// Tradionally
var self = this;
this.nums.map(function(val) {
  if (val > 2) {
    self.results.push(val);
  }
});

// With the help of arrow functions
this.nums.map(val => {
  if (val > 2) {
    this.results.push(val);
  }
});
```

Notice how we are able to then use the same `this` within our callback function? It really helps to avoid scope getting out of hand or all over the place.

Other than the slight differences with this, and the syntax changes (Which are completely optional) you can treat arrow functions exactly the same we we would treat regular traditional functions.
