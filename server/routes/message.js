import { Router } from 'express';
import models from '../models';
const router = Router();

router.get('/', async (req, res) => {
  const messages = await models.Message.find();
  return res.send(messages);
});

router.get('/:messageId', async (req, res) => {
  const message = await models.Message.findById(req.params.messageId);
  return res.send(message);
});

router.post('/', async (req, res) => {
  console.log('mesaages post');
  const message = await models.Message.create({
    text: req.body.text,
    user: 'cat',
  });

  return res.send(message);
});

router.delete('/:messageId', async (req, res) => {
  const message = await models.Message.findById(req.params.messageId);

  let result = null;
  if (message) {
    result = await message.remove();
  }

  return res.send(result);
});

export default router;
