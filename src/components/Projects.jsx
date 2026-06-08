import React from 'react';

const ProjectCard = ({ title, subtitle, problem, solution, features, stack, aosDelay }) => {
  return (
    <div 
      data-aos="fade-up" 
      data-aos-delay={aosDelay}
      className="w-full rounded-[2rem] p-2 relative flex flex-col hover:scale-[1.02] transition-all duration-500 bg-white border border-gray-200 shadow-[0_15px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)]"
    >
      <div className="w-full h-full rounded-[1.5rem] mt-2 p-8 flex flex-col bg-[#f4f4f4] transition-colors duration-500 hover:bg-red-50">
        
        <h3 className="text-2xl font-black mb-2 tracking-tight text-gray-900">{title}</h3>
        <h4 className="text-sm font-bold mb-6 text-red-500 uppercase tracking-widest">{subtitle}</h4>
        
        <div className="mb-4">
          <strong className="text-gray-900 text-sm">Problem: </strong>
          <span className="text-gray-600 text-sm">{problem}</span>
        </div>

        <div className="mb-4">
          <strong className="text-gray-900 text-sm">Solution: </strong>
          <span className="text-gray-600 text-sm">{solution}</span>
        </div>

        <div className="mb-4">
          <strong className="text-gray-900 text-sm block mb-1">Features: </strong>
          <span className="text-gray-600 text-sm">{features}</span>
        </div>

        <div className="mt-auto pt-4 border-t border-gray-200">
          <strong className="text-gray-900 text-sm block mb-2">Tech Stack: </strong>
          <div className="flex flex-wrap gap-2">
            {stack.map((tech, idx) => (
              <span key={idx} className="px-3 py-1 bg-gray-200 text-gray-800 text-xs font-bold rounded-full">
                {tech}
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section 
      id="projects"
      className="bg-white pt-24 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans"
    >
      <div className="max-w-6xl mx-auto">
        <div data-aos="fade-up" className="mb-16 text-center">
          <div className="inline-block border border-gray-300 rounded-full px-5 py-1.5 text-sm text-gray-600 font-bold mb-6 shadow-sm bg-white">
            My Work
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.1] tracking-tight">
            Featured Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <ProjectCard 
            title="Smart Canteen System"
            subtitle="Full Stack MERN"
            problem="Long canteen queues and manual order management"
            solution="Food pre-ordering platform with real-time tracking"
            features="Student ordering, real-time order tracking, staff dashboard, role-based access control, menu & order management"
            stack={["MongoDB", "Express.js", "React.js", "Node.js", "JWT"]}
            aosDelay="100"
          />

          <ProjectCard 
            title="College Discovery Platform"
            subtitle="Full Stack"
            problem="No centralized platform for students to discover and compare colleges"
            solution="Search, filter, compare, review, and save colleges with recommendations"
            features="College search, filtering, sorting, recommendation engine, saved colleges, reviews system, JWT auth, protected routes"
            stack={["React.js", "Node.js", "Express.js", "PostgreSQL", "Prisma ORM", "Neon DB", "JWT", "Tailwind CSS"]}
            aosDelay="200"
          />

          <ProjectCard 
            title="Intruder Detection in Wi-Fi Network"
            subtitle="Full Stack · Network Security"
            problem="Unauthorized devices connecting to home/office Wi-Fi networks without detection"
            solution="Real-time Wi-Fi monitoring system that detects unauthorized devices by scanning IP/MAC addresses with ARP-based discovery"
            features="Real-time alerts, device identification, network activity tracking, full-stack dashboard, instant intrusion notifications, device management"
            stack={["React.js", "Node.js", "Express.js", "MongoDB", "Python", "Networking (ARP)", "IP/MAC"]}
            aosDelay="300"
          />

          <ProjectCard 
            title="AI-Powered Sports Talent Assessment"
            subtitle="Full Stack · Computer Vision · SIH"
            problem="Manual, subjective talent assessments with no scalable platform for athlete performance evaluation"
            solution="Mobile-based platform for athletes to record fitness test videos and receive AI-powered performance analysis"
            features="Athlete profiles, video uploads, leaderboards, performance tracking, dashboards, talent identification, pose estimation, rep counting, cheat detection"
            stack={["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "TensorFlow Lite", "Computer Vision", "Firebase"]}
            aosDelay="400"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
