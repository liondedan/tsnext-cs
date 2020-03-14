var jwt = require('jsonwebtoken');

const secret = process.env.SECRET;

function verifyToken(req, res, next) {
  console.log('hit verify');
  const token =
    req.body.token ||
    req.query.token ||
    req.headers['x-access-token'] ||
    req.cookies.token;

  console.log(token);
  if (!token)
    return res.status(403).send({ auth: false, message: 'No token provided.' });

  jwt.verify(token, secret, function(err, decoded) {
    if (err)
      return res
        .status(500)
        .send({ auth: false, message: 'Failed to authenticate token.' });

    // if everything good, save to request for use in other routes
    req.userId = decoded.id;
    next();
  });
}

module.exports = verifyToken;
