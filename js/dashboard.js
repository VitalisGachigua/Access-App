const welcomeMessage = document.getElementById("welcome-message");
const quizResult = document.getElementById("quiz-result");
const savedCareersContainer = document.getElementById("saved-careers");
const savedOpportunitiesContainer = document.getElementById("saved-opportunities");
const userEmail = document.getElementById("user-email");
const logoutBtn = document.getElementById("logout-btn");

const currentUser = JSON.parse(localStorage.getItem("currentUser"));

const savedCareers = JSON.parse(localStorage.getItem("savedCareers")) || [];
const savedOpportunities = JSON.parse(localStorage.getItem("savedOpportunities")) || [];
const latestQuizResult = localStorage.getItem("quizResult");

const careers = [
    "Software Engineer",
    "Doctor",
    "Business Manager",
    "Civil Engineer",
    "Graphic Designer"
];

const opportunities = [
    {
        id: 1,
        title: "Software Engineering Internship"
    },
    {
        id: 2,
        title: "Medical Job Shadowing"
    },
    {
        id: 3,
        title: "Finance Internship"
    },
    {
        id: 4,
        title: "Civil Engineering Internship"
    },
    {
        id: 5,
        title: "Graphic Design Internship"
    },
    {
        id: 6,
        title: "Data Analytics Internship"
    },
    {
        id: 7,
        title: "Business Analyst Internship"
    },
    {
        id: 8,
        title: "Architecture Job Shadowing"
    },
    {
        id: 9,
        title: "Pharmacy Internship"
    },
    {
        id: 10,
        title: "UI/UX Design Internship"
    }
];

function loadUser() {

    if (currentUser) {

        welcomeMessage.textContent =
            `Welcome, ${currentUser.name}!`;

        userEmail.textContent =
            currentUser.email;

    } else {

        welcomeMessage.textContent = "Welcome!";
        userEmail.textContent = "Guest User";

    }

}

function loadQuizResult() {

    if (latestQuizResult) {

        quizResult.textContent = latestQuizResult;

    } else {

        quizResult.textContent = "No quiz taken yet.";

    }

}

function renderSavedCareers() {

    savedCareersContainer.innerHTML = "";

    if (savedCareers.length === 0) {

        savedCareersContainer.innerHTML =
            "<p class='text-gray-500'>No saved careers.</p>";

        return;

    }

    for (let i = 0; i < savedCareers.length; i++) {

        savedCareersContainer.innerHTML += `
            <div class="bg-indigo-50 rounded-lg p-3">
                ${savedCareers[i]}
            </div>
        `;

    }

}

function renderSavedOpportunities() {

    savedOpportunitiesContainer.innerHTML = "";

    if (savedOpportunities.length === 0) {

        savedOpportunitiesContainer.innerHTML =
            "<p class='text-gray-500'>No saved opportunities.</p>";

        return;

    }

    for (let i = 0; i < savedOpportunities.length; i++) {

        const opportunity = opportunities.find(function(item){

            return item.id === savedOpportunities[i];

        });

        if(opportunity){

            savedOpportunitiesContainer.innerHTML += `
                <div class="bg-indigo-50 rounded-lg p-3">
                    ${opportunity.title}
                </div>
            `;

        }

    }

}
function initializeDashboard() {

    if (!currentUser) {

        alert("Please log in first.");

        window.location.href = "login.html";

        return;

    }

    loadUser();

    loadQuizResult();

    renderSavedCareers();

    renderSavedOpportunities();

}

logoutBtn.addEventListener("click", function () {

    const confirmLogout = confirm("Are you sure you want to log out?");

    if (!confirmLogout) {

        return;

    }

    localStorage.removeItem("currentUser");

    window.location.href = "login.html";

});

window.addEventListener("load", function () {

    initializeDashboard();

});