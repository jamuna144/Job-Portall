import { useParams, Link } from "react-router-dom";

const partTimeJobs = [
  {
    title: "Part-Time Customer Support",
    company: "Amazon",
    salary: "$1200/month",
    location: "Remote",
    experience: "Fresher",
    type: "Part Time",
    tags: ["Communication", "English", "Support"],
  },
  {
    title: "Part-Time Content Writer",
    company: "Medium",
    salary: "$1000/month",
    location: "Remote",
    experience: "Fresher",
    type: "Part Time",
    tags: ["Writing", "SEO", "Blogging"],
  },
  {
    title: "Social Media Assistant",
    company: "Meta",
    salary: "$1300/month",
    location: "Hybrid",
    experience: "Fresher",
    type: "Part Time",
    tags: ["Instagram", "Facebook"],
  },
  {
    title: "Data Entry Operator",
    company: "Freelance",
    salary: "$800/month",
    location: "Remote",
    experience: "Fresher",
    type: "Part Time",
    tags: ["Typing", "Excel"],
  },
  {
    title: "Online Tutor",
    company: "Chegg",
    salary: "$1500/month",
    location: "Remote",
    experience: "Fresher",
    type: "Part Time",
    tags: ["Teaching", "Math", "English"],
  },
];

export default function PartTimeJobDetail() {
  const { id } = useParams();
  const job = partTimeJobs[Number(id)];

  if (!job) {
    return <h2 className="p-6 text-red-500">Job not found</h2>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex justify-center">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg p-8">

      
        <Link to="/part-time-jobs" className="text-indigo-600 hover:underline text-sm">
          ← Back to Part-Time Jobs
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
            This is a flexible part-time opportunity designed for students,
            freshers, and individuals looking to earn extra income while working remotely.
          </p>
        </div>

      
        <div className="mt-5">
          <h2 className="text-lg font-semibold text-gray-800">
            Requirements
          </h2>

          <ul className="list-disc ml-5 text-gray-600 mt-2 space-y-1">
            <li>Basic communication skills</li>
            <li>Willingness to work part-time</li>
            <li>Basic computer knowledge</li>
            <li>Consistency & responsibility</li>
          </ul>
        </div>

        
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