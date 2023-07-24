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
    setCandidateName("");
    setSubject("");
    setCandidateEmail("");
    setCandidatePhone("");
    setAddress("");
    setDateOfBirth("");
    setImage(null);
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto p-4 bg-white text-black shadow-lg rounded-lg"
      >
        <h2 className="text-xl font-semibold mb-4">
          {collegeName} Admission Form
        </h2>
        <div className="mb-4 mx-auto w-9/12">
          <div className="flex gap-2 mb-2">
            <input
              type="text"
              id="candidateName"
              value={candidateName}
              onChange={(e) => setCandidateName(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
              placeholder="CandidateName"
            />

            <input
              type="text"
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
              placeholder="Subject"
            />
          </div>
          <div className="flex gap-2 mb-2">
            <input
              type="email"
              id="candidateEmail"
              value={candidateEmail}
              onChange={(e) => setCandidateEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
              placeholder="Candidate Email"
            />

            <input
              type="text"
              id="candidatePhone"
              value={candidatePhone}
              onChange={(e) => setCandidatePhone(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
              placeholder="Candidate Phone"
            />
          </div>
          <div className="flex gap-2">
            <input
              type="text"
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
              placeholder="Address"
            />

            <input
              type="text"
              id="dateOfBirth"
              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
              className="w-full px-4 py-2 border rounded-md "
              required
              placeholder="Date Of Birth"
            />
          </div>
          <div className="flex gap-2 mt-2">
            <input
              type="text"
              id="image"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
              placeholder="Image"
            />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-center items-center sm:space-x-4 mt-4">
          <button
            type="submit"
            className="w-full sm:w-auto px-4 py-2 bg-black text-white rounded-md hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdmissionForm;
