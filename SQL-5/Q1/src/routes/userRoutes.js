import express from 'express';
import { body, param, validationResult } from 'express-validator';
import {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser
} from '../controllers/userController.js';

const router = express.Router();

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

router.post(
  '/',
  [
    body('name').notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Valid email is required'),
    body('password')
      .isLength({ min: 8 })
      .withMessage('Password must be at least 8 characters'),
    body('age')
      .optional()
      .isInt({ min: 18 })
      .withMessage('Age must be a number >= 18')
  ],
  validate,
  createUser
);

router.get('/', getUsers);

router.get(
  '/:id',
  [param('id').isUUID().withMessage('Invalid user ID')],
  validate,
  getUserById
);

router.put(
  '/:id',
  [
    param('id').isUUID().withMessage('Invalid user ID'),
    body('name').optional().notEmpty(),
    body('email').optional().isEmail(),
    body('password').optional().isLength({ min: 8 }),
    body('age').optional().isInt({ min: 18 })
  ],
  validate,
  updateUser
);

router.delete(
  '/:id',
  [param('id').isUUID().withMessage('Invalid user ID')],
  validate,
  deleteUser
);

export default router;
