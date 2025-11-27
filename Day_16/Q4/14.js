console.log("Begin");
setTimeout(() => {
    console.log("Timeout Task");
}, 0);
Promise.resolve().then(() => {
    console.log("Promise Task");
});
console.log("End");

// Begin and End are the synchronous so they run immediately
// Promise Task is the microtask which has higher priority than setTimeout so it runs befor setTimeout task.