import os from "os";
import fs from "fs/promises";

console.log("Free Memory:", os.freemem());
console.log("Total CPU Cores:", os.cpus().length);

fs.writeFile("data.txt", "Hello World")
  .then(() => {
    console.log("data.txt created");
    return fs.writeFile(
      "Readme.md",
      "## This is first line in Readme"
    );
  })
  .then(() => {
    console.log("Readme.md created");
    return fs.readFile("data.txt", "utf-8");
  })
  .then((data) => {
    console.log("Content of data.txt:");
    console.log(data);
    return fs.appendFile("data.txt", "\nThis is second line");
  })
  .then(() => {
    console.log("Text appended to data.txt");
    return fs.unlink("Readme.md");
  })
  .then(() => {
    console.log("Readme.md deleted");
  })
  .catch((error) => {
    console.error("Error:", error.message);
  });
