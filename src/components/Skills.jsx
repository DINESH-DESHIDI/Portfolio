import React from 'react';

const Skills = () => {
  const skillsData = [
    { category: "Languages", items: ["Java", "JavaScript", "TypeScript", "Python", "SQL"] },
    { category: "Frontend", items: ["React.js", "HTML5", "CSS3", "Tailwind CSS", "Responsive Design"] },
    { category: "Backend", items: ["Node.js", "Express.js", "REST APIs", "JWT Authentication"] },
    { category: "Databases", items: ["MongoDB", "PostgreSQL", "MySQL", "Prisma ORM", "Query Optimization", "Indexing"] },
    { category: "Software Engineering", items: ["OOP", "SOLID Principles", "Design Patterns", "Clean Code", "Git", "GitHub", "Agile", "SDLC"] },
    { category: "System Design", items: ["Scalability", "Caching", "Load Balancing", "API Design", "Microservices Fundamentals", "Database Scaling", "Rate Limiting", "CAP Theorem", "Distributed Systems"] },
    { category: "AI / GenAI", items: ["LangChain", "LangGraph", "RAG", "Vector Databases", "Semantic Search", "Prompt Engineering", "AI Agents", "LLM Applications"] },
    { category: "Tools", items: ["VS Code", "Postman", "Docker Basics", "Linux Fundamentals"] }
  ];

  const certifications = [
    {
      title: "AWS Educate — Getting Started with Compute",
      details: "Cloud, VMs, Deployment, AWS basics",
      icon: (
        <svg className="w-8 h-8 text-[#ff2a2a] opacity-60" fill="currentColor" viewBox="0 0 24 24">
          <path d="M13.74 4.23c-.84-.48-1.88-.48-2.74 0L2.26 9.38C1.48 9.84 1 10.67 1 11.57v5.86c0 .9.48 1.73 1.26 2.19l8.74 5.15c.84.48 1.88.48 2.74 0l8.74-5.15C23.52 19.16 24 18.33 24 17.43v-5.86c0-.9-.48-1.73-1.26-2.19l-8.74-5.15zM12 3.5l8 4.71L12 12.93 4 8.21 12 3.5z"/>
        </svg>
      )
    },
    {
      title: "Innovation & Entrepreneurship Development Program",
      details: "Design Thinking, Business Model Canvas, Startup Strategy",
      icon: (
        <svg className="w-8 h-8 text-[#ff2a2a] opacity-60" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2a7 7 0 0 1 7 7c0 2.62-1.43 4.91-3.56 6.15L15 17H9l-.44-1.85C6.43 13.91 5 11.62 5 9a7 7 0 0 1 7-7zm-1 17h2v1a1 1 0 0 1-2 0v-1z"/>
        </svg>
      )
    }
  ];

  const achievements = [
    {
      title: "Sports Club President",
      details: "IT Department, Vignan Institute of Technology and Sciences — Team leadership, event management, student engagement, organizational planning",
      icon: (
        <svg className="w-8 h-8 text-[#ff2a2a] opacity-60" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      )
    },
    {
      title: "Smart India Hackathon (SIH) Participant",
      details: "AI-Powered Sports Assessment Platform — Computer Vision + TensorFlow Lite for automated athlete performance evaluation",
      icon: (
        <svg className="w-8 h-8 text-[#ff2a2a] opacity-60" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
        </svg>
      )
    },
    {
      title: "College Hackathon & Tech Event Leader",
      details: "Active leadership roles in organizing and participating in college hackathons and technology events",
      icon: (
        <svg className="w-8 h-8 text-[#ff2a2a] opacity-60" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
        </svg>
      )
    },
    // {
    //   title: "Add Achievement",
    //   details: "Placeholder — update with your next achievement",
    //   icon: (
    //     <svg className="w-8 h-8 text-gray-600 opacity-40" fill="currentColor" viewBox="0 0 24 24">
    //       <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/>
    //     </svg>
    //   ),
    //   isPlaceholder: true
    // }
  ];

  return (
    <section 
      id="skills"
      className="bg-[#0a0a0a] pt-24 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans text-white"
    >
      <div className="max-w-6xl mx-auto">
        
        <div data-aos="fade-up" className="mb-16 text-center">
          <div className="inline-block border border-gray-700 rounded-full px-5 py-1.5 text-sm text-gray-400 font-bold mb-6 bg-gray-900">
            Expertise
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight">
            Skills
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {skillsData.map((skillGroup, idx) => (
            <div 
              key={idx} 
              data-aos="fade-up" 
              data-aos-delay={idx * 50}
              className="bg-gray-900 rounded-2xl p-6 border border-gray-800 hover:border-red-500 hover:shadow-[0_0_20px_rgba(255,42,42,0.2)] transition-all duration-300"
            >
              <h3 className="text-xl font-bold mb-4 text-[#ff2a2a]">{skillGroup.category}</h3>
              <ul className="flex flex-wrap gap-2">
                {skillGroup.items.map((item, i) => (
                  <li key={i} className="bg-black text-gray-300 text-xs px-3 py-1.5 rounded-md border border-gray-800">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div data-aos="fade-up" className="mt-12 mb-16">
          <h3 className="text-3xl font-black text-white mb-8 border-b border-gray-800 pb-4">
            Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, idx) => (
              <div 
                key={idx}
                className="bg-gradient-to-r from-gray-900 to-black rounded-2xl p-6 border border-gray-800 flex items-start gap-4 relative overflow-hidden hover:border-red-800 transition-all duration-300"
              >
                <div className="absolute top-0 right-0 w-16 h-16 bg-[#ff2a2a] opacity-10 rounded-bl-full"></div>
                <div className="shrink-0 mt-1">{cert.icon}</div>
                <div className="relative z-10">
                  <h4 className="text-lg font-bold text-white mb-2">{cert.title}</h4>
                  <p className="text-sm text-gray-400">{cert.details}</p>
                </div>
              </div>
            ))}
          </div>
          {/* Add More button */}
          {/* <div className="mt-4 flex justify-end">
            <button className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-700 text-gray-500 text-xs font-bold hover:border-red-600 hover:text-red-500 transition-all duration-300">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/></svg>
              Add Certification
            </button>
          </div> */}
        </div>

        {/* Achievements */}
        <div data-aos="fade-up">
          <h3 className="text-3xl font-black text-white mb-8 border-b border-gray-800 pb-4">
            Achievements & Leadership
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((item, idx) => (
              <div 
                key={idx}
                className={`bg-gradient-to-r from-gray-900 to-black rounded-2xl p-6 border flex items-start gap-4 relative overflow-hidden transition-all duration-300 ${
                  item.isPlaceholder 
                    ? 'border-dashed border-gray-700 opacity-50 hover:opacity-70' 
                    : 'border-gray-800 hover:border-red-800'
                }`}
              >
                <div className="absolute top-0 right-0 w-16 h-16 bg-[#ff2a2a] opacity-10 rounded-bl-full"></div>
                <div className="shrink-0 mt-1">{item.icon}</div>
                <div className="relative z-10">
                  <h4 className={`text-lg font-bold mb-2 ${item.isPlaceholder ? 'text-gray-500' : 'text-white'}`}>{item.title}</h4>
                  <p className="text-sm text-gray-400">{item.details}</p>
                </div>
              </div>
            ))}
          </div>
          {/* Add More button */}
          {/* <div className="mt-4 flex justify-end">
            <button className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-700 text-gray-500 text-xs font-bold hover:border-red-600 hover:text-red-500 transition-all duration-300">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/></svg>
              Add Achievement
            </button>
          </div> */}
        </div>

      </div>
    </section>
  );
};

export default Skills;

