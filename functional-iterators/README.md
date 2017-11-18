# Functional Iterators

Functional Iterators help make life better in JavaScript essentially elimnating the need of looping.

**First off I want to say that Functional Iterators were not a thing added in ES6, they've been around since ES5 and have browser support as far back as IE9. However others seem to think that they were introduced with ES6, there for I am also adding them in**

**Functional Iterators only work with Iterable types like Arrays but thats all you really should be looping**

**NOTE most of these examples are taken right from MDN, you can checkout all their stuff for more in depth details on each method, I will provide the links to each one at the end**

## reduce

`reduce` will loop through the passed in iterable and give you the single value back.

Using an accumulator and the current value that get passed in

Example:

```js
var numbers = [1, 2, 3, 4, 5];
var test = numbers.reduce(function(accumulator, value) {
  return accumulator + value;
});
// Ouput of test: 15
// Using ES6
const numbers = [1, 2, 3, 4, 5];
const test = numbers.reduce((accumulator, value) => accumulator + value);
```

Doing the same thing without reduce:

```js
var numbers = [1, 2, 3, 4, 5];
var i = 0;
var len = numbers.length;
var result = 0;

for (i; i < len; i++) {
  result += numbers[i];
}
```

Reduce also works to help with complex types like flattening an array

```js
var numbers = [[0, 1], [2, 3], [4, 5]];
// Notice that reduce takes an empty array as the second parameter
// This is to tell reduce what type the accumulator is going to be
// And what to start out as
var test = numbers.reduce(function(acc, val) {
  return acc.concat(val);
}, []);

// Using ES6
const numbers = [[0, 1], [2, 3], [4, 5]];
const test = number.reduce((acc, val) => [...acc, ...val], []);
```

There's a multitude of different examples I can show here, but I think you get the idea


## map

`map` loops through an iterable to create a new array of whatever it does not however require an accumulator

The keyword here being its a NEW array so the array thats being mapped is left un mutated!

Examples:

```js
var numbers = [1, 2, 3];
var doubles = numbers.map(function(val) {
  return val * 2;
});

// Using ES6
const number = [1, 2, 3];
const doubles = numbers.map(val => val * 2);
// Output: [2, 4, 6]
```

Using map to reformat objects in an array

```js
var objArr = [{key: 1, value: 10},
              {key: 2, value: 20},
              {key: 3, value: 30}];

var reformattedArray = objArr.map(function(obj) {
   var rObj = {};
   rObj[obj.key] = obj.value;
   return rObj;
});

//Using ES6

const objArr = [{key: 1, value: 10},
              {key: 2, value: 20},
              {key: 3, value: 30}];

const reformattedArray = objArr.map(({ key, value }) => {
   const rObj = {};

   rObj[key] = value;

   return rObj;
});

// reformattedArray is now [{1: 10}, {2: 20}, {3: 30}],

// kvArray is still:
// [{key: 1, value: 10},
//  {key: 2, value: 20},
//  {key: 3, value: 30}]
```

## Sources (MDN)

- [reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
- [map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Map)
- [filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
- [forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
