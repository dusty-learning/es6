
// Here is a traditional functional expression function
var init = function (param) {
  return 'Do a Thing';
};

// Now here it is again using es6
const init = param => 'Do a Thing';
// You'll notice we got rid of quite a bit of stuff here huh?
// Since the function is immediatly returning something that value can go right after the arrow
// Since we only had one param, we were able to strip out the parens wrapped around it
// And since we put it on 1 line, we are able to get rid of the curly brackets.
// This is known as an 'Expression Body' arrow function

// For consistancy sake here is a 'Statement Body' style arrow function

const add = (a, b) => {
  if (!isNan(a) && !isNaN(b)) {
    return a + b;
  }

  return false;
}
// This one looks a little bit more traditional yeah? This is how we handle
// The extra fluff if needed

// Arrow functions are really great when using higher order functions and functional iterators.
// Like this forEach functional iterator:

// Essentially takes the values in a nums array and doubles them for the results array
const results = nums.map(val => val * 2);

// Lexical This
// Now onto the this portion, our favorite things.
// If you're unlucky enough to be stuck using this everywhere and your scope is a little haywire
// I hope arrow functions can help you out

// Arrow functions do not change the scope of 'this' so when a function has a callback, you no longer need to do
// var self = this; in order to preserve your scope, you can simply just use it

this.nums.map(val => {
  if (val > 2) {
    this.results.push(val);
  }
});
// No more worrying about losing your sense of scope when working with this!
