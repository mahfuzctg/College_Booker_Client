import { useParams } from "react-router-dom";
import AdmissionForm from "../Form/AdmissionForm";

const AdmissionPage = () => {
  const { collegeName } = useParams();

  return (
    <div className="py-8">
      <h1 className="text-3xl font-semibold text-center mb-6">Admission</h1>
      <div className="max-w-lg mx-auto">
        {/* College names list */}
        {/* Replace these sample college names with your actual college names */}
        <ul className="mb-4">
          <li>
            <a href="/admission/college1">College 1</a>
          </li>
          <li>
            <a href="/admission/college2">College 2</a>
          </li>
          {/* Add more colleges as needed */}
        </ul>
        {/* Admission form */}
        <AdmissionForm collegeName={collegeName}></AdmissionForm>
      </div>
    </div>
  );
};

export default AdmissionPage;
