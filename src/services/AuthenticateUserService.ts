import * as mongoose from 'mongoose';
import { sign } from 'jsonwebtoken';
import { compare } from 'bcryptjs';
import { ObjectId } from 'mongodb';

import authConfig from '../config/authConfig';

interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  contactPhones: [];
}

interface Request {
  email: string;
  password: string;
}

interface Response {
  user: User;
  token: string;
}

export default class AuthenticateUser {
  // eslint-disable-next-line class-methods-use-this
  public async execute({ email, password }: Request): Promise<Response> {
    const usersRepository = mongoose.model('User');

    const user = await usersRepository.findOne({ email });

    if (!user) {
      throw new Error('Incorrect email/password combination');
    }

    const uuidInString = new ObjectId(user.id).toString();

    const passwordMatched = await compare(password, user.password);

    const { secret, expiresIn } = authConfig.jwt;

    const token = sign({}, secret, {
      subject: uuidInString,
      expiresIn,
    });

    if (passwordMatched) {
      return {
        user,
        token,
      };
    }

    throw new Error('Incorrect email/password combination');
  }
}
