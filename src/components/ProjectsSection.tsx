import { ProjectCard } from "./ProjectCard";

const projects = [
  {
    title: "AgriBot AI",
    description: "Built an AI system with multiple specialized agents (Disease Detector, Market Broker) managed by an Orchestrator. Used Google Gemini 2.5 Flash for smart analysis with image-based disease diagnosis and real-time alerts to help farmers.",
    techStack: ["Python", "Streamlit", "Google Gemini API", "Computer Vision", "REST APIs"],
    githubUrl: "https://github.com/Jha-Sweta/AgriBot-AI",
    liveUrl: "#",
  },
  {
    title: "Pet Adoption Portal",
    description: "Developed a serverless pet adoption platform using React and Firebase. Built real-time chat with Firestore listeners, responsive UI with dynamic search and filtering, and secure image uploads via Firebase Storage.",
    techStack: ["React.js", "Firebase", "Tailwind CSS", "Firestore"],
    githubUrl: "https://github.com/jha-sweta/Pet-Adoption-Portal",
    liveUrl: "#",
  },
  {
    title: "Laptop Price Prediction",
    description: "Built an ML model to predict laptop prices based on specifications including brand, processor, RAM, and storage. Achieved 85%+ accuracy with regression algorithms and comprehensive model evaluation.",
    techStack: ["Python", "Scikit-learn", "Pandas", "NumPy"],
    githubUrl: "https://github.com/Jha-Sweta/Laptop-Price-Prediction",
  },
  {
    title: "Secure Data Hiding - Steganography",
    description: "Developed a desktop application for hiding and extracting secret messages within images using LSB technique. Implemented password-based encryption with intuitive Tkinter GUI.",
    techStack: ["Python", "Tkinter", "Cryptography", "Image Processing"],
    githubUrl: "https://github.com/Jha-Sweta/SECURE-DATA-HIDING-IN-IMAGE-USING-STEGANOGRAPHY",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            A showcase of my technical projects spanning AI, machine learning, web development, and cybersecurity.
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};
