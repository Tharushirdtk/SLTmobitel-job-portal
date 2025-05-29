
import React from 'react';

const JobCreation = () => {
  return (
    <div className="bg-white p-6 rounded shadow-md w-full">
      <h2 className="text-xl font-semibold mb-4">Company Job Vacancy: Web Development Trainee</h2>
      <form className="grid grid-cols-3 gap-4">
        <input type="text" placeholder="Job ID" className="border p-2 rounded" />
        <input type="text" placeholder="Job Field" className="border p-2 rounded" />
        <input type="text" placeholder="Job Position" className="border p-2 rounded" />
        <input type="text" placeholder="Contact Number" className="border p-2 rounded" />
        <input type="text" placeholder="Background" className="border p-2 rounded" />
        <input type="text" placeholder="Salary" className="border p-2 rounded" />
        <input type="date" placeholder="Due Date" className="border p-2 rounded" />
        <input type="email" placeholder="Company Email" className="border p-2 rounded" />
        <input type="text" placeholder="Company Location" className="border p-2 rounded" />
        <input type="text" placeholder="Work Type" className="border p-2 rounded" />
        <textarea placeholder="Job Description" className="col-span-3 border p-2 rounded h-24"></textarea>
        <div className="col-span-3">
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Create</button>
        </div>
      </form>
    </div>
  );
};

export default JobCreation;
