import { useParams, Link } from "react-router-dom";

const internationalJobs = [
  {
    title: "Software Engineer",
    company: "Google USA",
    salary: "$9000/month",
    location: "USA (Remote)",
    experience: "3+ Years",
    type: "Full Time",
    tags: ["React", "System Design", "Cloud"],
  },
  {
    title: "Data Scientist",
    company: "Amazon UK",
    salary: "$8500/month",
    location: "UK (Hybrid)",
    experience: "3+ Years",
    type: "Full Time",
    tags: ["Python", "AI", "ML"],
  },
  {
    title: "Backend Developer",
    company: "Microsoft Canada",
    salary: "$7800/month",
    location: "Canada (Remote)",
    experience: "3+ Years",
    type: "Full Time",
    tags: ["Node.js", "Cloud", "API"],
  },
  {
    title: "UI/UX Designer",
    company: "Meta Germany",
    salary: "$7000/month",
    location: "Germany (Onsite)",
    experience: "2+ Years",
    type: "Full Time",
    tags: ["Figma", "Design Systems"],
  },
  {
    title: "DevOps Engineer",
    company: "Netflix Australia",
    salary: "$9200/month",
    location: "Australia (Remote)",
    experience: "4+ Years",
    type: "Full Time",
    tags: ["AWS", "CI/CD", "Docker"],
  },
];

export default function InternationalJobDetail() {
  const { id } = useParams();
  const job = internationalJobs[Number(id)];

  if (!job) {
    return <h2 className="p-6 text-red-500">Job not found</h2>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex justify-center">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg p-8">

        {/* Back */}
        <Link to="/international-jobs" className="text-purple-600 hover:underline text-sm">
          ← Back to International Jobs
        </Link>

        {/* Header */}
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
                className="text-xs bg-purple-100 text-purple-700 px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Info */}
        <div className="grid grid-cols-3 gap-4 mt-6">
          <div className="bg-gray-50 p-4 rounded-lg text-center">
            <p className="text-xs text-gray-500">Salary</p>
            <p className="font-bold text-purple-600">{job.salary}</p>
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

        {/* Description */}
        <div className="mt-6">
          <h2 className="text-lg font-semibold text-gray-800">
            Job Description
          </h2>

          <p className="text-gray-600 mt-2 leading-relaxed">
            We are hiring global talent to work on high-scale international projects,
            collaborate with top engineering teams, and build world-class products.
          </p>
        </div>

        {/* Requirements */}
        <div className="mt-5">
          <h2 className="text-lg font-semibold text-gray-800">
            Requirements
          </h2>

          <ul className="list-disc ml-5 text-gray-600 mt-2 space-y-1">
            <li>Strong technical skills</li>
            <li>English communication</li>
            <li>3+ years experience preferred</li>
            <li>Ability to work in global teams</li>
          </ul>
        </div>

        {/* Buttons */}
        <div className="mt-8 flex gap-3">
          <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition">
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