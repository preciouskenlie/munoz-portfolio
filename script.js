// A. Toggle Dark Mode
const themeBtn = document.getElementById("themeBtn");
themeBtn.textContent = "Dark Mode";

themeBtn.addEventListener("click", function () {
document.body.classList.toggle("dark-mode");
themeBtn.textContent = document.body.classList.contains("dark-mode") ? "Light Mode" : "Dark Mode";
});

// B. Edit Job Title
const editJobBtn = document.getElementById("editJobBtn");
editJobBtn.addEventListener("click", function () {
const newTitle = prompt("Enter new job title:");
if (newTitle) document.getElementById("jobTitle").textContent = newTitle;
});

// C. Show / Hide Skills
const toggleSkillsBtn = document.getElementById("toggleSkillsBtn");
const skillsSection = document.getElementById("skillsSection");
const skillsList = document.getElementById("skillsList");

toggleSkillsBtn.addEventListener("click", function () {
if (skillsList.style.display === "none") {
skillsList.style.display = "block";
toggleSkillsBtn.textContent = "Hide Skills";
} else {
skillsList.style.display = "none";
toggleSkillsBtn.textContent = "Show Skills";
}
});

// D. Live Character Counter
const msgBox = document.getElementById("msgBox");
const counter = document.getElementById("counter");

msgBox.addEventListener("keyup", function () {
counter.textContent = 200 - msgBox.value.length;
});

// E. Form Validation (Send Button)
const sendBtn = document.getElementById("sendBtn");
sendBtn.addEventListener("click", function () {
const name = document.getElementById("nameField").value;
const email = document.getElementById("emailField").value;

if (name === "" || email === "") {
alert("Please fill in Name and Email.");
return false;
}

alert("Hello! Your message is sent!");
});

// F. Auto Date in Footer
const dateDisplay = document.getElementById("dateDisplay");
dateDisplay.textContent = "Today: " + new Date().toDateString();

// G. Greeting Based on Time
window.onload = function () {
const hour = new Date().getHours();
let greeting = "Good Evening";

if (hour < 12) greeting = "Good Morning";
else if (hour < 18) greeting = "Good Afternoon";

alert(greeting + " Precious!");

if (skillsList) skillsList.style.display = "block";
if (toggleSkillsBtn) toggleSkillsBtn.textContent = "Hide Skills";
};