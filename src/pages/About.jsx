import { motion } from "framer-motion";
import { transition1 } from "../transitions";

const About = () => {

  const experiences = [
    {
      title: "Software Engineer",
      company: "Resulticks Edge Solution Technologies",
      period: "April 2024 – Present",
      location: "Chennai, India",
      description: "Architected and developed custom Web SDKs using TypeScript, React.js, and WebSockets, enabling real-time bidirectional communication for enterprise clients, facilitating seamless integration across 50+ client applications, resulting in 20% increase in customer engagement metrics."
    },
    {
      title: "Professional Development & Freelance",
      company: "Self-Employed",
      period: "August 2023 – March 2024",
      location: "Chennai, India",
      description: "Completed advanced React.js and TypeScript training, building production-ready applications with modern frontend architectures, state management (Redux), and responsive design principles. Developed freelance web projects using React.js, TypeScript, and Node.js, implementing RESTful APIs and Firebase integration for client applications."
    },
    {
      title: "Web Developer Intern",
      company: "FULL Creative",
      period: "May 2023 – July 2023",
      location: "Chennai, India",
      description: "Developed 5+ production-ready responsive web applications using React.js, JavaScript (ES6+), HTML5, CSS3, and Tailwind CSS, implementing mobile-first design principles that improved user retention by 15% and enhanced cross-device compatibility."
    },
    {
      title: "Process Associate (SQL Operations Specialist)",
      company: "Blend Labs India Pvt Ltd",
      period: "March 2021 – December 2022",
      location: "Chennai, India",
      description: "Developed and maintained SQL queries and stored procedures to automate data extraction, transformation, and reporting processes, generating accurate financial reports and ensuring data integrity across multiple database systems, improving reporting accuracy by 22%."
    }
  ];

  const achievements = [
    {
      metric: "40%",
      label: "Performance Improvement",
      description: "Faster page loads through optimization"
    },
    {
      metric: "20%",
      label: "Higher Engagement",
      description: "Increase in customer engagement metrics"
    },
    {
      metric: "99.9%",
      label: "Uptime",
      description: "System reliability for enterprise clients"
    },
    {
      metric: "35%",
      label: "Team Velocity",
      description: "Improved through mentoring & best practices"
    },
    {
      metric: "50+",
      label: "Client Apps",
      description: "Seamless integration across applications"
    },
    {
      metric: "25%",
      label: "Faster Response",
      description: "Reduced backend response times"
    }
  ];

  return (
    <section className="w-full flex flex-col lg:flex-row items-start justify-center px-6 md:px-12 lg:px-24 pt-32 md:pt-36 pb-16 md:pb-24 gap-16 max-w-7xl mx-auto relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-bl from-primary/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-gradient-to-tr from-primary/5 to-transparent rounded-full blur-3xl"></div>
      </div>

      {/* Left Side - Title */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={transition1}
        className="lg:w-1/2 flex flex-col lg:items-end mb-12 lg:mb-0 lg:self-start"
      >
        <div className="lg:sticky lg:top-32 space-y-6 max-w-md w-full text-center lg:text-right">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transition1, delay: 0.2 }}
            className="space-y-4"
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-primary font-bold leading-tight bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              About
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto lg:ml-auto rounded-full"></div>
          </motion.div>
        </div>
      </motion.div>

      {/* Right Side - Content */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ ...transition1, delay: 0.3 }}
        className="lg:w-1/2 space-y-12 max-w-2xl"
      >
        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transition1, delay: 0.4 }}
          className="space-y-6 p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-gray-100"
        >
          <p className="text-lg md:text-xl text-text-primary leading-relaxed font-medium">
            I'm <span className="font-bold text-primary">Dinakaran R</span>, a Software Engineer specializing in 
            Frontend Architecture with <span className="font-semibold text-primary">3+ years</span> of experience building scalable web applications and real-time SDKs.
          </p>
          <p className="text-base md:text-lg text-text-secondary leading-relaxed">
            Currently architecting custom Web SDKs at <span className="font-semibold">Resulticks Edge Solution Technologies</span> using TypeScript, React.js, and WebSockets 
            for real-time enterprise solutions. I've enabled seamless integration across <span className="font-semibold text-primary">50+ client applications</span> and 
            improved system reliability to <span className="font-semibold text-primary">99.9% uptime</span>. Passionate about system design, performance optimization, 
            and mentoring teams of developers.
          </p>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transition1, delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-6"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...transition1, delay: 0.6 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center p-6 rounded-xl bg-white/80 backdrop-blur-sm border border-gray-200 hover:border-primary hover:shadow-lg transition-all duration-300"
            >
              <div className="text-3xl md:text-4xl lg:text-5xl font-primary font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                {achievement.metric}
              </div>
              <div className="text-sm font-semibold text-text-primary mb-2">
                {achievement.label}
              </div>
              <div className="text-xs text-text-muted leading-relaxed">
                {achievement.description}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Experience */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transition1, delay: 0.7 }}
          className="space-y-6"
        >
          <h3 className="text-xs uppercase tracking-widest text-text-muted font-semibold">Experience</h3>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ ...transition1, delay: 0.8 + index * 0.1 }}
                whileHover={{ x: 5 }}
                className="relative border-l-2 border-gray-200 pl-6 space-y-3 group"
              >
                <motion.div
                  className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-white border-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity"
                ></motion.div>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                  <div>
                    <h4 className="font-bold text-lg text-text-primary mb-1">{exp.title}</h4>
                    <p className="text-base text-text-secondary font-medium">{exp.company}</p>
                  </div>
                  <div className="text-sm text-text-muted font-medium whitespace-nowrap">
                    {exp.period}
                  </div>
                </div>
                <p className="text-sm text-text-muted flex items-center gap-2">
                   {exp.location}
                </p>
                {exp.description && (
                  <p className="text-base text-text-secondary leading-relaxed mt-2">
                    {exp.description}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
