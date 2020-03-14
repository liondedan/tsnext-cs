import { Router } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import bodyParser from 'body-parser';
import models from '../models';
import verifyToken from '../utils/verifyToken';

const router = Router();
const secret = process.env.SECRET;
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.post('/register', async (req, res, next) => {
  const hashedPassword = bcrypt.hashSync(req.body.password, 8);
  try {
    const person = new models.Person({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
    });

    const ret = await person.save();

    var token = jwt.sign({ id: ret._id }, secret, {
      expiresIn: 86400, // expires in 24 hours
    });
    res
      .cookie('token', token, { httpOnly: true })
      .status(200)
      .send({ auth: true, token: token });
  } catch (error) {
    // Passes errors into the error handler
    return next(error);
  }
});

router.post('/login', function(req, res) {
  models.Person.findOne({ email: req.body.email }, function(err, user) {
    if (err) return res.status(500).send('Error on the server.');
    if (!user) return res.status(404).send('No user found.');

    var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
    if (!passwordIsValid)
      return res.status(401).send({ auth: false, token: null });

    var token = jwt.sign({ id: user._id }, secret, {
      expiresIn: 86400, // expires in 24 hours
    });

    res
      .cookie('token', token, { httpOnly: true })
      .status(200)
      .send({ auth: true, token: token });
  });
});

router.get('/me', verifyToken, function(req, res) {
  models.Person.findById(req.userId, { password: 0 }, function(err, user) {
    if (err)
      return res.status(500).send('There was a problem finding the user.');
    if (!user) return res.status(404).send('No user found.');
    res.status(200).send(user);
  });
});

export default router;
