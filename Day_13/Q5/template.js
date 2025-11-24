const username = "Sam";
const course = "JavaScript";
console.log(`"Hello ${username}, Welcome to the ${course} course!"`);

const name = "Sam";
const age = 21;
const student = {
  name,
  age,
  greet() {
    console.log("Hello");
  }
};
student.greet();

const getFullName = (first="Sam",last="Jam") => `"${first} ${last}"`;
console.log(getFullName());
