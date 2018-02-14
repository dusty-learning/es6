# Spread Syntax

Spread syntax allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected. - [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

## Basic Usage

```javascript
const a = [1, 2];
const b = [3, 4, 5];

const c = [...a, ...b];

console.log(c); // => [1, 2, 3, 4, 5]
```

This is essentially the basic setup for the spread operator.

### Works with Strings too!

```javascript
const aString = 'test';
const aArray = [...aString];

console.log(aArray); // => ['t', 'e', 's', 't']
```

Notice here how I wrapped it in square brackets? That is very important if you don't then the spread syntax will throw an error at you.

### Gotchas

If you're not careful it's very easy to get unwanted duplication using the spread syntax for example:

```javascript
const a = [1, 2, 3];
const b = [3, 4, 5];
const c = [...a, ...b];

console.log(c); // => [1, 2, 3, 3, 4, 5]
```

Notice here that now or 3 is duplicated? This can get especially tricky when working with dynamic data.

## You can use it to pass an array as params!

So lets hop right into an example and then explain that

```javascript
const add = (a, b) => a + b;

console.log(add(...[1, 3])); // => 4
```

So this is a SUPER simple example and you may even find you wont use this setup much but lets go over what is happening here:

- We have an add function which accepts 2 parameters
- We call the add function passing a spread syntax array with 2 values
- The spread syntax is breaking that down to a comma delimated list for parameters

This is essentially doing the same as this:

```javascript
const add = (a, b) => a + b;
const digits = [1, 3];

console.log(add(digits[0], digits[1])); // => 4
```

## Spread syntax works with Objects too

To a degree it does. For instance you can't use spread syntax on an object inside of an array or parameters like above, it only works with its same type of objects

For example:

```javascript
const a = { foo: 'bar', x: 42 };
const b = { foo: 'baz', t: 13 };

const cloneA = { ...a };

console.log(cloneA); // => { foo: 'bar', x: 42 }

const merged = { ...a, ...b };

console.log(merged); // => { foo: 'baz', x: 42, y: 13 }
```

Notice how in our `merged` constant our foo property in b overwrote the one in a? No duplication here the last object at the end will overwrite any similar property names in previous objects no exceptions.

So take a look at this one:

```javascript
const a = { x: 'test' };

console.log([...a]); // => TypeError: a is not iterable
```

Remember how I said we can't use spread syntax on objects to put them into arrays or function params? This is why, objects are not considered an "iterable" type (can't or it's difficult to loop over them) which means we can't use spread to convert a un iterable into an iterable (An array in this case) So we get this error.

