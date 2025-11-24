// if (true) {
//   let x = 10;
//   var y = 20;
// }
// console.log(y);
// console.log(x);

// // Output: 20
// Reference Error: x is not defined

// var y=20 is not block-scoped, so y is available outside the block
// let x=10 is block-scoped, so x is not available outside the block

const profile = {
  user: {
    details: {
      email: "test@mail.com"
    }
  }
};

console.log(profile?.user?.details?.email);
console.log(profile?.user?.details?.phone);


const profiles = {
    users: {
        detail: {
            email1:"test@mail.com"
        }
    }
};
console.log(profiles?.users?.address?.city);