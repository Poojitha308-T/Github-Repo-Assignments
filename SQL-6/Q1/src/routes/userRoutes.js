import express from 'express';
import { body, param, validationResult } from 'express-validator';
import { signupUser, deleteUser } from '../controllers/userController.js';

const router = express.Router();

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
  next();
};

router.post(
  '/signup',
  [
    body('name').notEmpty().withMessage('Name required'),
    body('email').isEmail().withMessage('Valid email required'),
    body('password').isLength({ min: 8 }).withMessage('Min 8 chars password')
  ],
  validate,
  signupUser
);

router.delete(
  '/:id',
  [param('id').isUUID().withMessage('Invalid user id')],
  validate,
  deleteUser
);

export default router;
