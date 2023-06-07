const express = require('express');
const dotenv = require('dotenv');
const db = require('./models/');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const laundryRoutes = require('./routes/laundryRoutes');

dotenv.config();
const app = express();
app.use(express.json());

// Database connection
db.authenticate()
  .then(() => {
    console.log('Database connected.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

// Routes
app.use('/auth', authRoutes);
app.use('/users', userRoutes);
app.use('/laundries', laundryRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server berjalan pada port ${port}`);
});


