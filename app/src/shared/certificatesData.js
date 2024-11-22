import Image from 'next/image';

// Function to create slugs from titles
export const createSlug = (title) => title.toLowerCase().replace(/\s+/g, '-');

// Array of certificate objects
export const certificates = [
    { 
        title: "Cookoff 9", 
        path: "/certificates/COOKOFF9_CODECHEF_22-11-2024.png", 
        tags: ["codechef", "cookoff", "competitive programming"] 
    },
    { 
        title: "Fundamentals", 
        path: "/certificates/FUNDAMENTALS_PROGRAMMINGHUB_05-08-2024.jpg", 
        tags: ["fundamentals", "programminghub"] 
    },
    { 
        title: "C & PLT", 
        path: "/certificates/C&PLT_SOFTECH_20-06-2024.jpg", 
        tags: ["softech", "c", "plt"] 
    },
    { 
        title: "NodeJS", 
        path: "/certificates/NODEJS_PROGRAMMINGHUB_05-08-2024.jpg", 
        tags: ["nodejs", "programminghub"] 
    },
    { 
        title: "Python 3", 
        path: "/certificates/PYTHON3_25-10-2024.jpg", 
        tags: ["python3", "programminghub"] 
    },
    { 
        title: "Docker", 
        path: "/certificates/DOCKER_PROGRAMMINGHUB_25-10-2024.jpg", 
        tags: ["docker", "programminghub", "ci/cd pipelines"] 
    },    
    { 
        title: "IT Basics", 
        path: "/certificates/ITBASICS_PROGRAMMINGHUB_27-10-2024.jpg", 
        tags: ["it", "programminghub", "basics"] 
    },
];
