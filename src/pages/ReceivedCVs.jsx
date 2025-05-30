import React, { useEffect, useState } from 'react';

const ReceivedCVs = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/received-cvs')
      .then(res => res.json())
      .then(setData)
      .catch(err => console.error('Error fetching CVs:', err));
  }, []);

  return (
    <div className="bg-white p-6 rounded shadow-md w-full">
      <h2 className="text-xl font-semibold mb-4">Received CVs</h2>
      <table className="w-full border">
        <thead className="bg-blue-900 text-white">
          <tr>
            <th className="p-2">Job Title</th>
            <th className="p-2">Name</th>
            <th className="p-2">Gender</th>
            <th className="p-2">Field</th>
            <th className="p-2">Contact Number</th>
            <th className="p-2">CV</th>
          </tr>
        </thead>
        <tbody>
          {data.map((cv, idx) => (
            <tr key={idx} className="text-center border-t">
              <td className="p-2">{cv.jobTitle}</td>
              <td className="p-2">{cv.name}</td>
              <td className="p-2">{cv.gender}</td>
              <td className="p-2">{cv.field}</td>
              <td className="p-2">{cv.contact}</td>
              <td className="p-2">
                <a
                  href={`http://localhost:5000/uploads/${cv.file}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 underline"
                >
                  {cv.file}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReceivedCVs;
