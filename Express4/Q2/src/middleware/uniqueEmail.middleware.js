import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dbPath = path.join(__dirname, "../db.json");

const uniqueEmailMiddleware = (req, res, next) => {
  const { email } = req.body;
  const db = JSON.parse(fs.readFileSync(dbPath, "utf-8"));

  const exists = db.users.find(user => user.email === email);

  if (exists) {
    return res.status(409).json({ error: "Email already exists" });
  }

  next();
};

export default uniqueEmailMiddleware;
