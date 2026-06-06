import { Link } from "react-router-dom";

const internationalJobs = [
  {
    title: "Software Engineer",
    company: "Google USA",
    location: "USA (Remote)",
    tags: ["React", "System Design", "3+ Years"],
    views: "8.2K views",
    salary: "$9000/month",
  },
  {
    title: "Data Scientist",
    company: "Amazon UK",
    location: "UK (Hybrid)",
    tags: ["Python", "AI", "ML"],
    views: "6.5K views",
    salary: "$8500/month",
  },
  {
    title: "Backend Developer",
    company: "Microsoft Canada",
    location: "Canada (Remote)",
    tags: ["Node.js", "Cloud", "API"],
    views: "5.9K views",
    salary: "$7800/month",
  },
  {
    title: "UI/UX Designer",
    company: "Meta Germany",
    location: "Germany (Onsite)",
    tags: ["Figma", "Design Systems", "Creativity"],
    views: "4.3K views",
    salary: "$7000/month",
  },
  {
    title: "DevOps Engineer",
    company: "Netflix Australia",
    location: "Australia (Remote)",
    tags: ["AWS", "CI/CD", "Docker"],
    views: "7.1K views",
    salary: "$9200/month",
  },
];

export default function InternationalJobList() {
  return (
    <div className="p-6 space-y-4 bg-gray-100 min-h-screen">
      {internationalJobs.map((job, index) => (
        <div
          key={index}
          className="bg-white p-5 rounded-lg shadow flex justify-between items-start"
        >
         
          <div>
            <h2 className="text-lg font-semibold text-purple-700">
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
            <p className="text-purple-600 font-semibold">
              {job.salary}
            </p>

            <Link
              to={`/international-job/${index}`}
              className="mt-3 inline-block bg-purple-600 text-white px-4 py-2 rounded text-sm hover:bg-purple-700"
            >
              View Detail
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}