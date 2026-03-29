import { motion } from "framer-motion";
import { transition1 } from "../transitions";

const About = () => {

  const experiences = [
    {
      title: "Software Engineer",
      company: "Resulticks Edge Solution Technologies",
      period: "April 2024 – Present",
      location: "Chennai, India",
      bullets: [
        "Led development and enhancements of a framework-agnostic Web SDK using JavaScript and TypeScript, enabling real-time communication and seamless integration across 50+ client applications, improving customer engagement by 20%.",
        "Built and optimized scalable React.js applications using code splitting, dynamic imports, and caching strategies, significantly improving performance and load times.",
        "Improved API efficiency by optimizing REST integrations with batching and caching techniques, reducing response times by 25% and maintaining 99.9% system uptime.",
        "Migrated legacy systems (HTML, Sass, JavaScript) to a modular React architecture, enhancing maintainability, scalability, and development speed.",
        "Mentored and managed a team of 2–3 developers through code reviews and collaboration, improving team productivity and reducing onboarding time.",
      ],
    },
    {
      title: "Freelance Experience",
      company: "Self-employed",
      period: "August 2023 – March 2024",
      location: "Chennai, India",
      bullets: [
        "Developed web applications using React.js, TypeScript, and Node.js for client requirements, focusing on performance and scalability.",
        "Built responsive user interfaces and reusable components, improving maintainability and development efficiency.",
        "Integrated RESTful APIs and Firebase services to support real-time features and dynamic data handling.",
        "Collaborated with clients to understand requirements and deliver production-ready solutions within timelines.",
      ],
    },
    {
      title: "Web Developer Intern",
      company: "FULL CREATIVE",
      period: "May 2023 – July 2023",
      location: "Chennai, India",
      bullets: [
        "Developed 5+ responsive web applications using React.js, JavaScript (ES6+), HTML5, CSS3, and Tailwind CSS.",
        "Built mobile-first, cross-device compatible interfaces, improving user experience and engagement.",
        "Optimized application performance through lazy loading, code splitting, and build optimizations, improving page load times and Lighthouse scores.",
        "Collaborated with UI/UX designers to convert wireframes into accessible, pixel-perfect interfaces using semantic HTML and ARIA standards.",
      ],
    },
    {
      title: "Process Associate – Web Operations & Development",
      company: "Blend Labs India Pvt Ltd",
      period: "March 2021 – December 2022",
      location: "Chennai, India",
      bullets: [
        "Developed and maintained user-facing features for web applications in the US banking domain, ensuring high performance, scalability, and reliability.",
        "Collaborated with cross-functional teams including backend engineers, UI/UX designers, and product managers to deliver seamless and user-friendly financial applications.",
        "Implemented secure and compliant frontend solutions aligned with banking industry standards, contributing to the development of reliable financial platforms.",
        "Built responsive and accessible interfaces using React.js, Tailwind CSS, and Bootstrap, improving user experience across devices.",
      ],
    },
  ];

  const achievements = [
    {
      metric: "20%",
      label: "Higher engagement",
      description: "Customer engagement via Web SDK rollouts",
    },
    {
      metric: "25%",
      label: "Faster responses",
      description: "REST optimization, batching & caching",
    },
    {
      metric: "99.9%",
      label: "Uptime",
      description: "Reliable production systems",
    },
    {
      metric: "50+",
      label: "Client apps",
      description: "SDK integration footprint",
    },
    {
      metric: "4+",
      label: "Years",
      description: "Frontend & SDK experience",
    },
    {
      metric: "2–3",
      label: "Devs mentored",
      description: "Code reviews & collaboration",
    },
  ];

  const skillGroups = [
    {
      label: "Frontend",
      items:
        "React.js, TypeScript, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Redux",
    },
    {
      label: "Backend & APIs",
      items: "Node.js, REST APIs, Firebase, Supabase, WebSockets",
    },
    {
      label: "Tools & build",
      items: "Git, GitHub, Webpack, Vite, Gulp, Vercel",
    },
    {
      label: "Testing",
      items: "Jest, React Testing Library",
    },
    {
      label: "Styling & UI",
      items: "Sass, Bootstrap, Framer Motion, Styled-Components",
    },
    {
      label: "Concepts",
      items: "Responsive design, performance optimization, code splitting",
    },
  ];

  const education = [
    {
      school: "SRM University",
      degree: "Master of Computer Applications (Distance Education)",
      period: "May 2024 – Present",
      detail: "CGPA: 8.7/10 · Coursework: Advanced Algorithms · Web Technologies · Database Management",
    },
    {
      school: "Vels University",
      degree: "Bachelor of Business Administration",
      period: "May 2017 – May 2020",
      detail: "CGPA: 7.0/10 · Focus: Process optimization · Project management",
    },
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
            I'm <span className="font-bold text-primary">Dinakaran R</span>, a{" "}
            <span className="font-semibold">Software Engineer</span> focused on the front end — React.js,
            TypeScript, and modern JavaScript — with{" "}
            <span className="font-semibold text-primary">4+ years</span> building scalable web applications and
            framework-agnostic Web SDKs.
          </p>
          <p className="text-base md:text-lg text-text-secondary leading-relaxed">
            I emphasize performance, reusable architecture, and production quality. I'm currently leading Web SDK
            development — features, releases, and integrations across client platforms — and I've migrated legacy
            stacks to React while working with global teams on reliable, shippable solutions.
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

        {/* Technical skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transition1, delay: 0.55 }}
          className="space-y-4"
        >
          <h3 className="text-xs uppercase tracking-widest text-text-muted font-semibold">Technical skills</h3>
          <div className="space-y-4 p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-gray-100">
            {skillGroups.map((group) => (
              <div key={group.label}>
                <p className="text-sm font-semibold text-primary mb-1">{group.label}</p>
                <p className="text-sm text-text-secondary leading-relaxed">{group.items}</p>
              </div>
            ))}
          </div>
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
                <ul className="mt-2 space-y-2 list-disc pl-4 text-base text-text-secondary leading-relaxed marker:text-primary">
                  {exp.bullets.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transition1, delay: 0.85 }}
          className="space-y-6"
        >
          <h3 className="text-xs uppercase tracking-widest text-text-muted font-semibold">Education</h3>
          <div className="space-y-6">
            {education.map((ed, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ ...transition1, delay: 0.9 + index * 0.08 }}
                className="relative border-l-2 border-gray-200 pl-6 space-y-2"
              >
                <h4 className="font-bold text-lg text-text-primary">{ed.degree}</h4>
                <p className="text-base text-text-secondary font-medium">{ed.school}</p>
                <p className="text-sm text-text-muted">{ed.period}</p>
                <p className="text-sm text-text-secondary leading-relaxed">{ed.detail}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications & languages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transition1, delay: 0.95 }}
          className="space-y-4 p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-gray-100"
        >
          <h3 className="text-xs uppercase tracking-widest text-text-muted font-semibold">
            Certifications & languages
          </h3>
          <div className="space-y-3 text-sm text-text-secondary leading-relaxed">
            <p>
              <span className="font-semibold text-text-primary">React JS (Frontend Development)</span> — Besant
              Technologies, Chennai · November 2020 – January 2021
            </p>
            <p>
              <span className="font-semibold text-text-primary">English:</span> professional proficiency (reading,
              writing, speaking). <span className="font-semibold text-text-primary">Tamil:</span> native.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
