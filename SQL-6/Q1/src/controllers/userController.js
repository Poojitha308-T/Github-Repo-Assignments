import bcrypt from 'bcrypt';
import {
  findUserByEmail,
  createUser,
  findUserById,
  deleteUserById
} from '../services/userService.js';

export const signupUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const { data: existing } = await findUserByEmail(email);
    if (existing) {
      return res.status(409).json({ message: 'Email already exists' });
    }

    const hashed = await bcrypt.hash(password, 10);

    const { data, error } = await createUser({
      name,
      email,
      password: hashed
    });

    if (error) throw error;

    delete data.password;
    res.status(201).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const { data: user } = await findUserById(id);
    if (!user) return res.status(404).json({ message: 'User not found' });

    await deleteUserById(id);

    res.json({ message: 'User and all related todos deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
