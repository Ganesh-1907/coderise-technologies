export type Course = {
  slug: string;
  name: string;
  duration: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  tagline: string;
  description: string;
  gradient: string;
  icon: string;
  technologies: string[];
  outcomes: string[];
  curriculum: { title: string; items: string[] }[];
  instructor: { name: string; role: string; bio: string };
};

const baseOutcomes = [
  "Build real-world production applications",
  "Master core programming concepts and patterns",
  "Gain hands-on practical coding experience",
  "Prepare confidently for technical interviews",
  "Receive an industry-recognised certification",
];

const baseInstructor = {
  name: "Coderise Faculty",
  role: "Senior Software Engineer · 10+ yrs",
  bio: "Our trainers are working professionals from product companies who bring real engineering practices, code reviews and mentorship into every session.",
};

export const courses: Course[] = [
  {
    slug: "python-programming",
    name: "Python Programming",
    duration: "3 Months",
    level: "Beginner",
    tagline: "From zero to Pythonic developer",
    description:
      "Master Python from fundamentals to advanced topics — OOP, file handling, APIs, automation and data tooling.",
    gradient: "from-blue-500 to-cyan-400",
    icon: "🐍",
    technologies: ["Python 3", "PIP", "NumPy", "Pandas", "Flask", "Pytest"],
    outcomes: baseOutcomes,
    curriculum: [
      { title: "Module 1 · Python Foundations", items: ["Setup & syntax", "Variables, data types", "Operators & control flow", "Strings & collections"] },
      { title: "Module 2 · Functions & OOP", items: ["Functions, lambdas, decorators", "Classes, inheritance, dunder methods", "Modules & packages"] },
      { title: "Module 3 · Real-World Python", items: ["File I/O, JSON, CSV", "Exception handling", "Working with REST APIs", "Automation scripts"] },
      { title: "Module 4 · Projects", items: ["CLI productivity tool", "Web scraper", "REST API with Flask"] },
    ],
    instructor: baseInstructor,
  },
  {
    slug: "java-full-stack",
    name: "Java Full Stack",
    duration: "6 Months",
    level: "Intermediate",
    tagline: "Enterprise-grade Java + Spring + React",
    description:
      "Build production full-stack apps with Core Java, Spring Boot, REST APIs, JPA/Hibernate and a React frontend.",
    gradient: "from-orange-500 to-red-500",
    icon: "☕",
    technologies: ["Java 17", "Spring Boot", "Hibernate", "MySQL", "React", "Maven"],
    outcomes: baseOutcomes,
    curriculum: [
      { title: "Core Java & OOP", items: ["JDK, JVM, syntax", "OOP, collections, generics", "Streams & lambdas", "Multithreading"] },
      { title: "Database & JDBC", items: ["MySQL fundamentals", "JDBC, connection pooling", "JPA & Hibernate"] },
      { title: "Spring Boot", items: ["Spring Core & Boot", "REST APIs", "Spring Security & JWT", "Microservices basics"] },
      { title: "Frontend with React", items: ["React, Router, Hooks", "API integration", "Deployment"] },
    ],
    instructor: baseInstructor,
  },
  {
    slug: "mern-stack",
    name: "MERN Stack Development",
    duration: "5 Months",
    level: "Intermediate",
    tagline: "MongoDB · Express · React · Node",
    description:
      "Become a full-stack JavaScript developer building real production-grade MERN applications end-to-end.",
    gradient: "from-emerald-500 to-teal-500",
    icon: "⚛️",
    technologies: ["MongoDB", "Express", "React", "Node.js", "Tailwind", "JWT"],
    outcomes: baseOutcomes,
    curriculum: [
      { title: "JavaScript Deep Dive", items: ["ES6+, async/await", "DOM & events", "Modules & tooling"] },
      { title: "Frontend with React", items: ["Components, hooks, context", "Routing, forms, state mgmt", "Tailwind UI"] },
      { title: "Backend with Node & Express", items: ["REST APIs", "Middleware, auth, JWT", "File uploads"] },
      { title: "MongoDB & Deployment", items: ["Mongoose models", "Aggregation", "Deploy to cloud"] },
    ],
    instructor: baseInstructor,
  },
  {
    slug: "react-js",
    name: "React JS",
    duration: "2 Months",
    level: "Intermediate",
    tagline: "Modern React with hooks & patterns",
    description:
      "Master modern React — hooks, context, performance, routing, state management and production deployment.",
    gradient: "from-sky-500 to-indigo-500",
    icon: "⚛",
    technologies: ["React 18", "Vite", "React Router", "Zustand", "Tailwind", "Vitest"],
    outcomes: baseOutcomes,
    curriculum: [
      { title: "React Foundations", items: ["JSX, components, props", "State & events", "Lists & conditional UI"] },
      { title: "Hooks & Patterns", items: ["useEffect, useMemo, useRef", "Custom hooks", "Context & reducers"] },
      { title: "Routing & Data", items: ["React Router", "Data fetching", "Forms & validation"] },
      { title: "Production React", items: ["Performance & code-splitting", "Testing", "Deployment"] },
    ],
    instructor: baseInstructor,
  },
  {
    slug: "node-js",
    name: "Node JS",
    duration: "2 Months",
    level: "Intermediate",
    tagline: "Backend engineering with Node",
    description:
      "Design and build scalable REST APIs and real-time backends with Node.js, Express and modern tooling.",
    gradient: "from-lime-500 to-emerald-500",
    icon: "🟢",
    technologies: ["Node.js", "Express", "MongoDB", "Socket.IO", "JWT", "Docker"],
    outcomes: baseOutcomes,
    curriculum: [
      { title: "Node Core", items: ["Event loop", "Modules, streams, buffers", "NPM ecosystem"] },
      { title: "Express APIs", items: ["Routing, middleware", "Validation, error handling", "Auth & JWT"] },
      { title: "Databases", items: ["MongoDB & Mongoose", "SQL with Prisma"] },
      { title: "Realtime & Deploy", items: ["WebSockets / Socket.IO", "Docker & CI/CD"] },
    ],
    instructor: baseInstructor,
  },
  {
    slug: "dsa",
    name: "Data Structures & Algorithms",
    duration: "4 Months",
    level: "Advanced",
    tagline: "Crack product-based interviews",
    description:
      "Systematically master DSA with 300+ curated problems, patterns and mock interviews to crack top product companies.",
    gradient: "from-fuchsia-500 to-purple-600",
    icon: "🧠",
    technologies: ["Java", "C++", "Python", "LeetCode", "Big-O"],
    outcomes: baseOutcomes,
    curriculum: [
      { title: "Foundations", items: ["Time & space complexity", "Arrays, strings, hashing"] },
      { title: "Linear DS", items: ["Linked lists", "Stacks, queues", "Two pointers, sliding window"] },
      { title: "Trees & Graphs", items: ["Binary trees & BST", "Heaps", "Graphs, BFS/DFS, shortest paths"] },
      { title: "Advanced", items: ["Recursion & backtracking", "Dynamic programming", "Greedy & system design intro"] },
    ],
    instructor: baseInstructor,
  },
  {
    slug: "c-programming",
    name: "C Programming",
    duration: "2 Months",
    level: "Beginner",
    tagline: "The mother of modern languages",
    description:
      "Build strong programming fundamentals with C — pointers, memory, data structures and systems thinking.",
    gradient: "from-slate-600 to-blue-700",
    icon: "🅒",
    technologies: ["GCC", "Make", "GDB"],
    outcomes: baseOutcomes,
    curriculum: [
      { title: "C Basics", items: ["Syntax, variables, operators", "Control flow", "Functions"] },
      { title: "Pointers & Memory", items: ["Pointers & arrays", "Dynamic memory", "Strings"] },
      { title: "Structures & Files", items: ["Structs & unions", "File I/O"] },
      { title: "Mini Projects", items: ["CLI calculator", "Student record system"] },
    ],
    instructor: baseInstructor,
  },
  {
    slug: "cpp",
    name: "C++ Programming",
    duration: "3 Months",
    level: "Intermediate",
    tagline: "Modern C++ with OOP & STL",
    description:
      "Master Modern C++ with OOP, STL, templates and competitive programming techniques.",
    gradient: "from-indigo-600 to-blue-700",
    icon: "➕",
    technologies: ["C++17", "STL", "CMake"],
    outcomes: baseOutcomes,
    curriculum: [
      { title: "C++ Core", items: ["Syntax & OOP", "Constructors, inheritance", "Polymorphism"] },
      { title: "STL", items: ["Vectors, maps, sets", "Algorithms", "Iterators"] },
      { title: "Advanced", items: ["Templates", "Smart pointers", "Move semantics"] },
      { title: "Projects", items: ["Banking system", "Mini game"] },
    ],
    instructor: baseInstructor,
  },
  {
    slug: "sql-database",
    name: "SQL & Database Development",
    duration: "2 Months",
    level: "Beginner",
    tagline: "Query, design and optimise",
    description:
      "Learn relational design, advanced SQL, indexing, transactions and reporting like a database engineer.",
    gradient: "from-amber-500 to-orange-600",
    icon: "🗄️",
    technologies: ["MySQL", "PostgreSQL", "Workbench"],
    outcomes: baseOutcomes,
    curriculum: [
      { title: "SQL Foundations", items: ["SELECT, WHERE, JOIN", "Aggregations", "Subqueries"] },
      { title: "Schema Design", items: ["Normalisation", "Constraints, keys", "ER modelling"] },
      { title: "Advanced SQL", items: ["Window functions", "CTEs, views", "Stored procedures"] },
      { title: "Performance", items: ["Indexes", "Query plans", "Transactions"] },
    ],
    instructor: baseInstructor,
  },
  {
    slug: "javascript-masterclass",
    name: "JavaScript Masterclass",
    duration: "3 Months",
    level: "Intermediate",
    tagline: "Deep dive into the language of the web",
    description:
      "From fundamentals to advanced async patterns — closures, prototypes, event loop, modules and modern tooling.",
    gradient: "from-yellow-400 to-amber-500",
    icon: "𝙅𝙎",
    technologies: ["ES2024", "TypeScript", "Vite", "Node"],
    outcomes: baseOutcomes,
    curriculum: [
      { title: "Language Core", items: ["Types, scope, hoisting", "Functions & closures", "Objects & prototypes"] },
      { title: "Async JS", items: ["Event loop", "Promises, async/await", "Fetch & error handling"] },
      { title: "Modern Tooling", items: ["Modules", "Bundlers, TypeScript intro", "Testing"] },
      { title: "Browser & Beyond", items: ["DOM & events", "Web APIs", "Node.js basics"] },
    ],
    instructor: baseInstructor,
  },
];

export const getCourse = (slug: string) => courses.find((c) => c.slug === slug);
