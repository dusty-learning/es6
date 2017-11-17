# Variables

One of the more prominent introductions from ES6 is the introduction of `const` and `let`, say bye bye to `var`!

## const

As you may have guessed, `const` is essentially a `constant` meaning it's value will never change, and it becomes immutable.

If you set an object to a const you can still add and change properties within that object, the same thing goes for arrays, if you set a number or a string to a const you will not be able to change it however.

```js
const test = 0;

test = 1; // Will throw an error
test++; // Will throw an error
```

## let

`let` allows you to set a variable in which you plan to change completely later on, generally you will want to try and stick with const to keep your data immutable, but lets work well for say loops, or small meta changes.

```js
let test = 0;

test = 1; // Sets test to 1
test++; // Adds 1 to test
```

## Scope

Everyones favorite topic! With the introduction of const and let we introduce their new scope called `block scope` (It is so much nicer and easier to understand don't worry!)

So before when you created a `var`, it seemed like it's scope was all over the place because `var` gets hoisted meaning no matter where you declare a var, you can use it where ever.

However with `const` and `let` their scope stays directly where they are defined, if you declare a one inside of an `if` statement you cannot use it outside of said if statement, this is known as `block scope` keeping things scoped to their current block.

So let's say we create a const inside of an if block in our code

```js
if (value > 2) {
  const ifScoped = 3;
}

// If we try to log our variable now outside
console.log(ifScoped); // Throws an error saying ifScoped is undefined
```

However if we log within the same block level as our constant we just created

```js
if (values > 2) {
  const ifScoped = 3;

  console.log(ifScoped); // <-- Would console out 3
}
```

Here is a little layout of block scope in this bit of code here:

```js
// Global scope of this file
const init = function (param) {
  // Block scope of Init
  if (param) {
    // Block scope of the if statement
  }

  for (let i = 0; i < param.length; i++) {
    // Block scope of our for loop
    if (param[i] === 1) {
      // Block scope of our if inside the loop
    }
  }
};
```

Lower scopes are able to use variables that live in the scopes above it

```js
// Global scope of this file
const globalVar = 1;

const init = function (param) {
  console.log(globalVar); // <-- Would display 1
  const initVar = 2;

  if (param) {
    console.log(globalVar); // <-- Would display 1
    console.log(initVar); // <-- Would display 2
    const firstIf = 3;
  }

  console.log(firstIf) // <-- Would throw undefined error

  for (let i = 0; i < param.length; i++) {
    console.log(globalVar); // <-- Would display 1
    console.log(initVar); // <-- Would display 2
    console.log(firstIf) // <-- Would throw undefined error

    if (param[i] === 1) {
      console.log(globalVar); // <-- Would display 1
      console.log(initVar); // <-- Would display 2
      console.log(firstIf) // <-- Would throw undefined error
    }
  }
};

// Global scope of this file
console.log(initVar); // <-- Would throw undefined error
```

## Creating a Constant without ES6

So, what was it like before ES6 came along?

Well in order to create a constant unmutatable variable you'd have to do something like this:

```js
Object.defineProperty(typeof global === "object" ? global : window, "PI", {
  value: 3.141593,
  enumerable: true,
  writable: false,
  configurable: false
});

PI > 3.0;
```

It's important to also note that the above is only the global context so it is not able to be block scoped. Here's the same thing but using ES6 `const`

```js
const PI = 3.141593;

PI > 3.0;
```

Pretty awesome right?