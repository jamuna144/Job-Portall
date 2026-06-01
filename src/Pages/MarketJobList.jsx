import { Link } from "react-router-dom";

const marketJobs = [
    {
        title: "Marketing Manager",
        company: "Unilever",
        location: "Remote",
        tags: ["SEO", "Strategy", "5+ Years"],
        views: "3.5K views",
        salary: "$4500/month",
    },
    {
        title: "Digital Marketing Specialist",
        company: "Meta",
        location: "Hybrid",
        tags: ["Facebook Ads", "Google Ads", "2+ Years"],
        views: "6.2K views",
        salary: "$4000/month",
    },
    {
        title: "SEO Analyst",
        company: "HubSpot",
        location: "Remote",
        tags: ["SEO", "Content", "2+ Years"],
        views: "4.1K views",
        salary: "$3200/month",
    },
    {
        title: "Social Media Manager",
        company: "TikTok",
        location: "Remote",
        tags: ["Content", "Branding", "3+ Years"],
        views: "5.0K views",
        salary: "$3800/month",
    },
    {
        title: "Content Strategist",
        company: "Adobe",
        location: "Hybrid",
        tags: ["Writing", "Planning", "3+ Years"],
        views: "2.9K views",
        salary: "$3500/month",
    },
    {
        title: "Brand Manager",
        company: "Nike",
        location: "Onsite",
        tags: ["Branding", "Marketing", "4+ Years"],
        views: "4.8K views",
        salary: "$5000/month",
    },
    {
        title: "Email Marketing Specialist",
        company: "Shopify",
        location: "Remote",
        tags: ["Email", "CRM", "2+ Years"],
        views: "3.3K views",
        salary: "$3100/month",
    },
    {
        title: "Growth Marketer",
        company: "Airbnb",
        location: "Remote",
        tags: ["Growth", "Analytics", "3+ Years"],
        views: "7.1K views",
        salary: "$5200/month",
    },
];

export default function MarketJobList() {
    return (
        <div className="p-6 space-y-4 bg-gray-100 min-h-screen">
            {marketJobs.map((job, index) => (
                <div
                    key={index}
                    className="bg-white p-5 rounded-lg shadow flex justify-between items-start"
                >
                    <div>
                        <h2 className="text-lg font-semibold text-green-700">
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
                        <p className="text-green-600 font-semibold">
                            {job.salary}
                        </p>

                        <Link
                            to={`/market-job/${index}`}
                            className="mt-3 inline-block bg-green-600 text-white px-4 py-2 rounded text-sm hover:bg-green-700"
                        >
                            View Detail
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
}