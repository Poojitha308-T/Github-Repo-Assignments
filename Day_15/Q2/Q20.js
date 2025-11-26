function createCounter() {
    let count = 0;

    function increment() {
        count++;
        return function() {
            console.log("Increment count", count);
        }
    }

    function decrement() {
        count--;
        console.log("Decrementing count", count);
    }
    return { increment, decrement}
}

const c = createCounter();

const d = c.increment()

console.log(d())
c.decrement()
// console.log(count);