import { Router } from 'express';
import models from '../models';
const router = Router();

router.get('/', async (req, res) => {
  console.log(models.User);
  const users = await models.User.find();
  return res.send(users);
});

router.get('/:userId', async (req, res) => {
  const user = await models.User.findById(req.params.userId);
  return res.send(user);
});

router.get('/cat', async (req, res) => {
  const dewi = new models.User({ username: 'dewi' });
  await dewi.save();
});

export default router;
