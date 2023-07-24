const CollegeCard = ({ college }) => {
  if (!college) {
    return (
      <div className="text-red-500">Error: College data not available</div>
    );
  }

  const { name, image, rating, admissionDate, researchCount } = college;

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <img
        src={image}
        alt={name}
        className="w-full h-40 object-cover rounded-md"
      />
      <h2 className="text-xl font-semibold mt-4">{name}</h2>
      <p className="text-gray-600">Rating: {rating}</p>
      <p className="text-gray-600">Admission Date: {admissionDate}</p>
      <p className="text-gray-600">Research Count: {researchCount}</p>
      <div className="mt-4 flex justify-center">
        <button className="px-4 py-2 bg-black text-white rounded-md hover:bg-slate-500">
          Details
        </button>
      </div>
    </div>
  );
};

export default CollegeHomeCard;
