import { Link } from "react-router-dom";

const engineerJobs = [
    {
        id: 0,
        title: "Frontend Engineer",
        company: "Google",
        salary: "$5000/month",
        location: "Remote",
        experience: "2+ Years",
        type: "Full Time",
        tags: ["React", "JavaScript", "UI/UX"],
    },
    {
        id: 1,
        title: "Backend Engineer",
        company: "Amazon",
        salary: "$5500/month",
        location: "Onsite",
        experience: "3+ Years",
        type: "Full Time",
        tags: ["Node.js", "APIs", "Databases"],
    },
    {
        id: 2,
        title: "Full Stack Engineer",
        company: "Microsoft",
        salary: "$6000/month",
        location: "Hybrid",
        experience: "3+ Years",
        type: "Full Time",
        tags: ["MERN", "System Design", "Cloud"],
    },
    {
        id: 3,
        title: "DevOps Engineer",
        company: "Netflix",
        salary: "$6500/month",
        location: "Remote",
        experience: "3+ Years",
        type: "Full Time",
        tags: ["AWS", "Docker", "CI/CD"],
    },
    {
        id: 4,
        title: "Software Engineer",
        company: "Meta",
        salary: "$7000/month",
        location: "Onsite",
        experience: "2+ Years",
        type: "Full Time",
        tags: ["Algorithms", "Data Structures", "Java"],
    },
    {
        id: 5,
        title: "Mobile App Engineer",
        company: "Uber",
        salary: "$4800/month",
        location: "Hybrid",
        experience: "2+ Years",
        type: "Full Time",
        tags: ["React Native", "Flutter", "iOS"],
    },
    {
        id: 6,
        title: "AI Engineer",
        company: "OpenAI",
        salary: "$8000/month",
        location: "Remote",
        experience: "3+ Years",
        type: "Full Time",
        tags: ["Machine Learning", "Python", "AI Models"],
    },
    {
        id: 7,
        title: "Cloud Engineer",
        company: "AWS",
        salary: "$7500/month",
        location: "Remote",
        experience: "3+ Years",
        type: "Full Time",
        tags: ["AWS", "Cloud Computing", "DevOps"],
    },
];

export default function JobList() {
    return (
        <div className="p-6 space-y-4 bg-gray-100 min-h-screen">
            {engineerJobs.map((job, index) => (
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

                        <Link to={`/engineer-job/${job.id}`}
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