// Collecting elements
var resumeForm = document.getElementById('resumeform');
var nameInput = document.getElementById('name');
var phoneInput = document.getElementById('phone');
var emailInput = document.getElementById('email');
var qualiInput = document.getElementById('Quali');
var collInput = document.getElementById('coll');
var skillsInput = document.getElementById('skills');
var addSkillButton = document.getElementById('addSkillButton');
var skillsList = document.getElementById('skillsList');
var skillError = document.getElementById('skillError');
var comInput = document.getElementById('com');
var posiInput = document.getElementById('posi');
var resumeDataDiv = document.getElementById('resumeData');
// Initialize an array to store the skills
var skills = [];
// Function to add skills
var addSkill = function () {
    var skill = skillsInput.value.trim();
    // Validate input (prevent empty skills)
    if (skill === "") {
        skillError.textContent = "Skill cannot be empty!";
        return;
    }
    skillError.textContent = ""; // Clear error message
    // Add skill to the array
    skills.push(skill);
    // Create a new list item to display the skill
    var li = document.createElement('li');
    li.textContent = skill;
    skillsList.appendChild(li);
    // Clear the input field
    skillsInput.value = "";
};
// Handle skill addition on button click
addSkillButton.addEventListener('click', addSkill);
// Handle form submission
resumeForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission
    // Collect data from form fields
    var name = nameInput.value;
    var email = emailInput.value;
    // Validate that the form is filled correctly
    if (name === "" || email === "" || skills.length === 0) {
        alert("Please fill in all fields and add at least one skill.");
        return;
    }
    // Display the collected data
    resumeDataDiv.innerHTML = "\n   \n<div class=\"container\">\n\t\t<div class=\"box\">\n\t<header class=\"header\">\n\t\t<div class=\"f_left\">\n\t\t\t<h2 class=\"text_large text_uppercase\">".concat(name, "</h2>\n\t\t\t<h3 class=\"text_light  text_small\">").concat(phoneInput.value, "</h3>\n\t\t\t<h3 class=\"text_light text_small\">").concat(email, "</h3>\n\t\t</div>\n\t\t\n\t</header>\t\n\t<section class=\"sec_edu\">\n\t\t<div>\n\t\t\t<h2 class=\"text_dark text_medium\">Education</h2>\n\t\t\t<h3 class=\"custom_style  text_small\"><b>").concat(qualiInput.value, "</b></h3>\n\t\t\t<p class=\"text_light  text_small\">").concat(collInput.value, "</p>\n\t\t\t\n\t\t</div>\n\n\t</section>\n\t<section class=\"sec_skills\">\n\t\t<div>\n\t\t\t<h2 class=\"text_dark text_medium\" id=\"skills\">Skills</h2>\n\t\t\t<ul id=\"Skills_list\">\n\t\t\t\t<li class=\"text_light  text_small\">").concat(skills.join(', '), "</li>\n\t\t\t\t\n\t\t</div>\t\t\n\t</section>\n\t<section class=\"sec_workspace\">\n\t\t<div>\n\t\t\t<h2 class=\"text_dark text_medium\">Work Experience</h2>\n\t\t\t<h3 class=\"custom_style  text_small\">").concat(posiInput.value, "</h3>\n\t\t\t<h4 class=\"text_small text_spec\">").concat(comInput.value, "</h4>\n\t\t\t\n\t\t</div>\n\t</section>\n\t</div>\n</div>\n\n<script src=\"script/script.js\"></script>\n\n    ");
    // Clear the form after submission
    resumeForm.reset();
    skillsList.innerHTML = ''; // Clear the skills list
    skills = []; // Reset the skills array
});
