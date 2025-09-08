export const myProjects = [
  {
    id: 1,
    title: "Serenio: AI Therapist",
    description:
      "Developed an AI-driven therapeutic system that simulates real-life psychiatrist sessions, providing personalized mental health support through interactive chat.",
    subDescription: [
      ". Fine-tuned LLaMA using QLoRA on domain-specific mental health data for context-aware therapeutic conversations.",
      ". Implemented RAG-based multi-label classification to diagnose mental conditions across session-based interactions.",
      ". Ensured reports and diagnoses are generated only after a minimum of 5 sessions to maintain reliability.",
      ". Produced structured reports summarizing emotional analysis, observations, and mood improvements.",
    ],
    href: "",
    logo: "",
    image: "",
    tags: [
      {
        id: 1,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 2,
        name: "TypeScript",
        path: "/assets/logos/typescript.svg",
      },
      {
        id: 3,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
      {
        id: 4,
        name: "Python",
        path: "/assets/logos/python-5.svg",
      },
      {
        id: 5,
        name: "FastAPI",
        path: "/assets/logos/fastapi.svg",
      },
      {
        id: 6,
        name: "PostgreSQL",
        path: "/assets/logos/postgresql.svg",
      },
      {
        id: 7,
        name: "RAG",
        path: "/assets/logos/rag.svg",
      },
      {
        id: 8,
        name: "Fine Tuned Llama3",
        path: "/assets/logos/llama3.svg",
      },
      {
        id: 9,
        name: "Framer Motion",
        path: "/assets/logos/framer-motion.svg",
      },
      {
        id: 10,
        name: "Three.js",
        path: "/assets/logos/threejs-1.svg",
      },
      
    ],
  },
  {
    id: 2,
    title: "PetPal: Pet Adoption Platform",
    description:
      "Developed a web platform for pet adoption, enabling users to search and apply for pets while allowing admins to manage listings and applications efficiently.",
    subDescription: [
      ". Implemented secure user registration and login authentication using PHP and MySQL.",
      ". Built an administrator dashboard to manage pets, adoption applications, and user accounts.",
      ". Enabled CRUD operations for pet listings with detailed attributes (name, age, breed, size, color).",
      ". Provided adoption application submission for users and review/approval tracking for administrators.",
      ". Tracked adoption application progress from submission to final decision to ensure transparency.",
    ],
    href: "",
    logo: "",
    image: "",
    tags: [
      {
        id: 1,
        name: "HTML5",
        path: "/assets/logos/html5.svg",
      },
       {
        id: 2,
        name: "CSS3",
        path: "/assets/logos/css3.svg",
      },
      {
        id: 3,
        name: "Bootstrap5",
        path: "/assets/logos/bootstrap5.svg",
      },
      {
        id: 4,
        name: "JQuery",
        path: "/assets/logos/jquery.svg",
      },
      {
        id: 5,
        name: "PHP",
        path: "/assets/logos/php-6.svg",
      },
      {
        id: 6,
        name: "MySQL",
        path: "/assets/logos/mysql.svg",
      },
    ],
  },
  {
    id: 3,
    title: "Notes Management System",
    description:
      "Developed a web application for managing notes with CRUD operations, search, and pin/unpin features, supported by secure backend APIs and robust code quality measures.",
    subDescription: [
      ". Built RESTful APIs using Node.js, Express, and MongoDB with JWT-based authentication.",
      ". Implemented search functionality and note pinning/unpinning for better organization.",
      ". Performed unit testing with Jest and Mocha/Chai to ensure reliability.",
      ". Integrated SonarQube for continuous code quality analysis.",
    ],
    href: "",
    logo: "",
    image: "",
    tags: [
      {
        id: 1,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/logos/typescript.svg",
      },
      {
        id: 4,
        name: "Node.js",
        path: "/assets/logos/nodejs-2.svg",
      },
      {
        id: 4,
        name: "Express.js",
        path: "/assets/logos/Expressjs.svg",
      },
      {
        id: 4,
        name: "MongoDB",
        path: "/assets/logos/mongodb-icon-2.svg",
      },
      {
        id: 4,
        name: "Git",
        path: "/assets/logos/git.svg",
      },
      {
        id: 4,
        name: "Postman API",
        path: "/assets/logos/postman.svg",
      },
    ],
  },
  {
    id: 4,
    title: "Job Portal – Full Stack Web Application",
    description:
      "Built a full-stack job portal with distinct interfaces for job seekers, companies, and administrators, featuring secure authentication, job listings, applications, and admin approval workflows.",
    subDescription: [
      "Backend (Django + DRF + PostgreSQL): Implemented JWT-based authentication, company approval system, and CRUD APIs for jobs, applications, and user profiles.",
      "Frontend (React + Tailwind + Formik): Designed responsive role-based dashboards for job seekers, companies, and admins with filtering, sorting, and profile management.",
      "Job Seeker Features: Profile/resume management, job search & filtering, application tracking.",
      "Company Features: Company profile management, job posting & application review.",
    ],
    href: "",
    logo: "",
    image: "",
    tags: [
      {
        id: 1,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
      {
        id: 3,
        name: "Django",
        path: "/assets/logos/django.svg",
      },
      {
        id: 4,
        name: "Django REST Framework",
        path: "/assets/logos/django-rest-framework.svg",
      },
      {
        id: 5,
        name: "PostgreSQL",
        path: "/assets/logos/postgresql.svg",
      },
      {
        id: 6,
        name: "Formik",
        path: "/assets/logos/formik.svg",
      },
    ],
  },
  {
    id: 5,
    title: "Harry Potter RAG Chatbot",
    description:
      "Built an AI-powered Retrieval-Augmented Generation (RAG) system that answers contextual questions from all seven Harry Potter books with real-time, book-accurate responses.",
    subDescription: [
      ". Developed using LangChain, HuggingFace embeddings, and ChromaDB to retrieve context-rich answers.",
      ". Integrated Groq API for fast and scalable LLM-powered responses.",
      ". Designed an interactive Gradio-based chatbot UI with query categories like characters, plot, trivia, and world-building.",
      ". Implemented error handling, vector persistence, and optimized retriever settings for improved accuracy.",
      ". Processed over 8,000+ document chunks to build a knowledge base covering all seven Harry Potter books.",
    ],
    href: "",
    logo: "",
    image: "",
    tags: [
      {
        id: 1,
        name: "Python",
        path: "/assets/logos/python-5.svg",
      },
       {
        id: 2,
        name: "RAG",
        path: "/assets/logos/rag.svg",
      },
      {
        id: 3,
        name: "LangChain",
        path: "/assets/logos/langchain.svg",
      },
      {
        id: 4,
        name: "HuggingFace",
        path: "/assets/logos/huggingface.svg",
      },
        {
          id: 5,
          name: "ChromaDB",
          path: "/assets/logos/chroma.svg",
        },
         {
          id: 6,
          name: "Groq API",
          path: "/assets/logos/groq.svg",
        },
         {
          id: 7,
          name: "Gradio",
          path: "/assets/logos/gradio.svg",
        },
    ],
  },
  {
    id: 6,
    title: "Automated Talking-Head Video Generation & Instagram Reels Uploader",
    description:
      "Built an AI-powered pipeline that generates personalized talking-head videos with lip-synced speech and automates publishing them to Instagram Reels.",
    subDescription: [
      "Combined SadTalker for face animation and Speechma.io TTS for human-like speech.",
      "Automated end-to-end workflow (script → voice → video → Instagram upload) with Python & Selenium.",
      "Integrated LLM-based script generation for dynamic and customizable content.",
      "Developed a PyQt5 GUI for user-friendly operation.",
      "Designed for offline/local resource use, making it lightweight and system-friendly.",
    ],
    href: "",
    logo: "",
    image: "",
    tags: [
      {
        id: 1,
        name: "Python",
        path: "/assets/logos/python-5.svg",
      },
      {
        id: 2,
        name: "PyQt5",
        path: "",
      },
      {
        id: 3,
        name: "Selenium",
        path: "/assets/logos/Selenium.svg",
      },
      
      {
        id: 5,
        name: "Speechma.io (TTS)",
        path: "/assets/logos/speechma.svg",
      },
      {
        id: 6,
        name: "LLaMA (LLM)",
        path: "/assets/logos/llama3.svg",
      },
      {
        id: 7,
        name: "Groq API",
        path: "/assets/logos/groq.svg",
      },
      {
        id: 8,
        name: "SadTalker",
        path: "",
      },
    ],
  },
  {
    id: 7,
    title: "3D Developer Portfolio Website",
    description:
      "Built an interactive 3D developer portfolio with React and Vite, designed to showcase projects with bold visuals and smooth user experience.",
    subDescription: [
      "Integrated 3D elements and animations using Three.js, React Three Fiber, Drei, and Framer Motion for engaging interactions.",
      "Designed a modern UI/UX with TailwindCSS, Aceternity UI, and Magic UI for responsive, professional styling.",
      "Added a working contact form using EmailJS for direct communication.",  
    ],
    href: "",
    logo: "",
    image: "",
    tags: [
      {
        id: 1,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
      {
        id: 3,
        name: "Three.js",
        path: "/assets/logos/threejs-1.svg",
      },
      
      {
        id: 5,
        name: "React Three Fiber",
        path: "/assets/logos/react.svg",
      },
      {
        id: 6,
        name: "Drei",
        path: "/assets/logos/drei.svg",
      },
      {
        id: 7,
        name: "Framer Motion",
        path: "/assets/logos/framer-motion.svg",
      },
      {
        id: 8,
        name: "EmailJS",
        path: "/assets/logos/emailjs.svg",
      },
      {
        id: 9,
        name: "Ascertinity UI",
        path: "/assets/logos/ascertinity.svg",
      },
      {
        id: 10,
        name: "Magic UI",
        path: "/assets/logos/magic.svg",
      },
    ],
  },
];

export const mySocials = [
  {
    name: "Github",
    href: "",
    icon: "/assets/socials/github.svg",
  },
  {
    name: "Linkedin",
    href: "",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Instagram",
    href: "",
    icon: "/assets/socials/instagram.svg",
  },
];

export const experiences = [
  {
    title: "MERN Full Stack Developer Intern",
    job: "10Pearls Pakistan",
    date: "Mar 2025 - May 2025",
    contents: [
      "Developed a Notes Management System using React, TailwindCSS, TypeScript, Node.js, Express.js, and MongoDB.",
      "Implemented CRUD operations, search, and pin/unpin functionality for better user experience.",
      "Built secure RESTful APIs with JWT-based authentication and proper exception handling.",
      "Wrote unit tests using Jest and Mocha/Chai, ensuring reliability and robustness.",
      "Integrated SonarQube for continuous code quality analysis and improvement.",
      "Used Git for version control and Postman for API testing and documentation.",
    ],
  },
  {
    title: "Java Full Stack Developer Intern",
    job: "Pakistan Ordinance Factory",
    date: "July 2024-Sept 2024",
    contents: [
      "Developed Officium – Office Automation System using Java Spring Boot, Spring MVC, and PostgreSQL.",
      "Enhanced UI/UX with dynamic document, mail, and note management modules.",
      "Implemented secure authentication and authorization with Spring Security and OAuth2.",
      "Designed role-based dashboards to enable seamless inter-department communication.",

    ],
  },
  {
    title: "React Native Developer Intern",
    job: "HamsanTech (SMC-Private) Limited Islamabad, Pakistan",
    date: "June 2023-July 2023",
    contents: [
      "Developed a chat application using React Native, focusing on one-to-one and group messaging features.",
      "Enhanced skills in mobile app development with React Native components and navigation.",
      "Integrated real-time messaging UI and improved overall app performance for a smooth user experience.",
    ],
  },
];
export const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://robohash.org/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://robohash.org/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://robohash.org/john",
  },
  {
    name: "Alice",
    username: "@alice",
    body: "This is hands down the best thing I've experienced. Highly recommend!",
    img: "https://robohash.org/alice",
  },
  {
    name: "Bob",
    username: "@bob",
    body: "Incredible work! The attention to detail is phenomenal.",
    img: "https://robohash.org/bob",
  },
  {
    name: "Charlie",
    username: "@charlie",
    body: "This exceeded all my expectations. Absolutely stunning!",
    img: "https://robohash.org/charlie",
  },
  {
    name: "Dave",
    username: "@dave",
    body: "Simply breathtaking. The best decision I've made in a while.",
    img: "https://robohash.org/dave",
  },
  {
    name: "Eve",
    username: "@eve",
    body: "So glad I found this. It has changed the game for me.",
    img: "https://robohash.org/eve",
  },
];