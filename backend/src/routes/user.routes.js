const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/auth.middleware');

router.get('/profile', authMiddleware, (req, res) => {
  res.json({
    message: 'Protected route accessed successfully',
    userId: req.userId
  });
});

module.exports = router;
