# Real-Time Chat Application (WebSocket + React)

**COMPANY:** CODTECH IT SOLUTION  
**NAME:** Kartik Pundalik Gawade  
**INTERN ID:** CT04DR2452  
**DOMAIN:** Front End Development  
**DURATION:** 4 Weeks  
**MENTOR:** Neela Santosh  

---

## Project Overview

This project is a **real-time web-based chat application** built using **Node.js, Express.js, WebSocket, and React.js**. The application allows multiple users to connect to a single chat server and exchange messages instantly without refreshing the page.

It demonstrates **real-time communication** using **WebSockets**, enabling fast and efficient two-way communication between the client and server. The project is designed for learning purposes and helps in understanding **full-stack development**, **real-time data flow**, and **live UI updates** in modern web applications.

---

## Features

- Real-time messaging without page reload  
- Global chat history shared with all users  
- Clear chat for everyone feature  
- Per-tab user identity using `sessionStorage`  
- Modern and responsive UI  
- Works on different screen sizes  
- Message timestamp support  
- Sender and receiver message alignment  

---

## Technologies & Tools Used

### Backend
- **Node.js** – JavaScript runtime environment  
- **Express.js** – Web server framework  
- **WebSocket (ws)** – Enables real-time communication  
- **CORS** – Cross-Origin Resource Sharing  

### Frontend
- **React.js** – Component-based UI library  
- **React Hooks** – `useState`, `useEffect`, `useRef`  
- **CSS3** – Custom styling and responsive design  

### Storage
- **Session Storage** – Stores user ID and username per browser tab  

---

## How It Works

1. The Express server runs on port **5000** and initializes a WebSocket server.  
2. When a client connects:
   - The server sends the complete chat history.  
3. When a user sends a message:
   - The message is saved on the server.
   - The message is broadcast to all connected clients instantly.  
4. When **Clear Chat** is clicked:
   - The chat history is cleared for all users in real time.  
5. React listens for WebSocket events and updates the UI without reloading the page.

---

## Platform Compatibility

### Supported Operating Systems
- Windows  
- Linux  
- macOS  

### Supported Browsers
- Google Chrome  
- Microsoft Edge  
- Mozilla Firefox  

---

## Installation & Setup

### Backend Setup

- npm install express ws cors
- node server.js

### Frontend Setup

- npm install
- npm start

## Learning Outcomes
- Practical understanding of WebSocket-based real-time communication
- Experience with React real-time UI updates
- Knowledge of client-server architecture
- Hands-on exposure to full-stack development workflow
- Improved frontend development and state management skills

## Conclusion
This Real-Time Chat Application successfully demonstrates how modern web applications handle live communication using WebSockets and React. The project strengthened my understanding of frontend-backend integration, real-time data handling, and responsive UI development during my internship at CODTECH IT SOLUTION.

## Output
<img width="1919" height="869" alt="Image" src="https://github.com/user-attachments/assets/3123550b-7e27-48bb-a3eb-d6029a8364f9" />
