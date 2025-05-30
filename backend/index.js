const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());


// ------------------------ LOGIN ------------------------

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (username === 'admin@slt.com' && password === '1234') {
    res.json({ success: true, message: 'Login successful!' });
  } else {
    res.json({ success: false, message: 'Invalid credentials' });
  }
});


// --------------------- REGISTRATION ---------------------
app.post('/register', (req, res) => {
  const { userId, name, password } = req.body;

  if (!userId || !name || !password) {
    return res.json({ success: false, message: 'Please fill all fields.' });
  }

  console.log('Registering:', userId, name);
  res.json({ success: true, message: 'Registration successful!' });
});


app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
