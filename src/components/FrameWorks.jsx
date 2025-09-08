import { OrbitingCircles } from "./OrbitingCircles";

export function Frameworks() {
  const skills = [
    "java-4",
    "framer-motion",
    "cplusplus",
    "csharp",
    "css3",
    "jquery",
    "mongodb-icon-2",
    "git",
    "html5",
    "javascript",
    "php-6",
    "react",
    "tailwindcss",
    "vitejs",
    "wordpress",
    "nodejs-2",
    "postgresql",
    "python-5",
    "spring-boot-1",
    "threejs-1",
    "typescript"
  ];
  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={40}>
        {skills.map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={25} radius={100} reverse speed={2}>
        {skills.reverse().map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ src }) => (
  <img src={src} className="duration-200 rounded-sm hover:scale-110" />
);