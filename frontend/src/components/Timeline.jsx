// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaGraduationCap, FaBriefcase, FaCalendarAlt } from "react-icons/fa";

const timeline = [
  {
    title: "Bachelor of Science in Computer Science",
    date: "2021 – 2025",
    description:
      "Graduated Magna Cum Laude at BPSU. 1st Runner-up in DICT Startup Challenge (Regional) and Best Thesis Awardee in Computer Science.",
    icon: FaGraduationCap,
    color: "bg-purple-500",
  },
  {
    title: "IT Student Trainee",
    date: "Sept 2024 – Oct 2024",
    description:
      "Intern at Sumi Philippines Wiring Systems Corp. Led intern team, built Material Release Log, and developed Meeting Logging Web App.",
    icon: FaBriefcase,
    color: "bg-blue-500",
  },
  {
    title: "Junior Full Stack Developer",
    date: "Sept 2025 – Present",
    description:
      "Working at Kloudtech Corp as a Junior Full Stack Developer, building and maintaining modern web applications.",
    icon: FaBriefcase,
    color: "bg-emerald-500",
  },
];

const FadingTimelineCard = ({ opacity, delay, label = "Future Possibilities", description = "More milestones, opportunities, and growth ahead..." }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="relative mb-8 sm:mb-12"
    >
      <div className="bg-[var(--color-surface)] rounded-2xl p-4 sm:p-6 shadow-sm border-2 border-dashed border-[var(--color-border)] opacity-80">
        <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
          <div className="bg-gray-300 p-2 sm:p-3 rounded-lg shadow-sm flex-shrink-0">
            <FaBriefcase className="w-5 h-5 sm:w-6 sm:h-6 text-white/80" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg sm:text-xl font-bold text-[var(--color-foreground)]/70 italic">
              {label}
            </h3>
            <div className="flex items-center gap-2 text-xs sm:text-sm text-[var(--color-muted)]/70 mt-1">
              <FaCalendarAlt className="w-3 h-3" />
              <span className="font-medium">TBD</span>
            </div>
          </div>
        </div>
        <p className="text-sm sm:text-base text-[var(--color-muted)]/70 italic">
          {description}
        </p>
      </div>
    </motion.div>
  );
};


export default function Timeline() {
  return (
    <section className="max-w-3xl mx-auto px-4 mb-16 sm:mb-24 pb-12">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10 sm:mb-16 text-[var(--color-foreground)]"
      >
        The Road So Far
      </motion.h2>

      <div className="relative">
        {/* Vertical line with gradient fade */}
        <div className="absolute left-4 sm:left-5 top-0 w-0.5 sm:w-1 h-full bg-gradient-to-b from-[var(--color-border)] via-[var(--color-border)] to-transparent opacity-60"></div>

        {timeline.map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="relative mb-8 sm:mb-12"
            >
              <div className="bg-[var(--color-surface)] rounded-2xl p-4 sm:p-6 shadow-lg border border-[var(--color-border)] hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div
                    className={`${item.color} p-2 sm:p-3 rounded-lg shadow-md flex-shrink-0`}
                  >
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-bold text-[var(--color-foreground)]">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-[var(--color-muted)] mt-1">
                      <FaCalendarAlt className="w-3 h-3" />
                      <span className="font-medium">{item.date}</span>
                    </div>
                  </div>
                </div>
                <p className="text-sm sm:text-base text-[var(--color-muted)] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          );
        })}

        
        {/* Future fading cards */}
        {/* <FadingTimelineCard opacity={0.7} delay={timeline.length * 0.2} /> */}
        <FadingTimelineCard opacity={0.4} delay={(timeline.length ) * 0.2} />

      </div>
    </section>
  );
}
