// Remember when setting a const you can configure it if it's an object or an array
// However if it's a static simple value like a string, boolean, or number it cannot change
const x = {
  val: 1
};

console.log('Old X', x);

// Since x is an object we can do something like this

x.val = 2;

console.log('New X', x);

let y = 2;

console.log('Old Y', y);

y = 3;

console.log('New Y', y);


// A global constant
const g = 'testing';

const init = val => {
  // Remember this is the "init scope"
  console.log(g); // We can see that g is logged

  if (val) {
    // This is the "if scope"
    const inner = 22;

    console.log('Our param val was set it is', val);
    console.log('We can see the constant inside our if which is:', inner);
  } else {
    const elseinner = 21;

    console.log('No parameter set :(');
    console.log('We can see our constant set inside this else block which is:', elseinner);
  }

  // However we can't see either constant outside that if else block

  console.log('We reached the end of our function');
};

init('fun!');
