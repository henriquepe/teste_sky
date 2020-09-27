import * as mongoose from 'mongoose';
import { hash } from 'bcryptjs';
import { ObjectId } from 'mongodb';

interface CreateUserProps {
  name: string;
  email: string;
  password: string;
  contactPhones: Array<[]>;
}

export default class UserController {
  // eslint-disable-next-line class-methods-use-this
  async index(): Promise<any> {
    const User = mongoose.model('User');

    const users = await User.find();

    return users;
  }

  // eslint-disable-next-line class-methods-use-this
  async findUser(id: string): Promise<mongoose.Document> {
    const User = mongoose.model('User');

    const formatedIdToObjectId = new ObjectId(id);

    const user = await User.findById(formatedIdToObjectId);

    return user;
  }

  // eslint-disable-next-line class-methods-use-this
  async verifyExistentEmail(email: string): Promise<void> {
    const User = mongoose.model('User');
    const users = await User.find();

    users.filter(user => {
      if (user.email === email) {
        throw new Error(
          'Email already exists in our platform, please try another',
        );
      }
    });
  }

  // eslint-disable-next-line class-methods-use-this
  async createUser({
    name,
    email,
    password,
    contactPhones,
  }: CreateUserProps): Promise<any> {
    await this.verifyExistentEmail(email);
    try {
      const hashedPassword = await hash(password, 8);

      const User = mongoose.model('User');
      const user = await User.create({
        name,
        email,
        password: hashedPassword,
        contactPhones,
      });

      return user;
    } catch (err) {
      throw err.message;
    }
  }
}
