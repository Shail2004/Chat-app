# Real-Time Chat Application 🚀

A modern, real-time chat application built using the **MERN** stack, **Socket.io**, **TailwindCSS**, and **DaisyUI** for a clean, responsive user interface. The app supports real-time messaging, user authentication, and a dynamic, state-driven UI.

---

## Features 🌟
- **Tech Stack**: Built with **MERN** (MongoDB, Express.js, React.js, Node.js), **Socket.io**, **TailwindCSS**, and **DaisyUI** for an elegant UI.
- **Authentication & Authorization**: Secure login and user sessions using **JWT** (JSON Web Tokens).
- **Real-Time Messaging**: Instant messaging between users with **Socket.io**.
- **Online User Status**: Displays whether users are online or offline in real time with **Socket.io** and **React Context**.
- **Global State Management**: Manage global state effectively using **Zustand** for seamless user experience.
- **Error Handling**: Robust error handling on both the **server** and **client** side for smoother interactions.

---

## Installation 🛠️

### Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Steps to Run the Project

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Shail2004/Chat-app.git
   cd Chat-app
   ```

2. **Install Backend Dependencies**:
   Now install the required dependencies for the Backend:
   ```bash
   npm install
   ```

3. **Install FrontEnd Dependencies**:
   Navigate to the `Frontend` directory and install the required dependencies:
   ```bash
   cd Frontend
   npm install
   ```

4. **Environment Configuration**:
   Create a `.env` file in the main directory and add the following:
   ```env
   MONGO_URI=your-mongo-database-url
   JWT_SECRET=your-jwt-secret
   PORT = 4000
   ```

5. **Run the Application**:
   To start both the backend and frontend servers:
   ```bash
   # In the server directory:
   npm start

   # In the client directory:
   npm start
   ```

---

## Technologies Used 🧰

- **Frontend**:
  - **React.js**: JavaScript library for building the user interface.
  - **TailwindCSS**: Utility-first CSS framework for designing modern UIs.
  - **DaisyUI**: TailwindCSS plugin for pre-built UI components.
  - **React Context**: For managing global state (user status, messages).
  - **Zustand**: Simple state management for React.

- **Backend**:
  - **Node.js**: JavaScript runtime for building the server-side application.
  - **Express.js**: Web framework for building the REST API.
  - **Socket.io**: For real-time, bidirectional communication between the client and server.
  - **MongoDB**: NoSQL database for storing user data and chat messages.
  - **JWT**: For secure user authentication.

---

## How It Works ⚙️

1. **Authentication & Authorization**: Users can sign up, log in, and access the chat application securely using JWT tokens.
2. **Real-Time Messaging**: As users send messages, the chat updates in real time without page reloads, thanks to Socket.io.
3. **Online User Status**: The app tracks users’ online/offline statuses and displays them in real-time using React Context and Socket.io.
4. **State Management**: Zustand manages the global state, including user info and chat messages, to keep the UI consistent and responsive.

---

## Contributing 🤝

We welcome contributions! Here’s how you can help:
1. Fork the project.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -am 'Add feature'`).
4. Push to your branch (`git push origin feature-branch`).
5. Open a pull request.

---

## Author ✨

Created by [Shail Jain](https://github.com/Shail2004). Feel free to reach out for collaboration, feedback, or suggestions.
