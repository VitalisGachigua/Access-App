# Access

Access is a web-based career exploration platform designed to help students discover career paths, assess their interests, and explore internship and job-shadowing opportunities.

---

## Features

### User Authentication
- User registration
- User login
- Role-based authentication
- Admin login
- Logout functionality

### Career Explorer
- Browse careers
- Search careers
- Filter careers by category
- Learn More modal
- Save and unsave careers

### Career Assessment Quiz
- Interactive multiple-choice quiz
- Career recommendation based on answers
- Restart quiz

### Opportunities Board
- Browse internship opportunities
- Search opportunities
- Filter opportunities
- View opportunity details
- Save and unsave opportunities

### User Dashboard
- Welcome message
- View saved careers
- View saved opportunities
- Quick navigation

### Admin Dashboard
- View total registered users
- View total saved careers
- View total saved opportunities
- View all registered users
- Secure admin-only access

---

## Project Structure

```
Access/

│── index.html
│── login.html
│── register.html
│── careers.html
│── quiz.html
│── opportunities.html
│── dashboard.html
│── admin.html

│── auth.js
│── career.js
│── quiz.js
│── opportunities.js
│── dashboard.js
│── admin.js
```

---

## Authentication

### Normal User

Users can:

- Register
- Login
- Browse careers
- Take the career quiz
- Save careers
- Save opportunities
- Access the dashboard

### Administrator

Admin can:

-   Check number redistered users
-   Check number of saved opportunities
-   Check number of saved careers

```

---

## Local Storage

The application stores data using the browser's localStorage.

