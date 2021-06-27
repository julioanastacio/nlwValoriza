import { Router } from 'express';
import { CreateUserController } from './controllers/CreateUserController';
import { CreateTagController } from './controllers/CreateTagController';
import { ensureAdmin } from './middlewares/ensureAdmin';
import { AuthenticateUserController } from './controllers/AuthenticateUserController';
import { CreateComplimentController } from './controllers/CreateComplimentController';
import { ensureAuthenticate } from './middlewares/ensureAuthenticated';
import { ListUserSendComplimentsController } from './controllers/ListUserSendComplimentsController';
import { ListUserReceiveComplimentsController } from './controllers/ListUserReceiveComplimentsController';
import { ListTagController } from './controllers/ListTagsController';
import { ListUserController } from './controllers/ListUsersController';

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();
const listUserSendComplimentsController =
  new ListUserSendComplimentsController();
const listUserReceiveComplimentController =
  new ListUserReceiveComplimentsController();
const listTagsController = new ListTagController();
const listUsersController = new ListUserController();

router.post('/users', createUserController.handle);
router.post(
  '/tags',
  ensureAuthenticate,
  ensureAdmin,
  createTagController.handle,
);
router.post('/login', authenticateUserController.handle);
router.post(
  '/compliments',
  ensureAuthenticate,
  createComplimentController.handle,
);
router.get(
  '/users/compliments/send',
  ensureAuthenticate,
  listUserSendComplimentsController.handle,
);
router.get(
  '/users/compliments/receive',
  ensureAuthenticate,
  listUserSendComplimentsController.handle,
);
router.get('/tags', ensureAuthenticate, listTagsController.handle);
router.get('/users', ensureAuthenticate, listUsersController.handle);

export { router };
