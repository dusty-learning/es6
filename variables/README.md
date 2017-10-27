# Variables

One of the more prominent introductions from ES6 is the introduction of `const` and `let`, say bye bye to `var`!

## const

As you may have guessed, `const` is essentially a `constant` meaning it's value will never change, and it becomes immutable.

If you set an object to a const you can still add and change properties within that object, the same thing goes for arrays, if you set a number or a string to a const you will not be able to change it however.

## let

`let` allows you to set a variable in which you plan to change completely later on, generally you will want to try and stick with const to keep your data immutable, but lets work well for say loops, or small meta changes.

## Scope

Everyones favorite topic! With the introduction of const and let we introduce their new scope called `block scope` (It is so much nicer and easier to understand don't worry!)

So before when you created a `var`, it seemed like it's scope was all over the place because `var` gets hoisted meaning no matter where you declare a var, you can use it where ever.

However with `const` and `let` their scope stays directly where they are defined, if you declare a one inside of an `if` statement you cannot use it outside of said if statement, this is known as `block scope` keeping things scoped to their current block.

Take a gander at the `examples.js` file for more details
