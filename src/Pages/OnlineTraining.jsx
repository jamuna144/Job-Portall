
import { useNavigate } from "react-router-dom";

const onlineCourses = [
    {
        id: 1,
        title: "Full Stack Web Development",
        duration: "3 Months",
        provider: "Tech Academy",
        level: "Intermediate",
    },
    {
        id: 2,
        title: "Python Programming",
        duration: "2 Months",
        provider: "Code School",
        level: "Beginner",
    },
    {
        id: 3,
        title: "Data Science",
        duration: "4 Months",
        provider: "Skill Hub",
        level: "Advanced",
    },
    {
        id: 4,
        title: "React JS Development",
        duration: "2.5 Months",
        provider: "Frontend Master",
        level: "Intermediate",
    },
    {
        id: 5,
        title: "UI/UX Design",
        duration: "3 Months",
        provider: "Design Pro",
        level: "Beginner",
    },
    {
        id: 6,
        title: "Cyber Security",
        duration: "5 Months",
        provider: "SecureTech",
        level: "Advanced",
    },
    {
        id: 7,
        title: "Cloud Computing",
        duration: "4 Months",
        provider: "AWS Academy",
        level: "Intermediate",
    },
    {
        id: 8,
        title: "Artificial Intelligence",
        duration: "6 Months",
        provider: "AI Institute",
        level: "Advanced",
    },
    {
        id: 9,
        title: "Digital Marketing",
        duration: "2 Months",
        provider: "Marketing Hub",
        level: "Beginner",
    },
];

export default function OnlineTraining() {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen bg-slate-50 py-12 px-6">
            <h1 className="text-4xl font-bold text-center text-slate-800 mb-10">
                Online Training Programs
            </h1>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {onlineCourses.map((course) => (
                    <div
                        key={course.id}
                        className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                    >
                        <span className="inline-block px-3 py-1 text-sm font-medium bg-indigo-100 text-indigo-700 rounded-full mb-4">
                            {course.level}
                        </span>

                        <h2 className="text-xl font-bold text-slate-800 mb-3">
                            {course.title}
                        </h2>

                        <p className="text-slate-500 mb-2">
                            Duration: {course.duration}
                        </p>

                        <p className="text-slate-500 mb-5">
                            Provider: {course.provider}
                        </p>

                        <button
                            onClick={() => navigate(`/course/${course.id}`)}
                            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-semibold transition"
                        >
                            Enroll Now
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}