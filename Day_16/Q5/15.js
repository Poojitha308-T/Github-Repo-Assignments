const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question("Enter number of seconds: ", (input) => {
  let timeLeft = parseInt(input);
  let stopRequested = false;

  console.log("Press 's' to stop the countdown early.");


  process.stdin.setRawMode(true);
  process.stdin.on("data", (key) => {
    if (key.toString() === "s") {
      stopRequested = true;
    }
  });


  const intervalId = setInterval(() => {
    if (stopRequested) {
      console.log("Countdown Stopped!");
      clearInterval(intervalId);
      rl.close();
      return;
    }

    console.log(`Time left: ${timeLeft}s`);
    timeLeft--;

    if (timeLeft < 0) {
      clearInterval(intervalId);
      console.log("Countdown Complete!");
      rl.close();
    }
  }, 1000);


  const checkStop = () => {
    if (!stopRequested) {
      setTimeout(checkStop, 10); 
    }
  };
  checkStop();
});
