import { useParams, Link } from "react-router-dom";

const internshipJobs = [
  {
    title: "Frontend Developer Intern",
    company: "Google",
    salary: "$800/month",
    location: "Remote",
    experience: "Fresher / Student",
    type: "Internship",
    tags: ["React", "JavaScript", "HTML/CSS"],
  },
  {
    title: "Backend Developer Intern",
    company: "Microsoft",
    salary: "$900/month",
    location: "Hybrid",
    experience: "Fresher / Student",
    type: "Internship",
    tags: ["Node.js", "Express", "MongoDB"],
  },
  {
    title: "UI/UX Design Intern",
    company: "Adobe",
    salary: "$700/month",
    location: "Remote",
    experience: "Fresher / Student",
    type: "Internship",
    tags: ["Figma", "Design"],
  },
  {
    title: "Data Analyst Intern",
    company: "Amazon",
    salary: "$850/month",
    location: "Remote",
    experience: "Fresher / Student",
    type: "Internship",
    tags: ["SQL", "Python", "Excel"],
  },
  {
    title: "Marketing Intern",
    company: "Meta",
    salary: "$750/month",
    location: "Hybrid",
    experience: "Fresher / Student",
    type: "Internship",
    tags: ["SEO", "Ads", "Content"],
  },
];

export default function InternshipJobDetail() {
  const { id } = useParams();
  const job = internshipJobs[Number(id)];

  if (!job) {
    return <h2 className="p-6 text-red-500">Job not found</h2>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex justify-center">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg p-8">

        <Link to="/internship-jobs" className="text-teal-600 hover:underline text-sm">
          ← Back to Internship Jobs
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
                className="text-xs bg-teal-100 text-teal-700 px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

    
        <div className="grid grid-cols-3 gap-4 mt-6">
          <div className="bg-gray-50 p-4 rounded-lg text-center">
            <p className="text-xs text-gray-500">Stipend</p>
            <p className="font-bold text-teal-600">{job.salary}</p>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg text-center">
            <p className="text-xs text-gray-500">Eligibility</p>
            <p className="font-bold text-gray-800">{job.experience}</p>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg text-center">
            <p className="text-xs text-gray-500">Type</p>
            <p className="font-bold text-gray-800">{job.type}</p>
          </div>
        </div>

        <div className="mt-6">
          <h2 className="text-lg font-semibold text-gray-800">
            Internship Description
          </h2>

          <p className="text-gray-600 mt-2 leading-relaxed">
            This internship is designed for students and freshers to gain real-world
            experience by working on live projects with industry professionals.
          </p>
        </div>

     
        <div className="mt-5">
          <h2 className="text-lg font-semibold text-gray-800">
            Requirements
          </h2>

          <ul className="list-disc ml-5 text-gray-600 mt-2 space-y-1">
            <li>Basic knowledge of relevant field</li>
            <li>Willingness to learn</li>
            <li>Good communication skills</li>
            <li>Team collaboration mindset</li>
          </ul>
        </div>

        
        <div className="mt-8 flex gap-3">
          <button className="bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition">
            Apply Now
          </button>

          <button className="bg-gray-200 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-300 transition">
            Save Internship
          </button>
        </div>

      </div>
    </div>
  );
}