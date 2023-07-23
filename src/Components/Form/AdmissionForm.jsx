import React, { useState } from "react";

const AdmissionForm = ({ collegeName }) => {
  const [candidateName, setCandidateName] = useState("");
  const [subject, setSubject] = useState("");
  const [candidateEmail, setCandidateEmail] = useState("");
  const [candidatePhone, setCandidatePhone] = useState("");
  const [address, setAddress] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process the form data, e.g., submit it to a server
    // Reset form fields after submission
    setCandidateName("");
    setSubject("");
    setCandidateEmail("");
    setCandidatePhone("");
    setAddress("");
    setDateOfBirth("");
    setImage(null);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto p-4 bg-white shadow-lg rounded-lg"
    >
      <h2 className="text-xl font-semibold mb-4">
        {collegeName} Admission Form
      </h2>
      <div className="mb-4">
        <label htmlFor="candidateName">Candidate Name</label>
        <input
          type="text"
          id="candidateName"
          value={candidateName}
          onChange={(e) => setCandidateName(e.target.value)}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
        <label htmlFor="candidateName">Candidate Name</label>
        <input
          type="text"
          id="candidateName"
          value={candidateName}
          onChange={(e) => setCandidateName(e.target.value)}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
        <label htmlFor="candidateName">Candidate Name</label>
        <input
          type="text"
          id="candidateName"
          value={candidateName}
          onChange={(e) => setCandidateName(e.target.value)}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
      </div>
      {/* Add other input fields for Subject, Candidate Email, Candidate Phone, Address, Date of Birth, and Image */}
      {/* ... */}
      <div className="mt-4">
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default AdmissionForm;
