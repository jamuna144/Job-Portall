import { useParams, Link } from "react-router-dom";

const fullTimeJobs = [
  {
    title: "Software Engineer",
    company: "Google",
    salary: "$5000/month",
    location: "Remote",
    experience: "3+ Years",
    type: "Full Time",
    tags: ["React", "System Design", "Cloud"],
  },
  {
    title: "Backend Developer",
    company: "Amazon",
    salary: "$4500/month",
    location: "Hybrid",
    experience: "3+ Years",
    type: "Full Time",
    tags: ["Node.js", "AWS", "API"],
  },
  {
    title: "Frontend Developer",
    company: "Microsoft",
    salary: "$4200/month",
    location: "Onsite",
    experience: "2+ Years",
    type: "Full Time",
    tags: ["React", "UI/UX"],
  },
  {
    title: "DevOps Engineer",
    company: "Netflix",
    salary: "$6000/month",
    location: "Remote",
    experience: "4+ Years",
    type: "Full Time",
    tags: ["Docker", "CI/CD", "AWS"],
  },
  {
    title: "Data Scientist",
    company: "Tesla",
    salary: "$5500/month",
    location: "Hybrid",
    experience: "3+ Years",
    type: "Full Time",
    tags: ["Python", "AI", "ML"],
  },
];

export default function FullTimeJobDetail() {
  const { id } = useParams();
  const job = fullTimeJobs[Number(id)];

  if (!job) {
    return <h2 className="p-6 text-red-500">Job not found</h2>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex justify-center">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg p-8">

        {/* Back */}
        <Link to="/full-time-jobs" className="text-blue-700 hover:underline text-sm">
          ← Back to Full-Time Jobs
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
                className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

    
        <div className="grid grid-cols-3 gap-4 mt-6">
          <div className="bg-gray-50 p-4 rounded-lg text-center">
            <p className="text-xs text-gray-500">Salary</p>
            <p className="font-bold text-blue-700">{job.salary}</p>
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
            We are hiring highly skilled full-time professionals to work on
            large-scale systems, collaborate with global teams, and build
            production-level applications.
          </p>
        </div>

       
        <div className="mt-5">
          <h2 className="text-lg font-semibold text-gray-800">
            Requirements
          </h2>

          <ul className="list-disc ml-5 text-gray-600 mt-2 space-y-1">
            <li>Strong programming skills</li>
            <li>3+ years experience preferred</li>
            <li>System design knowledge</li>
            <li>Team collaboration skills</li>
          </ul>
        </div>

       
        <div className="mt-8 flex gap-3">
          <button className="bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition">
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