import { Router } from 'express';
import AuthenticateUser from '../services/AuthenticateUserService';

const sessions = Router();

sessions.post('/', async (request, response) => {
  try {
    const { email, password } = request.body;

    const authenticateUser = new AuthenticateUser();

    const { user, token } = await authenticateUser.execute({ email, password });

    return response.status(200).json({ user, token });
  } catch (err) {
    return response.status(401).json({ mensagem: err.message });
  }
});

export default sessions;
