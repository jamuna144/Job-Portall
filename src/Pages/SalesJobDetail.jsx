import { useParams, Link } from "react-router-dom";

const salesJobs = [
  {
    title: "Sales Executive",
    company: "Samsung",
    salary: "$2000/month",
    location: "Onsite",
    experience: "1+ Year",
    type: "Full Time",
    tags: ["Communication", "Negotiation", "Sales"],
  },
  {
    title: "Business Development Manager",
    company: "Deloitte",
    salary: "$4500/month",
    location: "Hybrid",
    experience: "3+ Years",
    type: "Full Time",
    tags: ["B2B", "Strategy", "CRM"],
  },
  {
    title: "Retail Sales Associate",
    company: "Nike",
    salary: "$1500/month",
    location: "Onsite",
    experience: "Fresher",
    type: "Full Time",
    tags: ["Customer Service", "Sales"],
  },
  {
    title: "Account Manager",
    company: "Salesforce",
    salary: "$3800/month",
    location: "Remote",
    experience: "2+ Years",
    type: "Full Time",
    tags: ["CRM", "Client Handling"],
  },
];

export default function SalesJobDetail() {
  const { id } = useParams();
  const job = salesJobs[Number(id)];

  if (!job) {
    return <h2 className="p-6 text-red-500">Job not found</h2>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex justify-center">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg p-8">

     
        <Link to="/sales-jobs" className="text-orange-600 hover:underline text-sm">
          ← Back to Sales Jobs
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
                className="text-xs bg-orange-100 text-orange-700 px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

       
        <div className="grid grid-cols-3 gap-4 mt-6">
          <div className="bg-gray-50 p-4 rounded-lg text-center">
            <p className="text-xs text-gray-500">Salary</p>
            <p className="font-bold text-orange-600">{job.salary}</p>
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
            We are looking for a motivated sales professional to generate leads,
            build client relationships, and achieve sales targets in a competitive market.
          </p>
        </div>

     
        <div className="mt-5">
          <h2 className="text-lg font-semibold text-gray-800">
            Requirements
          </h2>

          <ul className="list-disc ml-5 text-gray-600 mt-2 space-y-1">
            <li>Strong communication skills</li>
            <li>Sales or marketing experience</li>
            <li>Negotiation ability</li>
            <li>Target-driven mindset</li>
          </ul>
        </div>


        <div className="mt-8 flex gap-3">
          <button className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition">
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