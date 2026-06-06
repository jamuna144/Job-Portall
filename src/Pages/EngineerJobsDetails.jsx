import { useParams, Link } from "react-router-dom";

const engineerJobs = [
  {
    id: 0,
    title: "Frontend Engineer",
    company: "Google",
    salary: "$5000/month",
    location: "Remote",
    experience: "2+ Years",
    type: "Full Time",
    tags: ["React", "JavaScript", "UI/UX"],
  },
  {
    id: 1,
    title: "Backend Engineer",
    company: "Amazon",
    salary: "$5500/month",
    location: "Onsite",
    experience: "3+ Years",
    type: "Full Time",
    tags: ["Node.js", "APIs", "Databases"],
  },
  {
    id: 2,
    title: "Full Stack Engineer",
    company: "Microsoft",
    salary: "$6000/month",
    location: "Hybrid",
    experience: "3+ Years",
    type: "Full Time",
    tags: ["MERN", "System Design", "Cloud"],
  },
  {
    id: 3,
    title: "DevOps Engineer",
    company: "Netflix",
    salary: "$6500/month",
    location: "Remote",
    experience: "3+ Years",
    type: "Full Time",
    tags: ["AWS", "Docker", "CI/CD"],
  },
  {
    id: 4,
    title: "Software Engineer",
    company: "Meta",
    salary: "$7000/month",
    location: "Onsite",
    experience: "2+ Years",
    type: "Full Time",
    tags: ["Algorithms", "Data Structures", "Java"],
  },
  {
    id: 5,
    title: "Mobile App Engineer",
    company: "Uber",
    salary: "$4800/month",
    location: "Hybrid",
    experience: "2+ Years",
    type: "Full Time",
    tags: ["React Native", "Flutter", "iOS"],
  },
  {
    id: 6,
    title: "AI Engineer",
    company: "OpenAI",
    salary: "$8000/month",
    location: "Remote",
    experience: "3+ Years",
    type: "Full Time",
    tags: ["Machine Learning", "Python", "AI Models"],
  },
  {
    id: 7,
    title: "Cloud Engineer",
    company: "AWS",
    salary: "$7500/month",
    location: "Remote",
    experience: "3+ Years",
    type: "Full Time",
    tags: ["AWS", "Cloud Computing", "DevOps"],
  },
];

export default function EngineerJobDetail() {
  const { id } = useParams();

  const job = engineerJobs.find((j) => j.id === +id);

  if (!job) {
    return <h2 className="p-6 text-red-500">Job not found</h2>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex justify-center">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg p-8">

        <Link to="/engineer-jobs" className="text-blue-600 hover:underline text-sm">
          ← Back to Engineer Jobs
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
          <div className="bg-gray-50 p-4 text-center rounded-lg">
            <p className="text-xs text-gray-500">Salary</p>
            <p className="font-bold text-blue-600">{job.salary}</p>
          </div>

          <div className="bg-gray-50 p-4 text-center rounded-lg">
            <p className="text-xs text-gray-500">Experience</p>
            <p className="font-bold">{job.experience}</p>
          </div>

          <div className="bg-gray-50 p-4 text-center rounded-lg">
            <p className="text-xs text-gray-500">Job Type</p>
            <p className="font-bold">{job.type}</p>
          </div>
        </div>

        <div className="mt-6">
          <h2 className="text-lg font-semibold">Job Description</h2>
          <p className="text-gray-600 mt-2">
            We are looking for a skilled engineer to build scalable systems,
            develop high-quality software, and collaborate with cross-functional teams.
          </p>
        </div>

        <div className="mt-5">
          <h2 className="text-lg font-semibold">Requirements</h2>
          <ul className="list-disc ml-5 text-gray-600 mt-2 space-y-1">
            <li>Strong programming skills</li>
            <li>Problem-solving ability</li>
            <li>Experience with modern frameworks</li>
            <li>Team collaboration skills</li>
          </ul>
        </div>

        <div className="mt-8 flex gap-3">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
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