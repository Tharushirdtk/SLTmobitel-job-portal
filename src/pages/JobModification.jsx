
import React from 'react';


const JobModification = () => {
  const jobs = [
    { id: 'IT', field: 'QA Trainee', date: '2023/10/14', status: 'Rejected' },
    { id: 'HR', field: 'HR Trainee', date: '2023/09/11', status: 'Accepted' },
    { id: 'Finance', field: 'Accountant', date: '2023/08/16', status: 'Rejected' },
    { id: 'IT', field: 'Web Developer', date: '2023/08/02', status: 'Accepted' },
  ];

  return (
  <>
    <div className="bg-white p-6 rounded shadow-md w-full">
      <h2 className="text-xl font-semibold mb-4">Job Modification</h2>
      <input type="text" placeholder="Search" className="mb-4 p-2 border rounded w-1/3" />
      <table className="w-full border">
        <thead className="bg-blue-900 text-white">
          <tr>
            <th className="p-2">Job ID</th>
            <th className="p-2">Job Field</th>
            <th className="p-2">Created Date</th>
            <th className="p-2">Status</th>
            <th className="p-2">Modification</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job, i) => (
            <tr key={i} className="text-center border-t">
              <td className="p-2">{job.id}</td>
              <td className="p-2">{job.field}</td>
              <td className="p-2">{job.date}</td>
              <td className="p-2">{job.status}</td>
              <td className="p-2">
                <button className="mr-2">✏️</button>
                <button>🗑️</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </>
    
  );
};

export default JobModification;
