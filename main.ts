const form = document.getElementById("resumeForm") as HTMLFormElement;
const resumeDisplayElement = document.getElementById(
  "resume-display"
) as HTMLDivElement;

const shareableLinkContainer = document.getElementById(
  "shareable-link-container"
) as HTMLDivElement;

const shareableLinkElement = document.getElementById(
  "shareable-link"
) as HTMLAnchorElement;
const downloadPdfButton = document.getElementById(
  "download-pdf"
) as HTMLButtonElement;
form.addEventListener("submit", (event: Event) => {
  event.preventDefault(); 
  const username = (document.getElementById("username") as HTMLInputElement)
    .value;
  const name = (document.getElementById("name") as HTMLInputElement).value;
  const email = (document.getElementById("email") as HTMLInputElement).value;
  const contact = (document.getElementById("contact") as HTMLInputElement)
    .value;
  const address = (document.getElementById("address") as HTMLInputElement)
    .value;
  const education = (
    document.getElementById("education") as HTMLTextAreaElement
  ).value;
  const experience = (
    document.getElementById("experience") as HTMLTextAreaElement
  ).value;
  const projects = (document.getElementById("projects") as HTMLTextAreaElement)
    .value;
  const certifications = (
    document.getElementById("certifications") as HTMLTextAreaElement
  ).value;
  const skills = (document.getElementById("skills") as HTMLTextAreaElement)
    .value;
  
  const resumeData = {
    name,
    email,
    contact,
    address,
    education,
    experience,
    certifications,
    projects,
    skills,
  };
  localStorage.setItem(username, JSON.stringify(resumeData));
  const resumeHTML = `
<h2>Shareable Resume</h2>
<h3>Personal Information</h3>
<p><b>Name:</b> <span contenteditable="true">${name}</span></p>
<p><b>Email:</b> <span contenteditable="true">${email}</span></p>
<p><b>Phone:</b> <span contenteditable="true">${contact}</span></p>
<p><b>Phone:</b> <span contenteditable="true">${address}</span></p>
<h3>Education</h3>
<p contenteditable="true">${education}</p>
<h3>Experience</h3>
<p contenteditable="true">${experience}</p>
<h3>Projects</h3>
<p contenteditable="true">${projects}</p>
<h3>Certifications</h3>
<p contenteditable="true">${certifications}</p>
<h3>Skills</h3>
<p contenteditable="true">${skills}</p>
`;
  resumeDisplayElement.innerHTML = resumeHTML;
const resumeOutputElement = document.getElementById("resume-display");
      if (resumeOutputElement) {
        resumeOutputElement.innerHTML = resumeHTML;
        
const shareableURL = `${window.location.origin}?username=${encodeURIComponent(
 username
)}`;
  
  shareableLinkContainer.style.display = "block";
  shareableLinkElement.href = shareableURL;
  shareableLinkElement.textContent = shareableURL;
};

downloadPdfButton.addEventListener("click", () => {
 window.print();
});

window.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const username = urlParams.get("username");
  if (username) {
    const savedResumeData = localStorage.getItem(username);
    if (savedResumeData) {
      const resumeData = JSON.parse(savedResumeData);
      (document.getElementById("username") as HTMLInputElement).value =
        username;
      (document.getElementById("name") as HTMLInputElement).value =
        resumeData.name;
      (document.getElementById("email") as HTMLInputElement).value =
        resumeData.email;
      (document.getElementById("contact") as HTMLInputElement).value =
        resumeData.contact;
      (document.getElementById("address") as HTMLInputElement).value =
        resumeData.address;
      (document.getElementById("education") as HTMLTextAreaElement).value =
        resumeData.education;
      (document.getElementById("experience") as HTMLTextAreaElement).value =
        resumeData.experience;
      (document.getElementById("projects") as HTMLTextAreaElement).value =
        resumeData.projects;
      (document.getElementById("certifications") as HTMLTextAreaElement).value =
        resumeData.certifications;
      (document.getElementById("skills") as HTMLTextAreaElement).value =
        resumeData.skills;
    }
  }
})

});


