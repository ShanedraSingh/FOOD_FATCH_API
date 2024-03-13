require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const foodRoutes = require('./routes/foodRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Use environment variables for MongoDB Atlas connection
const atlasConnectionUri = process.env.MONGODB_ATLAS_CONNECTION_STRING;

if (!atlasConnectionUri) {
  console.error('MongoDB Atlas connection string is missing. Please set MONGODB_ATLAS_CONNECTION_STRING environment variable.');
  process.exit(1);
}

mongoose.connect(atlasConnectionUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());
app.use('/api/food', foodRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to the Food and Nutrition API!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;