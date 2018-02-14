# String Template Literals

Ever wanted an easier way to dynamically create strings instead of having to concat all the time and worry about the order you are concatting, and the requirement to make everything flow just perfectly to get your string?

Well welcome to String Template Literals!

The concept is simple, you have a string and this allows you to place your variable anywhere in that string. These also support white space and the like so be careful with that.

Here's a little example:

```js
const thing = 'test';

// How we use to need to concat strings:
const msg = 'I am building' + thing + 's  for something';

// Now here's how we can do that using our template literals
const template = `I am building ${thing}s for something`;
```

Notice the primary differences here?

To start a template string you use the backtick instead of a single or double quote, in order to place your variable into your string you wrap the name of your variable with `${}` and boom your inserting data right into your string with ease!

Now remember when I said these also respect whitespace? Well that means

```js
`text line 1
text line 2`
```

Works accordingly where as with a normal quote you'd get an error.

## Advanced Usage

There is an advanced usage with template literals in which you can tag them and use a function to build out your string.

Here's an example:

```js
const person = 'Dan';
const age = 27;

const myTag = (strings, personExp, ageExp) => {
  const str1 = strings[0]; // "that "
  const str2 = strings[1]; // " is a "
  let ageStr = '';

  if (ageExp > 25) {
    ageStr = 'young adult';
  } else {
    ageStr = 'youngin';
  }

  return str0 + personExp + str1 + ageStr;
};

const output = myTag`that ${ person } is a ${ age }`;

console.log(output);
// that Dan is a young adult
```

Now I personally have not used sting template literals in this manner, I am simply listing it as something you are able to do.
