import { useParams } from "react-router-dom";
import AdmissionForm from "../Form/AdmissionForm";

const AdmissionPage = () => {
  const { collegeName } = useParams();

  return (
    <div className="py-8">
      <div className="max-w-lg mx-auto">
        {/* Admission form */}
        <AdmissionForm collegeName={collegeName}></AdmissionForm>
      </div>
    </div>
  );
};

export default AdmissionPage;
