import { Router } from 'express';
import { ObjectId } from 'mongodb';
import UserController from '../controllers/UserController';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const usersRouter = Router();

const userController = new UserController();

// usersRouter.use(ensureAuthenticated);

usersRouter.get('/index/', ensureAuthenticated, async (request, response) => {
  try {
    const users = await userController.index();

    return response.status(200).json(users);
  } catch (err) {
    return response.status(401).json({ mensagem: err.message });
  }
});

usersRouter.get(
  '/index/:id',
  ensureAuthenticated,
  async (request, response) => {
    const { id } = request.params;

    try {
      const user = await userController.findUser(id);

      return response.status(200).json(user);
    } catch (err) {
      return response.status(401).json({ mensagem: err.message });
    }
  },
);

export default usersRouter;
