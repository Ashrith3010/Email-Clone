const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import cors
const app = express();
const users = require('./data/accounts.json'); // Assuming you have user data stored

app.use(cors()); // Use cors middleware
app.use(bodyParser.json()); // Middleware to parse JSON

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const user = users.find((user) => user.email === email && user.password === password);

  if (user) {
    res.json({ message: 'Login successful', user }); // Return user data or a token
  } else {
    res.status(401).json({ message: 'Invalid email or password' });
  }
});

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
