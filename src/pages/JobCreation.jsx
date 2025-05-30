import React, { useState } from 'react';

const JobCreation = () => {
  const [formData, setFormData] = useState({
    jobId: '',
    field: '',
    position: '',
    contact: '',
    background: '',
    salary: '',
    dueDate: '',
    email: '',
    location: '',
    workType: '',
    description: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/create-job', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      alert(data.message);
    } catch (error) {
      alert('Failed to create job. Is the server running?');
      console.error(error);
    }
  };

  return (
    <div className="bg-white p-6 rounded shadow-md w-full">
      <h2 className="text-xl font-semibold mb-4">
        Company Job Vacancy: Web Development Trainee
      </h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-3 gap-4">
        <input name="jobId" type="text" placeholder="Job ID" className="border p-2 rounded" onChange={handleChange} required />
        <input name="field" type="text" placeholder="Job Field" className="border p-2 rounded" onChange={handleChange} required />
        <input name="position" type="text" placeholder="Job Position" className="border p-2 rounded" onChange={handleChange} required />
        <input name="contact" type="text" placeholder="Contact Number" className="border p-2 rounded" onChange={handleChange} required />
        <input name="background" type="text" placeholder="Background" className="border p-2 rounded" onChange={handleChange} required />
        <input name="salary" type="text" placeholder="Salary" className="border p-2 rounded" onChange={handleChange} required />
        <input name="dueDate" type="date" className="border p-2 rounded" onChange={handleChange} required />
        <input name="email" type="email" placeholder="Company Email" className="border p-2 rounded" onChange={handleChange} required />
        <input name="location" type="text" placeholder="Company Location" className="border p-2 rounded" onChange={handleChange} required />
        <input name="workType" type="text" placeholder="Work Type" className="border p-2 rounded" onChange={handleChange} required />
        <textarea name="description" placeholder="Job Description" className="col-span-3 border p-2 rounded h-24" onChange={handleChange} required />
        <div className="col-span-3">
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Create</button>
        </div>
      </form>
    </div>
  );
};

export default JobCreation;
