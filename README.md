# Languini: Full-Stack AI Language 🧠

!

## 🚀 Live Project & Code

| Component | Link |
| :--- | :--- |
| **Live Demo** | **[Test the Live Project!](https://languini.onrender.com/)** |
<!-- | **Source Code** | **[Explore the Backend API](LINK_TO_BACKEND_FOLDER)** |
| **Source Code** | **[Explore the Frontend Client](LINK_TO_FRONTEND_FOLDER)** | -->

---

## 🎯 Project Overview: Learning Web Development 

I built this project to solidify everything I've been learning about web development over the past few months. I've learned modern web technologies like Node.js, React.js, TailwindCSS etc. I've also learned about NoSQL databases, RESTful API's, Security and Authentication, etc. 

This project demonstrates my abilities in:

* Building a **RESTful API** with Node.js and Express.js.
* Persistent data storage using **NoSQL and MongoDB.** 
* **User Authentication** with bycrypt and JWT.
* Building a beautiful **UI with React.js and TailwindCSS.** 
* **State management** in React.js using Zustand.
* Implementing **real-time chat via socket.io.** 

---

## 🛠️ Key Features 

The core technical accomplishments of Languini, framed from a technical hiring manager's perspective:

| Feature / User Benefit | Technical Accomplishment (The "Proof") |
| :--- | :--- |
| **Persistent Data Storage** | Used NoSQL and MongoDB to implement persistent data storage for users and user data. | ✅ Done |
| **Secure User Authentication** | Implemented sign up, sign in, and logout using JWT and bycrpt, storing user info and encrypted passwords in MongoDB | ✅ Done |
| **Built a RESTful API** | Provides an API to do CRUD operations on the User and Message Data stored in MongoDB. | ✅ Done |
| **Real Time Messaging** | Implemented Real Time Chat using web sockets. | ✅ Done |
| **Beautiful and Intuitive UI** | Built a messaging interface using React.js, HTML, and TailwindCSS | ✅ Done |
| **Chat with an AI Spanish Tutor** | Chat with an AI tutor that generates custom lessons and practice conversations. | 🚧 In Progess |
| **Add Friends and Contacts** | Ability to find and add friends, and keep track of a users contacts. | 🚧 In Progess |
| **Dictionary of learned words** | Let users add new words to a dictionary. | ⚫ Not Started |
| **Flashcards** | Allow users to create quizzes from dictionary words, and track learning progress. | ⚫ Not Started |



<!-- | **AI-Powered Conversation Practice** | Deep, stateful integration with the **OpenAI/Gemini API** for dynamic responses, paired with advanced **server-side state management** to maintain conversation history and context. |
| **Real-Time Data Flow** | Implementation of **WebSockets** for low-latency, real-time feature delivery (e.g., chat updates) and secure, persistent user connectivity. |
| **Secure User Authentication** | Custom-built authentication flow using **Express.js**, **bcrypt** for secure password hashing, and **JWT/Cookies** for stateless session management and authorization. |
| **Persistent Learning Data** | **Complex database design** and **Full CRUD operations** in **MongoDB** to store and retrieve unique user data, generated lesson plans, and personalized dictionary items. |
| **Dynamic, Complex UI** | Demonstrates the ability to render a complex, component-based chat and dashboard interface using **React** and managing local state effectively with **Zustand**. | -->

---

## 💻 Tech Stack

| Type | Technologies Used |
| :--- | :--- |
| **Frontend** | React, Zustand (State Management), TailwindCSS, DaisyUI (Components and Styling) |
| **Backend** | Node.js, Express.js (REST API) |
| **Database** | MongoDB |
| **Security** | Custom JWT/Cookies, bcrypt |
| **Real-Time** | WebSockets / Socket.IO |
| **AI Integration** | OpenRouter |

---

## 🧠 The Technical Flow ("How It Works")

1.  **Secure Authentication:** User registers or logs in. A custom-built process leverages `bcrypt` for password hashing, and a secure **HTTP-only cookie containing a JWT** is used to establish an authenticated, persistent session.
2.  **RESTful API:** The React client communicates exclusively with the **Node.js/Express.js REST API** to manage all persistent user data. All routes are secured and checked for valid JWTs.
3.  **AI & State Management:** Conversation requests are sent to the backend, which securely routes the request to the **OpenAI/Gemini API**. The backend manages the context/history to ensure the AI remains in character and on-topic.
4.  **Learning Persistence:** New vocabulary and AI-designed lesson plans are persisted in **MongoDB** using normalized data models for efficient retrieval and review in the flashcard module.

---

## ❓ FAQ for Hiring Managers

**Q: What was the most technically challenging part of this project?**
**A:** Implementing robust **global state management** using **Zustand**. This involved maintaining the integrity of the dynamic conversation history, profile data, and UI state across various React components while minimizing unnecessary re-renders. It required a deep practical application of React Hooks, component lifecycle, and state normalization to ensure a performant, low-latency user experience.

---

## ⚙️ Quick Start (How to Run Locally)

*(You must fill in these steps for a complete README)*

1.  **Clone the repository:** `git clone [repository_url]`
2.  **Setup Environment:** Create a `.env` file in the root of the backend folder with the following variables:
    ```
    PORT=5000
    MONGODB_URI=...
    JWT_SECRET=...
    OPENAI_API_KEY=...
    ```
3.  **Install Dependencies:**
    ```bash
    # In the /backend directory
    npm install
    # In the /frontend directory
    npm install
    ```
4.  **Run:**
    ```bash
    # Start the backend server
    npm start 
    # Start the frontend client
    npm run dev
    ```

---

## 💡 Suggestions for What to Include

In addition to the content above, you should include these items to make the README complete for an engineering audience:

1.  **Architecture Diagram (Optional but highly effective):** A simple visual (even an ASCII diagram or a linked image) showing the flow: **React Client** <-> **Express/Node API** <-> **MongoDB & AI API**. This quickly conveys system complexity.
2.  **Complete Environment Variables List:** Include a complete, but blank, list of every required environment variable in the "Quick Start" section.
3.  **Deployment Method:** Briefly mention how the project is deployed (e.g., "Deployed on Vercel (Frontend) and Render (Backend API)"). This shows deployment skills.
4.  **Future Enhancements:** A short list of features you would implement next (e.g., "Implement unit and integration testing," "Move to Redis for session/caching"). This shows forward-thinking and an understanding of next steps.

---

## 📝 Advice on Documentation

It is generally **not** recommended to put detailed technical documentation within the main `README.md`.

* **Keep the README Focused:** The README should remain a *marketing document* for your project, focusing on the architecture and how to run it.
* **Separate API Documentation:** For technical recruiters/engineers, the best place for detailed documentation is a separate file or generated document.
    * **Recommendation:** Create an `API_DOCS.md` file (or use a tool like Swagger/OpenAPI) that lists your main REST API routes, HTTP methods, required parameters, and example response bodies. Link directly to this file from the main README.
* **In-Code Documentation:** The best place to document complex logic, state management decisions (e.g., why you chose Zustand over Redux), and security-focused functions is directly within the code using comments or JSDoc-style documentation. This allows engineers to understand *how* the code works as they explore the repository.