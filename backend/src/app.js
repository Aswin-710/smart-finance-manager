const express = require('express');
const cors = require('cors');

const authRoutes = require('./routes/auth.routes');

const app = express();

/**
 * ✅ BODY PARSERS — MUST BE BEFORE ROUTES
 */
app.use(cors());
app.use(express.json()); // for application/json
app.use(express.urlencoded({ extended: true })); // safety net

/**
 * ✅ ROUTES
 */
app.use('/api/auth', authRoutes);

app.get('/api/health', (req, res) => {
  res.json({ status: 'API is running' });
});

module.exports = app;
