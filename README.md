# MERN Bookstore Application

A simple **Bookstore CRUD application** built with the MERN stack:

- **Frontend:** React, HTML, CSS, JavaScript  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB  
- **Features:** CRUD operations for books, Google login authentication  
- **Deployment:** Dockerized for easy setup  

---

## Features

- Add, view, update, and delete books  
- Google login authentication  
- Fully functional RESTful API  
- Docker support for easy containerization  

---

## Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v16 or above recommended)  
- [MongoDB](https://www.mongodb.com/) or [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)  
- [Docker](https://www.docker.com/get-started) (if using Docker)  
- Google account for OAuth login  

---

## Getting Started
Things you need to install before starting:

1. Node.js + npm

2. MongoDB (local or Atlas)

3. Git

4. Docker

5. Google account for Auth

Then Start by cloning the repo

### 1. Clone the repository

```bash
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>
```
### 2. Backend dependencies

```bash
cd backend
npm install
```

### 3. Frontend dependencies

```bash
cd ../frontend
npm install
```
### 4. Setting Up Environment Variables

Create a .env file in the backend folder with the following variables:
```bash
MONGO_URI=your_mongodb_connection_string
GOOGLE_CLIENT_ID=your_google_client_id
SESSION_SECRET=your_session_secret
PORT=5000
```

### 5. Running the Application Locally

1. Start Backend
```bash
cd backend
npm run dev
```

2. Start Frontend
```bash
cd ../frontend
npm start
```
Open your browser at http://localhost:3000 to see the app in action


### Technologies Used

Frontend: React, HTML, CSS, JavaScript

Backend: Node.js, Express.js

Database: MongoDB / MongoDB Atlas

Authentication: Google OAuth

Containerization: Docker

## Contributing

Contributions are welcome! Open an issue or submit a pull request.


## Author

**Jeyasakthi R**  
B.Tech in Computer Science and Business Systems  
Passionate about web development, project management visualizations, and coding projects.
