# Functional Iterators

Functional Iterators help make life better in JavaScript essentially elimnating the need of looping.

All of the below iterators support IE 9 or greater.

**First off some new iterators were added in es6 but the most used ones have been around since ES5 which support as far bas as IE9 (The below are supported)**

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

## filter

The filter Iterator allows us to loop through results and filter out only the data we want to use/see this also does not mutate the original array!

```js
const objArr = [{key: 1, value: 10},
          {key: 2, value: 20},
          {key: 3, value: 30}];
const results = objArr.filter(val => val.key > 2);

console.log(results);
// Output:
// [{key: 3, value: 30}]
```

## every

`every` is a functional iterator which loops through every value and runs a logic check against it, and returns true or false, depending on if every value passed the logic check out not.

Here's a little example:

```js
const values = [1, 2, 3, 4, 5, 6];

values.every(val => val > -1); // Returns true
values.every(val => val > 3); // Returns false
```

## Sources (MDN)

- [reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
- [map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Map)
- [filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
- [forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
- [every](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every)
