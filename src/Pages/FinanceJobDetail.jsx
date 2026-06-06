import { useParams, Link } from "react-router-dom";

const financeJobs = [
  {
    id: 0,
    title: "Financial Analyst",
    company: "JP Morgan",
    salary: "$3500/month",
    location: "Remote",
    experience: "2+ Years",
    type: "Full Time",
    tags: ["Excel", "Finance", "2+ Years"],
  },
  {
    id: 1,
    title: "Investment Banker",
    company: "Goldman Sachs",
    salary: "$7000/month",
    location: "Onsite",
    experience: "3+ Years",
    type: "Full Time",
    tags: ["M&A", "Valuation", "3+ Years"],
  },
  {
    id: 2,
    title: "Accountant",
    company: "Deloitte",
    salary: "$3200/month",
    location: "Hybrid",
    experience: "2+ Years",
    type: "Full Time",
    tags: ["Accounting", "Tax", "2+ Years"],
  },
  {
      id: 3,
    title: "Credit Analyst",
    company: "Citibank",
    location: "Remote",
    experience: "2+ Years",
    type: "Full Time",
    tags: ["Credit Risk", "Loans", "2+ Years"],
    views: "4.6K views",
    salary: "$3700/month",
  },
  {
    id: 4,
    title: "Auditor",
    company: "KPMG",
    location: "Onsite",
    experience: "3+ Years",
    type: "Full Time",
    tags: ["Audit", "Compliance", "3+ Years"],
    views: "3.1K views",
    salary: "$3400/month",
  },
  {
    id: 5,
    title: "Treasury Analyst",
    company: "Wells Fargo",
    location: "Hybrid",
    experience: "2+ Years",
    type: "Full Time",
    tags: ["Cash Flow", "Banking", "2+ Years"],
    views: "2.7K views",
    salary: "$3900/month",
  },
  {
    id: 6,
    title: "Equity Research Analyst",
    company: "Barclays",
    location: "Remote",
    experience: "3+ Years",
    type: "Full Time",
    tags: ["Stocks", "Research", "3+ Years"],
    views: "5.4K views",
    salary: "$4500/month",
  },
  {
    id: 7,
    title: "Payroll Specialist",
    company: "ADP",
    location: "Remote",
    experience: "1+ Years",
    type: "Full Time",
    tags: ["Payroll", "HR Finance", "1+ Years"],
    views: "2.3K views",
    salary: "$2800/month",
  },
  {
    id: 8,
    title: "Insurance Underwriter",
    company: "Allianz",
    location: "Hybrid",
    experience: "2+ Years",
    type: "Full Time",
    tags: ["Insurance", "Risk", "2+ Years"],
    views: "3.9K views",
    salary: "$3300/month",
  },
];
  

export default function FinanceJobDetail() {
  const { id } = useParams();
  const job = financeJobs.find((j) => j.id === Number(id));

  if (!job) {
    return <h2 className="p-6 text-red-500">Job not found</h2>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex justify-center">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg p-8">

        {/* Back */}
        <Link to="/finance-jobs" className="text-blue-600 hover:underline text-sm">
          ← Back to Finance Jobs
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
            <p className="font-bold text-blue-600">{job.salary}</p>
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
            We are hiring a skilled finance professional to analyze financial
            data, manage reports, and support strategic business decisions.
          </p>
        </div>

        {/* Requirements */}
        <div className="mt-5">
          <h2 className="text-lg font-semibold text-gray-800">
            Requirements
          </h2>
          <ul className="list-disc ml-5 text-gray-600 mt-2 space-y-1">
            <li>Strong analytical skills</li>
            <li>Knowledge of financial tools</li>
            <li>Excel / data handling experience</li>
            <li>Good communication skills</li>
          </ul>
        </div>

        {/* Buttons */}
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