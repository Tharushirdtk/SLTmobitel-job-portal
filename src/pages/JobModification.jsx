import React, { useEffect, useState } from 'react';

const JobModification = () => {
  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch('http://localhost:5000/jobs');
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const data = await res.json();
        setJobs(data);
      } catch (err) {
        console.error('Error fetching jobs:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    
    fetchJobs();
  }, []);

  const handleDelete = async (jobId) => {
    if (!window.confirm(`Delete job with ID "${jobId}"?`)) return;

    try {
      const res = await fetch(`http://localhost:5000/jobs/${jobId}`, {
        method: 'DELETE',
      });

      if (!res.ok) throw new Error('Failed to delete job');

      const data = await res.json();
      alert(data.message);
      setJobs(prev => prev.filter(job => job.jobId !== jobId));
    } catch (err) {
      console.error('Delete error:', err);
      alert(err.message || 'Failed to delete job.');
    }
  };

  const filteredJobs = jobs.filter((job) =>
    job.jobId?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.field?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <div className="p-4 text-center">Loading jobs...</div>;
  if (error) return <div className="p-4 text-center text-red-500">Error: {error}</div>;

  return (
    <div className="bg-white p-6 rounded shadow-md w-full">
      <h2 className="text-xl font-semibold mb-4">Job Modification</h2>
      <input
        type="text"
        placeholder="Search by Job ID or Field"
        className="mb-4 p-2 border rounded w-full md:w-1/3"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      
      <div className="overflow-x-auto">
        <table className="w-full border">
          <thead className="bg-blue-900 text-white">
            <tr>
              <th className="p-2 text-left">Job ID</th>
              <th className="p-2 text-left">Job Field</th>
              <th className="p-2 text-left">Due Date</th>
              <th className="p-2 text-left">Status</th>
              <th className="p-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (
                <tr key={job.jobId} className="border-t hover:bg-gray-50">
                  <td className="p-2">{job.jobId}</td>
                  <td className="p-2">{job.field}</td>
                  <td className="p-2">{new Date(job.dueDate).toLocaleDateString()}</td>
                  <td className="p-2">Active</td>
                  <td className="p-2">
                    <button
                      className="mr-2 text-blue-600 hover:text-blue-800"
                      onClick={() => alert('Edit functionality coming soon!')}
                      title="Edit"
                    >
                      ✏️
                    </button>
                    <button 
                      className="text-red-600 hover:text-red-800"
                      onClick={() => handleDelete(job.jobId)}
                      title="Delete"
                    >
                      🗑️
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="p-4 text-center">
                  {searchTerm ? 'No matching jobs found' : 'No jobs available'}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default JobModification;