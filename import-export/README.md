# Imports and Exports

Imports and Exports are the official JavaScript standard module system that has been added into JavaScript

(CommonJS and RequireJS are not the standard no and they're sort of icky)

## Exports

So lets start with exports, because you can't have an import, without an export.

First off a lot of this will be similar to the MDN read you can find here:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export

This is a good batch of info on using export.

There are several different syntaxs to how you can export a value. Here's a list (From the MDN article listed above)

```js
export { name1, name2, …, nameN };
export { variable1 as name1, variable2 as name2, …, nameN };
export let name1, name2, …, nameN; // also var, function
export let name1 = …, name2 = …, …, nameN; // also var, const

export default expression;
export default function (…) { … } // also class, function*
export default function name1(…) { … } // also class, function*
export { name1 as default, … };

export * from …;
export { name1, name2, …, nameN } from …;
export { import1 as name1, import2 as name2, …, nameN } from …;
```

That export looks kind of familiar right? (Like `module.exports`)

That's quite a lot of ways huh? Well let's go through some of them.

So here is an example of a javascript file built out that will be imported elsewhere, it is a simple single function. So let's mix in some of the other es6 functionality we've gone over.

```js
// Since it is only a single function, we should just use export default so we can easily import it elsewhere
export default val => {
  if (!val) {
    return 'No value sent!';
  }

  return val - 2;
};
```

But what if we have a lot of stuff we want to export say like a library of the sorts?

```js
// Theres a few ways to do this we can create our object of methods
const methods = {
  add(x, y) {
    return x + y;
  },
  sub(x, y) {
    return x - y;
  },
  multi(x, y) {
    return x * y;
  },
  divide(x, y) {
    return x / y;
  }
};

export methods;

// Or export them on a per function level

export const add = (x, y) => x + y;
export const sub = (x, y) => x - y;
export const multi = (x, y) => x * y;
export const divide = (x, y) => x / y;
```

But what about that `export * from '...'` one? Well we will cover that with our introduction to imports!

## Imports

Imports well, import what we export!

MDN page: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import

All the ways to run an import statement:

```js
import defaultExport from "module-name";
import * as name from "module-name";
import { export } from "module-name";
import { export as alias } from "module-name";
import { export1 , export2 } from "module-name";
import { export1 , export2 as alias2 , [...] } from "module-name";
import "module-name";
```

quite a few different ways here to huh.

So for the following examples we are going to be using the above export example we created. And for the sake of our example it will be called `math.js` and for the sake of argument `math.js` looks like this:

```js
export const add = (x, y) => x + y;
export const sub = (x, y) => x - y;
export const multi = (x, y) => x * y;
export const divide = (x, y) => x / y;
```

We can import only the functions we need using `destructuring`

```js
import { add } from './math';
// Now you can freely use the add method
add(1, 1);

// But what if we wanted to call it something else? No problem
import { add as thing } from './math';
// Now thing is our method
thing(1, 1);

// If you wanted all of the methods but didn't want them destructured you could just tell your import like so
import * as mathMethods from './math';
// now you have all of the methods inside of an object named mathMethods
mathMethods.add(1, 1);
```

The last one is usually why when creating my export I use the pattern we used in `math.js`, simply because it gives me the flexability to bring them in as an entire object, or destructure them one by on if I only need 1 or 2.

That's really the gist of imports and exports, follow the MDN links above to get more details on certain things if needed.
