import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    // java,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    // {
    //     imageUrl: java,
    //     name: "java",
    //     type: "Backend",
    // },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    // {
    //     imageUrl: mongodb,
    //     name: "MongoDB",
    //     type: "Database",
    // },
    // {
    //     imageUrl: motion,
    //     name: "Motion",
    //     type: "Animation",
    // },
    // {
    //     imageUrl: mui,
    //     name: "Material-UI",
    //     type: "Frontend",
    // },
    // {
    //     imageUrl: nextjs,
    //     name: "Next.js",
    //     type: "Frontend",
    // },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    // {
    //     imageUrl: redux,
    //     name: "Redux",
    //     type: "State Management",
    // },
    // {
    //     imageUrl: sass,
    //     name: "Sass",
    //     type: "Frontend",
    // },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    // {
    //     imageUrl: typescript,
    //     name: "TypeScript",
    //     type: "Frontend",
    // }
];

export const experiences = [
    {
        title: "Frontend Developer",
        company_name: "Faculty of Medicine, MUN",
        // icon: MUN,
        iconBg: "#accbe1",
        date: "Jan 2023 - Present",
        points: [
            "Design the website's visual layout and interaction features, work with Dr. Anil Zechariah to finalize the website proposal.",
            "Build the website independently using CSS, HTML, and JavaScript,implement user-friendly accessibility across various devices.",
            "Analyze website data, test responsiveness and efficiency, debugging and fixing compatibility issues.",
        ],
    },
    {
        title: "Student Services Support Assistant",
        company_name: "Centre for Innovation in Teaching and Learning, MUN",
        // icon: MUN,
        iconBg: "#fbc3bc",
        date: "Sept 2022 - Present",
        points: [
            "Work as part of the student services team in the Exam Delivery Unit to provide direct support to online education students, helping them find quick resolutions to problems.",
            "Use Banner Student and other support software to process incoming assignments, mail, requests and inquiries from faculty and students, as well as via telephone, email, and in person.",
            "Assist in preparing and distributing materials, and coordinating activities associated with the flow of work materials, exams, and assignments at the Distribution Centre.",
        ],
    },
    {
        title: "Data Analyst",
        company_name: "Faculty of Computer Science, MUN",
        // icon: MUN,
        iconBg: "#b7e4c7",
        date: "May 2022 - Aug 2023",
        points: [
            "Worked in collaboration with Dr. Karteek Popuri and his team of graduate students on performing data profiling and data cleansing for three-dimensional (3D) medical images generated by diverse groups of collaborators (scientists and clinicians).",
            "Built ground-truth data sets for training machine-learning algorithms.",
        ],
    },
    {
        title: "Network Operations Centre Student Assistant",
        company_name: "Information Technology Services, MUN",
        // icon: MUN,
        iconBg: "#a2d2ff",
        date: "Sept 2021 - Apr 2022",
        points: [
            "Monitored the network infrastructure, including DataCom, High-Speed Internet, VoIP and IP, and managed overall network health.",
            "Ensured timely troubleshooting and resolution of incident, change, problem, and configuration management as first-level client support.",
        ],
    },
    {
        title: "Project Manager",
        company_name: "Beijing Weilaiheikeji Co.,Ltd, BJ, CHN",
        // icon: MUN,
        iconBg: "#a2d2ff",
        date: "Jan 2019 - Mar 2020",
        points: [
            "Acted as liaison between customers and IT teams to refine the product and incorporate features based on market demands.",
            "Partnered with the IT department to drive and manage the solution development process and ensure the team understood the direction.",
            "Attended 100+ presentations and project reports as a speaker and prepared Excel spreadsheets, X-mind and PowerPoint decks.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: summiz,
        theme: 'btn-back-red',
        name: 'Vascular Physiology Laboratory',
        description: 'Build the website independently using CSS, HTML, and JavaScript,implement user-friendly accessibility across various devices.',
        link: 'https://munphysiology.ca',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Snakey Snakey Game',
        description: 'Each player is given three lives, and their scores are accumulated throughout the game. The game stands out with its customizable snakeheads, allowing players to personalize their gaming experience. Additionally, the game features a flexible pause function, enabling players to pause and resume the game at their convenience.',
        link: 'https://projects.cs.nott.ac.uk/psyql3/luqiao_source_code.git',
    },
    // {
    //     iconUrl: car,
    //     theme: 'btn-back-blue',
    //     name: 'Car Finding App',
    //     description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
    //     link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
    // },
    // {
    //     iconUrl: snapgram,
    //     theme: 'btn-back-pink',
    //     name: 'Full Stack Instagram Clone',
    //     description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
    //     link: 'https://github.com/adrianhajdin/social_media_app',
    // },
    // {
    //     iconUrl: estate,
    //     theme: 'btn-back-black',
    //     name: 'Real-Estate Application',
    //     description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
    //     link: 'https://github.com/adrianhajdin/projects_realestate',
    // },
    // {
    //     iconUrl: summiz,
    //     theme: 'btn-back-yellow',
    //     name: 'AI Summarizer Application',
    //     description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
    //     link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    // },
];