// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mc.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import viteLogo from './assets/tech_logo/Vite.js.png';
import passportLogo from './assets/tech_logo/passport.png';
import mongooseLogo from './assets/tech_logo/mongoose.js.png';
import cloudinaryLogo from './assets/tech_logo/cloudinary.png';
import renderLogo from './assets/tech_logo/render.png';
import geminiLogo from './assets/tech_logo/gemini.png';
import numpyLogo from './assets/tech_logo/NumPy.png';
import pandasLogo from './assets/tech_logo/Pandas.png';
import matplotlibLogo from './assets/tech_logo/Matplotlib.png';
import seabornLogo from './assets/tech_logo/seaborn.png';
import scikitlearnLogo from './assets/tech_logo/scikit-learn.png';
import jupyterLogo from './assets/tech_logo/jupyter.png';
import anacondaLogo from './assets/tech_logo/anaconda.png';
import pycharmLogo from './assets/tech_logo/pycharm.png';

// Experience Section Logo's
import ngoLogo from './assets/company_logo/ngo-logo.png';
import gokboruLogo from './assets/company_logo/gokboru-logo.png';

// Education Section Logo's
import dpsLogo from './assets/education_logo/dps-logo.jpg';
import lpuLogo from './assets/education_logo/lpu-logo.png';

// Projects Section Logo's
import waywiseLogo from './assets/work_logo/waywise.png';
import wanderwiseLogo from './assets/work_logo/wanderwise.png';
import auraLogo from './assets/work_logo/aura.png';


export const SkillsInfo = [
  {
    title: "Programming Languages",
    skills: [
      { name: "C++", logo: cppLogo },
      { name: "C", logo: cLogo },
      { name: "Java", logo: javaLogo },
      { name: "Python", logo: pythonLogo },
      { name: "JavaScript", logo: javascriptLogo },
    ],
  },

  {
    title: "Frontend Development",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript (Frontend)", logo: javascriptLogo },
      { name: "React.js", logo: reactjsLogo },
      { name: "Redux", logo: reduxLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
      { name: "Material UI", logo: materialuiLogo },
      { name: "Vite", logo: viteLogo },
    ],
  },

  {
    title: "Backend Development",
    skills: [
      { name: "Node.js", logo: nodejsLogo },
      { name: "Express.js", logo: expressjsLogo },
      { name: "REST APIs", logo: null },
      { name: "Authentication (Passport.js)", logo: passportLogo },
      { name: "EJS (Templating)", logo: null },
      { name: "API Integration", logo: null },
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "Postman", logo: postmanLogo },
    ],
  },

  {
    title: "Databases, Cloud & DevOps",
    skills: [
      { name: "MongoDB", logo: mongodbLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "Mongoose", logo: mongooseLogo },
      { name: "MongoDB Atlas", logo: mongodbLogo },
      { name: "Cloudinary", logo: cloudinaryLogo },
      { name: "Render", logo: renderLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Netlify", logo: netlifyLogo },
      { name: "VS Code", logo: vscodeLogo },
    ],
  },

  {
    title: "Artificial Intelligence & Machine Learning",
    skills: [
      { name: "Generative AI", logo: null },
      { name: "Large Language Models (LLMs)", logo: null },
      { name: "Prompt Engineering", logo: null },
      { name: "Conversational AI", logo: null },
      { name: "NLP", logo: null },
      { name: "Gemini API", logo: geminiLogo },
      { name: "Whisper AI", logo: null },
      { name: "RAG (Retrieval-Augmented Generation)", logo: null },
      { name: "Embeddings", logo: null },
    ],
  },

  {
    title: "Data Science & Analytics",
    skills: [
      { name: "NumPy", logo: numpyLogo },
      { name: "Pandas", logo: pandasLogo },
      { name: "Matplotlib", logo: matplotlibLogo },
      { name: "Seaborn", logo: seabornLogo },
      { name: "Scikit-learn", logo: scikitlearnLogo },
      { name: "Data Cleaning & EDA", logo: null },
      { name: "Feature Engineering", logo: null },
      { name: "Jupyter Notebook", logo: jupyterLogo },
      { name: "Anaconda / Conda", logo: anacondaLogo },
      { name: "PyCharm", logo: pycharmLogo },
    ],
  },
];



  export const experiences = [
    {
      id: 0,
      img: gokboruLogo,
      role: "MERN Stack Developer",
      company: "Gokboru Tech",
      date: "June 2025 - July 2025",
      desc: "Completed a 6-week intensive MERN Stack Developer Summer Training (June 2 – July 12, 2025) at Gokboru Tech, focusing on building and deploying full-stack web applications using MongoDB, Express.js, React.js, and Node.js. Gained hands-on experience in creating responsive UIs with React, managing state using Hooks and Context API, and developing RESTful APIs with Express. Worked with MongoDB & Mongoose, implemented secure authentication via Passport.js, and deployed projects to Render, Vercel, and MongoDB Atlas. As the final project, developed WayWise — a full-stack travel listings platform inspired by Airbnb, featuring property listings, Cloudinary image uploads, MapTiler SDK maps, Passport.js authentication, and a review/rating system.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "Node JS",
        "Express JS",
        "Tailwind CSS",
        "MongoDb",
        "Mongoose",
        "REST APIs",
        "EJS",
        "Git",
        "SQL",
      ],
    },
    {
      id: 1,
      img: ngoLogo,
      role: "Public Health Intern",
      company: "Birsa Munda Welfare Foundation (NGO)",
      date: "June 2024 - July 2024",
      desc: "Contributed to a public health initiative in the Baridih region of Jamshedpur, assessing BCG vaccination eligibility among adults. Conducted extensive door-to-door surveys, collecting demographic and vaccination data, and identified high-risk individuals based on factors like TB exposure, BMI, diabetes, smoking history, and age. Raised awareness about tuberculosis prevention, collaborated with healthcare providers for vaccination support, analyzed survey data to identify barriers such as awareness and access issues, and prepared a structured project report with insights and recommendations.",
      skills: [
        "Field Research",
        "Data Collection",
        "Survey Research",
        "Public Health",
        "Community Outreach",
        "Communication",
      ],
    },
  ];

export const education = [
    {
      id: 0,
      img: lpuLogo,
      school: "Lovely Professional University",
      date: "Aug 2023 - July 2027",
      grade: "8.02 CGPA",
      desc: "Pursuing Bachelor of Technology (BTech) in Computer Science and Engineering at Lovely Professional University. The program focuses on core CS fundamentals, software engineering, data structures, algorithms, operating systems, database systems, web development, and emerging technologies. Engaged in academic projects, coding practice, and skill-building activities aimed at developing strong problem-solving and engineering abilities.",
      degree: "Bachelor of Technology - BTech (Computer Science & Engineering)",
    },
    {
      id: 1,
      img: dpsLogo,
      school: "Dayanand Public School",
      date: "Apr 2021 - Mar 2023",
      grade: "68.5%",
      desc: "Completed ISC Senior Secondary (12th) with a focus on Computer Science. Actively participated in Scouts & Guides and the Karate Club, developing leadership, discipline, and teamwork skills while maintaining academic performance in science and technology subjects.",
      degree: "ISC – Senior Secondary (12th), PCM with Computer Science",
    },
    {
      id: 2,
      img: dpsLogo,
      school: "Dayanand Public School",
      date: "Apr 2019 - Mar 2021",
      grade: "77.2%",
      desc: "Completed ICSE Secondary (10th) with strong academic performance. Participated in Scouts & Guides and the Karate Club, contributing to personal development and extracurricular involvement.",
      degree: "ICSE – Secondary (10th)",
    },
  ];

  export const projects = [
    {
      id: 0,
      title: "WayWise – Discover Smart Listings",
      description:
        "A full-stack travel listings platform inspired by Airbnb, built during the MERN Stack Developer Summer Training at Gokboru Tech. Users can create, edit, and manage property listings with Cloudinary-based image uploads. The platform includes secure authentication via Passport.js, interactive maps using MapTiler SDK, a review system with Starability CSS, and mobile-friendly responsive UI. Deployed on Render with MongoDB Atlas and cloud integrations.",
      image: waywiseLogo,
      tags: ["MongoDB", "Express.js", "Node.js", "Cloudinary", "Passport.js", "Bootstrap", "Mongoose", "REST APIs"],
      github: "https://github.com/AnupPandey04/WayWise",
      webapp: "https://waywise.onrender.com",
    },
    {
      id: 1,
      title: "WanderWise – Your AI Adventure Planner",
      description:
        "An AI-powered travel planning chatbot built using Node.js, Express.js, and the Gemini 1.5 Flash API. WanderWise generates personalized trip recommendations based on user queries. Features include an intelligent chat system, real-time destination suggestions, EJS-based dynamic views, EmailJS-powered contact form, responsive UI using Bootstrap 5, and smooth client-side interactivity.",
      image: wanderwiseLogo,
      tags: ["Node.js", "Express", "EJS", "Gemini AI", "Bootstrap", "JavaScript", "EmailJS", "Full-Stack Development"],
      github: "https://github.com/AnupPandey04/WanderWise-AI---chatbot",
      webapp: "https://wanderwise-ai-chatbot.onrender.com",
    },
    {
      id: 2,
      title: "Aura - Live Weather Application",
      description:
        "A responsive and interactive weather application built using React and Vite, powered by the OpenWeatherMap API. Users can search any city to view real-time weather details including temperature, humidity, feels-like data, min/max temperatures, and weather descriptions. Features dynamic weather-based icons, smooth UI, and complete responsiveness.",
      image: auraLogo,
      tags: ["React JS", "JavaScript", "API", "HTML", "CSS", "Responsive Design"],
      github: "https://github.com/AnupPandey04/Aura---A-Live-Weather-Application",
      webapp: "https://aura-a-live-weather-application.vercel.app/",
    },
  ];  