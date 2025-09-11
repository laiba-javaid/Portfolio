import React, { useState } from "react";
import ProjectDetails from "./ProjectDetails";

const Project = ({
  title,
  description,
  subDescription,
  href,
  image,
  tags,
  setPreview,
}) => {
  const [isHidden, setIsHidden] = useState(false);
  return (
    <>
      <div
        className="flex flex-col items-start justify-between py-6 space-y-4 sm:py-10 sm:flex-row sm:items-center sm:space-y-0"
        onMouseEnter={() => setPreview(image)}
        onMouseLeave={() => setPreview(null)}
      >
        {/* Project info section */}
        <div className="w-full sm:w-auto">
          <p className="text-xl sm:text-2xl font-medium mb-2">{title}</p>
          <div className="flex flex-wrap gap-2 sm:gap-5 text-sm sm:text-base text-sand">
            {tags.map((tag) => (
              <span 
                key={tag.id}
                className="px-2 py-1 bg-neutral-800 rounded-md sm:px-0 sm:py-0 sm:bg-transparent sm:rounded-none"
              >
                {tag.name}
              </span>
            ))}
          </div>
        </div>
        
        {/* Read more button */}
        <button
          onClick={() => setIsHidden(true)}
          className="flex items-center gap-2 px-4 py-2 text-sm sm:text-base cursor-pointer hover-animation bg-neutral-800 rounded-md sm:bg-transparent sm:px-0 sm:py-0 sm:rounded-none whitespace-nowrap"
        >
          Read More
          <img src="assets/arrow-right.svg" className="w-4 sm:w-5" />
        </button>
      </div>
      
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
      
      {isHidden && (
        <ProjectDetails
          title={title}
          description={description}
          subDescription={subDescription}
          image={image}
          tags={tags}
          href={href}
          closeModal={() => setIsHidden(false)}
        />
      )}
    </>
  );
};

export default Project;