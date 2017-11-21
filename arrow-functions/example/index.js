
const log = val => console.log('logged value: ', val);

log(2);

const mappedNumbers = [1, 2, 3, 4, 5].map(n => n * 2);

// Should output 'logged value: [2, 4, 6, 8, 10]'
log(mappedNumbers);

const isValid = (x, y) => {
  if (x > 1 && y < 99) {
    return {
      valid: true,
      msg: 'Between 1 and 99'
    };
  }

  return {
    valid: false,
    msg: 'Not between 1 and 99'
  };
};

let test = isValid(4, 10);

log(test);
// Output: { valid: true, msg: 'Between 1 and 99' }

test = isValid(-1, 15);

log(test);
//Output: { valid: false, msg: 'Not between 1 and 99' }

test = isValid(3, 100);

log(test);
// Output: { valid: false, msg: 'Not between 1 and 99' }