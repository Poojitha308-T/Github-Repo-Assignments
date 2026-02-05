const express = require('express');
const app = express();

app.use(express.json());

app.use('/api/auth', require('./routes/auth.routes'));
app.use('/api/todos', require('./routes/todo.routes'));

app.use((err, req, res, next) => {
  res.status(500).json({ message: 'Internal Server Error' });
});

module.exports = app;
