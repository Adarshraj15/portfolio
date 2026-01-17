// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import vercelLogo from './assets/tech_logo/vercel.png';


// Project Section Logo's
import restaurantBooking from './assets/work_logo/restaurant_booking.png';
import obysagencyclone from './assets/work_logo/obys-agency-clone.png';
import foodordering from './assets/work_logo/food_ordering.png';

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'GSAP', logo: gsapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
    ],
  },
];

  
  export const education = [
    {
      id: 0,
      school: "Asansol Engineering College, Asansol",
      date: "Oct 2022 - June 2026",
      grade: "7.25+ CGPA",
      desc: "I am currently pursuing my Bachelor’s of technology in Information Technology from Asansol Engineering College and am in my final year of study. Throughout my academic journey, I have built a strong foundation in core computer science concepts including Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. Alongside academics, I actively work on practical projects to strengthen my development skills and gain real-world experience. I am passionate about learning new technologies and continuously improving my problem-solving and technical abilities as I prepare to begin my professional career in the tech industry.",
      degree: "Bachelor of Technology (B tech) in Information Technology",
    },

    {
      id: 1,
      school: "Crescent Public School, Bokaro steel city",
      date: "Apr 2020 - March 2022",
      grade: "72%",
      desc: "I completed my class 12 education from Crescent Public School, Bokaro steel city, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
      degree: "CBSE(XII) - PCM with Computer Science",
    },
    {
      id: 2,
      school: "Gourav Awas Uchcha Vidyalaya, Bokaro steel city",
      date: "Apr 2018 - March 2020",
      grade: "71%",
      desc: "I completed my class 10 education from Gourav Awas Uchcha Vidyalaya, Bokaro steel city, under the CBSE board, where I studied Science with Computer.",
      degree: "CBSE(X), Science with Computer Application",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Restaurant Booking Web Application",
      description:"Developed a full-stack restaurant website that allows users to book tables and order food online. Built a responsive and user-friendly frontend using React.js with reusable components. Implemented backend APIs using Node.js and Express.js to handle bookings, orders, and user requests. Used MongoDB for storing user details, table reservations, and order data.",
      image: restaurantBooking,
      tags: ["React JS", "JavaScript", "API", "Node.js", "Express.js", "Mongodb" ],
      github: "https://github.com/Adarshraj15/RESTURANT",
      webapp: "https://restaurant-booking-indol.vercel.app/",
    },
    {
      id: 1,
      title: "Obys-Agency Clone",
      description:
        "Created a pixel-perfect front-end clone of the Obys Agency website with animations and interactive elements. Integrated GSAP and ScrollTrigger deliver rich user experiences through advanced animations and scroll effect. Applied strong UI/UX principles to closely match the look and feel of the original website.",
      image: obysagencyclone,
      tags: ["HTML", "CSS", "JavaScript", "ScrollTrigger", "GSAP"],
      github: "https://github.com/Adarshraj15/Clone_Obys_Agency",
      webapp: "https://obys-agency-two-dusky.vercel.app/",
    },
    {
      id: 2,
      title: "Food Ordering Application",
      description:
        "food ordering web application using modern web technologies. Integrated live REST APIs of a popular food delivery platform to fetch real-time restaurant and menu data.",
      image: foodordering,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Adarshraj15/Food-App",
      webapp: "https://foodapp-3000.vercel.app/",
    },
    
  ];  