// You can use the Rest Syntax on parameters as well, to help avoid needing to slice the arguments variable
// For example

// Using the rest syntax on c here turns any param that is sent in after a and b
// Into it's own array to work with
const test = (a, b, ...c) => (a + b) * c.length;

// DO NOTE: this looks an awful lot like the spread operator but does not function the same

// So if we run test 
test(1, 2, 4, 'abc', '123');
// Our output would be 9
// Why? 
// Becuase if we look at the test function and compare it to what we sent in:
// a = 1, b = 2, c = [4, 'abc', '123']
// There for: (1 + 2) * 3 = 9 since the length of c is 3
// Cool right?

// You also have the ability to now set default parameters for your functions
// Like so:
const multiply = (a, b = 1) => a * b;
// So if we call multiply like so:
multiply(5); // Output is 5
multiply(5, 2); // Output is going to be 10

// You can even set arrays or objects as a default
const test = (a, b = { val: 1 }) => a + b.val;
// So calling it is now
test(10); // Output is 11
test(5, { val: 4 }); // Output is 9

// You cna even use functions as default params

const something = () => 'something';
const test = (b = something()) => 'test ' + b;
// So now when we call test:
test(); // The output will be 'test something'
test('check'); // The output will be 'check something'

// Sweet!