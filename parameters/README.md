# Parameters

Yes even parameters have some enchancing features included with the grand es6 addition

Like the ability to set default parameter values, or the ability to use Rest Syntax in your function parameters

## Rest Syntax

MDN Link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters

So we can use that `...` as a paramter for a function in this case though it is known as the `rest syntax` because what it really means is the "rest" of the parameters

here's an example:

```javascript
const test = (a, b, ...c) => (a + b) * c.length;
```

Notice a few things here:

- The `...c` is at the end of my parameter list
- When using `c` I am accessing its length

What do those two pieces indicate? Well that c is an array!

So what the `rest syntax` does is it takes all the arguments after `a` amd `b` and puts them into an array.

Lets take a look at an example to use this:

```javascript
const multiply = (multiplier, ...nums) => nums.map(n => multiplier * n);

// Remember the first 2 is our first param the "multiplier"
// The rest is going to be converted to an array known as "nums"
const multipliedArray = multiply(2, 1, 2, 3, 4);

console.log(multipliedArray); // => [2, 4, 6, 8]
```

So if your unfamiliar with map, I suggest taking a gander at the functional iterators section of this repo, but a rough explanation is that it loops through an array and applied the function to each value returning a brand new array of those modified values.

In the above examples `2` was our `multiplier` while `1, 2, 3, 4` were our parameters that were converted into an array so to our `multiply` function they were `[1, 2, 3, 4]` which we then mapped over and actually multiplied each value by our multiplier.

Pretty sweet right?

## Default Parameter Values

MDN link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters

Another thing you can do with paramters is make sure they have a default value if they are not passed in. Helping you avoid pesky undefined errors when a user doesn't use your function correctly, or allowing you to use a function in different ways.

Lets take a look:

```javascript
const double = (a = 0) => a * 2;

console.log(double(1)); // => 2
console.log(double()); // => 0
```

That is it, that's all there is to default parameters, you essentially set it in the parentheses so that if no value is passed then it will fall back to the default instead.


