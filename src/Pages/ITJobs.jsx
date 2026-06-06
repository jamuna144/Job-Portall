
import { Link } from "react-router-dom";

const jobs = [
    {
        title: "Full Stack Developer",
        company: "Amazon",
        location: "Remote",
        tags: ["MERN", "Remote", "3+ Years"],
        views: "3.2K views",
        salary: "$3000/month",
    },
    {
        title: "Frontend Developer",
        company: "Google",
        location: "Hybrid",
        tags: ["React", "UI/UX", "2+ Years"],
        views: "5.1K views",
        salary: "$4000/month",
    },
    {
        title: "Backend Developer",
        company: "Microsoft",
        location: "Remote",
        tags: ["Node.js", "API", "3+ Years"],
        views: "2.8K views",
        salary: "$3500/month",
    },
    {
        title: "UI/UX Designer",
        company: "Figma",
        location: "Remote",
        tags: ["Figma", "Design", "1+ Years"],
        views: "4.0K views",
        salary: "$2800/month",
    },
    {
        title: "Mobile App Developer",
        company: "Uber",
        location: "Hybrid",
        tags: ["Flutter", "Android", "2+ Years"],
        views: "3.7K views",
        salary: "$3200/month",
    },
    {
        title: "DevOps Engineer",
        company: "Netflix",
        location: "Remote",
        tags: ["AWS", "CI/CD", "3+ Years"],
        views: "6.1K views",
        salary: "$5000/month",
    },
    {
        title: "Data Analyst",
        company: "Tesla",
        location: "Onsite",
        tags: ["SQL", "Python", "2+ Years"],
        views: "2.2K views",
        salary: "$3800/month",
    },
    {
        title: "Cybersecurity Engineer",
        company: "Cisco",
        location: "Remote",
        tags: ["Security", "Networks", "3+ Years"],
        views: "4.5K views",
        salary: "$4500/month",
    },
    {
        title: "Machine Learning Engineer",
        company: "OpenAI",
        location: "Remote",
        tags: ["AI", "Python", "3+ Years"],
        views: "8.0K views",
        salary: "$6000/month",
    },
    {
        title: "WordPress Developer",
        company: "Freelance",
        location: "Remote",
        tags: ["WordPress", "PHP", "1+ Years"],
        views: "1.9K views",
        salary: "$1500/month",
    },
];

export default function JobList() {
    return (
        <div className="p-6 space-y-4 bg-gray-100 min-h-screen">
            {jobs.map((job, index) => (
                <div
                    key={index}
                    className="bg-white p-5 rounded-lg shadow flex justify-between items-start"
                >

                    <div>
                        <h2 className="text-lg font-semibold text-blue-700">
                            {job.title}
                        </h2>

                        <p className="text-sm text-black">
                            {job.company} • {job.location}
                        </p>
                        
                        {/* <Link
                            to={`/it-job/${index}`}
                            className="mt-3 inline-block bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700"
                        >
                            View Detail
                        </Link> */}

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

                        <p className="text-xs block-auto mt-2">{job.views}</p>
                    </div>


                    <div className="text-right">
                        <p className="text-blue-600 font-semibold">{job.salary}</p>

                        <Link
                            Link to={`/it-job/${index}`}
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