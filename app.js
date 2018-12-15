// app.js
const AuthController = require('./auth/AuthController');
app.use('/api/auth', AuthController);
module.exports = app;