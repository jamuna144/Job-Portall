const onlineCourses = [
  {
    id: 1,
    title: "Full Stack Web Development",
    duration: "3 Months",
    provider: "Tech Academy",
    level: "Intermediate",
    fee: "$120",
    rating: 4.8,
    students: "12,500+",
    description:
      "Learn frontend + backend development and build real-world web applications.",
    skills: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
  },
  {
    id: 2,
    title: "Python Programming",
    duration: "2 Months",
    provider: "Code School",
    level: "Beginner",
    fee: "$80",
    rating: 4.6,
    students: "9,200+",
    description:
      "Master Python from basics to advanced programming concepts.",
    skills: ["Python", "OOP", "Functions", "Projects"],
  },
  {
    id: 3,
    title: "Data Science",
    duration: "4 Months",
    provider: "Skill Hub",
    level: "Advanced",
    fee: "$150",
    rating: 4.7,
    students: "10,000+",
    description:
      "Learn data analysis, visualization, and machine learning with Python.",
    skills: ["Python", "Pandas", "NumPy", "ML", "Data Visualization"],
  },
  {
    id: 4,
    title: "React JS Development",
    duration: "2.5 Months",
    provider: "Frontend Master",
    level: "Intermediate",
    fee: "$110",
    rating: 4.7,
    students: "8,500+",
    description:
      "Build modern frontend applications using React JS and hooks.",
    skills: ["React", "Hooks", "JSX", "Router"],
  },
  {
    id: 5,
    title: "UI/UX Design",
    duration: "3 Months",
    provider: "Design Pro",
    level: "Beginner",
    fee: "$70",
    rating: 4.5,
    students: "6,200+",
    description:
      "Design beautiful and user-friendly mobile and web interfaces.",
    skills: ["Figma", "Wireframing", "Prototyping", "UX Research"],
  },
  {
    id: 6,
    title: "Cyber Security",
    duration: "5 Months",
    provider: "SecureTech",
    level: "Advanced",
    fee: "$180",
    rating: 4.6,
    students: "4,800+",
    description:
      "Learn ethical hacking and protect systems from cyber threats.",
    skills: ["Networking", "Ethical Hacking", "Encryption", "Security"],
  },
  {
    id: 7,
    title: "Cloud Computing",
    duration: "4 Months",
    provider: "AWS Academy",
    level: "Intermediate",
    fee: "$140",
    rating: 4.7,
    students: "7,300+",
    description:
      "Deploy and manage applications using AWS, Azure, and cloud tools.",
    skills: ["AWS", "Azure", "Deployment", "Servers"],
  },
  {
    id: 8,
    title: "Artificial Intelligence",
    duration: "6 Months",
    provider: "AI Institute",
    level: "Advanced",
    fee: "$200",
    rating: 4.9,
    students: "5,500+",
    description:
      "Build intelligent systems using machine learning and deep learning.",
    skills: ["AI", "ML", "Neural Networks", "Python"],
  },
  {
    id: 9,
    title: "Digital Marketing",
    duration: "2 Months",
    provider: "Marketing Hub",
    level: "Beginner",
    fee: "$60",
    rating: 4.4,
    students: "11,000+",
    description:
      "Learn SEO, social media marketing, and online branding strategies.",
    skills: ["SEO", "Ads", "Social Media", "Content Marketing"],
  },
];

import { useParams } from "react-router-dom";

export default function CourseDetails() {
  const { id } = useParams();

  const course = onlineCourses.find((c) => c.id === parseInt(id));

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

        {/* Title */}
        <h1 className="text-3xl font-bold text-indigo-600 mb-2">
          {course.title}
        </h1>

        {/* Stats
        <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-5">
          <p>⭐ {course.rating}</p>
          <p>👨‍🎓 {course.students}</p>
          <p>⏳ {course.duration}</p>
          <p>📊 {course.level}</p>
        </div> */}


        <p className="mb-3 text-gray-700">
          <b>Provider:</b> {course.provider}
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
        <button
          onClick={() => alert("Enrollment Successful!")}
          className="bg-indigo-600 text-white px-4 py-2 rounded"
        >
          Enroll Now
        </button>
      </div>
    </div>
  );
}