import { useParams, Link } from "react-router-dom";

const bankingJobs = [
  {
    title: "Bank Clerk",
    company: "Nepal Bank",
    salary: "Rs. 35,000/month",
    location: "Onsite",
    experience: "Fresher",
    type: "Full Time",
    tags: ["Accounting", "Excel", "Finance"],
  },
  {
    title: "Relationship Manager",
    company: "HDFC Bank",
    salary: "Rs. 60,000/month",
    location: "Hybrid",
    experience: "2+ Years",
    type: "Full Time",
    tags: ["Sales", "Communication"],
  },
  {
    title: "Loan Officer",
    company: "SBI Bank",
    salary: "Rs. 50,000/month",
    location: "Onsite",
    experience: "2+ Years",
    type: "Full Time",
    tags: ["Loans", "Credit Analysis"],
  },
  {
    title: "Bank Teller",
    company: "Global IME Bank",
    salary: "Rs. 30,000/month",
    location: "Onsite",
    experience: "Fresher",
    type: "Full Time",
    tags: ["Cash Handling", "Customer Service"],
  },
  {
    title: "Finance Analyst",
    company: "Standard Chartered",
    salary: "Rs. 75,000/month",
    location: "Hybrid",
    experience: "3+ Years",
    type: "Full Time",
    tags: ["Excel", "Analysis"],
  },
];

export default function BankingJobDetail() {
  const { id } = useParams();
  const job = bankingJobs[Number(id)];

  if (!job) {
    return <h2 className="p-6 text-red-500">Job not found</h2>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex justify-center">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg p-8">

       
        <Link to="/banking-jobs" className="text-yellow-600 hover:underline text-sm">
          ← Back to Banking Jobs
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
                className="text-xs bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        
        <div className="grid grid-cols-3 gap-4 mt-6">
          <div className="bg-gray-50 p-4 rounded-lg text-center">
            <p className="text-xs text-gray-500">Salary</p>
            <p className="font-bold text-yellow-600">{job.salary}</p>
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
            We are hiring banking professionals to manage financial operations,
            assist customers, handle transactions, and support loan and credit services.
          </p>
        </div>

     
        <div className="mt-5">
          <h2 className="text-lg font-semibold text-gray-800">
            Requirements
          </h2>

          <ul className="list-disc ml-5 text-gray-600 mt-2 space-y-1">
            <li>Basic finance knowledge</li>
            <li>Good communication skills</li>
            <li>Customer handling ability</li>
            <li>Attention to detail</li>
          </ul>
        </div>

       
        <div className="mt-8 flex gap-3">
          <button className="bg-yellow-600 text-white px-6 py-3 rounded-lg hover:bg-yellow-700 transition">
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