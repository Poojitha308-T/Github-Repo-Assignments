import express from "express";
import { platform as _platform, totalmem, freemem, cpus } from "os";
import { lookup } from "dns";
import readFileData from "./read.js";

const app = express();
const PORT = 3000;

app.get("/test", (req, res) => {
  res.send("Test route is working!");
});

app.get("/readfile", async (req, res) => {
  try {
    const data = await readFileData();
    res.send(data);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get("/systemdetails", (req, res) => {
  const systemDetails = {
    platform: _platform(),
    totalMemory: `${(totalmem() / (1024 ** 3)).toFixed(2)} GB`,
    freeMemory: `${(freemem() / (1024 ** 3)).toFixed(2)} GB`,
    cpuModel: cpus()[0].model,
    cpuCores: cpus().length // Bonus
  };

  res.json(systemDetails);
});

app.get("/getip", (req, res) => {
  const hostname = "masaischool.com";

  lookup(hostname, { all: true }, (err, addresses) => {
    if (err) {
      res.status(500).json({ error: "DNS lookup failed" });
    } else {
      res.json({
        hostname,
        addresses 
      });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
