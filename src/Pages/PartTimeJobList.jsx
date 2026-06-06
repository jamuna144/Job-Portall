import { Link } from "react-router-dom";

const partTimeJobs = [
  {
    title: "Part-Time Customer Support",
    company: "Amazon",
    location: "Remote",
    tags: ["Communication", "English", "Support"],
    views: "5.2K views",
    salary: "$1200/month",
  },
  {
    title: "Part-Time Content Writer",
    company: "Medium",
    location: "Remote",
    tags: ["Writing", "SEO", "Blogging"],
    views: "4.1K views",
    salary: "$1000/month",
  },
  {
    title: "Social Media Assistant",
    company: "Meta",
    location: "Hybrid",
    tags: ["Instagram", "Facebook", "Content"],
    views: "6.0K views",
    salary: "$1300/month",
  },
  {
    title: "Data Entry Operator",
    company: "Freelance",
    location: "Remote",
    tags: ["Typing", "Excel", "Accuracy"],
    views: "3.5K views",
    salary: "$800/month",
  },
  {
    title: "Online Tutor",
    company: "Chegg",
    location: "Remote",
    tags: ["Teaching", "Math", "English"],
    views: "7.8K views",
    salary: "$1500/month",
  },
];

export default function PartTimeJobList() {
  return (
    <div className="p-6 space-y-4 bg-gray-100 min-h-screen">
      {partTimeJobs.map((job, index) => (
        <div
          key={index}
          className="bg-white p-5 rounded-lg shadow flex justify-between items-start"
        >
          
          <div>
            <h2 className="text-lg font-semibold text-indigo-700">
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
            <p className="text-indigo-600 font-semibold">
              {job.salary}
            </p>

            <Link
              to={`/parttime-job/${index}`}
              className="mt-3 inline-block bg-indigo-600 text-white px-4 py-2 rounded text-sm hover:bg-indigo-700"
            >
              View Detail
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}