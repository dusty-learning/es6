
// You set let and const just like any other variable
const constTest = 1;
let letTest = 1;

// However you are unable to reset a const, where you can reset a let

constTest = 2; // <-- This will throw an error
letTest = 2; // <-- But this value will now be set to 2

// ==========================================

// Block Scope
// The const and let types are now block scoped which makes life a bit easier for everyone.
// Take a gander at this example:

let value = 3;

// So we create a const inside of our if block here
if (value > 2) {
  const ifScoped = 3;
}
// However if we try to vall this variable outside the if block like here, we will get an undefined error.
console.log(ifScoped); // <-- throws undefined error

// This is because the const is scoped to our if statement, this would also happen with a let.
// However we can happily use our variable within that block if we wanted

if (values > 2) {
  const ifScoped = 3;

  console.log(ifScoped); // <-- Would console out 3
}

// ==========================================

// Block scope applies to everything think of like this:

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

// ==========================================

// Lower scopes are able to use const and lets from their upper scopes, so if we take our above example a little further:

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

// Make sense? Block scope can only cascade downward, you cannot get get a variable set in a lower or different block scope than your current one

// ==========================================

// Here's how you would create a const of PI before ES6 const
//  and only in global context and not in a block scope
Object.defineProperty(typeof global === "object" ? global : window, "PI", {
  value: 3.141593,
  enumerable: true,
  writable: false,
  configurable: false
});

PI > 3.0;

// Here's what that same value looks like with const
const PI = 3.141593;

PI > 3.0;

// Pretty great right?