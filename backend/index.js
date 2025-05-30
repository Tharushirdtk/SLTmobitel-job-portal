const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});


app.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (username === 'admin@slt.com' && password === '1234') {
    res.json({ success: true, message: 'Login successful!' });
  } else {
    res.json({ success: false, message: 'Invalid credentials' });
  }
});
