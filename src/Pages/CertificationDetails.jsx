import { useParams } from "react-router-dom";

export default function CertificationDetails() {
  const { id } = useParams();

  return (
    <div className="min-h-screen black flex items-center justify-center p-6">
      <div className="max-w-xl w-full bg-white shadow-lg rounded-2xl p-8 text-center">
        
        <h1 className="text-2xl font-bold text-slate-800 mb-4">
          Certification Details
        </h1>

        <p className="text-gray-600 mb-6">
          Certification ID: <span className="font-semibold">{id}</span>
        </p>

        <button
          onClick={() => alert("Certification Enrolled Successfully!")}
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-semibold"
        >
          Enroll Now
        </button>

      </div>
    </div>
  );
}