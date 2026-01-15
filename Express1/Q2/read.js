import { readFile } from "fs";
import { join } from "path";

const readFileData = () => {
  return new Promise((resolve, reject) => {
    const filePath = join(__dirname, "Data.txt");

    readFile(filePath, "utf-8", (err, data) => {
      if (err) {
        reject("Error reading the file");
      } else {
        resolve(data);
      }
    });
  });
};

export default readFileData;
