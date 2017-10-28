
// Let's create 2 array constants
const a = [1, 2];
const b = [3, 4, 5];

const c = [...a, ...b];
// Cs output would be: [1, 2, 3, 4, 5]

// However if you are not careful say we did something like this
const d = [1, 2, 3, 4, ...b];
// Now d has an output of [1, 2, 3, 4, 3, 4, 5]
// Uh oh lots of duplication has just happened

// You can even use the spread operators on strings themselves
// So long as they are wraped in the square array brackets of course.
// So:
const myThing = 'test';
const arrMyThing = [...myThing];
// The output here would be: ['t', 'e', 's', 't']
// You can also use it on the string directly if you wanted
const arrMyThing = [...'test'];
// This would give you the same output as the above.

// You can even apply the spread operator when using the new keyword
// Like so:
const dateFields = [1970, 0, 1];  // 1 Jan 1970
const d = new Date(...dateFields);
// d would then produce a new date object with the given values of the array

// The spread operator works with object literals too
// Like so:
const obj1 = { foo: 'bar', x: 42 };
const obj2 = { foo: 'baz', y: 13 };

const clonedObj = { ...obj1 };
// Object { foo: "bar", x: 42 }

const mergedObj = { ...obj1, ...obj2 };
// Object { foo: "baz", x: 42, y: 13 }
// Notice the object didn't duplicate, but instead merged the objects together
// Which overwrote foo instead of duplicating

// The Spread operator does not work with non-iterable data types so
const obj = { 'key1': 'value1' };
const array = [...obj]; // TypeError: obj is not iterable

