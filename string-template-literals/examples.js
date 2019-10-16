// The old way of concating a string together
const term = "The"
const termTwo = "Wolf"
const sentence = term + " big bad " + termTwo

// This works but can get pretty sloppy and is a lot to remember!
// Come along now to string template literal land!
const foo = `${term} big bad ${termTwo}`

// Much nicer! Now it looks like an actual string!
// If you haven't read the README on this section yet I recommend doing so.
// That way you can understand the backticks and the ${} we have

// String template literals even work with line breaks!
const bar = `${term}
big bad
${termTwo}`

// Important notes: You cannot use string template literals within each other
// note 2: Only use string template literals when you are actually concating a string together.
// Why? Because performance of course!

const baz = 'The big bad wolf' // <-- Since this is just a static string it will be faster than doing:
const bax = `The big bad wolf` // <-- This

// Why? Because when you use the back ticks this tells javascript to look for template variables to be replaced.
// If you don't have any, you're wasting processing power and time by checking a static string!
