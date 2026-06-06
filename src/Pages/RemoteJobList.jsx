import { Link } from "react-router-dom";

const remoteJobs = [
    {
        title: "Remote Full Stack Developer",
        company: "GitHub",
        location: "Remote",
        tags: ["MERN", "Remote", "3+ Years"],
        views: "4.2K views",
        salary: "$3500/month",
    },
    {
        title: "Remote Frontend Developer",
        company: "Shopify",
        location: "Remote",
        tags: ["React", "UI/UX", "2+ Years"],
        views: "5.8K views",
        salary: "$4200/month",
    },
    {
        title: "Remote Backend Developer",
        company: "AWS",
        location: "Remote",
        tags: ["Node.js", "API", "3+ Years"],
        views: "3.9K views",
        salary: "$4500/month",
    },
    {
        title: "Remote DevOps Engineer",
        company: "Netflix",
        location: "Remote",
        tags: ["AWS", "CI/CD", "3+ Years"],
        views: "6.5K views",
        salary: "$5500/month",
    },
    {
        title: "Remote Data Analyst",
        company: "Google",
        location: "Remote",
        tags: ["SQL", "Python", "2+ Years"],
        views: "4.0K views",
        salary: "$3800/month",
    },
];

export default function RemoteJobList() {
    return (
        <div className="p-6 space-y-4 bg-gray-100 min-h-screen">
            {remoteJobs.map((job, index) => (
                <div
                    key={index}
                    className="bg-white p-5 rounded-lg shadow flex justify-between items-start"
                >
                    {/* LEFT SIDE */}
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

                        <p className="text-xs text-gray-500 mt-2">
                            {job.views}
                        </p>
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="text-right">
                        <p className="text-purple-600 font-semibold">
                            {job.salary}
                        </p>

                        <Link
                            to={`/remote-job/${index}`}
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