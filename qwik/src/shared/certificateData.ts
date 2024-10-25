import CandPLT from '../media/certificates/C&PLT_SOFTECH_20-06-2024.jpg?jsx';
import NodeJS from '../media/certificates/NODEJS_PROGRAMMINGHUB_05-08-2024.jpg?jsx';
import Fundamentals from '../media/certificates/FUNDAMENTALS_PROGRAMMINGHUB_05-08-2024.jpg?jsx';
import Python3 from "../media/certificates/PYTHON3_25-10-2024.jpg?jsx";
import Docker from "../media/certificates/DOCKER_25-10-2024.jpg?jsx";
export const createSlug = (title: string) => title.toLowerCase().replace(/\s+/g, '-');

export const certificates = [
    { 
        "title": "Fundamentals", 
        "path": Fundamentals, 
        "tags": ["fundamentals","programminghub"] 
    },
    { 
        "title": "C & PLT", 
        "path": CandPLT, 
        "tags": ["softech", "c", "plt"] 
    },
    { 
        "title": "NodeJS", 
        "path": NodeJS, 
        "tags": ["nodejs","programminghub"] 
    },
    { 
        "title": "Python 3", 
        "path": Python3, 
        "tags": ["python3","programminghub"] 
    },
    { 
        "title": "Docker", 
        "path": Docker, 
        "tags": ["docker","programminghub", "ci/cd pipelines"] 
    }
];