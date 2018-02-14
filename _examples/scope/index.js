console.log('======SCOPE EXAMPLE======\n');

const myGlobal = 'Muh Global';

console.log('The myGlobal Constant -', myGlobal, '- It should be "Muh Global"\n');

const myFunc = (a, b) => {
  console.log('The myGlobal Constant INSIDE our function scope -', myGlobal, '- It should be "Muh Global"\n');
  const funcConst = 'In Function';

  if (a === b) {
    const inIf = 'IN IF';
    console.log('Inside the first if of our myFunc function checking our constant we declared at the top: -', funcConst, '- It should be "In Function"\n');
    console.log('Checking the constant we just created inside of our if block -', inIf, '- It should be "IN IF"\n');
  }

  console.log('If we tried to console.log "inIf" outside of our if block it would cause JavaScript to throw an error\n');
};

myFunc(1, 1);

console.log('If we tried to console.log "funcConst" outside of our function scope it would cause JavaScript to throw an error.\n');



console.log('======END OF SCOPE EXAMPLE======\n');
