function isEven(n){
    if(n%2==0){
        return true;
    }
    else{
        return false;
    }
}
console.log(isEven(5));
console.log(isEven(10));

const marks= 40;
const result = marks >= 35 ? "Pass" : "Fail";
console.log(result);

const greet = (name) =>
    console.log(`Hello, ${name ? name :"Guest"}`);

 greet("Poojitha");
 greet();