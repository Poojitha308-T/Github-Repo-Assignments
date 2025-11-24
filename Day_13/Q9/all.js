// 1
console.log(`"5+7= ${5+7}"`);

const msg=`Welcome to Masai
Join the course
Get the certificate`;
console.log(msg);

const getFullName = (firstName= "John",lastName="Doe")=>`${firstName} ${lastName}`;
console.log(getFullName());

// 2

const square = (n) => n*n;
console.log(square(5));

// const obj = {
//   value: 50,
//   test: () => console.log(this.value)
// };
// obj.test();

// Output: undefined
// why because- Arrow functions does not have their own this

const obj = {
    value: 50,
    test: function(){
        console.log(this.value);
    }
};
obj.test();

// 3
const product = { name: "Pen", price: 10 };
const value={...product};
console.log(value);

const a = { x: 1 };
const b = { y: 2 };
const merge= {...a,...b};
console.log(merge);

const maxvalue = (...nums) =>{
    return Math.max(...nums);
}
console.log(maxvalue(20,15,25));

// 4
const arr = [10, 20, 30];
const [a1,b1] = arr;
console.log(a);
console.log(b);

const laptop = { brand: "Dell", ram: "8GB" };
const {brand} = laptop;
console.log(brand);

const info = {};

console.log(info?.address?.city);

// 5
// output :3
// output: ReferenceError: j is not defined

// const creates a block-scoped variable like let.
// it cannot be reassigned to a new value.

// 6
let speed;
let kmph=60;
if (kmph > 60) {
  speed = "Fast";
} else {
  speed = "Normal";
}

speed=kmph>60?"Fast" : "Normal";
console.log(speed);

let age=20;
console.log(age >= 18 ? "Adult" : "Minor");

let num=3;
let result = num > 0 ? "Positive" : num === 0 ? "Zero" : "Negative";
console.log(result);

// 7
const nums = [1,2,3];
const newNums = [...nums, 4, 5];
console.log(newNums);

const a2 = ["x", "y"];
const b2 = ["z"];

const combine = [...a2, ...b2];
console.log(combine);

function printNames(...names){
    return names;
}
console.log(printNames("A", "B", "C"));

// 8

const user1 = { id: 101, status: "active" };
const { id, status } = user1;

const id1 = 101;
const role = "admin";
const user = {id, role};

const name1 = "Alex";
const age1 = 25;
const person1 = {
    name1,
    age1,
    greet() {
        return `Hello, I'm ${name1}`;
    }
};


// 9

console.log(`Today's date is: ${new Date().toDateString()}`);

let name2 = "Doe";
let score2 = 50;
console.log(`Hello ${name2}, your score id ${score2}/100`);

// 10
 const add = (a3, b3) => a3+b3;
 console.log(add(3,4));

 const isAdult = age3 =>age3 >= 18;
console.log(isAdult(23));

const double = n => n*2;
console.log(double(5));

// 11

const arr3 = [1,2,3];
const clone = [...arr3];
console.log(clone);

const arr4 = [1,2,3];
const newArr1 = [100,...arr4];
console.log(newArr1);

const obj1 = {a: 1, b: 2};
const obj2 = {b: 99, c: 3};
const merged1 = {...obj1, ...obj2};
console.log(merged1);

// 12

const user3 = {
  name4: "Alex",
  address4: {
    city4: "Bangalore"
  }
};

const city4 = user3?.address4?.city4;
console.log(city4);

const title = user3?.job?.title;
console.log(title);


const data = {};
console.log(data?.user4?.profile3?.name5);
