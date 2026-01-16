import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DB_PATH = path.join(__dirname, "db.json");

app.use(express.json());

const readData = () => {
  const data = fs.readFileSync(DB_PATH, "utf-8");
  return JSON.parse(data);
};

const writeData = (data) => {
  fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));
};

app.get("/students", (req, res) => {
  const data = readData();
  res.json(data.students);
});

app.post("/students", (req, res) => {
  const { name, course, year } = req.body;

  if (!name || !course || !year) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const data = readData();
  const newStudent = {
    id: Date.now(),
    name,
    course,
    year
  };

  data.students.push(newStudent);
  writeData(data);

  res.status(201).json({
    message: "Student added successfully",
    student: newStudent
  });
});

app.put("/students/:id", (req, res) => {
  const id = Number(req.params.id);
  const { name, course, year } = req.body;

  const data = readData();
  const student = data.students.find(s => s.id === id);

  if (!student) {
    return res.status(404).json({ message: "Student not found" });
  }

  if (name) student.name = name;
  if (course) student.course = course;
  if (year) student.year = year;

  writeData(data);

  res.json({
    message: "Student updated successfully",
    student
  });
});

app.delete("/students/:id", (req, res) => {
  const id = Number(req.params.id);
  const data = readData();

  const index = data.students.findIndex(s => s.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Student not found" });
  }

  data.students.splice(index, 1);
  writeData(data);

  res.json({ message: "Student deleted successfully" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
