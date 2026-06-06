import { Link } from "react-router-dom";

const internshipJobs = [
  {
    title: "Frontend Developer Intern",
    company: "Google",
    location: "Remote",
    tags: ["React", "JavaScript", "HTML/CSS"],
    views: "7.2K views",
    salary: "$800/month",
  },
  {
    title: "Backend Developer Intern",
    company: "Microsoft",
    location: "Hybrid",
    tags: ["Node.js", "Express", "MongoDB"],
    views: "6.1K views",
    salary: "$900/month",
  },
  {
    title: "UI/UX Design Intern",
    company: "Adobe",
    location: "Remote",
    tags: ["Figma", "Design", "Creativity"],
    views: "5.4K views",
    salary: "$700/month",
  },
  {
    title: "Data Analyst Intern",
    company: "Amazon",
    location: "Remote",
    tags: ["SQL", "Python", "Excel"],
    views: "8.0K views",
    salary: "$850/month",
  },
  {
    title: "Marketing Intern",
    company: "Meta",
    location: "Hybrid",
    tags: ["SEO", "Ads", "Content"],
    views: "6.7K views",
    salary: "$750/month",
  },
];

export default function InternshipJobList() {
  return (
    <div className="p-6 space-y-4 bg-gray-100 min-h-screen">
      {internshipJobs.map((job, index) => (
        <div
          key={index}
          className="bg-white p-5 rounded-lg shadow flex justify-between items-start"
        >
          
          <div>
            <h2 className="text-lg font-semibold text-teal-700">
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
            <p className="text-teal-600 font-semibold">{job.salary}</p>

            <Link
              to={`/internship-job/${index}`}
              className="mt-3 inline-block bg-teal-600 text-white px-4 py-2 rounded text-sm hover:bg-teal-700"
            >
              View Detail
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}