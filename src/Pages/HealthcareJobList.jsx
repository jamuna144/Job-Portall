import { Link } from "react-router-dom";

const healthcareJobs = [
  {
    title: "Registered Nurse",
    company: "Apollo Hospital",
    location: "Onsite",
    tags: ["Nursing", "Patient Care", "Diploma"],
    views: "5.2K views",
    salary: "$2500/month",
  },
  {
    title: "Medical Assistant",
    company: "Fortis Healthcare",
    location: "Hybrid",
    tags: ["Assistance", "Clinical Work", "1+ Year"],
    views: "3.8K views",
    salary: "$1800/month",
  },
  {
    title: "Lab Technician",
    company: "Max Hospital",
    location: "Onsite",
    tags: ["Lab Work", "Testing", "Diploma"],
    views: "4.1K views",
    salary: "$2000/month",
  },
  {
    title: "Pharmacist",
    company: "MedPlus",
    location: "Remote",
    tags: ["Medicine", "Pharmacy", "Degree"],
    views: "3.3K views",
    salary: "$2200/month",
  },
];

export default function HealthcareJobList() {
  return (
    <div className="p-6 space-y-4 bg-gray-100 min-h-screen">
      {healthcareJobs.map((job, index) => (
        <div
          key={index}
          className="bg-white p-5 rounded-lg shadow flex justify-between items-start"
        >
         
          <div>
            <h2 className="text-lg font-semibold text-red-700">
              {job.title}
            </h2>

            <p className="text-sm text-gray-600">
              {job.company} • {job.location}
            </p>

            <div className="flex gap-2 mt-2 flex-wrap">
              {job.tags.map((tag, i) => (
                <span
                  key={i}
                  className="text-xs bg-gray-200 px-2 py-1 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>

            <p className="text-xs text-gray-500 mt-2">{job.views}</p>
          </div>

          
          <div className="text-right">
            <p className="text-red-600 font-semibold">{job.salary}</p>

            <Link
              to={`/healthcare-job/${index}`}
              className="mt-3 inline-block bg-red-600 text-white px-4 py-2 rounded text-sm hover:bg-red-700"
            >
              View Detail
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}