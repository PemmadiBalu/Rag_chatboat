# 🚀 AI Agent Project

An end-to-end AI Agent application built using Flask (Backend) and React.js (Frontend).  
This project demonstrates how to build an intelligent chat system using LLM-based agent architecture.

---

## 📌 Project Overview

# 1️⃣ Root Folder

ai-agent-project/
Main project directory containing backend and frontend.

# 2️⃣ Backend (Flask – API + AI Agent Logic)

backend/
Contains all server-side logic.
|
app.py
Main Flask application file. Handles API routes.
|
agent.py
Configures and runs the AI agent.
|
tools.py
Custom tools used by the AI agent.
|
requirements.txt
List of Python dependencies.
|
.env
Stores environment variables like API keys.
⚠️ Do NOT upload this file to GitHub.

# 3️⃣ Frontend (React – Chat UI)

frontend/
Contains React application.
|
package.json
Manages Node.js dependencies and scripts.

src/
Main source folder.
|
App.js
Root React component.
|
index.js
Entry point of the React application.
|
components/
Contains reusable UI components.
|
Chat.js
Chat interface component for user interaction.
            

# 🛠️ Tech Stack
🔹 Backend
Python
Flask
LangChain (for AI agent logic)
LLM API (Groq / OpenAI)

# 🔹 Frontend

React.js
Axios (API calls)
CSS

# ⚙️ Backend Setup
1️⃣ Navigate to backend folder
cd backend
2️⃣ Create virtual environment
python -m venv venv
3️⃣ Activate environment

Windows
venv\Scripts\activate
Mac/Linux

source venv/bin/activate
4️⃣ Install dependencies
pip install -r requirements.txt
5️⃣ Create .env file

Add your API key inside .env:
GROQ_API_KEY=your_api_key_here

⚠️ Never push .env file to GitHub.

# 6️⃣ Run Flask server
python app.py

# Server runs at:
http://127.0.0.1:5000
💻 Frontend Setup
1️⃣ Navigate to frontend folder
cd frontend
2️⃣ Install dependencies
npm install
3️⃣ Start React app
npm start

Runs at:

http://localhost:3000
# 🔄 How It Works

User enters message in React chat UI

React sends request to Flask API

Flask calls AI agent logic

Agent processes using tools

Response sent back to frontend

# 🌐 Deployment
🔹 Backend Hosting

Render
Railway
Heroku

# 🔹 Frontend Hosting

Vercel
Netlify

# 📷 Features

✔️ AI-powered chat interface
✔️ Modular agent architecture
✔️ Secure API key handling
✔️ Full-stack integration

# 👨‍💻 Author

Balu Pemmadi
AI & Data Science Graduate
Passionate about LLMs, RAG, and Full-Stack AI Applications
