// Define interfaces for different sections of the resume
interface PersonalInfo {
    name: string;
    contact: string;
    profilePicture: string;
}

interface Education {
    degree: string;
    institution: string;
    year: string;
}

interface TechSkills {
    skills: string[];
}

interface WorkExperience {
    jobTitle: string;
    company: string;
    duration: string;
}

// Example data for the resume
const personalInfo: PersonalInfo = {
    name: "MUZAMMIL RANA",
    contact: "Email: muzammilrana675@gmail.com | Phone: 03020295327",
    profilePicture: "https://via.placeholder.com/120" // Replace with your profile picture URL
};

const education: Education = {
    degree: "MATRIC",
    institution: "THE EDUCATORS",
    year: "2023-24"
};

const techSkills: TechSkills = {
    skills: [
        "JavaScript",
        "TypeScript",
        "HTML & CSS",
        "NEXT JS",
        "Node.js"
    ]
};

const workExperience: WorkExperience[] = [
    {
        jobTitle: "FRONT END DEVELOPER",
        company: "GOVERNER HOUSE KARACHI",
        duration: "2023 _ PRESENT"
    },
    {
        jobTitle: "Junior Developer",
        company: "NONE",
        duration: "2023 - 2024"
    }
];

// Functions to populate different sections of the resume
function populatePersonalInfo(info: PersonalInfo) {
    const nameElement = document.getElementById('name') as HTMLHeadingElement;
    const contactElement = document.getElementById('contact') as HTMLParagraphElement;
    const profilePictureElement = document.getElementById('profile-picture') as HTMLImageElement;

    nameElement.textContent = info.name;
    contactElement.textContent = info.contact;
    profilePictureElement.src = info.profilePicture;
}

function populateEducation(education: Education) {
    const educationElement = document.getElementById('education-content') as HTMLDivElement;

    educationElement.innerHTML = `
        <p><strong>Degree:</strong> ${education.degree}</p>
        <p><strong>Institution:</strong> ${education.institution}</p>
        <p><strong>Year:</strong> ${education.year}</p>
    `;
}

function populateTechSkills(skills: TechSkills) {
    const skillsElement = document.getElementById('skills') as HTMLUListElement;

    skillsElement.innerHTML = skills.skills.map(skill => `<li>${skill}</li>`).join('');
}

function populateWorkExperience(experiences: WorkExperience[]) {
    const experienceElement = document.getElementById('experience-content') as HTMLDivElement;

    experienceElement.innerHTML = experiences.map(exp => `
        <p><strong>Job Title:</strong> ${exp.jobTitle}</p>
        <p><strong>Company:</strong> ${exp.company}</p>
        <p><strong>Duration:</strong> ${exp.duration}</p>
        <hr>
    `).join('');
}

// Wait for the DOM to be fully loaded before populating the resume
document.addEventListener('DOMContentLoaded', () => {
    populatePersonalInfo(personalInfo);
    populateEducation(education);
    populateTechSkills(techSkills);
    populateWorkExperience(workExperience);
});
