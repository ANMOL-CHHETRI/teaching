import { motion } from "framer-motion";
import {
  FileText,
  Linkedin,
  Target,
  BrainCircuit,
  GitBranch,
  Globe,
  Cloud,
} from "lucide-react";
import CourseCard from "./CourseCard";

const courses = [
  {
    title: "Building Professional Resume & CV",
    description:
      "Craft a standout resume that highlights your skills, experience, and achievements to land your dream job.",
    icon: FileText,
    colorIndex: 1,
  },
  {
    title: "Building Your Business Network with LinkedIn",
    description:
      "Leverage LinkedIn to grow meaningful professional connections, enhance your visibility, and unlock opportunities.",
    icon: Linkedin,
    colorIndex: 2,
  },
  {
    title: "Developing Your Career Plan",
    description:
      "Create a strategic roadmap for your career growth with clear milestones, timelines, and actionable steps.",
    icon: Target,
    colorIndex: 3,
  },
  {
    title: "Professional Development Using SMART Goals",
    description:
      "Master the SMART framework to set Specific, Measurable, Achievable, Relevant, and Time-bound career goals.",
    icon: BrainCircuit,
    colorIndex: 4,
  },
  {
    title: "Git & GitHub",
    description:
      "Learn version control fundamentals, collaboration workflows, and open-source contribution with Git and GitHub.",
    icon: GitBranch,
    colorIndex: 5,
  },
  {
    title: "Domain Registration",
    description:
      "Understand how to choose, register, and manage your own domain name for personal branding or business.",
    icon: Globe,
    colorIndex: 6,
  },
  {
    title: "Cloudflare & Hosting",
    description:
      "Deploy and host your projects with Cloudflare, optimize performance, and secure your web applications.",
    icon: Cloud,
    colorIndex: 7,
  },
];

const CoursesSection = () => {
  return (
    <section className="relative py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Our Courses
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
            What You'll Learn
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Comprehensive courses designed to accelerate your professional growth and technical skills.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, i) => (
            <CourseCard key={course.title} {...course} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
