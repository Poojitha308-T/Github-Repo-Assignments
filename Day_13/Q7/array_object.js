arr1 = [1, 2, 3];
arr2 = [4, 5];
const spread=[...arr1, ...arr2];
console.log(spread);


const sum = (...nums) =>{
    return nums.reduce((acc,n) => acc+n,0);
};
console.log(sum(5,6,7));
console.log(sum());

const user = {
  name: "Alice",
  age: 22,
  address: {
    city: "Bangalore",
    pin: 560001
  }
};
 
const {
    name,
    address: {city, pin}
} = user;
console.log(name);
console.log(city);
console.log(pin);