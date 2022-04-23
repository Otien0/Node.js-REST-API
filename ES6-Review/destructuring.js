// 1. Objects

const user = {
  firstName: 'Morris',
  lastName: 'Oduor',
  age: 25,
  city: 'Nairobi City',
  country: 'Kenya'
};

/* const firstName = user.firstName;
const country = user.country; */

const { firstName, lastName, age, city, country } = user;

console.log('firstName: ', firstName);
console.log('lastName: ', lastName);
console.log('age: ', age);
console.log('city: ', city);
console.log('country: ', country);


// 2. Arrays
const myArr = [1, 2, 3, 4];

/* const foo = myArr[0];
const bar = myArr[1];
const jazz = myArr[2]; */

const [foo, bar, jazz] = myArr;

console.log('foo: ', foo);
console.log('bar: ', bar);
console.log('jazz: ', jazz);