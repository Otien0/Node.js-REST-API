const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

/* const arr3 = [...arr1, ...arr2];

console.log('arr3', arr3); */

/* const arr3 = arr1.slice(); */

const arr3 = [...arr1];

arr3.push(6);

console.log('arr1', arr1);
console.log('arr3', arr3);


const userOne = {
  firstName: 'Morris',
  age: 25,
  city: 'Nairobi City',
  country: 'Kenya'
};

/* const userTwo = {};
Object.assign(userTwo, userOne);
userTwo.firstName = 'Net-Ninja'; */

const userTwo = {...userOne, firstName: 'Net', lastName: 'Ninja', gender: 'male'};

console.log('userOne', userOne);
console.log('userTwo', userTwo);




