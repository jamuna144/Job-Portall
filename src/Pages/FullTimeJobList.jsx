import { Link } from "react-router-dom";

const fullTimeJobs = [
  {
    title: "Software Engineer",
    company: "Google",
    location: "Remote",
    tags: ["React", "System Design", "3+ Years"],
    views: "9.2K views",
    salary: "$5000/month",
  },
  {
    title: "Backend Developer",
    company: "Amazon",
    location: "Hybrid",
    tags: ["Node.js", "AWS", "API"],
    views: "7.5K views",
    salary: "$4500/month",
  },
  {
    title: "Frontend Developer",
    company: "Microsoft",
    location: "Onsite",
    tags: ["React", "UI/UX", "JavaScript"],
    views: "6.8K views",
    salary: "$4200/month",
  },
  {
    title: "DevOps Engineer",
    company: "Netflix",
    location: "Remote",
    tags: ["CI/CD", "Docker", "AWS"],
    views: "8.1K views",
    salary: "$6000/month",
  },
  {
    title: "Data Scientist",
    company: "Tesla",
    location: "Hybrid",
    tags: ["Python", "AI", "ML"],
    views: "7.0K views",
    salary: "$5500/month",
  },
];

export default function FullTimeJobList() {
  return (
    <div className="p-6 space-y-4 bg-gray-100 min-h-screen">
      {fullTimeJobs.map((job, index) => (
        <div
          key={index}
          className="bg-white p-5 rounded-lg shadow flex justify-between items-start"
        >
          
          <div>
            <h2 className="text-lg font-semibold text-blue-900">
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
            <p className="text-blue-700 font-semibold">
              {job.salary}
            </p>

            <Link
              to={`/fulltime-job/${index}`}
              className="mt-3 inline-block bg-blue-700 text-white px-4 py-2 rounded text-sm hover:bg-blue-800"
            >
              View Detail
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}