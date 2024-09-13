// Example data for the resume
var personalInfo = {
    name: "MUZAMMIL RANA",
    contact: "Email: muzammilrana675@gmail.com | Phone: 03020295327",
    profilePicture: "https://via.placeholder.com/120" // Replace with your profile picture URL
};
var education = {
    degree: "MATRIC",
    institution: "THE EDUCATORS",
    year: "2023-24"
};
var techSkills = {
    skills: [
        "JavaScript",
        "TypeScript",
        "HTML & CSS",
        "NEXT JS",
        "Node.js"
    ]
};
var workExperience = [
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
function populatePersonalInfo(info) {
    var nameElement = document.getElementById('name');
    var contactElement = document.getElementById('contact');
    var profilePictureElement = document.getElementById('profile-picture');
    nameElement.textContent = info.name;
    contactElement.textContent = info.contact;
    profilePictureElement.src = info.profilePicture;
}
function populateEducation(education) {
    var educationElement = document.getElementById('education-content');
    educationElement.innerHTML = "\n        <p><strong>Degree:</strong> ".concat(education.degree, "</p>\n        <p><strong>Institution:</strong> ").concat(education.institution, "</p>\n        <p><strong>Year:</strong> ").concat(education.year, "</p>\n    ");
}
function populateTechSkills(skills) {
    var skillsElement = document.getElementById('skills');
    skillsElement.innerHTML = skills.skills.map(function (skill) { return "<li>".concat(skill, "</li>"); }).join('');
}
function populateWorkExperience(experiences) {
    var experienceElement = document.getElementById('experience-content');
    experienceElement.innerHTML = experiences.map(function (exp) { return "\n        <p><strong>Job Title:</strong> ".concat(exp.jobTitle, "</p>\n        <p><strong>Company:</strong> ").concat(exp.company, "</p>\n        <p><strong>Duration:</strong> ").concat(exp.duration, "</p>\n        <hr>\n    "); }).join('');
}
// Wait for the DOM to be fully loaded before populating the resume
document.addEventListener('DOMContentLoaded', function () {
    populatePersonalInfo(personalInfo);
    populateEducation(education);
    populateTechSkills(techSkills);
    populateWorkExperience(workExperience);
});
