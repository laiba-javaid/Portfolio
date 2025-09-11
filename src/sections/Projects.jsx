import { useState } from "react";
import Project from "../components/Project";
import { myProjects } from "../constants";
import { motion, useMotionValue, useSpring } from "motion/react";

const Projects = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 10, stiffness: 50 });
  const springY = useSpring(y, { damping: 10, stiffness: 50 });
  
  const handleMouseMove = (e) => {
    x.set(e.clientX + 20);
    y.set(e.clientY + 20);
  };
  
  const [preview, setPreview] = useState(null);
  
  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative c-space section-spacing px-4 sm:px-6 lg:px-8"
      id="projects"
    >
      <div className="max-w-full overflow-hidden">
        <h2 className="text-2xl sm:text-3xl lg:text-heading font-bold mb-8 sm:mb-12">
          My Selected Projects
        </h2>
        
        <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full mb-6 sm:mb-8" />
        
        <div className="space-y-0">
          {myProjects.map((project) => (
            <Project key={project.id} {...project} setPreview={setPreview} />
          ))}
        </div>
      </div>
      
      {/* Preview image - hidden on mobile for better UX */}
      {preview && (
        <motion.img
          className="fixed top-0 left-0 z-50 object-cover rounded-lg shadow-lg pointer-events-none hidden sm:block w-60 h-40 lg:w-80 lg:h-56"
          src={preview}
          style={{ x: springX, y: springY }}
        />
      )}
    </section>
  );
};

export default Projects;