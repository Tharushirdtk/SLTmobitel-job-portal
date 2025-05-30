const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}

app.use('/uploads', express.static(uploadsDir));

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

let jobList = [];
let receivedCVs = [];
let acceptedCVs = [];  

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

  const newCV = {
    jobTitle: field,
    name: fullName,
    gender,
    field,
    contact,
    file: cvFile.filename,
  };

  receivedCVs.push(newCV);

  console.log("Application received from:", fullName);
  console.log("CV uploaded to:", cvFile.path);

  res.json({ message: 'Application submitted successfully!' });
});

// ----------------------- GET RECEIVED CVs -----------------------
app.get('/received-cvs', (req, res) => {
  res.json(receivedCVs);
});

// ----------------------- GET ACCEPTED CV -----------------------
app.post('/accept-cv', (req, res) => {
  const { name } = req.body;

 
  const index = receivedCVs.findIndex((cv) => cv.name === name);
  if (index === -1) {
    return res.status(404).json({ message: 'CV not found in received list.' });
  }

  const accepted = receivedCVs.splice(index, 1)[0];
  acceptedCVs.push(accepted);

  res.json({ message: 'CV accepted successfully.' });
});


app.get('/accepted-cvs', (req, res) => {
  res.json(acceptedCVs);
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
      !jobId || !field || !position || !contact ||
      !background || !salary || !dueDate ||
      !email || !location || !workType || !description
    ) {
      return res.status(400).json({ message: 'Please fill all required fields.' });
    }

    const newJob = {
      id: jobId,
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
      status: 'Pending',
      date: new Date().toISOString().split('T')[0], 
    };

    jobList.push(newJob);
    console.log("New job created:", newJob);

    res.json({ message: 'Job vacancy created successfully!' });
  } catch (err) {
    console.error('Error in /create-job:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

// ----------------------- JOB MODIFICATION -----------------------
app.get('/jobs', (req, res) => {
  res.json(jobList);
});

app.delete('/jobs/:id', (req, res) => {
  const jobId = req.params.id;
  const index = jobList.findIndex((job) => job.id === jobId);
  if (index !== -1) {
    jobList.splice(index, 1);
    return res.json({ message: 'Job deleted successfully.' });
  }
  res.status(404).json({ message: 'Job not found.' });
});

// -------------------- START SERVER --------------------
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
