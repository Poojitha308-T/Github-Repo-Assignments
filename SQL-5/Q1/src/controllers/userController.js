import bcrypt from 'bcrypt';
import {
  findByEmail,
  createUser as createUserService,
  getAllUsers,
  getUserById as getUserByIdService,
  updateUser as updateUserService,
  deleteUser as deleteUserService
} from '../services/userService.js';

export const createUser = async (req, res) => {
  try {
    const { name, email, password, age, role } = req.body;

    const { data: existing } = await findByEmail(email);
    if (existing) {
      return res.status(409).json({ message: 'Email already registered' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const { data, error } = await createUserService({
      name,
      email,
      password: hashedPassword,
      age,
      role
    });

    if (error) throw error;

    delete data.password;
    res.status(201).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message || 'Internal server error' });
  }
};

export const getUsers = async (req, res) => {
  try {
    const { data, error } = await getAllUsers();
    if (error) throw error;

    const sanitized = data.map(u => {
      delete u.password;
      return u;
    });

    res.json(sanitized);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const { data, error } = await getUserByIdService(id);

    if (error || !data) {
      return res.status(404).json({ message: 'User not found' });
    }

    delete data.password;
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = { ...req.body };

    if (updates.password) {
      updates.password = await bcrypt.hash(updates.password, 10);
    }

    const { data, error } = await updateUserService(id, updates);

    if (error || !data) {
      return res.status(404).json({ message: 'User not found' });
    }

    delete data.password;
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { error } = await deleteUserService(id);

    if (error) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json({ message: 'User deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
