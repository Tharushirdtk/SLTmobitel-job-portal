require('dotenv').config();

const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const mongoose = require('mongoose');


const Job = require('./models/Job');
const CV = require('./models/CV');
const User = require('./models/User');  

const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());

// MongoDB connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅ MongoDB connected');
  } catch (error) {
    console.error('❌ MongoDB connection error:', error.message);
    process.exit(1);
  }
};
connectDB();

//uploads
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}
app.use('/uploads', express.static(uploadsDir));

// Multer 
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname),
});
const upload = multer({ storage });

// ------------------------ LOGIN ------------------------
app.post('/login', async (req, res) => {
  const { email, password } = req.body;   

  if (!email || !password) {               
    return res.status(400).json({ success: false, message: 'Please fill all fields.' });
  }

  try {
    
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(400).json({ success: false, message: 'Invalid credentials' });
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ success: false, message: 'Invalid credentials' });
    }

    res.json({ success: true, message: 'Login successful!' });
  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// --------------------- REGISTRATION ---------------------
app.post('/register', async (req, res) => {
  const {email, name, password } = req.body;

  if (!email || !name || !password) {
    return res.status(400).json({ success: false, message: 'Please fill all fields.' });
  }

  try {
    const existingUser = await User.findOne({email });
    if (existingUser) {
      return res.status(400).json({ success: false, message: 'User already exists.' });
    }

    const newUser = new User({email, name, password });
    await newUser.save();

    res.json({ success: true, message: 'Registration successful!' });
  } catch (err) {
    console.error('Registration error:', err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});



// ----------------------- APPLY FORM -----------------------
app.post('/apply', upload.single('cv'), async (req, res) => {
  const { initials, fullName, gender, dob, email, contact, field } = req.body;
  const cvFile = req.file;

  if (!initials || !fullName || !gender || !dob || !email || !contact || !field || !cvFile) {
    return res.status(400).json({ message: 'All fields are required including CV upload.' });
  }

  const newCV = new CV({
    jobTitle: field,
    name: fullName,
    gender,
    field,
    contact,
    file: cvFile.filename,
  });

  await newCV.save();
  console.log("Application received from:", fullName);
  res.json({ message: 'Application submitted successfully!' });
});

// ----------------------- GET RECEIVED CVs -----------------------
app.get('/received-cvs', async (req, res) => {
  const cvs = await CV.find({ status: 'Received' });
  res.json(cvs);
});

// ----------------------- ACCEPT CV -----------------------
app.post('/accept-cv', async (req, res) => {
  const { name } = req.body;

  const updatedCV = await CV.findOneAndUpdate(
    { name, status: 'Received' },
    { status: 'Accepted' }
  );

  if (!updatedCV) {
    return res.status(404).json({ message: 'CV not found.' });
  }

  res.json({ message: 'CV accepted successfully.' });
});

// ----------------------- GET ACCEPTED CVs -----------------------
app.get('/accepted-cvs', async (req, res) => {
  const cvs = await CV.find({ status: 'Accepted' });
  res.json(cvs);
});

// ----------------------- JOB CREATION -----------------------
app.post('/create-job', async (req, res) => {
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
      !jobId || !field || !position || !contact || !background || !salary ||
      !dueDate || !email || !location || !workType || !description
    ) {
      return res.status(400).json({ message: 'Please fill all required fields.' });
    }

    const newJob = new Job({
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
    });

    await newJob.save();
    console.log("New job created:", newJob);

    res.json({ message: 'Job vacancy created successfully!' });
  } catch (err) {
    console.error('Error in /create-job:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

// ----------------------- JOB GET -----------------------
app.get('/jobs', async (req, res) => {
  const jobs = await Job.find();
  res.json(jobs);
});

// ----------------------- JOB DELETE -----------------------
app.delete('/jobs/:id', async (req, res) => {
  const job = await Job.findOneAndDelete({ jobId: req.params.id });
  if (job) {
    return res.json({ message: 'Job deleted successfully.' });
  }
  res.status(404).json({ message: 'Job not found.' });
});

// -------------------- START SERVER --------------------
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
