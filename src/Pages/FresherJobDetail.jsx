import { useParams, Link } from "react-router-dom";

const fresherJobs = [
  {
    title: "Junior Frontend Developer",
    company: "Infosys",
    salary: "$1200/month",
    location: "Remote",
    experience: "Fresher / 0-1 Year",
    type: "Full Time",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Junior Backend Developer",
    company: "TCS",
    salary: "$1500/month",
    location: "Hybrid",
    experience: "Fresher / 0-1 Year",
    type: "Full Time",
    tags: ["Node.js", "Express", "MongoDB"],
  },
  {
    title: "Software Engineer Trainee",
    company: "Wipro",
    salary: "$1400/month",
    location: "Onsite",
    experience: "Fresher",
    type: "Full Time",
    tags: ["Java", "DSA", "OOP"],
  },
];

export default function FresherJobDetail() {
  const { id } = useParams();
  const job = fresherJobs[Number(id)];

  if (!job) {
    return <h2 className="p-6 text-red-500">Job not found</h2>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex justify-center">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg p-8">

        {/* Back */}
        <Link to="/fresher-jobs" className="text-indigo-600 hover:underline text-sm">
          ← Back to Fresher Jobs
        </Link>

        <div className="mt-4 border-b pb-4">
          <h1 className="text-3xl font-bold text-gray-800">
            {job.title}
          </h1>

          <p className="text-gray-600 mt-1">
            {job.company} • {job.location}
          </p>

          <div className="flex gap-2 mt-3 flex-wrap">
            {job.tags.map((tag, i) => (
              <span
                key={i}
                className="text-xs bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

     
        <div className="grid grid-cols-3 gap-4 mt-6">
          <div className="bg-gray-50 p-4 rounded-lg text-center">
            <p className="text-xs text-gray-500">Salary</p>
            <p className="font-bold text-indigo-600">{job.salary}</p>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg text-center">
            <p className="text-xs text-gray-500">Experience</p>
            <p className="font-bold text-gray-800">{job.experience}</p>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg text-center">
            <p className="text-xs text-gray-500">Job Type</p>
            <p className="font-bold text-gray-800">{job.type}</p>
          </div>
        </div>

        
        <div className="mt-6">
          <h2 className="text-lg font-semibold text-gray-800">
            Job Description
          </h2>

          <p className="text-gray-600 mt-2 leading-relaxed">
            We are looking for enthusiastic fresh graduates who are ready to
            start their career in software development. You will learn, build
            projects, and grow with our engineering team.
          </p>
        </div>

   
        <div className="mt-5">
          <h2 className="text-lg font-semibold text-gray-800">
            Requirements
          </h2>

          <ul className="list-disc ml-5 text-gray-600 mt-2 space-y-1">
            <li>Basic knowledge of programming</li>
            <li>Understanding of HTML, CSS, JavaScript</li>
            <li>Willingness to learn</li>
            <li>Good communication skills</li>
          </ul>
        </div>

        {/* Buttons */}
        <div className="mt-8 flex gap-3">
          <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition">
            Apply Now
          </button>

          <button className="bg-gray-200 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-300 transition">
            Save Job
          </button>
        </div>

      </div>
    </div>
  );
}