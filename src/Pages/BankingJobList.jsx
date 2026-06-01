import { Link } from "react-router-dom";

const bankingJobs = [
  {
    title: "Bank Clerk",
    company: "Nepal Bank",
    location: "Onsite",
    tags: ["Accounting", "Excel", "Finance"],
    views: "6.2K views",
    salary: "Rs. 35,000/month",
  },
  {
    title: "Relationship Manager",
    company: "HDFC Bank",
    location: "Hybrid",
    tags: ["Sales", "Communication", "Finance"],
    views: "7.5K views",
    salary: "Rs. 60,000/month",
  },
  {
    title: "Loan Officer",
    company: "SBI Bank",
    location: "Onsite",
    tags: ["Loans", "Credit Analysis", "Finance"],
    views: "5.8K views",
    salary: "Rs. 50,000/month",
  },
  {
    title: "Bank Teller",
    company: "Global IME Bank",
    location: "Onsite",
    tags: ["Cash Handling", "Customer Service"],
    views: "4.9K views",
    salary: "Rs. 30,000/month",
  },
  {
    title: "Finance Analyst",
    company: "Standard Chartered",
    location: "Hybrid",
    tags: ["Excel", "Reporting", "Analysis"],
    views: "8.1K views",
    salary: "Rs. 75,000/month",
  },
];

export default function BankingJobList() {
  return (
    <div className="p-6 space-y-4 bg-gray-100 min-h-screen">
      {bankingJobs.map((job, index) => (
        <div
          key={index}
          className="bg-white p-5 rounded-lg shadow flex justify-between items-start"
        >
          {/* LEFT */}
          <div>
            <h2 className="text-lg font-semibold text-yellow-700">
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

          {/* RIGHT */}
          <div className="text-right">
            <p className="text-yellow-600 font-semibold">
              {job.salary}
            </p>

            <Link
              to={`/banking-job/${index}`}
              className="mt-3 inline-block bg-yellow-600 text-white px-4 py-2 rounded text-sm hover:bg-yellow-700"
            >
              View Detail
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}