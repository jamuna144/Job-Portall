import { useParams, Link } from "react-router-dom";

const freelanceJobs = [
  {
    title: "React Website Developer",
    company: "Freelance Client",
    salary: "$1200/project",
    location: "Remote",
    experience: "1+ Years",
    type: "Freelance",
    tags: ["React", "Tailwind", "Frontend"],
  },
  {
    title: "WordPress Developer",
    company: "Startup Client",
    salary: "$800/project",
    location: "Remote",
    experience: "1+ Years",
    type: "Freelance",
    tags: ["WordPress", "PHP", "CMS"],
  },
  {
    title: "UI/UX Designer",
    company: "Agency Work",
    salary: "$1000/project",
    location: "Remote",
    experience: "1+ Years",
    type: "Freelance",
    tags: ["Figma", "Design"],
  },
  {
    title: "Mobile App Developer",
    company: "Freelance Client",
    salary: "$1500/project",
    location: "Remote",
    experience: "2+ Years",
    type: "Freelance",
    tags: ["Flutter", "Android", "iOS"],
  },
  {
    title: "SEO Specialist",
    company: "Blog Owner",
    salary: "$600/project",
    location: "Remote",
    experience: "1+ Years",
    type: "Freelance",
    tags: ["SEO", "Content", "Ranking"],
  },
];

export default function FreelanceJobDetail() {
  const { id } = useParams();
  const job = freelanceJobs[Number(id)];

  if (!job) {
    return <h2 className="p-6 text-red-500">Job not found</h2>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex justify-center">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg p-8">

        {/* Back */}
        <Link to="/freelance-jobs" className="text-purple-600 hover:underline text-sm">
          ← Back to Freelance Jobs
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
                className="text-xs bg-purple-100 text-purple-700 px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Info */}
        <div className="grid grid-cols-3 gap-4 mt-6">
          <div className="bg-gray-50 p-4 rounded-lg text-center">
            <p className="text-xs text-gray-500">Budget</p>
            <p className="font-bold text-purple-600">{job.salary}</p>
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
            Project Description
          </h2>

          <p className="text-gray-600 mt-2 leading-relaxed">
            This freelance opportunity allows you to work with clients worldwide,
            build real projects, and earn per project basis with flexible timing.
          </p>
        </div>

        {/* Requirements */}
        <div className="mt-5">
          <h2 className="text-lg font-semibold text-gray-800">
            Requirements
          </h2>

          <ul className="list-disc ml-5 text-gray-600 mt-2 space-y-1">
            <li>Strong practical skills</li>
            <li>Portfolio or past work preferred</li>
            <li>Ability to work independently</li>
            <li>Good communication with clients</li>
          </ul>
        </div>

        {/* Buttons */}
        <div className="mt-8 flex gap-3">
          <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition">
            Apply Now
          </button>

          <button className="bg-gray-200 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-300 transition">
            Save Project
          </button>
        </div>

      </div>
    </div>
  );
}