# Classes

So with the introduction of ES6 there was also added support for "classes"

As a functional developer I will tell you to avoid these as they only need to headache and bad practice. However as a provider of education I will try to help you understand them.

MDN link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/class

## What are Classes?

The best comparison within JavaScript to a class is probably `constructors` and `prototypes` the `class` addition tries to somewhat give this wildwest style of development in JavaScript a structure to follow. Did it succeed in it's mission? Sort of.

## Usage

So like I said above, a class replaces the use of `constructors` mainly and tries to wrap up the whole `prototype` thing to make it nicer to work with.

It's important to note that class declarations are not hoisted like the functional declaration style would (`function thing() {}`)

The simple Syntax for it is as follows:

```js
class name [extends] {
  // class body
}
```

That's it. We can all go home now.

Kidding, so this would be called the same way a `constructor` would, using `new` so `new name()` would call this class and give us back whatever it created/does.

So it should be obvious that you can't have classes of the same name existing in the same app. So you we created another `class name` somewhere we would get a `typeError` response.

## Declaration

So how does it all work? Well it relys heavily on mutations and inheritence in order to function properly

So take this example I shamelessly also took from MDN:

```js
class Polygon {
  constructor(height, width) {
    this.name = 'Polygon';
    this.height = height;
    this.width = width;
  }
}

class Square extends Polygon {
  constructor(length) {
    super(length, length);
    this.name = 'Square';
  }
}
```

You will notice some key things here like `extends` and `constructor` these are key words to classes. In our above example `Square` is `extending` `Polygon` which means it is inheriting the methods and values from `Polygon`.

Then in our `constructor` the function `super` is used, which is calling the extended `Polygon` and creating our square.

A `constructor` is called the second you call `new` on a class. It is the fired function and given the values you set in the parameters.

The `super` keyword is used to access and call functions within an objects parent.

Following the above if I did

```js
const shape = new Square(15);
console.log(shape);
/* My output would be:
 {
   name: 'Square',
   height: 15,
   width: 15
 }
*/
```

So let's go back to the keyword `super` calling it directly like the above code does, triggers the parent objects constructor as we see in the example, however what if we had another method in `Polygon` that we wanted to access? Could we?

MDN Page: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super

You bet your kneecaps we can.

```js
class Polygon {
  constructor(height, width) {
    this.name = 'Polygon';
    this.height = height;
    this.width = width;
  },

  // So lets create another method in our class
  changeHeight(n) {
    this.height -= n;
  }
}

class Square extends Polygon {
  constructor(length) {
    super(length, length);
    this.name = 'Square';
  },

  updateHeight(n) {
    super.changeHeight(n);
  }
}
```

Yup. It's essentially another `this`. That's totally what we needed... Totatlly... What.. Was... _Sigh_

**ANYWAY**

Essentially that's a class, it should feel pretty familiar with constructors like before. The class's mission in a way was to sort of replace that with a more "official" way of handling it.
