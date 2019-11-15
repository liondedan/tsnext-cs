import { Router } from 'express';

const router = Router();

router.get('/', async (req, res) => {
  const users = await req.context.models.User.find();
  return res.send(users);
});

router.get('/:userId', async (req, res) => {
  const user = await req.context.models.User.findById(
    req.params.userId,
  );
  return res.send(user);
});

router.get('/cat', async (req, res) => {
  const dewi = new models.User({username: 'dewi'})
  await dewi.save()
});

export default router;
