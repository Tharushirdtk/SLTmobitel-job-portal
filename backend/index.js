const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); 
  },
  filename: (req, file, cb) => {
    const uniqueName = Date.now() + '-' + file.originalname;
    cb(null, uniqueName);
  },
});

const upload = multer({ storage });

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

// ----------------------- APPLY FORM -----------------------
app.post('/apply', upload.single('cv'), (req, res) => {
  const {
    initials,
    fullName,
    gender,
    dob,
    email,
    contact,
    field,
  } = req.body;

  const cvFile = req.file;

  if (!initials || !fullName || !gender || !dob || !email || !contact || !field || !cvFile) {
    return res.status(400).json({ message: 'All fields are required including CV upload.' });
  }

  console.log("Application received from:", fullName);
  console.log("CV uploaded to:", cvFile.path);

  res.json({ message: 'Application submitted successfully!' });
});


// ----------------------- JOB CREATIONS -----------------------
app.post('/create-job', (req, res) => {
  try {
    const {
      jobId,
      field,
      position,
      contact,
      background,
      salary,
      dueDate,
      email,
      location,
      workType,
      description,
    } = req.body;

    
    if (
      !jobId ||
      !field ||
      !position ||
      !contact ||
      !background ||
      !salary ||
      !dueDate ||
      !email ||
      !location ||
      !workType ||
      description
    ) {
      return res.status(400).json({ message: 'Please fill all required fields.' });
    }

    console.log("New job created:", { jobId, field, position, contact, background, salary, dueDate, email, location, workType, description });

   

    res.json({ message: 'Job vacancy created successfully!' });
  } catch (err) {
    console.error('Error in /create-job:', err);
    res.status(500).json({ message: 'Server error' });
  }
});



// -------------------- START SERVER --------------------
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
