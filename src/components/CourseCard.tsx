import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface CourseCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  colorIndex: number;
  index: number;
}

const colorClasses: Record<number, string> = {
  1: "bg-course-1",
  2: "bg-course-2",
  3: "bg-course-3",
  4: "bg-course-4",
  5: "bg-course-5",
  6: "bg-course-6",
  7: "bg-course-7",
};

const CourseCard = ({ title, description, icon: Icon, colorIndex, index }: CourseCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -6, scale: 1.02 }}
      className="group relative rounded-2xl bg-card border border-border p-6 shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden"
    >
      <div
        className={`absolute top-0 left-0 w-full h-1 ${colorClasses[colorIndex]}`}
      />
      <div
        className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${colorClasses[colorIndex]} mb-4`}
      >
        <Icon className="w-6 h-6 text-primary-foreground" />
      </div>
      <h3 className="font-display text-lg font-semibold text-card-foreground mb-2 leading-tight">
        {title}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
};

export default CourseCard;
