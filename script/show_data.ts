// Collecting elements
let resumeForm = document.getElementById('resumeform') as HTMLFormElement;
let nameInput = document.getElementById('name') as HTMLInputElement;
let phoneInput = document.getElementById('phone') as HTMLInputElement;
let emailInput = document.getElementById('email') as HTMLInputElement;
let qualiInput = document.getElementById('Quali') as HTMLInputElement;
let collInput = document.getElementById('coll') as HTMLInputElement;
let skillsInput = document.getElementById('skills') as HTMLInputElement;
let addSkillButton = document.getElementById('addSkillButton') as HTMLButtonElement;
let skillsList = document.getElementById('skillsList') as HTMLUListElement;
let skillError = document.getElementById('skillError') as HTMLDivElement;
let comInput = document.getElementById('com') as HTMLInputElement;
let posiInput = document.getElementById('posi') as HTMLInputElement;
let resumeDataDiv = document.getElementById('resumeData') as HTMLDivElement;

// Initialize an array to store the skills
let skills: string[] = [];

// Function to add skills
let addSkill = () => {
  let skill = skillsInput.value.trim();

  // Validate input (prevent empty skills)
  if (skill === "") {
    skillError.textContent = "Skill cannot be empty!";
    return;
  }
  skillError.textContent = ""; // Clear error message

  // Add skill to the array
  skills.push(skill);

  // Create a new list item to display the skill
  let li = document.createElement('li');
  li.textContent = skill;
  skillsList.appendChild(li);

  // Clear the input field
  skillsInput.value = "";
};

// Handle skill addition on button click
addSkillButton.addEventListener('click', addSkill);

// Handle form submission
resumeForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent the default form submission

  // Collect data from form fields
  let name = nameInput.value;
  let email = emailInput.value;
  


  // Validate that the form is filled correctly
  if (name === "" || email === "" || skills.length === 0) {
    alert("Please fill in all fields and add at least one skill.");
    return;
  }

  // Display the collected data
  resumeDataDiv.innerHTML = `
   
<div class="container">
		<div class="box">
	<header class="header">
		<div class="f_left">
			<h2 class="text_large text_uppercase">${name}</h2>
			<h3 class="text_light  text_small">${phoneInput.value}</h3>
			<h3 class="text_light text_small">${email}</h3>
		</div>
		
	</header>	
	<section class="sec_edu">
		<div>
			<h2 class="text_dark text_medium">Education</h2>
			<h3 class="custom_style  text_small"><b>${qualiInput.value}</b></h3>
			<p class="text_light  text_small">${collInput.value}</p>
			
		</div>

	</section>
	<section class="sec_skills">
		<div>
			<h2 class="text_dark text_medium" id="skills">Skills <span id="sub_title">Click Me</span></h2>
			<ul id="Skills_list">
				<li class="text_light  text_small">${skills.join(', ')}</li>
				
		</div>		
	</section>
	<section class="sec_workspace">
		<div>
			<h2 class="text_dark text_medium">Work Experience</h2>
			<h3 class="custom_style  text_small">${posiInput.value}</h3>
			<h4 class="text_small text_spec">${comInput.value}</h4>
			
		</div>
	</section>
	</div>
</div>

<script src="script/script.js"></script>

    `;

  // Clear the form after submission
  resumeForm.reset();
  skillsList.innerHTML = ''; // Clear the skills list
  skills = []; // Reset the skills array
});
