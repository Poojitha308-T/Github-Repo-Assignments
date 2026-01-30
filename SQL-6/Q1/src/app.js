import express from 'express';
import userRoutes from './routes/userRoutes.js';
import todoRoutes from './routes/todoRoutes.js';

const app = express();

app.use(express.json());

app.use('/users', userRoutes);
app.use('/todos', todoRoutes);

app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

export default app;
