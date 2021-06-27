import { getCustomRepository } from 'typeorm';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { UserRepositories } from '../repositories/UserRepositories';

interface IAuthenticateRequest {
  email: string;
  password: string;
}

class AuthenticateUserService {
  async execute({ email, password }: IAuthenticateRequest) {
    const usersRepositories = getCustomRepository(UserRepositories);

    const user = await usersRepositories.findOne({
      email,
    });

    if (!user) {
      throw new Error('Email/Password incorrect!');
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new Error('Email/Password incorrect!');
    }

    const token = await sign(
      {
        email: user.email,
      },
      'ebfc82864dd8bece3d7290230cb4e20f',
      {
        subject: user.id,
        expiresIn: '1d',
      },
    );
    return token;
  }
}

export { AuthenticateUserService };
