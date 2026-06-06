import { Link } from "react-router-dom";

const fresherJobs = [
    {
        title: "Junior Frontend Developer",
        company: "Infosys",
        location: "Remote",
        tags: ["HTML", "CSS", "JavaScript"],
        views: "4.2K views",
        salary: "$1200/month",
    },
    {
        title: "Junior Backend Developer",
        company: "TCS",
        location: "Hybrid",
        tags: ["Node.js", "Express", "MongoDB"],
        views: "3.8K views",
        salary: "$1500/month",
    },
    {
        title: "Fresher Software Engineer",
        company: "Wipro",
        location: "Onsite",
        tags: ["Java", "OOP", "DSA"],
        views: "5.1K views",
        salary: "$1400/month",
    },
    {
        title: "Junior UI/UX Designer",
        company: "Adobe",
        location: "Remote",
        tags: ["Figma", "Design Basics", "Creativity"],
        views: "2.9K views",
        salary: "$1100/month",
    },
    {
        title: "Junior Data Analyst",
        company: "Accenture",
        location: "Hybrid",
        tags: ["Excel", "SQL", "Python"],
        views: "3.5K views",
        salary: "$1300/month",
    },
];

export default function FresherJobs() {
    return (
        <div className="p-6 space-y-4 bg-gray-100 min-h-screen">
            {fresherJobs.map((job, index) => (
                <div
                    key={index}
                    className="bg-white p-5 rounded-lg shadow flex justify-between items-start"
                >
                    {/* LEFT SIDE */}
                    <div>
                        <h2 className="text-lg font-semibold text-indigo-700">
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
                        <p className="text-indigo-600 font-semibold">
                            {job.salary}
                        </p>

                        <Link
                            to={`/fresher-job/${index}`}
                            className="mt-3 inline-block bg-indigo-600 text-white px-4 py-2 rounded text-sm hover:bg-indigo-700"
                        >
                            View Detail
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
}