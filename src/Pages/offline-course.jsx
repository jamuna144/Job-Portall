const offlineCourses = [
    {
        id: 1,
        title: "AutoCAD Training",
        location: "Kathmandu",
        duration: "2 Months",
        category: "Engineering",
        fee: "$90",
        rating: 4.5,
        students: "3,200+",
        description:
            "Learn professional AutoCAD design for engineering and architecture projects.",
        skills: ["2D Drawing", "3D Modeling", "Blueprint Design"],
    },
    {
        id: 2,
        title: "UI/UX Design Workshop",
        location: "Pokhara",
        duration: "1 Month",
        category: "Design",
        fee: "$70",
        rating: 4.6,
        students: "2,500+",
        description:
            "Hands-on UI/UX training with real-world design projects and tools.",
        skills: ["Figma", "Wireframing", "Prototyping"],
    },
    {
        id: 3,
        title: "Accounting Training",
        location: "Butwal",
        duration: "3 Months",
        category: "Finance",
        fee: "$100",
        rating: 4.4,
        students: "1,800+",
        description:
            "Learn basic to advanced accounting principles and financial management.",
        skills: ["Bookkeeping", "Tax Basics", "Excel Accounting"],
    },
    {
        id: 4,
        title: "Digital Marketing Bootcamp",
        location: "Lalitpur",
        duration: "2 Months",
        category: "Marketing",
        fee: "$80",
        rating: 4.7,
        students: "5,000+",
        description:
            "Master SEO, social media ads, and online marketing strategies.",
        skills: ["SEO", "Google Ads", "Social Media Marketing"],
    },
    {
        id: 5,
        title: "Networking & Hardware",
        location: "Bhaktapur",
        duration: "4 Months",
        category: "IT",
        fee: "$120",
        rating: 4.3,
        students: "2,200+",
        description:
            "Learn computer hardware, networking, and system setup skills.",
        skills: ["Networking", "Hardware Repair", "System Setup"],
    },
    {
        id: 6,
        title: "Graphic Design Masterclass",
        location: "Chitwan",
        duration: "2 Months",
        category: "Design",
        fee: "$85",
        rating: 4.6,
        students: "3,900+",
        description:
            "Create professional graphics, branding, and visual designs.",
        skills: ["Photoshop", "Illustrator", "Branding"],
    },
];

import { useParams } from "react-router-dom";

export default function OfflineCourseDetails() {
    const { id } = useParams();

    const course = offlineCourses.find((c) => c.id === parseInt(id));

    if (!course) {
        return (
            <div className="p-10 text-red-500 text-center">
                Course not found
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50 p-6">
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-lg">


                <h1 className="text-3xl font-bold text-indigo-600 mb-2">
                    {course.title}
                </h1>


                <p className="mb-3 text-gray-700">
                    <b>Category:</b> {course.category}
                </p>


                <p className="mb-5 text-gray-600 leading-7">
                    {course.description}
                </p>


                <div className="mb-6">
                    <h3 className="font-semibold mb-2">Skills You Will Learn:</h3>
                    <div className="flex flex-wrap gap-2">
                        {course.skills.map((skill, i) => (
                            <span
                                key={i}
                                className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>


                <p className="text-lg font-bold mb-6">
                    Fee: <span className="text-indigo-600">{course.fee}</span>
                </p>


                {/* <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-semibold">
                    Register Now
                </button> */}

                <button
                    onClick={() => alert("Registration Successful!")}
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-semibold"
                >
                    Register Now
                </button>
            </div>
        </div>
    );
}