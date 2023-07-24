import React, { useState } from "react";
import CollegeCard from "./CollegeCard";

const collegesData = [
  // Colleges data here...
];

const CollegePage = () => {
  const [filter, setFilter] = useState("");
  const [colleges, setColleges] = useState(collegesData);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
    const filteredColleges = collegesData.filter((college) =>
      college.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setColleges(filteredColleges);
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-semibold mb-8">Colleges</h1>
      <form className="mb-4">
        <label htmlFor="collegeFilter" className="block mb-2">
          Filter Colleges:
        </label>
        <input
          type="text"
          id="collegeFilter"
          value={filter}
          onChange={handleFilterChange}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </form>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {colleges.map((college, index) => (
          <CollegeCard key={index} college={college} />
        ))}
      </div>
    </div>
  );
};

export default CollegePage;
