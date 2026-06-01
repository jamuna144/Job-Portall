import { Link } from "react-router-dom";

const salesJobs = [
  {
    title: "Sales Executive",
    company: "Samsung",
    location: "Onsite",
    tags: ["Communication", "Negotiation", "1+ Year"],
    views: "4.5K views",
    salary: "$2000/month",
  },
  {
    title: "Business Development Manager",
    company: "Deloitte",
    location: "Hybrid",
    tags: ["B2B", "Strategy", "3+ Years"],
    views: "6.2K views",
    salary: "$4500/month",
  },
  {
    title: "Retail Sales Associate",
    company: "Nike",
    location: "Onsite",
    tags: ["Customer Service", "Sales", "Freshers"],
    views: "3.1K views",
    salary: "$1500/month",
  },
  {
    title: "Account Manager",
    company: "Salesforce",
    location: "Remote",
    tags: ["CRM", "Client Handling", "2+ Years"],
    views: "5.0K views",
    salary: "$3800/month",
  },
];

export default function SalesJobList() {
  return (
    <div className="p-6 space-y-4 bg-gray-100 min-h-screen">
      {salesJobs.map((job, index) => (
        <div
          key={index}
          className="bg-white p-5 rounded-lg shadow flex justify-between items-start"
        >
          
          <div>
            <h2 className="text-lg font-semibold text-orange-700">
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
            <p className="text-orange-600 font-semibold">{job.salary}</p>

            <Link
              to={`/sales-job/${index}`}
              className="mt-3 inline-block bg-orange-600 text-white px-4 py-2 rounded text-sm hover:bg-orange-700"
            >
              View Detail
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}