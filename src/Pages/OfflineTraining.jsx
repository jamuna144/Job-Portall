import { useNavigate } from "react-router-dom";

const offlineCourses = [
    {
        id: 1,
        title: "AutoCAD Training",
        location: "Kathmandu",
        duration: "2 Months",
        category: "Engineering",
    },
    {
        id: 2,
        title: "UI/UX Design Workshop",
        location: "Pokhara",
        duration: "1 Month",
        category: "Design",
    },
    {
        id: 3,
        title: "Accounting Training",
        location: "Butwal",
        duration: "3 Months",
        category: "Finance",
    },
    {
        id: 4,
        title: "Digital Marketing Bootcamp",
        location: "Lalitpur",
        duration: "2 Months",
        category: "Marketing",
    },
    {
        id: 5,
        title: "Networking & Hardware",
        location: "Bhaktapur",
        duration: "4 Months",
        category: "IT",
    },
    {
        id: 6,
        title: "Graphic Design Masterclass",
        location: "Chitwan",
        duration: "2 Months",
        category: "Design",
    },
];

export default function OfflineTraining() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-slate-50 py-12 px-6">
            <h1 className="text-4xl font-bold text-center text-slate-800 mb-10">
                Offline Training Programs
            </h1>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {offlineCourses.map((course) => (
                    <div
                        key={course.id}
                        className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                    >
                        <span className="inline-block px-3 py-1 text-sm font-medium bg-indigo-100 text-indigo-700 rounded-full mb-4">
                            {course.category}
                        </span>

                        <h2 className="text-xl font-bold text-slate-800 mb-4">
                            {course.title}
                        </h2>

                        <div className="space-y-2 text-slate-600">
                            <p>📍 Location: {course.location}</p>
                            <p>⏳ Duration: {course.duration}</p>
                        </div>

                        <button
                            onClick={() =>
                                navigate(`/offline-course/${course.id}`)
                            }
                            className="w-full mt-6 bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-semibold transition"
                        >
                            Register Now
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}