# 🚀 Cloud Web App – Contact Manager

A Dockerized full-stack web application to manage contacts through a simple web interface and REST API.

## ✨ Key Features
- Create and add new contacts
- View all saved contacts
- Update existing contact details
- Delete contacts
- RESTful API built with Express.js
- SQLite database for storing contact information
- Separate Docker containers for frontend and backend

## 🛠️ Tech Stack
| Technology | Purpose |
|---|---|
| HTML, CSS, JavaScript | Frontend |
| Node.js | Backend runtime |
| Express.js | REST API |
| SQLite | Database |
| Docker | Containerization |
| Git & GitHub | Version control |

## 📁 Project Structure

cloud-web-app/
├── backend/
│   ├── Dockerfile
│   ├── server.js
│   ├── db.js
│   ├── package.json
│   └── package-lock.json
├── frontend/
│   ├── Dockerfile
│   └── index.html
├── .gitignore
└── README.md
```

## ▶️ Run the Application
1. Install Docker Desktop.
2. Build the backend Docker image from the `backend` directory.
3. Run the backend container on port `3000`.
4. Build the frontend Docker image from the `frontend` directory.
5. Run the frontend container on port `8080`.
6. Open **http://localhost:8080** in your browser.

## 🎯 Project Goal
To practice full-stack application development, REST API integration, database operations, Docker image creation, and container-based deployment.

## 👨‍💻 Author
Piyush Kumar 

## 🐳 Run with Docker Compose

Make sure Docker Desktop is running.

Start both frontend and backend services:

```bash
docker compose up -d --build
```

Open the application in your browser:

- Frontend: http://localhost:8080
- Backend health check: http://localhost:3000/health

Check running services:

```bash
docker compose ps
```

Stop the services:

```bash
docker compose down
```

## 📌 What I Learned

- Building Docker images for frontend and backend
- Running multi-container applications with Docker Compose
- Creating REST APIs with Express.js
- Connecting a frontend to a backend API
- Managing project code with Git and GitHub