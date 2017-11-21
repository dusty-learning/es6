// You can copy and paste this code and just use node on the file to run it

const obj = {
  testing: true,
  type: 'example',
  data: {
    cool: 'test',
    arr: ['thing', 'in', 'here']
  }
};

// Remember you can't destructure into the data object since it's nested within our main object
const { testing, type, data } = obj;

if (testing) {
  console.log('We are currently testing');
}

console.log('Our Type is:', type);

// We can however destructure the new variable we created:
const { cool, arr } = data;

console.log('cool', cool);

console.log('Lets join our array:', arr.join(' '));