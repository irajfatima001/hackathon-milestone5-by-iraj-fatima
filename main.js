var form = document.getElementById("resumeForm");
var resumeDisplayElement = document.getElementById("resume-display");
var shareableLinkContainer = document.getElementById("shareable-link-container");
var shareableLinkElement = document.getElementById("shareable-link");
var downloadPdfButton = document.getElementById("download-pdf");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    var username = document.getElementById("username")
        .value;
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var contact = document.getElementById("contact")
        .value;
    var address = document.getElementById("address")
        .value;
    var education = document.getElementById("education").value;
    var experience = document.getElementById("experience").value;
    var projects = document.getElementById("projects")
        .value;
    var certifications = document.getElementById("certifications").value;
    var skills = document.getElementById("skills")
        .value;
    var resumeData = {
        name: name,
        email: email,
        contact: contact,
        address: address,
        education: education,
        experience: experience,
        certifications: certifications,
        projects: projects,
        skills: skills,
    };
    localStorage.setItem(username, JSON.stringify(resumeData));
    var resumeHTML = "\n<h2>Shareable Resume</h2>\n<h3>Personal Information</h3>\n<p><b>Name:</b> <span contenteditable=\"true\">".concat(name, "</span></p>\n<p><b>Email:</b> <span contenteditable=\"true\">").concat(email, "</span></p>\n<p><b>Phone:</b> <span contenteditable=\"true\">").concat(contact, "</span></p>\n<p><b>Phone:</b> <span contenteditable=\"true\">").concat(address, "</span></p>\n<h3>Education</h3>\n<p contenteditable=\"true\">").concat(education, "</p>\n<h3>Experience</h3>\n<p contenteditable=\"true\">").concat(experience, "</p>\n<h3>Projects</h3>\n<p contenteditable=\"true\">").concat(projects, "</p>\n<h3>Certifications</h3>\n<p contenteditable=\"true\">").concat(certifications, "</p>\n<h3>Skills</h3>\n<p contenteditable=\"true\">").concat(skills, "</p>\n");
    resumeDisplayElement.innerHTML = resumeHTML;
    var resumeOutputElement = document.getElementById("resume-display");
    if (resumeOutputElement) {
        resumeOutputElement.innerHTML = resumeHTML;
        // resumeOutputElement.classList.remove("hidden");
        // const buttonContainer = document.createElement("div");
        // buttonContainer.id = "buttonContainer";
        // resumeOutputElement.appendChild(buttonContainer);
        var shareableURL = "".concat(window.location.origin, "?username=").concat(encodeURIComponent(username));
        shareableLinkContainer.style.display = "block";
        shareableLinkElement.href = shareableURL;
        shareableLinkElement.textContent = shareableURL;
    }
    ;
    downloadPdfButton.addEventListener("click", function () {
        window.print();
    });
    window.addEventListener("DOMContentLoaded", function () {
        var urlParams = new URLSearchParams(window.location.search);
        var username = urlParams.get("username");
        if (username) {
            var savedResumeData = localStorage.getItem(username);
            if (savedResumeData) {
                var resumeData_1 = JSON.parse(savedResumeData);
                document.getElementById("username").value =
                    username;
                document.getElementById("name").value =
                    resumeData_1.name;
                document.getElementById("email").value =
                    resumeData_1.email;
                document.getElementById("contact").value =
                    resumeData_1.contact;
                document.getElementById("address").value =
                    resumeData_1.address;
                document.getElementById("education").value =
                    resumeData_1.education;
                document.getElementById("experience").value =
                    resumeData_1.experience;
                document.getElementById("projects").value =
                    resumeData_1.projects;
                document.getElementById("certifications").value =
                    resumeData_1.certifications;
                document.getElementById("skills").value =
                    resumeData_1.skills;
            }
        }
    });
});
