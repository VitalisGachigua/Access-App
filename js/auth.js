const registerForm = document.getElementById("register-form");
const loginForm = document.getElementById("login-form");

const fullName = document.getElementById("full-name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");

let users = JSON.parse(localStorage.getItem("users")) || [];

const admin = {
    email: "admin@access.com",
    password: "admin123",
    role: "admin"
};
if (registerForm) {

    registerForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const nameValue = fullName.value.trim();

        const emailValue = email.value.trim().toLowerCase();

        const passwordValue = password.value;

        const confirmValue = confirmPassword.value;

        if (
            nameValue === "" ||
            emailValue === "" ||
            passwordValue === "" ||
            confirmValue === ""
        ) {

            alert("Please fill in all fields.");

            return;

        }

        if (passwordValue !== confirmValue) {

            alert("Passwords do not match.");

            return;

        }

        const emailExists = users.some(function (user) {

            return user.email === emailValue;

        });

        if (emailExists) {

            alert("An account with this email already exists.");

            return;

        }

        const newUser = {

            id: Date.now(),

            name: nameValue,

            email: emailValue,

            password: passwordValue,

            role: "user"

        };

        users.push(newUser);

        localStorage.setItem(

            "users",

            JSON.stringify(users)

        );

        alert("Registration successful.");

        registerForm.reset();

        window.location.href = "login.html";

    });

}if (loginForm) {

    loginForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const emailValue = email.value.trim().toLowerCase();

        const passwordValue = password.value;

        if (
            emailValue === "" ||
            passwordValue === ""
        ) {

            alert("Please fill in all fields.");

            return;

        }

        if (
            emailValue === admin.email &&
            passwordValue === admin.password
        ) {

            localStorage.setItem(

                "currentUser",

                JSON.stringify(admin)

            );

            window.location.href = "admin.html";

            return;

        }

        const user = users.find(function (user) {

            return (
                user.email === emailValue &&
                user.password === passwordValue
            );

        });

        if (!user) {

            alert("Invalid email or password.");

            return;

        }

        localStorage.setItem(

            "currentUser",

            JSON.stringify(user)

        );

        window.location.href = "dashboard.html";

    });

}

function getCurrentUser() {

    return JSON.parse(localStorage.getItem("currentUser"));

}

function requireLogin() {

    const currentUser = getCurrentUser();

    if (!currentUser) {

        window.location.href = "login.html";

    }

}

function requireAdmin() {

    const currentUser = getCurrentUser();

    if (!currentUser || currentUser.role !== "admin") {

        window.location.href = "login.html";

    }

}

function logout() {

    localStorage.removeItem("currentUser");

    window.location.href = "login.html";

}