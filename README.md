## SLT Mobitel Job Portal (React + Node.js)

This project is a full-stack remake of the SLT Mobitel Job Portal website, rebuilt with React.js for the frontend and Node.js (Express) for the backend. It provides a modern, responsive, and efficient platform for job seekers and employers related to SLT Mobitel.
About

The original SLT Mobitel Job Portal connects job seekers with employment opportunities at SLT Mobitel. This remake modernizes the portal by using React for the user interface and a Node.js backend to handle job listings, applications, CV uploads, and user authentication — making the platform scalable, maintainable, and easy to extend.

## Features
Frontend (React.js)

    Responsive user interface with Tailwind CSS for styling

    Job listings with create, delete, and view functionality

    User registration and login (mocked authentication)

    Submit job applications with CV file upload

    View received CVs for job applications

    Display accepted CVs for employers

    Dynamic routing with React Router

Backend (Node.js / Express)

    RESTful API handling:

        Job creation, listing, and deletion

        User registration and login (basic validation)

        Application form handling with file upload (Multer)

        Serving uploaded CV files statically

        Store and retrieve received CVs data in memory (can be extended to use a database)

    Secure and unique file naming for uploaded CVs

    CORS enabled for frontend-backend communication

## Tech Stack

    Frontend: React.js, React Router, Tailwind CSS

    Backend: Node.js, Express.js, Multer (file upload), CORS

    Development Tools: Vite or Create React App, npm/yarn

## Installation
Backend Setup

    Clone the backend repository or use the existing backend folder.

    ※ Install dependencies:

npm install express cors multer

    ※ Start the backend server:

node index.js

The backend server will run on http://localhost:5000.

## Frontend Setup

    Clone the frontend repository or use your React project folder.

    Install dependencies:

npm install react react-dom react-router-dom axios tailwindcss

    Start the React development server:

npm run dev
# or if using Create React App
npm start

The frontend app will typically run on http://localhost:3000.
## Usage

    Job Management: Employers can create and delete job postings via the frontend UI. Jobs are stored in the backend's in-memory array.

    Apply for Jobs: Candidates submit applications including uploading their CVs. Uploaded files are saved in the backend’s uploads folder.

    View Applications: Employers can view received CVs and accepted CVs through dedicated frontend pages which fetch data from the backend.

    Authentication: Simple login and registration routes with basic validation; can be extended for real auth.

## Folder Structure 

/backend
  ├─ index.js         # Express backend server code
  ├─ uploads/         # Folder for uploaded CV files

/frontend
  ├─ src/
     ├─ pages/        # React pages/components (Job listings, ReceivedCVs, AcceptedCVs, etc.)
     ├─ App.jsx       # Main React app with routing
     ├─ main.jsx      # React entry point
  ├─ tailwind.config.js
  ├─ package.json

## Future Improvements

    Persist job listings and CV data in a database (e.g., MongoDB, PostgreSQL)

    Add real user authentication and authorization (JWT, OAuth)

    Enhance UI with better design and animations

    Add pagination and filtering for job listings and CVs

    Implement email notifications for applications

## License

MIT License © 2025 Tharushi