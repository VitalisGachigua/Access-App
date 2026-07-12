requireAdmin();

const welcomeMessage = document.getElementById("welcome-message");

const totalUsers = document.getElementById("total-users");

const savedCareersCount = document.getElementById("saved-careers-count");

const savedOpportunitiesCount = document.getElementById("saved-opportunities-count");

const usersList = document.getElementById("users-list");

const logoutBtn = document.getElementById("logout-btn");

const currentUser = getCurrentUser();

const users = JSON.parse(localStorage.getItem("users")) || [];

const savedCareers = JSON.parse(localStorage.getItem("savedCareers")) || [];

const savedOpportunities = JSON.parse(localStorage.getItem("savedOpportunities")) || [];

welcomeMessage.textContent = `Welcome, ${currentUser.role}`;

totalUsers.textContent = users.length;

savedCareersCount.textContent = savedCareers.length;

savedOpportunitiesCount.textContent = savedOpportunities.length;
function renderUsers() {

    usersList.innerHTML = "";

    for (let i = 0; i < users.length; i++) {

        const user = users[i];

        const userHTML = `
            <div class="bg-gray-50 border rounded-lg p-5 flex justify-between items-center">

                <div>

                    <h2 class="text-xl font-bold text-gray-800">
                        ${user.name}
                    </h2>

                    <p class="text-gray-600 mt-1">
                        ${user.email}
                    </p>

                    <p class="text-gray-500 mt-1">
                        Role: ${user.role}
                    </p>

                    <p class="text-gray-500 mt-1">
                        User ID: ${user.id}
                    </p>

                </div>

            </div>
        `;

        usersList.innerHTML += userHTML;

    }

}

renderUsers();
if (logoutBtn) {

    logoutBtn.addEventListener("click", function () {

        const confirmLogout = confirm("Are you sure you want to logout?");

        if (!confirmLogout) {

            return;

        }

        logout();

    });

}