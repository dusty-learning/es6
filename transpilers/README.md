# Transpilers

There's a lot of transpilers around the most popular one being Babel. When it comes to transpilers the choice is really up to you, and what exactly your looking for.

I like to break them down to two different categories `Functionality` and `Syntax` based transpilers

## Functionality Transpilers

So a good example of functionality transpilers would be babel. Which means it takes both syntax and functionality of the new ES versions and transpiles it down to useable JavaScript for older browsers. 

By functionality I mean actual new built in methods like `Object.assign()` etc...

You can check out babel to get a jumping head start here: https://babeljs.io/

The cons to using something like babel, is they require a bit extra in configuration before you are able to get going and using it. Usually, these are also a bit slower too.

## Syntax Transpilers

Syntax transpilers only breakdown syntax based ES6, so things like `let` and `const`, `spread syntax`, etc... 

The pros to using a Syntax based transpiler is that it's essentially plug and play, you install it, and you can run it without the need to really do much configuring. Usually these are extremely fast as well.

You can find buble here: https://buble.surge.sh/

The cons obviosuly as stated you don't have a range like a functional transpiler would give you, but usually this isn't a huge issue. 

Like I said, you sould pick out one that meets your needs. 

## What Does a Transpiler Do?

So let's take a code example

```js
// Some ES6 code
let thing = 'cool';
const other = 'thing';
```
If we run this through our transpiler we get back

```js
var thing = 'cool';
var other = 'thing';
```

An example for say arrow functions might look like:

```js
// in
const squares = numbers.map( n => n * n );

// out
var squares = numbers.map( function ( n ) { return n * n; } );
```

Pretty simple right? This is essentially a transpilers job. 