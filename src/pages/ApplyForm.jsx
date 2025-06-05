import React, { useState } from "react";
import VacanciesNavBar from "../components/VacanciesNavBar";

export default function ApplyForm() {
  const [formData, setFormData] = useState({
    initials: "",
    fullName: "",
    gender: "",
    dob: "",
    email: "",
    contact: "",
    field: "",
    cv: null,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData();
    form.append("initials", formData.initials);
    form.append("fullName", formData.fullName);
    form.append("gender", formData.gender);
    form.append("dob", formData.dob);
    form.append("email", formData.email);
    form.append("contact", formData.contact);
    form.append("field", formData.field);
    form.append("cv", formData.cv);

    try {
      const res = await fetch("http://localhost:5000/apply", {
        method: "POST",
        body: form,
      });

      const data = await res.json();
      alert(data.message);
    } catch (error) {
      alert("Error submitting form. Check if the server is running.");
      console.error(error);
    }
  };

  return (
    <>
      <VacanciesNavBar />
      <div className="bg-white rounded-2xl p-8 shadow-md max-w-2xl mx-auto mt-10">
        <span className="text-xl font-bold mb-6 block">
          Job Application
        </span>
        <form onSubmit={handleSubmit}>
          {[
            ["Name with Initials", "initials", "text"],
            ["Full Name", "fullName", "text"],
            ["Date of Birth", "dob", "date"],
            ["Email", "email", "email"],
            ["Contact Number", "contact", "text"],
          ].map(([label, field, type], idx) => (
            <div className="flex items-center mb-4" key={idx}>
              <label className="w-48">{label} :</label>
              <input
                type={type}
                value={formData[field]}
                onChange={(e) =>
                  setFormData({ ...formData, [field]: e.target.value })
                }
                className="border rounded-md px-4 py-2 w-full"
                required
              />
            </div>
          ))}

          {/* Gender */}
          <div className="flex items-center mb-4">
            <label className="w-48">Gender :</label>
            <select
              value={formData.gender}
              onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
              className="border rounded-md px-4 py-2 w-full"
              required
            >
              <option value="">Select...</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Field */}
          <div className="flex items-center mb-4">
            <label className="w-48">Field :</label>
            <select
              value={formData.field}
              onChange={(e) => setFormData({ ...formData, field: e.target.value })}
              className="border rounded-md px-4 py-2 w-full"
              required
            >
              <option value="">Select...</option>
              <option value="TRAINEE NETWORK ENGINEERS">TRAINEE NETWORK ENGINEERS</option>
              <option value="ACCOUNTANT – FINANCIAL ACCOUNTING">ACCOUNTANT – FINANCIAL ACCOUNTING</option>
              <option value="ENGINEERS">ENGINEERS</option>
               <option value="TECHNICIANS">TECHNICIANS</option>
            </select>
          </div>

          {/* CV Upload */}
          <div className="mb-6">
            <label className="block mb-2 font-medium">Upload your CV here</label>
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={(e) => setFormData({ ...formData, cv: e.target.files[0] })}
              className="block w-full border rounded-md px-4 py-2"
              required
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-800 text-white px-6 py-2 rounded-full hover:bg-blue-900"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
