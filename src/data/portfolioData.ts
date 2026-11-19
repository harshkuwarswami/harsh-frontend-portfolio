import {
  PersonalInfo,
  SkillCategory,
  Project,
  ExperienceItem,
  EducationItem,
  CertificationItem
} from '../types/portfolio';

export const personalInfo: PersonalInfo = {
  fullName: "Harsh Kuwar Swami",
  firstName: "Harsh",
  monogram: "HKS",
  role: "Aspiring Frontend Developer | Web Developer",
  careerStage: "Entry-level Developer",
  location: "Aligarh, Uttar Pradesh, India",
  email: "hkswami4@gmail.com",
  github: "https://github.com/harshkuwarswami",
  linkedin: "https://www.linkedin.com/in/Harsh-Kuwar-Swami-7a8848264/",
  headline: "Hi, I'm Harsh Kuwar Swami.",
  animatedRoles: [
    "Frontend Developer",
    "Web Developer",
    "Creative Web Enthusiast"
  ],
  heroDescription:
    "An aspiring frontend developer passionate about creating responsive, modern, and engaging web experiences.",
  aboutSummary:
    "I'm Harsh Kuwar Swami, an aspiring Frontend Developer based in Aligarh, Uttar Pradesh, India. With an educational background in computer applications, I'm focused on developing responsive, user-friendly web experiences and strengthening my practical software development skills.",
  academicSummary:
    "Pursuing MCA in Information Technology with a foundational BCA degree. Dedicated to continuous learning, building clean user interfaces, and writing maintainable code.",
  profileImage: "./harsh-profile.png"
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Technologies",
    description: "Core technologies used for crafting responsive, interactive user interfaces",
    iconName: "Layout",
    skills: [
      {
        name: "HTML5",
        tag: "Structure",
        description: "Semantic elements, accessibility landmarks, modern document architecture"
      },
      {
        name: "CSS3",
        tag: "Styling",
        description: "Responsive layouts, Flexbox, Grid, CSS animations, variables"
      },
      {
        name: "JavaScript",
        tag: "Core Scripting",
        description: "ES6+ syntax, asynchronous programming, DOM manipulation, modular code"
      },
      {
        name: "React.js",
        tag: "UI Library",
        description: "Component architecture, hooks, state management, Vite workflows"
      },
      {
        name: "Responsive Design",
        tag: "Cross-Device",
        description: "Mobile-first layouts, adaptive navigation, fluid typography"
      }
    ]
  },
  {
    title: "Programming Foundations",
    description: "Programming languages studied through formal coursework and project exploration",
    iconName: "Code2",
    skills: [
      {
        name: "JavaScript",
        tag: "Primary",
        description: "Client-side algorithms, event loops, clean syntax"
      },
      {
        name: "Java",
        tag: "Coursework",
        description: "Object-oriented programming concepts, classes, inheritance"
      },
      {
        name: "Python",
        tag: "Internship Area",
        description: "Core scripting syntax, data structures, foundation from internship experience"
      }
    ]
  },
  {
    title: "Development Tools",
    description: "Essential developer tooling and collaboration platforms",
    iconName: "Wrench",
    skills: [
      {
        name: "Git",
        tag: "Version Control",
        description: "Branching, commit history, merge management"
      },
      {
        name: "GitHub",
        tag: "Collaboration",
        description: "Repository hosting, open-source workflow, project showcases"
      },
      {
        name: "Vite",
        tag: "Build Tool",
        description: "Fast module bundler, development server, modern asset pipelines"
      },
      {
        name: "VS Code",
        tag: "IDE",
        description: "Workspace configuration, debugging extensions, productivity workflows"
      },
      {
        name: "Browser DevTools",
        tag: "Inspection",
        description: "DOM inspection, network monitoring, responsive viewport testing"
      }
    ]
  },
  {
    title: "Currently Exploring",
    description: "Active learning interests and modern frontend capabilities being strengthened",
    iconName: "Compass",
    skills: [
      {
        name: "Three.js & WebGL",
        tag: "3D Graphics",
        description: "Creative coding, 3D scene composition, interactive canvas objects"
      },
      {
        name: "Advanced Motion",
        tag: "Micro-interactions",
        description: "Polished transitions, scroll-linked animations, tactile user feedback"
      },
      {
        name: "Web Performance & SEO",
        tag: "Optimization",
        description: "Semantic meta data, Core Web Vitals, accessible color contrast"
      }
    ]
  }
];

export const projectsData: Project[] = [
  {
    id: "urban-plate",
    title: "Urban Plate — Restaurant Website",
    tagline: "Modern, responsive culinary experience showcasing menu filtering & reservations",
    description:
      "A responsive restaurant website built with React.js and Vite, featuring a multi-page structure, interactive menu category filtering, rich culinary showcase, and modern client-side booking and contact forms.",
    technologies: ["React.js", "Vite", "JavaScript", "CSS3", "Responsive UI"],
    githubUrl: "https://github.com/harshkuwarswami/urban-plate-restaurant",
    liveUrl: "https://urban-plate-restaurant.vercel.app/",
    status: "Live Demo",
    statusNote: "Deployed and publicly accessible on Vercel",
    isRepoPrivate: false,
    featured: true,
    accentColor: "#38BDF8",
    category: "Frontend Web Application"
  },
  {
    id: "nexdrop",
    title: "NexDrop — Peer-to-Peer File Sharing",
    tagline: "Web development project focused on direct file transfer workflows",
    description:
      "A web development project focused on peer-to-peer file sharing and a modern file-transfer experience. Engineered to explore direct transfers and clean drag-and-drop file distribution.",
    technologies: ["JavaScript", "Web Application", "P2P Architecture", "Modern UI"],
    githubUrl: "https://github.com/harshkuwarswami/NexDrop-Website",
    liveUrl: "https://nex-drop-website.vercel.app",
    status: "Live Demo",
    statusNote: "Deployed and publicly accessible on Vercel",
    isRepoPrivate: true,
    repoNote: "Source repository is currently private; access is limited to authorized visitors.",
    featured: false,
    accentColor: "#6366F1",
    category: "Web Application Project"
  },
  {
    id: "ai-video-detector",
    title: "AI Video Detector",
    tagline: "Python-based exploration into AI-assisted video analysis concepts",
    description:
      "A Python-based project exploring AI-related video analysis. Developed as an academic and practical exploration into video processing workflows and media analysis fundamentals.",
    technologies: ["Python", "AI Video Analysis", "Machine Learning Concept"],
    githubUrl: "https://github.com/harshkuwarswami/ai-video-detector",
    liveUrl: null,
    status: "Not Deployed",
    statusNote: "Standalone Python project — not hosted as a web application",
    isRepoPrivate: true,
    repoNote: "Source repository is currently private; access is limited to authorized visitors.",
    featured: false,
    accentColor: "#A78BFA",
    category: "Python Software Exploration"
  }
];

export const experienceData: ExperienceItem[] = [
  {
    id: "codec-technologies",
    role: "Python Developer Intern",
    company: "Codec Technologies India",
    employmentType: "Internship",
    period: "October 2025 – November 2025",
    duration: "2 months",
    summary:
      "Completed a 2-month Python development internship gaining practical experience in software scripting, programmatic problem solving, and practical application development.",
    keyPoints: [
      "Worked with core Python programming constructs, data structures, and script automation.",
      "Gained exposure to structured software development workflows and problem-solving practices.",
      "Verified internship credential on LinkedIn profile with completion certificate."
    ],
    certificateAvailable: true,
    linkedinUrl: "https://www.linkedin.com/in/Harsh-Kuwar-Swami-7a8848264/"
  }
];

export const educationData: EducationItem[] = [
  {
    id: "mca",
    degree: "Master of Computer Applications (MCA)",
    field: "Information Technology",
    institution: "Aligarh College of Engineering & Technology, Aligarh",
    university: "Dr. A.P.J. Abdul Kalam Technical University",
    period: "November 2024 – November 2026",
    grade: "7.1 CGPA",
    gradeType: "CGPA",
    status: "In Progress (Dates as listed on LinkedIn)",
    note: "Advanced coursework covering computer software applications, information technology paradigms, and software engineering methodologies."
  },
  {
    id: "bca",
    degree: "Bachelor of Computer Applications (BCA)",
    field: "Computer Applications",
    institution: "Institute of Technology Management, Aligarh",
    university: "Dr. Bhimrao Ambedkar University",
    period: "November 2021 – November 2023",
    grade: "64%",
    gradeType: "Percentage",
    status: "Completed (Dates as listed on LinkedIn)",
    note: "Foundational degree establishing strong core principles in programming, database concepts, web development, and computer architecture."
  }
];

export const certificationsData: CertificationItem[] = [
  {
    id: "tcs-gen-ai",
    title: "Generative AI Essentials",
    issuer: "Tata Consultancy Services",
    expiryDate: "September 2026",
    isVerified: true,
    credentialNote: "Verified credential from Tata Consultancy Services covering core generative AI fundamentals and concepts."
  },
  {
    id: "tcs-cybersecurity",
    title: "AI and Cybersecurity Awareness",
    issuer: "Tata Consultancy Services",
    expiryDate: "September 2026",
    isVerified: true,
    credentialNote: "Verified credential from Tata Consultancy Services focusing on AI applications and cybersecurity principles."
  }
];

export const quickStats = [
  { label: "Location", value: "Aligarh, India", icon: "MapPin" },
  { label: "Focus", value: "Frontend / Web Dev", icon: "Code" },
  { label: "Education", value: "BCA · MCA (IT)", icon: "GraduationCap" },
  { label: "Status", value: "Open to Opportunities", icon: "Sparkles" }
];
