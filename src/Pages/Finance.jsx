import { Link } from "react-router-dom";

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
    id: 0,
    title: "Financial Advisor",
    company: "Morgan Stanley",
    location: "Remote",
    experience: "3+ Years",
    type: "Full Time",
    tags: ["Wealth Management", "Planning", "3+ Years"],
    views: "5.0K views",
    salary: "$4000/month",
  },
  {
    id: 1,
    title: "Risk Analyst",
    company: "HSBC",
    location: "Hybrid",
    experience: "2+ Years",
    type: "Full Time",
    tags: ["Risk", "Data Analysis", "2+ Years"],
    views: "3.8K views",
    salary: "$3800/month",
  },
  {
    id: 2,
    title: "Tax Consultant",
    company: "EY",
    location: "Onsite",
    experience: "3+ Years",
    type: "Full Time",
    tags: ["Taxation", "Law", "3+ Years"],
    views: "2.9K views",
    salary: "$3600/month",
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

export default function JobList() {
    return (
        <div className="p-6 space-y-4 bg-gray-100 min-h-screen">
            {financeJobs.map((job, index) => (
                <div
                    key={index}
                    className="bg-white p-5 rounded-lg shadow flex justify-between items-start"
                >
                    <div>
                        <h2 className="text-lg font-semibold text-blue-700">
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

                        <p className="text-xs text-gray-500 mt-2">
                            {job.views}
                        </p>
                    </div>

                    <div className="text-right">
                        <p className="text-blue-600 font-semibold">
                            {job.salary}
                        </p>

                       <Link to={`/finance-job/${job.id}`}
                            className="mt-3 inline-block bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700"
                        >
                            View Detail
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
}