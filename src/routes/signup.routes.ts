import { Router } from 'express';

import UserController from '../controllers/UserController';

const signup = Router();

const userController = new UserController();

signup.post('/signup', async (request, response) => {
  try {
    const { name, email, password, contactPhones } = request.body;
    const user = await userController.createUser({
      name,
      email,
      password,
      contactPhones,
    });

    return response.status(200).json(user);
  } catch (err) {
    return response.status(400).json({ mensagem: err.message });
  }
});

export default signup;
