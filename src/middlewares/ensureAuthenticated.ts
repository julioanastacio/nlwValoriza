import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

interface IPayload {
  sub: string;
}

export function ensureAuthenticate(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const authToken = req.headers.authorization;

  if (!authToken) {
    return res.status(401).end();
  }

  const [, token] = authToken.split(' ');

  try {
    const { sub } = verify(
      token,
      'ebfc82864dd8bece3d7290230cb4e20f',
    ) as IPayload;

    req.user_id = sub;

    return next();
  } catch (error) {
    return res.status(401).end();
  }
}
