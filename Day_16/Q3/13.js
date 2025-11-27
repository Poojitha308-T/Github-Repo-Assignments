const loading = setInterval(()=>{
    console.log("Loading...");
},1000);

setTimeout(()=>{
    clearInterval(loading);
    console.log("Loaded successfully!")
},5000);