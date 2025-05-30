import React, { useEffect, useState } from 'react';

const JobModification = () => {
  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

 
  useEffect(() => {
    fetch('http://localhost:5000/jobs')
      .then((res) => res.json())
      .then((data) => setJobs(data))
      .catch((err) => {
        console.error('Error fetching jobs:', err);
        alert('Failed to load jobs. Make sure the server is running.');
      });
  }, []);

  const handleDelete = async (jobId) => {
    if (!window.confirm(`Delete job with ID "${jobId}"?`)) return;

    try {
      const res = await fetch(`http://localhost:5000/jobs/${jobId}`, {
        method: 'DELETE',
      });

      const data = await res.json();
      alert(data.message);

      // Update the job list after delete
      setJobs((prev) => prev.filter((job) => job.id !== jobId));
    } catch (err) {
      console.error('Delete error:', err);
      alert('Failed to delete job.');
    }
  };

  //  search 
  const filteredJobs = jobs.filter((job) =>
    job.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.field.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white p-6 rounded shadow-md w-full">
      <h2 className="text-xl font-semibold mb-4">Job Modification</h2>
      <input
        type="text"
        placeholder="Search by Job ID or Field"
        className="mb-4 p-2 border rounded w-1/3"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
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
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job, i) => (
              <tr key={i} className="text-center border-t">
                <td className="p-2">{job.id}</td>
                <td className="p-2">{job.field}</td>
                <td className="p-2">{job.date}</td>
                <td className="p-2">{job.status}</td>
                <td className="p-2">
                  <button
                    className="mr-2"
                    onClick={() => alert('Edit functionality coming soon!')}
                  >
                    ✏️
                  </button>
                  <button onClick={() => handleDelete(job.id)}>🗑️</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="p-4 text-center">No jobs found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default JobModification;
