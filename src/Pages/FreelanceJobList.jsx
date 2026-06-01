import { Link } from "react-router-dom";

const freelanceJobs = [
  {
    title: "React Website Developer",
    company: "Freelance Client",
    location: "Remote",
    tags: ["React", "Tailwind", "Frontend"],
    views: "6.5K views",
    salary: "$1200/project",
  },
  {
    title: "WordPress Developer",
    company: "Startup Client",
    location: "Remote",
    tags: ["WordPress", "PHP", "CMS"],
    views: "5.2K views",
    salary: "$800/project",
  },
  {
    title: "UI/UX Designer",
    company: "Agency Work",
    location: "Remote",
    tags: ["Figma", "Design", "Prototyping"],
    views: "7.1K views",
    salary: "$1000/project",
  },
  {
    title: "Mobile App Developer",
    company: "Freelance Client",
    location: "Remote",
    tags: ["Flutter", "Android", "iOS"],
    views: "8.0K views",
    salary: "$1500/project",
  },
  {
    title: "SEO Specialist",
    company: "Blog Owner",
    location: "Remote",
    tags: ["SEO", "Content", "Ranking"],
    views: "4.8K views",
    salary: "$600/project",
  },
];

export default function FreelanceJobList() {
  return (
    <div className="p-6 space-y-4 bg-gray-100 min-h-screen">
      {freelanceJobs.map((job, index) => (
        <div
          key={index}
          className="bg-white p-5 rounded-lg shadow flex justify-between items-start"
        >
          {/* LEFT */}
          <div>
            <h2 className="text-lg font-semibold text-purple-700">
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
            <p className="text-purple-600 font-semibold">
              {job.salary}
            </p>

            <Link
              to={`/freelance-job/${index}`}
              className="mt-3 inline-block bg-purple-600 text-white px-4 py-2 rounded text-sm hover:bg-purple-700"
            >
              View Detail
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}